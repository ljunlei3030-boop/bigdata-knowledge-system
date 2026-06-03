# 问题：Spark 为什么会发生数据倾斜？

## 答案

Spark 数据倾斜通常是因为 Shuffle 后某些 Key 或分区的数据量远大于其他分区。典型表现是大部分 Task 很快完成，少数 Task 长时间运行，并且这些 Task 的 Shuffle Read、spill 或 GC Time 明显偏高。

::: tip 提示
不是所有 SQL 慢都是数据倾斜。数据倾斜通常表现为少数 Task 明显慢于其他 Task，并且这些 Task 的 Shuffle Read、spill、GC Time 等指标明显偏高。
:::

## 背后原理

聚合、Join、`distinct` 和 `repartition` 会按 Key 或分区规则重新分发数据。热点 Key 会集中到少数 Reduce Task 中，让这些 Task 处理的数据量远大于其他 Task。

## 发生场景

大 Key 聚合、空值 Join、默认值 Join、低基数字段去重、分区数过少，都可能导致 Shuffle 后数据分布不均。

### group by 倾斜示例

```sql
SELECT
    city_id,
    COUNT(*) AS order_cnt
FROM dwd_order_detail
WHERE dt = '2026-06-01'
GROUP BY city_id;
```

示例数据分布：

```text
city_id = 1    8000 万行
city_id = 2    100 万行
city_id = 3    80 万行
city_id = 4    50 万行
其他 city_id   每个几万行
```

这条 SQL 会按照 `city_id` 做 Shuffle。如果 `city_id = 1` 的数据量特别大，那么所有 `city_id = 1` 的数据最终会进入同一个或少数几个 Reduce Task，导致这些 Task 的 Shuffle Read 数据量远大于其他 Task。

最终表现为：

1. 大部分 Task 很快完成。
2. 少数 Task 长时间运行。
3. Spark UI 中某些 Task 的 Shuffle Read 明显高于其他 Task。
4. 这些 Task 可能出现 GC 时间高、spill 数据量大、甚至 Executor OOM。

### Join 倾斜示例

```sql
SELECT
    a.user_id,
    a.order_id,
    b.user_level
FROM dwd_order_detail a
LEFT JOIN dim_user b
ON a.user_id = b.user_id
WHERE a.dt = '2026-06-01';
```

示例数据分布：

```text
user_id = 0 或 unknown   3000 万行
其他 user_id             分布较均匀
```

如果 `user_id = 0` 或 `unknown` 是默认值、异常值或未登录用户标识，那么大量订单都会集中在这个 key 上。普通 Shuffle Join 会按照 `user_id` 对两张表重新分区，相同的 `user_id` 会进入同一个 Reduce Task。因此，`user_id = 0` 对应的数据会集中到某个 Task，导致该 Task 处理的数据量远大于其他 Task，从而产生数据倾斜。

## 排查方式

重点看 Spark UI 的 Stage 页面，不要只看总耗时。

### 1. Duration

如果大部分 Task 几十秒完成，但少数 Task 运行几分钟甚至更久，说明可能存在长尾 Task。

### 2. Shuffle Read Size

如果某几个 Task 的 Shuffle Read 明显高于其他 Task，说明这些 Task 拉取的数据量过大，可能存在 Shuffle 后数据倾斜。

### 3. Spill Memory / Spill Disk

如果某些 Task 出现大量 spill，说明内存中放不下中间数据，被迫溢写到磁盘。

### 4. GC Time

如果某些 Task 的 GC Time 很高，说明 Executor 内存压力大，可能和大 key、聚合状态过大、Join 数据量过大有关。

### 5. Input Size

如果扫描阶段个别 Task 的 Input Size 明显偏大，可能不是 Shuffle 倾斜，而是文件分布不均或小文件 / 大文件问题。

## 怎么判断是不是数据倾斜？

```text
少数 Task 特别慢
+
这些 Task 的 Shuffle Read 特别大
+
SQL 中存在 group by / join / distinct / repartition
=
大概率是 Shuffle 数据倾斜
```

