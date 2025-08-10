'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { DeluxeBoothData, StandardBoothData } from '@/types/booth'

interface SmartContextHeaderProps {
  sponsor: DeluxeBoothData | StandardBoothData
}

const SmartContextHeader: React.FC<SmartContextHeaderProps> = ({ sponsor }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 100
      setIsScrolled(scrollPosition > threshold)

      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const progress = (scrollPosition / documentHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const organizationType = sponsor.isPostSecondary ? 'Post-Secondary' : 'Employer'

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-white border-b border-gray-200'
      }`}
      layout
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-2 sm:gap-4"
            layout
          >
            {/* Back Button */}
            <motion.a 
              href="/"
              className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl hover:bg-primary-blue/5 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <ArrowLeft className="w-4 h-4 text-primary-blue" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary-blue/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <span className="hidden sm:inline text-sm font-medium text-neutral-5 group-hover:text-primary-blue">
                Back to All Booths
              </span>
              <span className="sm:hidden text-sm font-medium text-neutral-5 group-hover:text-primary-blue">
                Back
              </span>
            </motion.a>
            
            {/* Breadcrumb when not scrolled */}
            <AnimatePresence mode="wait">
              {!isScrolled && (
                <motion.div
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-4 h-4 text-neutral-5" />
                  <span className="text-neutral-5 hidden sm:inline">{organizationType}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-5 hidden sm:inline" />
                  <span className="text-brand-navy font-semibold">{sponsor.name}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logo and name when scrolled */}
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-px h-6 bg-neutral-2"></div>
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="w-8 h-8 rounded object-contain" 
                  />
                  <span className="text-base font-bold text-brand-navy hidden sm:inline">
                    {sponsor.name}
                  </span>
                  <span className="text-sm font-bold text-brand-navy sm:hidden">
                    {sponsor.name.split(' ')[0]}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Scroll Progress Bar */}
          <motion.div 
            className="h-1 bg-primary-blue/20 rounded-full overflow-hidden"
            style={{ width: isScrolled ? '60px' : '0px' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-primary-blue rounded-full"
              style={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default SmartContextHeader