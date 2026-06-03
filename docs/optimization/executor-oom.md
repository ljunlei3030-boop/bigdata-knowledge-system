# Executor OOM

## 1. 它是什么？

Executor OOM 是 Spark Executor 在执行 Task 时内存不足导致失败。

## 2. 它解决什么问题？

排查 Executor OOM 是为了定位单 Task 数据量、Join、缓存或 Shuffle 的内存风险。

## 3. 它在整个流程中的位置？

它常发生在 Join、聚合、Shuffle Read、缓存和写出阶段。

## 4. 底层原理是什么？

Executor 内存被执行内存、存储内存、对象和 JVM 开销共同占用，超过限制就会失败。

## 5. 典型使用场景

大 Key 聚合、大表 Join、广播表过大、缓存宽表。

## 6. 常见问题

分区过少、数据倾斜、广播表过大、缓存未释放。

## 7. 优化方案

增加分区、处理倾斜、减少字段、控制缓存、调整内存和开销参数。

## 8. 和其他技术的区别

Executor OOM 是执行端问题，Driver OOM 是调度和结果收集端问题。

## 9. 关联知识

- [Driver OOM](/optimization/driver-oom)
- [Spark 数据倾斜](/compute/spark-skew)

## 总结输出

Executor OOM 的核心排查方向是单 Task 数据量和执行计划，而不是第一时间加机器。
