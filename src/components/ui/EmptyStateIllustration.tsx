'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Sparkles } from 'lucide-react'

interface EmptyStateIllustrationProps {
  type?: 'no-results' | 'no-booths' | 'error'
  className?: string
}

export default function EmptyStateIllustration({ 
  type = 'no-results',
  className = '' 
}: EmptyStateIllustrationProps) {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
        staggerChildren: 0.1
      }
    }
  }

  const iconVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const floatVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  if (type === 'no-results') {
    return (
      <motion.div 
        className={`flex flex-col items-center justify-center ${className}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="relative mb-6"
          variants={floatVariants}
          animate="animate"
        >
          {/* Main search icon background */}
          <motion.div 
            className="w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-500/10 rounded-full flex items-center justify-center relative"
            variants={iconVariants}
          >
            <Search className="w-12 h-12 text-primary-blue/60" />
            
            {/* Floating filter icon */}
            <motion.div 
              className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Filter className="w-4 h-4 text-primary-blue" />
            </motion.div>

            {/* Sparkle decorations */}
            <motion.div 
              className="absolute -top-3 -left-3"
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              <Sparkles className="w-4 h-4 text-primary-blue/40" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-3 -right-1"
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 1.5
              }}
            >
              <Sparkles className="w-3 h-3 text-indigo-400/40" />
            </motion.div>
          </motion.div>

          {/* Animated search rings */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-primary-blue/20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-indigo-400/20"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0, 0.2]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeOut"
            }}
          />
        </motion.div>
      </motion.div>
    )
  }

  if (type === 'error') {
    return (
      <motion.div 
        className={`flex flex-col items-center justify-center ${className}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="w-24 h-24 bg-gradient-to-br from-red-50 to-orange-50 rounded-full flex items-center justify-center mb-6"
          variants={iconVariants}
          animate={{ 
            rotate: [0, -5, 5, 0],
            transition: { 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="text-4xl">⚡</div>
        </motion.div>
      </motion.div>
    )
  }

  // Default no-booths illustration
  return (
    <motion.div 
      className={`flex flex-col items-center justify-center ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center mb-6"
        variants={iconVariants}
        animate={{ 
          y: [-5, 5, -5],
          transition: { 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Sparkles className="w-12 h-12 text-neutral-3" />
      </motion.div>
    </motion.div>
  )
}