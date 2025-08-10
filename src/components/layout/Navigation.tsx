'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

// Navigation links removed - keeping only logo and CTA button

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Back to Sessions Button */}
            <div>
              <motion.a
                href="https://www.myblueprint.ca"
                target="_blank"
                rel="noopener noreferrer"
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
                <span className="text-sm font-medium text-neutral-5 group-hover:text-primary-blue">
                  Career Launch Sessions
                </span>
              </motion.a>
            </div>

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/myblueprint-logo.png"
                  alt="myBlueprint"
                  width={180}
                  height={36}
                  className="h-8 md:h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.nav>

    </>
  )
}