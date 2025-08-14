'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight,
  ExternalLink,
  Database,
  GitBranch,
  Shield,
  BarChart3
} from 'lucide-react'

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const blogPosts = [
    {
      title: 'How I Set Up CDC from ClickHouse to ClickHouse on Kubernetes',
      excerpt: 'A comprehensive guide to implementing Change Data Capture between ClickHouse instances in a Kubernetes environment, including performance optimizations and monitoring.',
      readTime: '8 min read',
      date: '2024-01-15',
      category: 'Data Engineering',
      icon: Database,
      color: 'neon-blue',
      tags: ['ClickHouse', 'Kubernetes', 'CDC', 'Data Pipeline'],
      featured: true
    },
    {
      title: 'Lessons Learned Scaling Dagster in Production',
      excerpt: 'Real-world insights from scaling Dagster to handle 10,000+ daily pipeline runs, including resource optimization and failure handling strategies.',
      readTime: '12 min read',
      date: '2024-01-10',
      category: 'Data Engineering',
      icon: BarChart3,
      color: 'neon-green',
      tags: ['Dagster', 'Scalability', 'Production', 'Monitoring'],
      featured: false
    },
    {
      title: 'WireGuard VPN Setup on AWS in Under 15 Minutes',
      excerpt: 'Step-by-step guide to setting up a secure WireGuard VPN on AWS EC2, including automation scripts and security best practices.',
      readTime: '6 min read',
      date: '2024-01-05',
      category: 'DevOps',
      icon: Shield,
      color: 'neon-purple',
      tags: ['WireGuard', 'AWS', 'VPN', 'Security'],
      featured: false
    },
    {
      title: 'Building Resilient Data Pipelines with Kafka and ClickHouse',
      excerpt: 'Architecture patterns for building fault-tolerant data pipelines that can handle millions of events per second with minimal latency.',
      readTime: '10 min read',
      date: '2023-12-28',
      category: 'Data Engineering',
      icon: GitBranch,
      color: 'neon-pink',
      tags: ['Kafka', 'ClickHouse', 'Resilience', 'Performance'],
      featured: false
    }
  ]

  const categories = ['All', 'Data Engineering', 'DevOps', 'Kubernetes', 'Monitoring']

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-smoke-100 via-smoke-200 to-smoke-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Knowledge Hub</span>
          </h2>
          <p className="text-xl text-smoke-600 max-w-3xl mx-auto">
            Technical articles and insights from my journey building scalable systems and data solutions.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card max-w-6xl mx-auto group hover:scale-[1.02] transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm rounded-full border border-neon-blue/30">
                    Featured
                  </span>
                  <span className="text-smoke-600 text-sm">Data Engineering</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-smoke-800 group-hover:text-neon-blue transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-smoke-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-smoke-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-smoke-200 text-neon-green text-xs rounded-full border border-neon-green/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Read Full Article
                  <ArrowRight size={20} />
                </motion.button>
              </div>

              <div className="relative">
                <div className="w-full h-64 bg-smoke-200 rounded-lg border border-smoke-300 flex items-center justify-center">
                  <Database className="w-24 h-24 text-neon-blue/50" />
                </div>
                
                {/* Interactive diagram preview */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4 text-neon-blue text-xs font-mono">
                    CDC Flow Diagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === 'All' 
                  ? 'bg-neon-blue text-white' 
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="card group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-1 bg-${post.color}/20 text-${post.color} text-xs rounded-full border border-${post.color}/30`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neon-blue hover:text-neon-green transition-colors duration-300"
                  >
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-neon-purple" />
            <h3 className="text-2xl font-bold mb-4 text-white">
              Want to Learn More?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I regularly share technical insights, tutorials, and lessons learned from building production systems. 
              Subscribe to stay updated with the latest in DevOps and data engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Subscribe to Newsletter
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Articles
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection 