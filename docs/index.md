---
layout: home

hero:
  name: 大数据技术知识体系
  text: 从问题到体系化理解
  tagline: 面向大数据平台建设、性能排查和知识沉淀的个人技术知识库。
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/learning-path
    - theme: alt
      text: 查看问题库
      link: /questions/
---

# 技术知识地图

这个网站把数据采集、湖仓一体、Spark/Flink 计算、数据建模、数据治理和性能优化放到同一张知识地图中。目标不是简单记录答案，而是把每个技术点放入完整的数据平台链路里，形成可复用、可关联、可持续更新的技术体系。

## 推荐入口

<div class="entry-grid">
  <a class="entry-card primary-entry" href="./guide/learning-path.html">
    <span class="entry-kicker">系统学习</span>
    <h3>按学习路径建立主线</h3>
    <p>适合从零梳理大数据技术栈，先建立数据链路、计算引擎、湖仓架构和治理能力之间的关系。</p>
  </a>
  <a class="entry-card" href="./questions/">
    <span class="entry-kicker">问题排查</span>
    <h3>从真实问题反推原理</h3>
    <p>适合遇到 SQL 慢、数据倾斜、GC、OOM、Join 膨胀等问题时快速定位分析路径。</p>
  </a>
  <a class="entry-card" href="./cases/">
    <span class="entry-kicker">实战复盘</span>
    <h3>用案例沉淀排查方法</h3>
    <p>适合把项目中的异常、优化和治理经验整理成可复用的方法论。</p>
  </a>
</div>

## 技术地图

<p class="section-intro">先按数据平台链路理解每个模块的位置，再进入具体专题。</p>

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
  <a class="knowledge-card" href="./lakehouse/kafka-flink-paimon-spark-bytehouse.html">
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

<p class="section-intro">四条路径对应四种常见目标：理解引擎、搭建湖仓、建设模型、排查性能。</p>

<div class="path-grid">
  <a class="path-card" href="./compute/spark-execution-flow.html">
    <h3>路径一：Spark 执行原理</h3>
    <p>Spark SQL → Catalyst → DAG → Stage → Task → Executor → Shuffle → 结果输出</p>
  </a>
  <a class="path-card" href="./lakehouse/kafka-flink-paimon-spark-bytehouse.html">
    <h3>路径二：湖仓一体架构</h3>
    <p>Kafka → Flink CDC → Paimon → Spark → ByteHouse → DolphinScheduler → 数据治理</p>
  </a>
  <a class="path-card" href="./guide/learning-path.html">
    <h3>路径三：数据建模与治理</h3>
    <p>数据域 → ODS → DWD → DWS → ADS → 指标体系 → 元数据 → 血缘 → 质量校验</p>
  </a>
  <a class="path-card" href="./compute/spark-skew.html">
    <h3>路径四：性能问题排查</h3>
    <p>SQL 慢 → 执行计划 → Spark UI → Shuffle → 数据倾斜 → GC / OOM → 参数优化</p>
  </a>
</div>

## 问题库入口

<p class="section-intro">把常见面试题和线上排障问题放到同一套分析框架里。</p>

<ul class="question-list">
  <li><a href="./questions/spark-data-skew.html">Spark 为什么会发生数据倾斜？</a></li>
  <li><a href="./questions/broadcast-join-why-fast.html">小表广播 Join 为什么快？</a></li>
  <li><a href="./questions/distinct-vs-group-by.html">distinct 和 group by 有什么区别？</a></li>
  <li><a href="./questions/clickhouse-single-table-fast.html">ClickHouse 查询单表为什么快？</a></li>
  <li><a href="./questions/paimon-spark-vs-clickhouse.html">Paimon + Spark 查询和 ClickHouse 查询效率差异在哪里？</a></li>
  <li><a href="./optimization/gc.html">Executor 频繁 GC 怎么排查？</a></li>
  <li><a href="./optimization/driver-oom.html">Driver OOM 常见原因有哪些？</a></li>
  <li><a href="./questions/data-governance-flow.html">数据治理在整个数据流程中做了什么？</a></li>
  <li><a href="./governance/data-governance-process.html">数据治理怎么落地推进？</a></li>
  <li><a href="./modeling/dws-changing-dimension.html">变化维表字段要不要沉淀到 DWS？</a></li>
</ul>

## 实战案例入口

<p class="section-intro">每个案例都围绕现象、定位、原因、处理方案和沉淀经验展开。</p>

<div class="knowledge-grid">
  <a class="knowledge-card" href="./cases/spark-slow-sql.html">
    <h3>Spark SQL 运行缓慢排查</h3>
    <p>从执行计划、Stage 耗时、Shuffle 和资源利用率定位慢 SQL。</p>
  </a>
  <a class="knowledge-card" href="./cases/spark-gc-high.html">
    <h3>Executor 频繁 GC 排查</h3>
    <p>结合内存、对象膨胀、缓存和 Shuffle 落盘分析 GC 问题。</p>
  </a>
  <a class="knowledge-card" href="./cases/join-data-explosion.html">
    <h3>Join 后数据量暴增排查</h3>
    <p>从主键唯一性、关联条件和维度表粒度定位数据膨胀。</p>
  </a>
  <a class="knowledge-card" href="./cases/data-quality-backtracking.html">
    <h3>数据质量异常回溯</h3>
    <p>沿采集、入湖、加工、服务和使用链路定位质量异常源头。</p>
  </a>
</div>

## 持续更新方向

后续内容会继续沿着“技术点解释、问题沉淀、案例复盘、关联知识”的方式扩展。每新增一个专题，都会尽量补齐它在数据链路中的位置、底层原理、典型场景、常见问题和相关案例。
