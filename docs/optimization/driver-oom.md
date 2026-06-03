# Driver OOM

## 1. 它是什么？

Driver OOM 是 Spark Driver 内存不足导致应用失败。

## 2. 它解决什么问题？

排查 Driver OOM 可以定位结果收集、任务元数据和调度压力问题。

## 3. 它在整个流程中的位置？

Driver 负责任务提交、计划生成、调度和结果汇总。

## 4. 底层原理是什么？

当 collect 结果过多、分区数极大、广播构建过大或计划过复杂时，Driver 内存可能耗尽。

## 5. 典型使用场景

误用 `collect()`、大量小分区、广播大表、超复杂 SQL。

## 6. 常见问题

把大结果拉回 Driver、任务数过多、SQL 计划膨胀。

## 7. 优化方案

避免 collect 大结果，减少分区碎片，控制广播表大小，拆分复杂任务。

## 8. 和其他技术的区别

Driver OOM 发生在调度端，Executor OOM 发生在执行端。

## 9. 关联知识

- [Executor OOM](/optimization/executor-oom)
- [Spark 执行流程](/compute/spark-execution-flow)

## 总结输出

Driver OOM 通常与结果回收和调度元数据有关，应避免把大规模数据拉回 Driver。
