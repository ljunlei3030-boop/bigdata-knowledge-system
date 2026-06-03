# Flink

## 1. 它是什么？

Flink 是面向有状态流处理的分布式计算引擎。

## 2. 它解决什么问题？

它解决低延迟实时计算、事件时间处理、状态管理和 CDC 入湖问题。

## 3. 它在整个流程中的位置？

Flink 常位于 Kafka、Flink CDC 和 Paimon 之间，也可负责实时指标计算。

## 4. 底层原理是什么？

Flink 以算子拓扑执行数据流，通过状态和 checkpoint 保证故障恢复。

## 5. 典型使用场景

实时 ETL、CDC 同步、实时指标、实时风控、入湖写入。

## 6. 常见问题

背压、状态过大、checkpoint 超时、数据乱序、延迟升高。

## 7. 优化方案

优化并行度、状态后端、checkpoint、窗口设计和下游写入能力。

## 8. 和其他技术的区别

Flink 更偏实时流处理，Spark 更偏离线批处理和复杂 SQL。

## 9. 关联知识

- [Flink CDC](/collection/flink-cdc)
- [湖仓一体架构](/lakehouse/kafka-flink-paimon-spark-bytehouse)

## 总结输出

Flink 的核心是低延迟、有状态和可恢复，适合承接实时链路和 CDC 入湖。
