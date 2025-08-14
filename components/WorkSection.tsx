'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Play, 
  Database, 
  BarChart3, 
  Code,
  ArrowRight,
  Zap
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const WorkSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const sampleData = [
    { time: '00:00', value: 65, raw: 45 },
    { time: '04:00', value: 78, raw: 52 },
    { time: '08:00', value: 90, raw: 67 },
    { time: '12:00', value: 85, raw: 58 },
    { time: '16:00', value: 92, raw: 71 },
    { time: '20:00', value: 88, raw: 63 }
  ]

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-smoke-200 via-smoke-300 to-smoke-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Work</span>
          </h2>
          <p className="text-xl text-smoke-600 max-w-3xl mx-auto">
            Interactive demos and real projects that showcase my expertise in building scalable systems and data solutions.
          </p>
        </motion.div>

        {/* Pipeline Visualizer Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="card max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-neon-blue flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Live Pipeline Visualizer
            </h3>
            <PipelineVisualizer />
          </div>
        </motion.div>

        {/* Mini Dashboard Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="card max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-neon-green flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              Data Transformation Demo
            </h3>
            <DataTransformationDemo data={sampleData} />
          </div>
        </motion.div>

        {/* Live Code Snippets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="card max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple flex items-center gap-2">
              <Code className="w-6 h-6" />
              Live Code Snippets
            </h3>
            <LiveCodeSnippets />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const PipelineVisualizer = () => {
  const pipelineSteps = [
    { 
      name: 'Data Sources', 
      icon: Database, 
      color: 'neon-blue', 
      status: 'active',
      details: 'PostgreSQL, APIs, Logs',
      description: 'Operational databases and external data sources'
    },
    { 
      name: 'Ingestion Layer', 
      icon: Zap, 
      color: 'neon-green', 
      status: 'active',
      details: 'CDC via Altinity Sink',
      description: 'Change Data Capture and streaming ingestion'
    },
    { 
      name: 'Storage/Staging', 
      icon: Database, 
      color: 'neon-purple', 
      status: 'active',
      details: 'ClickHouse Lake (Raw)',
      description: 'Raw data storage and staging area'
    },
    { 
      name: 'ETL Layer', 
      icon: Code, 
      color: 'neon-pink', 
      status: 'processing',
      details: 'Transform via dbt',
      description: 'Data transformation and cleaning'
    },
    { 
      name: 'Orchestration', 
      icon: BarChart3, 
      color: 'neon-blue', 
      status: 'active',
      details: 'Dagster workflows',
      description: 'Workflow management and scheduling'
    },
    { 
      name: 'Serving Layer', 
      icon: Database, 
      color: 'neon-green', 
      status: 'active',
      details: 'ClickHouse Warehouse',
      description: 'Analytics-ready data warehouse'
    },
    { 
      name: 'Monitoring', 
      icon: Zap, 
      color: 'neon-purple', 
      status: 'active',
      details: 'Prometheus + Grafana',
      description: 'Pipeline health and performance'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Pipeline Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {pipelineSteps.map((step, index) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: step.status === 'processing' ? [1, 1.05, 1] : 1
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              repeat: step.status === 'processing' ? Infinity : 0,
              repeatDelay: 1
            }}
            className="text-center group"
          >
            <div className={`w-16 h-16 mx-auto mb-3 rounded-lg bg-${step.color} bg-opacity-20 border-2 border-${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <step.icon className={`w-8 h-8 text-${step.color}`} />
            </div>
            <div className="text-sm font-semibold text-smoke-800 mb-1">{step.name}</div>
            <div className="text-xs text-neon-blue font-medium mb-1">{step.details}</div>
            <div className="text-xs text-smoke-600 leading-tight">{step.description}</div>
            <div className={`text-xs text-${step.color} mt-1 font-medium`}>
              {step.status === 'processing' ? 'Processing...' : 'Active'}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Data Flow Animation */}
      <div className="relative">
        <div className="h-2 bg-gradient-to-r from-neon-blue via-neon-green via-neon-purple via-neon-pink via-neon-blue via-neon-green to-neon-purple rounded-full overflow-hidden">
        </div>
        
        {/* Data Flow Labels */}
        <div className="flex justify-between text-xs text-smoke-600 mt-2">
          <span>CDC Events</span>
          <span>Raw Data</span>
          <span>Transformed</span>
          <span>Orchestrated</span>
          <span>Analytics</span>
          <span>Monitoring</span>
        </div>
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-smoke-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-neon-blue">1.2M+</div>
          <div className="text-sm text-smoke-600">Events/Day</div>
        </div>
        <div className="bg-smoke-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-neon-green">99.9%</div>
          <div className="text-sm text-smoke-600">Uptime</div>
        </div>
        <div className="bg-smoke-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-neon-purple">50ms</div>
          <div className="text-sm text-smoke-600">End-to-End Latency</div>
        </div>
      </div>

      {/* Pipeline Architecture Info */}
      <div className="bg-smoke-100 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-smoke-800 mb-4 text-center">Pipeline Architecture</h4>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 className="font-semibold text-neon-blue mb-2">Data Flow:</h5>
            <div className="space-y-2 text-smoke-600">
              <div>• PostgreSQL → CDC → Kafka → ClickHouse Lake</div>
              <div>• Raw data → dbt transformations → ClickHouse Warehouse</div>
              <div>• Orchestrated by Dagster workflows</div>
              <div>• Served to dashboards and APIs</div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-neon-green mb-2">Key Technologies:</h5>
            <div className="space-y-2 text-smoke-600">
              <div>• Altinity Sink for CDC</div>
              <div>• Apache Kafka for streaming</div>
              <div>• ClickHouse for storage</div>
              <div>• dbt for transformations</div>
              <div>• Dagster for orchestration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DataTransformationDemo = ({ data }: { data: any[] }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) {
    return <div className="h-[260px] w-full bg-dark-800 rounded-lg" />
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Raw Data */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-400">Raw Data</h4>
          <div className="bg-dark-800 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="raw" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  dot={{ fill: '#EF4444' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cleaned Data */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-400">Cleaned & Transformed</h4>
          <div className="bg-dark-800 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: '#10B981' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-neon-green text-sm">
          <ArrowRight className="w-4 h-4" />
          Data cleaned using dbt transformations • Outliers removed • Missing values handled
        </div>
      </div>
    </div>
  )
}

