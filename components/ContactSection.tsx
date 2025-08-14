'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  Mail, 
  Linkedin, 
  Github, 
  Calendar,
  Send,
  MessageSquare,
  Phone,
  MapPin
} from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Show success message (in a real app, you'd handle the actual submission)
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mugishajules75@gmail.com',
      action: 'mailto:mugishajules75@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/julesmugisha',
      action: 'https://www.linkedin.com/in/mugisha-jules-maurice',
      color: 'neon-green'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/julesmugisha',
      action: 'https://github.com/julesSAWAdev',
      color: 'neon-purple'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      value: 'Book 15-min slot',
      action: 'https://calendly.com/mugishajules75',
      color: 'neon-pink'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-smoke-200 via-smoke-300 to-smoke-400 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-smoke-200 via-smoke-300 to-smoke-400"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 border border-neon-blue/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 border border-neon-green/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something</span>
            <br />
            <span className="text-smoke-800">Scalable Together</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-smoke-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your data infrastructure or scale your DevOps practices? 
            Let's discuss how we can build resilient, high-performance systems that grow with your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-smoke-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-smoke-100 border border-smoke-300 rounded-lg text-smoke-800 placeholder-smoke-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-smoke-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-smoke-100 border border-smoke-300 rounded-lg text-smoke-800 placeholder-smoke-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-smoke-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-smoke-100 border border-smoke-300 rounded-lg text-smoke-800 placeholder-smoke-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-smoke-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-smoke-100 border border-smoke-300 rounded-lg text-smoke-800 placeholder-smoke-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-neon-green">
                  Let's Connect
                </h3>
                <p className="text-smoke-600 leading-relaxed mb-8">
                  Whether you want to discuss a project, ask about my experience, or just say hello, 
                  I'm always open to new opportunities and interesting conversations.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`block p-4 rounded-lg border border-smoke-300 hover:border-${contact.color} transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-${contact.color} bg-opacity-20 border-2 border-${contact.color} flex items-center justify-center group-hover:animate-glow`}>
                        <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold text-smoke-800 group-hover:text-neon-blue transition-colors duration-300">
                          {contact.title}
                        </div>
                        <div className="text-smoke-600 text-sm">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                <div className="text-center p-4 bg-smoke-200 rounded-lg border border-smoke-300">
                  <div className="text-2xl font-bold text-neon-green">50+</div>
                  <div className="text-sm text-smoke-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-smoke-200 rounded-lg border border-smoke-300">
                  <div className="text-2xl font-bold text-neon-blue">5+</div>
                  <div className="text-sm text-smoke-600">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-smoke-800">
              Ready to Scale Your Infrastructure?
            </h3>
            <p className="text-smoke-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can build resilient, high-performance systems that handle your growth challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() => window.open('https://calendly.com/mugishajules75', '_blank')}
              >
                Book a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection 