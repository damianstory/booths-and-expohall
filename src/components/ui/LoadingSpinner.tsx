'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'white' | 'gray'
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: LoadingSpinnerProps) {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4'
      case 'md':
        return 'w-6 h-6'
      case 'lg':
        return 'w-8 h-8'
    }
  }

  const getColorStyles = () => {
    switch (color) {
      case 'primary':
        return 'border-primary-blue border-t-transparent'
      case 'white':
        return 'border-white border-t-transparent'
      case 'gray':
        return 'border-gray-300 border-t-transparent'
    }
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <motion.div
        className={`
          border-2 rounded-full animate-spin
          ${getSizeStyles()} ${getColorStyles()}
        `}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}