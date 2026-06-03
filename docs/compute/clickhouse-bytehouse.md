# ClickHouse / ByteHouse

## 1. 它是什么？

ClickHouse / ByteHouse 是面向 OLAP 查询的高性能列式分析引擎。

## 2. 它解决什么问题？

它们解决大宽表、指标明细和聚合结果的低延迟查询问题。

## 3. 它在整个流程中的位置？

它们通常位于服务层，承接 ADS 表、数据集市或查询加速数据。

## 4. 底层原理是什么？

列式存储、压缩、向量化执行、索引跳过和分布式查询共同提升查询性能。

## 5. 典型使用场景

BI 报表、用户行为分析、实时看板、明细查询。

## 6. 常见问题

分区不合理、主键设计不当、扫描过大、Join 能力受限、写入和查询冲突。

## 7. 优化方案

设计排序键、分区键、预聚合、物化视图和冷热数据策略。

## 8. 和其他技术的区别

Spark 适合复杂加工，ClickHouse / ByteHouse 更适合高并发查询服务。

## 9. 关联知识

- [ClickHouse 单表查询为什么快](/questions/clickhouse-single-table-fast)
- [湖仓一体架构](/lakehouse/kafka-flink-paimon-spark-bytehouse)

## 总结输出

ClickHouse / ByteHouse 的优势在查询服务，关键是让数据布局匹配查询模式。
