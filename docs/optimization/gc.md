# GC 问题

## 1. 它是什么？

GC 问题是 JVM 在回收内存时耗时过高，影响 Spark Executor 执行效率的现象。

## 2. 它解决什么问题？

排查 GC 是为了解决任务运行慢、Executor 卡顿和内存压力问题。

## 3. 它在整个流程中的位置？

GC 常出现在 Shuffle、Join、缓存和大对象处理阶段。

## 4. 底层原理是什么？

当对象创建过多、单 Task 数据过大或缓存占用过高时，JVM 频繁回收内存。

## 5. 典型使用场景

Executor GC Time 高、Task 长尾、内存使用接近上限。

## 6. 常见问题

数据倾斜、Join 构建侧过大、缓存过多、分区过少。

## 7. 优化方案

处理倾斜、增加分区、减少缓存、优化 Join、调整 Executor 内存。

## 8. 和其他技术的区别

GC 是资源层问题，但根因经常来自数据和执行计划。

## 9. 关联知识

- [Spark 数据倾斜](/compute/spark-skew)
- [Executor OOM](/optimization/executor-oom)

## 总结输出

GC 高不能只加内存，应先确认是否存在倾斜、单 Task 过大或对象膨胀。