const LiveCodeSnippets = () => {
  const codeSnippets = [
    {
      title: 'Kubernetes Deployment',
      language: 'yaml',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: data-pipeline
  labels:
    app: data-pipeline
    version: v1.0.0
spec:
  replicas: 3
  selector:
    matchLabels:
      app: data-pipeline
  template:
    metadata:
      labels:
        app: data-pipeline
        version: v1.0.0
    spec:
      containers:
      - name: pipeline
        image: data-pipeline:latest
        ports:
        - containerPort: 8080
        env:
        - name: KAFKA_BROKERS
          value: "kafka:9092"
        - name: CLICKHOUSE_HOST
          value: "clickhouse:9000"
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10`
    },
    {
      title: 'dbt Model - User Events',
      language: 'sql',
      code: `-- models/marts/user_events_cleaned.sql
-- Clean and transform user events for analytics

WITH source_data AS (
  SELECT 
    user_id,
    event_type,
    event_properties,
    created_at,
    ROW_NUMBER() OVER (
      PARTITION BY user_id, event_type, DATE(created_at)
      ORDER BY created_at DESC
    ) as rn
  FROM {{ source('events', 'user_events') }}
  WHERE created_at >= DATEADD(day, -30, CURRENT_DATE())
),

cleaned_events AS (
  SELECT 
    user_id,
    event_type,
    event_properties,
    created_at,
    DATE(created_at) as event_date,
    HOUR(created_at) as event_hour
  FROM source_data
  WHERE rn = 1
    AND event_type IS NOT NULL
    AND user_id IS NOT NULL
),

final AS (
  SELECT 
    user_id,
    event_type,
    event_properties,
    created_at,
    event_date,
    event_hour,
    CASE 
      WHEN event_type = 'page_view' THEN 'engagement'
      WHEN event_type = 'purchase' THEN 'conversion'
      WHEN event_type = 'signup' THEN 'acquisition'
      ELSE 'other'
    END as event_category
  FROM cleaned_events
)

SELECT * FROM final
WHERE event_category != 'other'`
    }
  ]

  return (
    <div className="space-y-8">
      {codeSnippets.map((snippet, index) => (
        <div key={index} className="bg-smoke-800 rounded-lg overflow-hidden border border-smoke-600">
          {/* Code Header */}
          <div className="bg-smoke-900 px-6 py-4 border-b border-smoke-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h4 className="text-lg font-semibold text-smoke-100">{snippet.title}</h4>
              <div className="text-xs text-smoke-400 px-2 py-1 bg-smoke-700 rounded">
                {snippet.language.toUpperCase()}
              </div>
            </div>
          </div>
          
          {/* Code Content */}
          <div className="p-0 overflow-hidden">
            <div className="bg-smoke-950 p-6 overflow-x-auto">
              <pre className="text-sm text-smoke-100 font-mono leading-relaxed">
                <code className={`language-${snippet.language}`}>
                  {snippet.code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-secondary"
          onClick={() => window.open('https://github.com/julesSAWAdev', '_blank')}
        >
          <Github className="w-4 h-4 mr-2" />
          View More on GitHub
        </motion.button>
      </div>
    </div>
  )
}

export default WorkSection 