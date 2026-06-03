import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/bigdata-knowledge-system/',
  title: '大数据技术知识体系',
  description: '从技术问题到系统化理解',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路径', link: '/guide/learning-path' },
      { text: '问题库', link: '/questions/' },
      { text: '技术专题', link: '/compute/spark' },
      { text: '实战案例', link: '/cases/' },
      { text: 'GitHub', link: 'https://github.com/' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    sidebar: [
      {
        text: '学习指南',
        items: [
          { text: '学习指南概览', link: '/guide/' },
          { text: '知识体系方法', link: '/guide/knowledge-method' },
          { text: '学习路径', link: '/guide/learning-path' },
          { text: '问题整理模板', link: '/guide/question-template' }
        ]
      },
      {
        text: '数据采集',
        items: [
          { text: '数据采集概览', link: '/collection/' },
          { text: '埋点', link: '/collection/tracking' },
          { text: 'Flink CDC', link: '/collection/flink-cdc' },
          { text: 'Kafka', link: '/collection/kafka' }
        ]
      },
      {
        text: '数据存储',
        items: [
          { text: '数据存储概览', link: '/storage/' },
          { text: 'Hive', link: '/storage/hive' },
          { text: 'Paimon', link: '/storage/paimon' },
          { text: 'Parquet / ORC', link: '/storage/parquet-orc' },
          { text: 'HDFS / OSS', link: '/storage/hdfs-oss' }
        ]
      },
      {
        text: '数据计算',
        items: [
          { text: '数据计算概览', link: '/compute/' },
          { text: 'Spark', link: '/compute/spark' },
          { text: 'Spark 执行流程', link: '/compute/spark-execution-flow' },
          { text: 'Spark Shuffle', link: '/compute/spark-shuffle' },
          { text: 'Spark 数据倾斜', link: '/compute/spark-skew' },
          { text: 'Spark 广播 Join', link: '/compute/spark-broadcast-join' },
          { text: 'Flink', link: '/compute/flink' },
          { text: 'ClickHouse / ByteHouse', link: '/compute/clickhouse-bytehouse' }
        ]
      },
      {
        text: '湖仓一体',
        items: [
          { text: '湖仓一体概览', link: '/lakehouse/' },
          { text: '整体架构', link: '/lakehouse/architecture' },
          { text: 'Kafka + Flink + Paimon + Spark + ByteHouse', link: '/lakehouse/kafka-flink-paimon-spark-bytehouse' },
          { text: '为什么选择 Paimon', link: '/lakehouse/paimon-reason' },
          { text: '存算分离', link: '/lakehouse/storage-compute-separation' },
          { text: '元数据映射', link: '/lakehouse/metadata-mapping' }
        ]
      },
      {
        text: '数据建模',
        items: [
          { text: '数据建模概览', link: '/modeling/' },
          { text: 'ODS / DWD / DWS / ADS', link: '/modeling/ods-dwd-dws-ads' },
          { text: '维度建模', link: '/modeling/dimension-modeling' },
          { text: '数据域划分', link: '/modeling/data-domain' },
          { text: '宽表设计', link: '/modeling/wide-table' }
        ]
      },
      {
        text: '数据治理',
        items: [
          { text: '数据治理概览', link: '/governance/' },
          { text: '元数据管理', link: '/governance/metadata' },
          { text: '血缘分析', link: '/governance/lineage' },
          { text: '数据质量', link: '/governance/quality' },
          { text: '权限治理', link: '/governance/permission' },
          { text: '成本治理', link: '/governance/cost' }
        ]
      },
      {
        text: '性能优化',
        items: [
          { text: '性能优化概览', link: '/optimization/' },
          { text: 'SQL 优化', link: '/optimization/sql-optimization' },
          { text: 'Join 优化', link: '/optimization/join-optimization' },
          { text: 'Shuffle 优化', link: '/optimization/shuffle-optimization' },
          { text: 'GC 问题', link: '/optimization/gc' },
          { text: 'Executor OOM', link: '/optimization/executor-oom' },
          { text: 'Driver OOM', link: '/optimization/driver-oom' }
        ]
      },
      {
        text: '调度与运维',
        items: [
          { text: '调度与运维概览', link: '/scheduler/' },
          { text: 'DolphinScheduler', link: '/scheduler/dolphinscheduler' },
          { text: '任务依赖', link: '/scheduler/task-dependency' }
        ]
      },
      {
        text: '问题库',
        items: [
          { text: '问题库概览', link: '/questions/' },
          { text: 'Spark 数据倾斜', link: '/questions/spark-data-skew' },
          { text: '小表广播为什么快', link: '/questions/broadcast-join-why-fast' },
          { text: 'distinct vs group by', link: '/questions/distinct-vs-group-by' },
          { text: 'ClickHouse 单表查询为什么快', link: '/questions/clickhouse-single-table-fast' },
          { text: 'Paimon Spark vs ClickHouse', link: '/questions/paimon-spark-vs-clickhouse' },
          { text: '数据治理流程', link: '/questions/data-governance-flow' }
        ]
      },
      {
        text: '实战案例',
        items: [
          { text: '实战案例概览', link: '/cases/' },
          { text: 'Spark SQL 运行缓慢排查', link: '/cases/spark-slow-sql' },
          { text: 'Executor 频繁 GC 排查', link: '/cases/spark-gc-high' },
          { text: 'Join 后数据量暴增排查', link: '/cases/join-data-explosion' },
          { text: '数据质量异常回溯', link: '/cases/data-quality-backtracking' }
        ]
      }
    ]
  }
})
