'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-smoke-50 via-smoke-100 to-smoke-200"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border border-neon-blue/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 border border-neon-green/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">I build resilient systems</span>
            <br />
            <span className="text-smoke-800">& transform data into insights.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-smoke-600 mb-8 max-w-3xl mx-auto">
            <span className="text-neon-green">5+ years</span> of experience building scalable infrastructure across{' '}
            <span className="text-neon-blue">fintech</span>,{' '}
            <span className="text-neon-purple">Insurance, Re-insurance</span>, and{' '}
            <span className="text-neon-pink">Tech </span> Companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-primary flex items-center gap-2"
            >
              Explore My Journey
              <ArrowRight size={20} />
            </motion.button>
            
             
          </div>
        </motion.div>

        {/* Animated DevOps Pipeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 mb-12"
        >
          <DevOpsPipeline />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown size={24} className="text-neon-blue" />
        </motion.div>
      </div>
    </section>
  )
}

const DevOpsPipeline = () => {
  const pipelineSteps = [
    { 
      name: 'PostgreSQL', 
      icon: '🐘', // You can replace this with an actual image path
      type: 'image', // 'image' or 'text'
      color: 'neon-blue' 
    },
    { 
      name: 'Altinity-Sink', 
      icon: '🔄', 
      type: 'image',
      color: 'neon-green' 
    },
    { 
      name: 'ClickHouse', 
      icon: '🏠', 
      type: 'image',
      color: 'neon-purple' 
    },
    { 
      name: 'dbt', 
      icon: '🛠️', 
      type: 'image',
      color: 'neon-pink' 
    },
    { 
      name: 'BI', 
      icon: '📊', 
      type: 'image',
      color: 'neon-blue' 
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Pipeline nodes */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          {pipelineSteps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`w-24 h-24 bg-white/80 backdrop-blur-sm border-2 border-${step.color} rounded-full flex items-center justify-center text-center text-base font-medium text-${step.color} shadow-lg overflow-hidden`}>
                {step.type === 'image' ? (
                  <div className="w-16 h-16 flex items-center justify-center text-4xl">
                    {step.icon}
                  </div>
                ) : (
                  <span className="text-sm">{step.name}</span>
                )}
              </div>
              
              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className={`absolute inset-0 w-24 h-24 bg-${step.color}/20 rounded-full blur-xl`}
              />
              
              {/* Tool name below */}
              <div className="text-center mt-2">
                <div className="text-xs font-medium text-smoke-700">{step.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data flow animation */}
        <div className="relative h-2 bg-gradient-to-r from-neon-blue via-neon-green to-neon-purple rounded-full overflow-hidden mt-8">
        </div>
      </div>
    </div>
  )
}

export default HeroSection 