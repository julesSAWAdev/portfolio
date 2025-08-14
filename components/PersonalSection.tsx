'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  MapPin, 
  Activity, 
  Users, 
  Award,
  Star
} from 'lucide-react'

const PersonalSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const personalInterests = [
    {
      title: 'Swimming & Walking',
      description: 'Competitive swimmer and fitness enthusiast who also enjoys long walks for mental clarity and physical wellness. I find both activities to be the perfect balance of physical challenge and mental clarity.',
      icon: Activity,
      color: 'neon-blue',
      achievements: ['Regional swimming champion 2019', 'Swim 5km weekly', 'Walk 10km daily', 'Mentor young swimmers']
    },
    {
      title: 'Community Service',
      description: 'Passionate about giving back to the community through tech education and mentorship programs.',
      icon: Users,
      color: 'neon-green',
      achievements: ['Lead coding bootcamp', 'Mentor 15+ junior developers', 'Open source contributor']
    },
    {
      title: 'Open Source',
      description: 'Active contributor to various open source projects, particularly in the DevOps and data engineering space.',
      icon: Heart,
      color: 'neon-purple',
      achievements: ['50+ contributions', 'Maintainer of 3 projects', 'Regular conference speaker']
    }
  ]

  return (
    <section id="personal" className="py-20 bg-gradient-to-br from-smoke-100 via-smoke-200 to-smoke-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Life Outside Work</span>
          </h2>
          <p className="text-xl text-smoke-600 max-w-3xl mx-auto">
            Beyond building systems, I'm passionate about swimming, community service, and connecting with tech communities around the world.
          </p>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {personalInterests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${interest.color} bg-opacity-20 border-2 border-${interest.color} flex items-center justify-center group-hover:animate-glow`}>
                  <interest.icon className={`w-10 h-10 text-${interest.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-smoke-800 group-hover:text-neon-blue transition-colors duration-300">
                  {interest.title}
                </h3>
                
                <p className="text-smoke-600 mb-6 leading-relaxed">
                  {interest.description}
                </p>
                
                <div className="space-y-2">
                  {interest.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2 text-sm text-smoke-600">
                      <Star className="w-4 h-4 text-neon-green" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PersonalSection 