# SQL 优化

## 1. 它是什么？

SQL 优化是通过改写 SQL 和调整执行计划降低扫描、Shuffle 和计算成本。

## 2. 它解决什么问题？

它解决 SQL 慢、扫描过大、Join 顺序不合理和聚合成本高的问题。

## 3. 它在整个流程中的位置？

SQL 优化主要发生在 Spark SQL、Hive SQL 和 OLAP 查询中。

## 4. 底层原理是什么？

通过谓词下推、列裁剪、Join 策略、聚合下推和分区裁剪减少数据处理量。

## 5. 典型使用场景

大表过滤、明细聚合、宽表 Join、指标查询。

## 6. 常见问题

全表扫描、过滤条件失效、函数包裹分区字段、重复子查询。

## 7. 优化方案

提前过滤、只选必要字段、避免不必要 distinct、合理拆分复杂 SQL。

## 8. 和其他技术的区别

SQL 优化关注逻辑表达，资源调优关注运行环境。

## 9. 关联知识

- [Join 优化](/optimization/join-optimization)
- [Shuffle 优化](/optimization/shuffle-optimization)

## 总结输出

SQL 优化的第一原则是少读、少算、少 Shuffle，并让执行计划符合业务预期。
