'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface StatisticProps {
  value: number | string
  suffix?: string
  label: string
  format?: 'number' | 'k'
}

const AnimatedStatistic: React.FC<StatisticProps> = ({ value, suffix = '', label, format = 'number' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    // If value is a string, don't animate
    if (typeof value === 'string') {
      setCount(value as any)
      return
    }
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isVisible, value])
  
  const formatValue = (val: number | string) => {
    if (typeof val === 'string') return val
    if (format === 'k') {
      return val >= 1000 ? `${Math.floor(val / 1000)}k` : val.toString()
    }
    return val.toLocaleString()
  }
  
  return (
    <div ref={ref} className="text-center tablet:text-left">
      <div className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold text-white">
        {formatValue(count)}{suffix}
      </div>
      <div className="text-base tablet:text-lg font-normal text-white/70 mt-2">
        {label}
      </div>
    </div>
  )
}

const heroContent = {
  headline: {
    line1: "Career Launch",
    line2: "Expo Hall"
  },
  subtext: {
    line1: "Meet the companies investing in",
    line2: "Canada's future workforce.",
  }
}


export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative h-[625px] tablet:h-[704px] desktop:h-[781px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pexels-scottwebb-430207.jpg"
          alt="Career expo background"
          fill
          className="object-cover object-[center_60%] tablet:object-[60%_center] desktop:object-[70%_center]"
          priority
        />
        
        {/* Gradient Overlay - stronger on mobile for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/40 tablet:from-black/60 tablet:via-black/40 tablet:to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        {/* Full-screen backdrop for mobile readability */}
        <div className="w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-4xl text-center tablet:text-left">
              {/* Main Headline - Bigger and Bolder */}
              <motion.h1 
                className="text-5xl tablet:text-6xl desktop:text-7xl font-black text-white mb-6 tablet:mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="block">{heroContent.headline.line1}</span>
                <span className="block">{heroContent.headline.line2}</span>
              </motion.h1>

              {/* Subtext - Larger and clearer */}
              <motion.p 
                className="text-lg tablet:text-xl desktop:text-2xl text-white/95 font-normal mb-8 tablet:mb-12 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="block">{heroContent.subtext.line1}</span>
                <span className="block">{heroContent.subtext.line2}</span>
              </motion.p>

              {/* Statistics */}
              <motion.div 
                className="flex justify-center tablet:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="mr-8 tablet:mr-12 desktop:mr-16">
                  <AnimatedStatistic value={25} label="Companies" />
                </div>
                <div className="mr-8 tablet:mr-12 desktop:mr-16">
                  <AnimatedStatistic value={15} label="Post-Secondaries" />
                </div>
                <div>
                  <AnimatedStatistic value={5} label="Pathways" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}