# Hive

## 1. 它是什么？

Hive 是面向大数据离线数仓的表管理和 SQL 计算生态。

## 2. 它解决什么问题？

它让 HDFS / OSS 上的文件具备表、分区、字段和 SQL 访问能力。

## 3. 它在整个流程中的位置？

Hive 常用于离线数仓分层中的 ODS、DWD、DWS 和 ADS 表管理。

## 4. 底层原理是什么？

Hive Metastore 管理库表元数据，底层数据以文件形式存储，计算可由 Spark、Tez 或 MapReduce 执行。

## 5. 典型使用场景

离线明细表、周期汇总表、历史数据归档。

## 6. 常见问题

小文件、分区过多、元数据压力和 SQL 执行慢。

## 7. 优化方案

合并小文件、控制分区粒度、选择列式格式、使用 Spark SQL 优化执行。

## 8. 和其他技术的区别

Hive 更偏传统离线数仓，Paimon 更强调增量更新和流批一体。

## 9. 关联知识

- [Paimon](/storage/paimon)
- [ODS / DWD / DWS / ADS](/modeling/ods-dwd-dws-ads)

## 总结输出

Hive 是离线数仓的基础能力，关键在于表、分区、文件格式和元数据治理。
