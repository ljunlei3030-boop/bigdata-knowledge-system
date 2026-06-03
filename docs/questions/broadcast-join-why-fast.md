# 问题：小表广播 Join 为什么快？

## 答案

因为广播 Join 把小表复制到每个 Executor，让大表分区可以本地 Join，避免大表 Shuffle。

## 背后原理

普通 Join 需要两侧按 Key 重新分区，广播 Join 只移动小表，减少网络传输和落盘。

## 发生场景

大事实表关联小维表、字典表、配置表。

## 排查方式

查看执行计划中是否出现 BroadcastHashJoin，并关注广播表大小。

## 解决方案

控制小表字段和数据量，使用自动广播阈值或 broadcast 提示。

## 方案代价

广播表过大会增加 Driver 和 Executor 内存压力。

## 关联知识

- [Spark 广播 Join](/compute/spark-broadcast-join)
- [Join 优化](/optimization/join-optimization)

## 总结输出

广播 Join 快，是因为用小表复制换大表不 Shuffle。
