'use client'

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import BlogSection from '@/components/BlogSection'
import ExperienceSection from '@/components/ExperienceSection'
import PersonalSection from '@/components/PersonalSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-smoke-50 via-smoke-100 to-smoke-200">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <BlogSection />
      <ExperienceSection />
      <PersonalSection />
      <ContactSection />
    </main>
  )
} 