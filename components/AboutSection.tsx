'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Cloud, 
  BarChart3, 
  Server, 
  Shield,
  GitBranch,
  Zap,
  ArrowUpDown
} from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const careerTimeline = [
    {
      year: '2019',
      title: 'Software Quality Assurance Intern',
      company: 'Irembo',
      description: 'Gained foundational experience in software testing and quality assurance processes, learning fundamental QA methodologies and testing frameworks.',
      icon: Shield,
      color: 'neon-purple'
    },
    {
      year: '2020-2024',
      title: 'Snowflake Developer II',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      description: 'Built and maintained data systems and pipelines on AWS and Snowflake, conducted complex data analysis, and developed algorithms and prototypes.',
      icon: Database,
      color: 'neon-blue'
    },
    {
      year: '2021-2022',
      title: 'Global Health Corps Fellowship',
      company: 'Health Builders',
      description: 'Created a mobile app for health center clinical and non-clinical data collection for monitoring and evaluation.',
      icon: Code,
      color: 'neon-green'
    },
    {
      year: '2023-2024',
      title: 'Senior Digital Analyst',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      description: 'Led digital analytics initiatives to drive business insights and strategic decision-making for executive stakeholders.',
      icon: BarChart3,
      color: 'neon-pink'
    },
    {
      year: '2024-Present',
      title: 'Data Engineer II',
      company: 'Irembo',
      description: 'Transforming raw data for prescriptive and predictive modeling, enhancing data analytics ability to provide real time analytics internally and to stakeholders efficiently',
      icon: Server,
      color: 'neon-blue'
    }
  ]

  const techTools = [
    { name: 'Kubernetes', icon: GitBranch, color: 'neon-blue' },
    { name: 'Kafka', icon: Zap, color: 'neon-green' },
    { name: 'ClickHouse', icon: Database, color: 'neon-purple' },
    { name: 'PostgreSQL', icon: Server, color: 'neon-blue' },
    { name: 'dbt', icon: BarChart3, color: 'neon-green' },
    { name: 'AWS', icon: Cloud, color: 'neon-purple' },
    { name: 'GCP', icon: Cloud, color: 'neon-pink' },
    { name: 'Dagster', icon: ArrowUpDown, color: 'neon-blue' }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-smoke-100 via-smoke-200 to-smoke-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-smoke-600 max-w-3xl mx-auto">
            From quality assurance intern to data engineer, I've evolved through multiple roles 
            to become a full-stack data professional who loves building scalable systems and transforming data into insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-blue">Career Journey</h3>
            <div className="space-y-8">
              {careerTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index < careerTimeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-smoke-400"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-${item.color} bg-opacity-20 border-2 border-${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 text-${item.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-sm text-neon-green font-medium mb-1">{item.year}</div>
                      <h4 className="text-lg font-semibold text-smoke-800 mb-1">{item.title}</h4>
                      <div className="text-neon-blue font-medium mb-2">{item.company}</div>
                      <p className="text-smoke-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Toolkit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-green">Tech Toolkit</h3>
            <div className="grid grid-cols-2 gap-6">
              {techTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 180,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <div className={`card text-center p-6 hover:border-${tool.color} transition-all duration-300`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${tool.color} bg-opacity-20 border-2 border-${tool.color} flex items-center justify-center group-hover:animate-glow`}>
                      <tool.icon className={`w-8 h-8 text-${tool.color}`} />
                    </div>
                    <h4 className="font-semibold text-smoke-800 group-hover:text-neon-blue transition-colors duration-300">
                      {tool.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-neon-purple">What Drives Me</h3>
            <p className="text-smoke-600 leading-relaxed">
              I'm passionate about building scalable data systems, automating data pipelines, 
              and turning complex data into actionable insights for business decision-making. 
              When I'm not coding, you'll find me swimming, contributing to open source, 
              or mentoring junior developers in my community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 