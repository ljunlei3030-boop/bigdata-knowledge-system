# Shuffle 优化

## 1. 它是什么？

Shuffle 优化是减少和控制 Spark 数据重新分发成本的方法。

## 2. 它解决什么问题？

它解决网络传输、磁盘落盘、数据倾斜和 Stage 长尾问题。

## 3. 它在整个流程中的位置？

Shuffle 优化发生在聚合、Join、去重和重分区场景。

## 4. 底层原理是什么？

减少 Shuffle 次数、降低每次 Shuffle 数据量、让分区更均匀。

## 5. 典型使用场景

大表聚合、大表 Join、distinct、repartition。

## 6. 常见问题

分区过少、热点 Key、无效字段参与 Shuffle。

## 7. 优化方案

提前过滤、列裁剪、广播小表、加盐、调整分区数。

## 8. 和其他技术的区别

Shuffle 优化关注分布式数据移动，是 Spark 性能优化重点。

## 9. 关联知识

- [Spark Shuffle](/compute/spark-shuffle)
- [Spark 数据倾斜](/compute/spark-skew)

## 总结输出

优化 Shuffle 的关键是减少数据移动，并让必须移动的数据分布均匀。
