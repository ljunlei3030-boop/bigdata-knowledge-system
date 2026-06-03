# Spark

## 1. 它是什么？

Spark 是面向大规模数据处理的分布式计算引擎。

## 2. 它解决什么问题？

它解决离线批处理、复杂 SQL、机器学习特征加工和大规模数据转换问题。

## 3. 它在整个流程中的位置？

Spark 常用于 DWD、DWS、ADS 分层加工，也可读取 Hive、Paimon、OSS 和 HDFS 数据。

## 4. 底层原理是什么？

Spark 通过 Driver 生成执行计划，通过 Executor 执行 Task，并在 Shuffle 边界切分 Stage。

## 5. 典型使用场景

离线 ETL、宽表构建、指标汇总、湖仓数据加工。

## 6. 常见问题

Shuffle 过大、数据倾斜、Executor OOM、Driver OOM、任务长尾。

## 7. 优化方案

查看执行计划和 Spark UI，优化过滤、Join、分区、广播和资源参数。

## 8. 和其他技术的区别

Spark 更偏批处理和复杂 SQL，Flink 更偏实时状态计算，ClickHouse 更偏查询服务。

## 9. 关联知识

- [Spark 执行流程](/compute/spark-execution-flow)
- [Spark 数据倾斜](/compute/spark-skew)

## 总结输出

Spark 是大数据离线加工的核心引擎，理解 Driver、Executor、DAG、Stage、Task 和 Shuffle 是排查问题的基础。
