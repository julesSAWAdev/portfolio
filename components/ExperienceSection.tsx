'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  Briefcase, 
  Star, 
  Filter,
  TrendingUp,
  Zap,
  Database,
  Cloud,
  Code,
  Globe,
  Award
} from 'lucide-react'

// Type definitions
type Job = {
  title: string
  company: string
  period: string
  duration: string
  location: string
  category: string
  description: string
  achievements: string[]
  tech: string[]
}

type Fellowship = {
  title: string
  period: string
  duration: string
  organization: string
  location: string
  category: string
  description: string
  achievements: string[]
  tech: string[]
}

type JobOrFellowship = Job | Fellowship

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('All')

  const skills = [
    { name: 'Data Engineering', category: 'Core', level: 95, years: 6, icon: Database },
    { name: 'Python', category: 'Programming', level: 95, years: 5, icon: Code },
    { name: 'SQL', category: 'Programming', level: 95, years: 5, icon: Database },
    { name: 'Microsoft Dynamics 365', category: 'ERP', level: 85, years: 4, icon: Database },
    { name: 'Azure', category: 'Cloud', level: 85, years: 5, icon: Cloud },
    { name: 'MySQL', category: 'Database', level: 95, years: 6, icon: Database },
    { name: 'Metabase', category: 'BI Tools', level: 95, years: 5, icon: TrendingUp },
    { name: 'Data Modeling', category: 'Core', level: 95, years: 5, icon: Database },
    { name: 'ELT', category: 'Core', level: 95, years: 5, icon: Zap },
    { name: 'Microsoft Power BI', category: 'BI Tools', level: 95, years: 5, icon: TrendingUp },
    { name: 'dbt', category: 'Core', level: 95, years: 5, icon: Code },
    { name: 'Snowflake', category: 'Database', level: 95, years: 5, icon: Database },
    { name: 'ClickHouse', category: 'Database', level: 85, years: 4, icon: Database },
    { name: 'Microsoft Fabric', category: 'Platform', level: 85, years: 1, icon: Cloud },
    { name: 'Qlik View', category: 'BI Tools', level: 85, years: 5, icon: TrendingUp },
    { name: 'Apache Kafka', category: 'Data', level: 85, years: 5, icon: Zap },
    { name: 'Tableau', category: 'BI Tools', level: 85, years: 5, icon: TrendingUp },
    { name: 'PySpark', category: 'Programming', level: 85, years: 5, icon: Code },
    { name: 'Kubernetes', category: 'DevOps', level: 85, years: 5, icon: Cloud },
    { name: 'AWS', category: 'Cloud', level: 85, years: 5, icon: Cloud },
    { name: 'PostgreSQL', category: 'Database', level: 85, years: 5, icon: Database },
    { name: 'MongoDB', category: 'Database', level: 85, years: 5, icon: Database },
    { name: 'Google Cloud', category: 'Cloud', level: 85, years: 4, icon: Cloud },
    { name: 'Machine Learning', category: 'AI/ML', level: 85, years: 4, icon: TrendingUp },
    { name: 'NoSQL', category: 'Database', level: 85, years: 4, icon: Database },
    { name: 'Data Analytics', category: 'Core', level: 85, years: 4, icon: TrendingUp },
    { name: 'Qlik Sense', category: 'BI Tools', level: 85, years: 3, icon: TrendingUp },
    { name: 'Java', category: 'Programming', level: 85, years: 3, icon: Code },
    { name: 'Databricks', category: 'Platform', level: 85, years: 3, icon: Cloud }
  ]

  const jobHistory: Job[] = [
    {
      title: 'Data Engineer II',
      company: 'Irembo',
      period: 'April 2024 - Present',
      duration: '1 year 5 months',
      location: 'Kigali City, Rwanda',
      category: 'Data Engineering',
      description: 'Prepared and transformed raw data for prescriptive and predictive modeling, enhancing machine learning model accuracy by 20%.',
      achievements: [
        'Prepared and transformed raw data for prescriptive and predictive modeling, enhancing machine learning model accuracy by 20%',
        'Improved data quality and reliability by implementing best practices in data modeling and architecture',
        'Reduced data processing times by 30%, enabling near-real-time reporting and analytics'
      ],
      tech: ['Data Modeling', 'Machine Learning', 'Predictive Analytics', 'Data Architecture', 'Performance Optimization']
    },
    {
      title: 'Snowflake Developer II',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      period: 'April 2020 - March 2024',
      duration: '4 years',
      location: 'Nairobi County, Kenya',
      category: 'Data Engineering',
      description: 'Analyzed and organized raw data, built data systems and pipelines, built algorithms and prototypes and interpreted trends and patterns.',
      achievements: [
        'Analyzed and organized raw data, built data systems and pipelines, built algorithms and prototypes and interpreted trends and patterns',
        'Maintained data pipelines on AWS and Snowflake to support a variety of data science, data analytics, and software development tasks',
        'Conducted complex data analysis and report on results, prepared data for prescriptive modeling'
      ],
      tech: ['Snowflake', 'AWS', 'Data Pipelines', 'Data Analysis', 'Data Modeling', 'Algorithms', 'Prototyping']
    },
    {
      title: 'Senior Digital Analyst',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      period: 'July 2023 - February 2024',
      duration: '8 months',
      location: 'Kenya',
      category: 'Data Analytics',
      description: 'Advanced data analysis and strategic insights for business decision-making and digital transformation.',
      achievements: [
        'Led digital analytics initiatives to drive business insights and strategic decision-making',
        'Developed comprehensive reporting frameworks for executive stakeholders',
        'Implemented data-driven approaches to optimize business processes and customer experience'
      ],
      tech: ['Digital Analytics', 'Business Intelligence', 'Strategic Analysis', 'Reporting', 'Process Optimization']
    },
    {
      title: 'Software Quality Assurance Intern',
      company: 'Irembo',
      period: 'April 2019 - July 2019',
      duration: '4 months',
      location: 'Rwanda',
      category: 'Quality Assurance',
      description: 'Gained foundational experience in software testing and quality assurance processes.',
      achievements: [
        'Learned fundamental QA methodologies and testing frameworks',
        'Participated in software development lifecycle and testing processes',
        'Gained hands-on experience with quality assurance tools and practices'
      ],
      tech: ['QA Testing', 'Software Testing', 'Quality Assurance', 'Testing Frameworks', 'SDLC']
    }
  ]

  const fellowship: Fellowship = {
    title: 'Global Health Corps Fellowship',
    period: '2021-2022',
    duration: '1 year',
    organization: 'Health Builders',
    location: 'Rwanda',
    category: 'Fellowship',
    description: 'I was assigned to Health Builders as a software developer where I created a mobile app for health center clinical and non clinical data collection for monitoring and evaluation.',
    achievements: [
      'Created a mobile application for health center clinical and non-clinical data collection',
      'Implemented monitoring and evaluation systems for healthcare data management',
      'Collaborated with healthcare professionals to design user-friendly data collection interfaces',
      'Contributed to improving healthcare data quality and accessibility in rural health centers'
    ],
    tech: ['Mobile Development', 'Healthcare Technology', 'Data Collection', 'Monitoring & Evaluation', 'User Experience Design']
  }

  const categories = ['All', 'Data Engineering', 'Data Analytics', 'Quality Assurance', 'Healthcare Technology', 'Fellowship']

  const filteredJobs: JobOrFellowship[] = activeFilter === 'All' 
    ? [...jobHistory, fellowship]
    : activeFilter === 'Fellowship'
    ? [fellowship]
    : jobHistory.filter(job => job.category === activeFilter)

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'neon-green'
    if (level >= 80) return 'neon-blue'
    if (level >= 70) return 'neon-purple'
    return 'neon-pink'
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Data Engineering':
        return 'neon-blue'
      case 'Data Analytics':
        return 'neon-green'
      case 'Quality Assurance':
        return 'neon-purple'
      case 'Healthcare Technology':
        return 'neon-pink'
      case 'Fellowship':
        return 'neon-green'
      default:
        return 'neon-blue'
    }
  }

  const getOrganizationName = (item: JobOrFellowship): string => {
    if ('company' in item) {
      return item.company
    } else {
      return item.organization
    }
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-smoke-200 via-smoke-300 to-smoke-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Skills</span>
          </h2>
          <p className="text-xl text-smoke-600 max-w-3xl mx-auto">
            A comprehensive view of my technical expertise and professional journey across data engineering, analytics, and healthcare technology.
          </p>
        </motion.div>

        {/* Skills Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="card max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-neon-blue flex items-center gap-2">
              <Star className="w-6 h-6" />
              Skills Proficiency Heatmap
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="text-center group"
                >
                  <div className="relative mb-3">
                    <div className={`w-16 h-16 mx-auto rounded-lg bg-${getSkillColor(skill.level)} bg-opacity-20 border-2 border-${getSkillColor(skill.level)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className={`w-8 h-8 text-${getSkillColor(skill.level)}`} />
                    </div>
                    
                    {/* Proficiency indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-smoke-200 rounded-full border-2 border-smoke-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-smoke-800">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <div className="text-sm font-medium text-smoke-800 mb-1">{skill.name}</div>
                  <div className="text-xs text-smoke-600 mb-1">{skill.category}</div>
                  <div className="text-xs text-neon-blue font-medium mb-2">{skill.years} yrs</div>
                  
                  {/* Skill level bar */}
                  <div className="mt-2 w-full bg-smoke-300 rounded-full h-1.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                      className={`h-1.5 rounded-full bg-${getSkillColor(skill.level)}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Job History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8 text-neon-green flex items-center justify-center gap-2">
              <Briefcase className="w-6 h-6" />
              Professional Journey
            </h3>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-neon-green text-white'
                      : 'bg-smoke-200 text-smoke-700 hover:bg-smoke-300 hover:text-smoke-800'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-smoke-800 group-hover:text-neon-blue transition-colors duration-300">
                          {job.title}
                        </h4>
                        <div className="text-neon-green font-medium text-lg">{getOrganizationName(job)}</div>
                        <div className="text-smoke-600 text-sm mb-1">{job.period} • {job.duration}</div>
                        <div className="text-smoke-500 text-sm flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>
                      
                      <span className={`px-3 py-1 bg-${getCategoryColor(job.category)}/20 text-${getCategoryColor(job.category)} text-sm rounded-full border border-${getCategoryColor(job.category)}/30`}>
                        {job.category}
                      </span>
                    </div>
                    
                    <p className="text-smoke-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-smoke-800 mb-2">
                        {job.category === 'Fellowship' ? 'Key Contributions:' : 'Key Achievements:'}
                      </h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-smoke-600 flex items-start gap-2">
                            <span className={`text-${getCategoryColor(job.category)} mt-1`}>•</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 bg-smoke-200 text-${getCategoryColor(job.category)} text-xs rounded-full border border-${getCategoryColor(job.category)}/30`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection 