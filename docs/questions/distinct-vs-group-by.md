# 问题：distinct 和 group by 什么情况下使用？

## 答案

只需要去重时使用 distinct，需要按 Key 聚合并计算指标时使用 group by。

## 背后原理

两者都可能触发 Shuffle，但 group by 会执行聚合逻辑，distinct 本质是按选定字段去重。

## 发生场景

明细去重、用户去重、订单聚合、指标汇总。

## 排查方式

查看执行计划和 Shuffle 数据量，确认字段数量和去重粒度。

## 解决方案

去重字段尽量少，聚合前先过滤，必要时使用预聚合。

## 方案代价

distinct 字段过多会导致 Shuffle 成本高，group by 粒度过细会降低聚合效果。

## 关联知识

- [SQL 优化](/optimization/sql-optimization)
- [Shuffle 优化](/optimization/shuffle-optimization)

## 总结输出

distinct 解决去重，group by 解决分组聚合，选择依据是业务语义而不是写法习惯。
