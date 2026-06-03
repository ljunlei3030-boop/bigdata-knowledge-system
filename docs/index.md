---
layout: home

hero:
  name: 大数据技术知识体系
  text: 从技术问题到系统化理解
  tagline: 围绕数据采集、湖仓一体、Spark/Flink 计算、数据建模、数据治理和性能优化构建的个人技术知识库。
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/learning-path
    - theme: alt
      text: 查看问题库
      link: /questions/
---

# 技术知识地图

这是一个围绕数据采集、湖仓一体、Spark/Flink 计算、数据建模、数据治理和性能优化构建的个人技术知识库。目标不是简单记录答案，而是把每个技术点放入完整的数据平台知识体系中，形成可复用、可关联、可持续更新的技术地图。

## 技术地图

<div class="knowledge-grid">
  <a class="knowledge-card" href="./collection/">
    <h3>数据采集</h3>
    <p>从业务行为、日志、数据库变更进入数据平台的第一环。</p>
    <span class="tag">埋点</span><span class="tag">Flink CDC</span><span class="tag">Kafka</span><span class="tag">日志采集</span>
  </a>
  <a class="knowledge-card" href="./storage/">
    <h3>数据存储</h3>
    <p>理解文件格式、表格式、元数据和对象存储如何承载数据。</p>
    <span class="tag">Hive</span><span class="tag">Paimon</span><span class="tag">HDFS / OSS</span><span class="tag">Parquet / ORC</span>
  </a>
  <a class="knowledge-card" href="./compute/">
    <h3>数据计算</h3>
    <p>沉淀批计算、流计算和 OLAP 查询引擎的执行原理。</p>
    <span class="tag">Spark</span><span class="tag">Flink</span><span class="tag">ClickHouse / ByteHouse</span><span class="tag">MapReduce</span>
  </a>
  <a class="knowledge-card" href="./lakehouse/kafka-flink-paimon-spark-bytehouse">
    <h3>湖仓一体</h3>
    <p>把实时入湖、离线加工、多引擎查询和治理能力串起来。</p>
    <span class="tag">Paimon</span><span class="tag">存算分离</span><span class="tag">元数据映射</span><span class="tag">多引擎查询</span>
  </a>
  <a class="knowledge-card" href="./modeling/">
    <h3>数据建模</h3>
    <p>从数据域到分层模型，建立稳定、可复用的数据资产。</p>
    <span class="tag">ODS</span><span class="tag">DWD</span><span class="tag">DWS</span><span class="tag">ADS</span><span class="tag">维度建模</span>
  </a>
  <a class="knowledge-card" href="./governance/">
    <h3>数据治理</h3>
    <p>让数据从采集、加工、服务到使用全过程可控、可信、可追踪。</p>
    <span class="tag">元数据</span><span class="tag">血缘</span><span class="tag">质量</span><span class="tag">权限</span><span class="tag">成本治理</span>
  </a>
  <a class="knowledge-card" href="./optimization/">
    <h3>性能优化</h3>
    <p>围绕 SQL、Join、Shuffle、倾斜、GC 和 OOM 建立排查路径。</p>
    <span class="tag">SQL 优化</span><span class="tag">Join 优化</span><span class="tag">Shuffle 优化</span><span class="tag">数据倾斜</span><span class="tag">OOM</span>
  </a>
  <a class="knowledge-card" href="./scheduler/">
    <h3>调度与运维</h3>
    <p>组织任务依赖、补数、告警和数据链路运行状态。</p>
    <span class="tag">DolphinScheduler</span><span class="tag">任务依赖</span><span class="tag">告警</span><span class="tag">补数</span>
  </a>
</div>

## 学习路径

<div class="path-grid">
  <a class="path-card" href="./compute/spark-execution-flow">
    <h3>路径一：Spark 执行原理</h3>
    <p>Spark SQL → Catalyst → DAG → Stage → Task → Executor → Shuffle → 结果输出</p>
  </a>
  <a class="path-card" href="./lakehouse/kafka-flink-paimon-spark-bytehouse">
    <h3>路径二：湖仓一体架构</h3>
    <p>Kafka → Flink CDC → Paimon → Spark → ByteHouse → DolphinScheduler → 数据治理</p>
  </a>
  <a class="path-card" href="./guide/learning-path">
    <h3>路径三：数据建模与治理</h3>
    <p>数据域 → ODS → DWD → DWS → ADS → 指标体系 → 元数据 → 血缘 → 质量校验</p>
  </a>
  <a class="path-card" href="./compute/spark-skew">
    <h3>路径四：性能问题排查</h3>
    <p>SQL 慢 → 执行计划 → Spark UI → Shuffle → 数据倾斜 → GC / OOM → 参数优化</p>
  </a>
</div>

## 问题库入口

<ul class="question-list">
  <li><a href="./questions/spark-data-skew">Spark 为什么会发生数据倾斜？</a></li>
  <li><a href="./questions/broadcast-join-why-fast">小表广播 Join 为什么快？</a></li>
  <li><a href="./questions/distinct-vs-group-by">distinct 和 group by 有什么区别？</a></li>
  <li><a href="./questions/clickhouse-single-table-fast">ClickHouse 查询单表为什么快？</a></li>
  <li><a href="./questions/paimon-spark-vs-clickhouse">Paimon + Spark 查询和 ClickHouse 查询效率差异在哪里？</a></li>
  <li><a href="./optimization/gc">Executor 频繁 GC 怎么排查？</a></li>
  <li><a href="./optimization/driver-oom">Driver OOM 常见原因有哪些？</a></li>
  <li><a href="./questions/data-governance-flow">数据治理在整个数据流程中做了什么？</a></li>
</ul>

## 实战案例入口

<div class="knowledge-grid">
  <a class="knowledge-card" href="./cases/spark-slow-sql">
    <h3>Spark SQL 运行缓慢排查</h3>
    <p>从执行计划、Stage 耗时、Shuffle 和资源利用率定位慢 SQL。</p>
  </a>
  <a class="knowledge-card" href="./cases/spark-gc-high">
    <h3>Executor 频繁 GC 排查</h3>
    <p>结合内存、对象膨胀、缓存和 Shuffle 落盘分析 GC 问题。</p>
  </a>
  <a class="knowledge-card" href="./cases/join-data-explosion">
    <h3>Join 后数据量暴增排查</h3>
    <p>从主键唯一性、关联条件和维度表粒度定位数据膨胀。</p>
  </a>
  <a class="knowledge-card" href="./cases/data-quality-backtracking">
    <h3>数据质量异常回溯</h3>
    <p>沿采集、入湖、加工、服务和使用链路定位质量异常源头。</p>
  </a>
</div>

## 总结输出

这个网站的第一版已经把大数据技术知识拆成技术地图、学习路径、问题库、技术专题和实战案例五类入口。后续新增内容时，可以继续沿着“技术点解释、问题沉淀、案例复盘、关联知识”的方式扩展，让零散经验逐步沉淀为系统化知识体系。
