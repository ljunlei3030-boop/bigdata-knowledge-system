# Spark Shuffle

## 1. 它是什么？

Shuffle 是 Spark 在不同 Task 之间按 Key 或分区重新分发数据的过程。

## 2. 它解决什么问题？

它让需要全局聚合、Join 或重新分区的计算能够正确完成。

## 3. 它在整个流程中的位置？

Shuffle 是 DAG 划分 Stage 的边界，也是性能问题最集中的环节。

## 4. 底层原理是什么？

上游 Task 写出 Shuffle 数据，下游 Task 按分区拉取需要的数据并继续计算。

## 5. 典型使用场景

`group by`、`join`、`distinct`、`repartition`、窗口聚合。

## 6. 常见问题

Shuffle Read 大、写盘多、网络传输高、数据倾斜、Task 长尾。

## 7. 优化方案

提前过滤、减少字段、广播小表、调整并行度、处理倾斜 Key。

## 8. 和其他技术的区别

Shuffle 是 Spark 分布式计算的核心机制，不是单独的存储或查询技术。

## 9. 关联知识

- [Spark 数据倾斜](/compute/spark-skew)
- [Spark 广播 Join](/compute/spark-broadcast-join)

## 总结输出

Shuffle 既保证分布式计算正确性，也是性能瓶颈来源，优化 Spark 常常从减少和控制 Shuffle 开始。
