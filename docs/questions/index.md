# 问题库

问题库不是简单记录答案，而是按照：

```text
问题 → 原因 → 方案 → 代价 → 验证 → 总结输出
```

的方式沉淀技术理解。每个问题都应该能回到具体的数据链路、执行机制和工程场景中。

## 执行原理类

- [Spark SQL 从提交到执行经历了什么？](/compute/spark-execution-flow)
- [DAG、Stage、Task 是什么关系？](/compute/spark-execution-flow)
- [Shuffle 为什么会切分 Stage？](/compute/spark-shuffle)
- [Executor 是怎么执行 Task 的？](/compute/spark-execution-flow)

## 性能优化类

- [Spark 为什么会发生数据倾斜？](/questions/spark-data-skew)
- [小表广播 Join 为什么快？](/questions/broadcast-join-why-fast)
- [distinct 和 group by 什么情况下使用？](/questions/distinct-vs-group-by)
- [Executor 频繁 GC 怎么排查？](/optimization/gc)
- [Driver OOM 常见原因有哪些？](/optimization/driver-oom)

## 湖仓架构类

- [为什么选择 Paimon？](/lakehouse/paimon-reason)
- [Paimon 和 Hive 有什么区别？](/storage/paimon)
- [ByteHouse 为什么能查询湖上数据？](/lakehouse/kafka-flink-paimon-spark-bytehouse)
- [存算分离到底解决什么问题？](/lakehouse/storage-compute-separation)
- [Flink CDC、Flink SQL、Kafka 在链路中的关系是什么？](/lakehouse/kafka-flink-paimon-spark-bytehouse)

## 数据建模类

- [为什么要划分 ODS、DWD、DWS、ADS？](/modeling/ods-dwd-dws-ads)
- [为什么要做数据域划分？](/modeling/data-domain)
- [宽表应该放在哪一层？](/modeling/wide-table)
- [宽表很多 Join 怎么优化？](/optimization/join-optimization)

## 数据治理类

- [数据治理在整个数据流程中做了什么？](/questions/data-governance-flow)
- [元数据治理解决什么问题？](/governance/metadata)
- [血缘分析有什么价值？](/governance/lineage)
- [数据质量怎么保障？](/governance/quality)
- [权限治理怎么做？](/governance/permission)

## 排查案例类

- [Spark SQL 运行 2 小时未完成怎么排查？](/cases/spark-slow-sql)
- [Join 后数据量暴增怎么定位？](/cases/join-data-explosion)
- [数据质量异常怎么回溯？](/cases/data-quality-backtracking)
- [任务频繁失败怎么排查？](/scheduler/task-dependency)

## 总结输出

问题库的价值是把零散问题系统化。一个好的问题条目应该能说明现象、解释原因、给出方案、说明代价、给出验证方式，并把它关联回 Spark、Flink、Paimon、ClickHouse、数据建模或数据治理的完整知识体系。