如果所有 Task 都慢，更可能是数据量大、资源不足、SQL 本身复杂、扫描文件多或外部存储慢。

如果扫描阶段少数 Task 的 Input Size 特别大，更可能是文件分布不均，而不是典型 Shuffle 倾斜。

## 解决方案

### 过滤异常 key

```sql
SELECT
    a.user_id,
    a.order_id,
    b.user_level
FROM dwd_order_detail a
LEFT JOIN dim_user b
ON a.user_id = b.user_id
WHERE a.dt = '2026-06-01'
  AND a.user_id IS NOT NULL
  AND a.user_id <> '0'
  AND a.user_id <> 'unknown';
```

如果 `user_id = 0` 或 `unknown` 本身没有分析价值，可以在 Join 前过滤掉。这是成本最低的优化方式。但如果这些数据仍然有业务价值，不能直接过滤，就需要考虑大 key 单独处理或加盐打散。

### 大 key 单独处理

```sql
-- 普通 key
SELECT
    a.user_id,
    a.order_id,
    b.user_level
FROM dwd_order_detail a
LEFT JOIN dim_user b
ON a.user_id = b.user_id
WHERE a.dt = '2026-06-01'
  AND a.user_id NOT IN ('0', 'unknown')
UNION ALL
-- 热点 key 单独处理
SELECT
    a.user_id,
    a.order_id,
    'unknown_level' AS user_level
FROM dwd_order_detail a
WHERE a.dt = '2026-06-01'
  AND a.user_id IN ('0', 'unknown');
```

这个方案的思路是：普通 key 走正常 Join，热点 key 单独处理，避免参与 Shuffle Join，最后通过 `UNION ALL` 合并结果。适合热点 key 可以用特殊规则处理的场景。

### 加盐打散

```sql
WITH fact_salted AS (
    SELECT
        *,
        CAST(rand() * 10 AS INT) AS salt
    FROM dwd_order_detail
    WHERE dt = '2026-06-01'
),
dim_expanded AS (
    SELECT
        user_id,
        user_level,
        salt
    FROM dim_user
    LATERAL VIEW explode(array(0,1,2,3,4,5,6,7,8,9)) t AS salt
)
SELECT
    a.user_id,
    a.order_id,
    b.user_level
FROM fact_salted a
LEFT JOIN dim_expanded b
ON a.user_id = b.user_id
AND a.salt = b.salt;
```

加盐的核心是把原来集中在一个 key 上的数据打散成多个 key。例如 `user_id = 0` 被打散成 `0_0`、`0_1`、`0_2` 到 `0_9`，这样原本进入一个 Reduce Task 的数据，可以被拆到多个 Reduce Task 中处理。

## 方案代价

- 过滤异常 key：成本低，但必须确认过滤不会影响业务结果。
- 大 key 单独处理：效果明确，但 SQL 和链路复杂度会上升。
- 加盐打散：能缓解热点 Key，但维表需要膨胀，数据量会变大，salt 数量需要调试。
- 小表广播：可以避免大表 Shuffle，但小表过大会增加 Driver 和 Executor 内存压力。
- AQE skew join：使用方便，但依赖 Spark 版本、配置和实际执行计划，不一定覆盖所有场景。

## 关联知识

- [Spark 执行流程](/compute/spark-execution-flow)
- [Spark Shuffle](/compute/spark-shuffle)
- [小表广播 Join](/compute/spark-broadcast-join)
- [Executor OOM](/optimization/executor-oom)
- [GC 问题](/optimization/gc)

## 总结输出

Spark 数据倾斜通常发生在 Shuffle 后，判断重点是少数 Task 是否明显慢、这些 Task 的 Shuffle Read 是否明显偏大、SQL 中是否存在 `group by`、`join`、`distinct` 或 `repartition`。优化时先确认业务语义，再选择过滤异常 key、大 key 单独处理、加盐打散、广播 Join、AQE 或并行度调整。
