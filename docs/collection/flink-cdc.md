# Flink CDC

## 1. 它是什么？

Flink CDC 是基于 Flink 捕获数据库变更并实时写入下游系统的采集能力。

## 2. 它解决什么问题？

它解决业务库增量数据实时入湖、入仓和同步的问题。

## 3. 它在整个流程中的位置？

Flink CDC 常位于业务数据库和 Paimon、Kafka、Hive 等下游之间。

## 4. 底层原理是什么？

它读取数据库变更日志，将 insert、update、delete 转换为变更流，并通过 Flink 状态和 checkpoint 保证处理连续性。

## 5. 典型使用场景

业务库实时入湖、维表同步、订单状态变更同步。

## 6. 常见问题

Schema 变更、断点恢复、全量加增量切换、主键设计和下游幂等。

## 7. 优化方案

规划主键、checkpoint、并行度、变更字段兼容和下游写入策略。

## 8. 和其他技术的区别

Kafka 适合事件缓冲，Flink CDC 适合数据库变更捕获。

## 9. 关联知识

- [湖仓一体架构](/lakehouse/kafka-flink-paimon-spark-bytehouse)
- [Paimon](/storage/paimon)

## 总结输出

Flink CDC 是实时入湖的重要入口，关键是保证变更顺序、状态恢复、主键语义和下游一致性。
