'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


const heroContent = {
  headline: {
    line1: "Career Launch",
    line2: "Expo Hall"
  },
  subtext: {
    line1: "Meet the companies investing in",
    line2: "Canada's future workforce.",
    line3: "You."
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
                <span className="block">{heroContent.subtext.line3}</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}