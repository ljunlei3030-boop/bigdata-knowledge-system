# 案例：Executor 频繁 GC 排查

## 1. 现象

Spark 任务运行过程中 Executor GC Time 持续偏高，部分 Task 执行缓慢并偶发失败。

## 2. 初步判断

可能存在单 Task 数据过大、缓存过多、Join 构建侧过大或数据倾斜。

## 3. 排查过程

查看 Spark UI，发现 GC 高的 Executor 同时承担了 Shuffle Read 特别大的 Task。继续检查 Join Key 分布，发现少数 Key 数据量远大于其他 Key。

## 4. 根因分析

热点 Key 造成单个 Task 拉取大量 Shuffle 数据，Executor 内部对象膨胀，触发频繁 GC。

## 5. 解决方案

对热点 Key 加盐拆分处理，并提高 Shuffle 分区数，同时减少无用字段进入 Join。

## 6. 结果验证

GC Time 明显下降，Task 长尾缓解，Executor 不再频繁失败。

## 7. 经验沉淀

GC 高常常不是 JVM 参数本身的问题，而是数据分布和执行计划造成的内存压力。

## 总结输出

Executor 频繁 GC 应先查单 Task 数据量、Shuffle 和倾斜，再考虑内存参数。
