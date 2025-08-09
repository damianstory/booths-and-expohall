'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { DeluxeBoothData, StandardBoothData } from '@/types/booth'

interface BoothCardProps {
  sponsor: DeluxeBoothData | StandardBoothData
  index?: number
}

export default function BoothCard({ sponsor, index = 0 }: BoothCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isImageError, setIsImageError] = useState(false)

  const handleImageLoad = () => {
    setIsImageLoading(false)
    setIsImageError(false)
  }

  const handleImageError = () => {
    setIsImageLoading(false)
    setIsImageError(true)
  }

  // Tier-specific styles
  const getTierStyles = () => {
    switch (sponsor.tier) {
      case 'diamond':
        return {
          wrapper: 'col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3',
          card: `
            bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 
            border-2 border-transparent hover:border-blue-500
            relative overflow-hidden
            before:absolute before:inset-0 
            before:bg-gradient-to-r before:from-blue-600/20 before:via-cyan-600/20 before:to-blue-600/20
            before:opacity-0 hover:before:opacity-100 before:transition-opacity
          `,
          badge: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white animate-pulse',
          glow: 'hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02]',
          animation: 'animate-float',
          priority: 1
        }
      case 'gold':
        return {
          wrapper: 'col-span-2 md:col-span-2 lg:col-span-1',
          card: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-transparent hover:border-amber-400',
          badge: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white',
          glow: 'hover:shadow-xl hover:shadow-amber-400/20',
          priority: 2
        }
      case 'silver':
        return {
          wrapper: 'col-span-2 md:col-span-1 lg:col-span-1',
          card: 'bg-white border-2 border-gray-200 hover:border-gray-300',
          badge: 'bg-gradient-to-r from-gray-400 to-gray-500 text-white',
          glow: 'hover:shadow-lg',
          priority: 3
        }
      default:
        return {
          wrapper: 'col-span-1',
          card: 'bg-off-white border-2 border-neutral-2',
          badge: 'bg-neutral-5 text-white',
          glow: '',
        }
    }
  }

  const styles = getTierStyles()

  // Enhanced wrapper component for diamond cards only
  const DiamondCardEnhancements = ({ children, tier }: { children: React.ReactNode, tier: string }) => {
    if (tier === 'diamond') {
      return (
        <div className="relative group">
          {/* Animated background particles for diamond - only CSS hover, no JS state */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-particle-float-1"></div>
            <div className="absolute top-8 right-6 w-1 h-1 bg-cyan-400 rounded-full animate-particle-float-2"></div>
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-500 rounded-full animate-particle-float-3"></div>
          </div>
          
          {/* Shimmer effect on hover - only CSS hover, no JS state */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-effect group-hover:animate-shimmer"></div>
          
          {children}
        </div>
      )
    }
    return <>{children}</>
  }

  return (
    <DiamondCardEnhancements tier={sponsor.tier}>
      <div className={`${styles.wrapper} booth-card-wrapper`}>
        <Link href={`/${sponsor.slug}`}>
          <motion.div
            ref={cardRef}
            className={`
              booth-card group relative rounded-xl p-6 cursor-pointer flex flex-col
              ${styles.card} ${styles.glow}
              ${sponsor.tier === 'diamond' ? 'animate-float' : ''}
              h-[320px]
            `}
          whileHover={{ 
            scale: 1.02,
            rotateY: sponsor.tier === 'diamond' ? 2 : 1,
            rotateX: sponsor.tier === 'diamond' ? -1 : -0.5,
            transition: { 
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          onHoverStart={() => setIsHovered(true)}
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
        >
          {/* Tier Badge */}
          <motion.div 
            className="absolute top-4 right-4 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: index * 0.05 + 0.2,
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <span className={`
              inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase
              ${styles.badge}
            `}>
              {sponsor.tier}
            </span>
          </motion.div>

          {/* Logo */}
          <motion.div 
            className="mb-4 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.05,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <div className={`
              bg-neutral-2 rounded-lg flex items-center justify-center overflow-hidden relative
              ${sponsor.tier === 'diamond' ? 'w-24 h-24' : 'w-20 h-20'}
            `}>
              {/* Loading skeleton for image */}
              {isImageLoading && sponsor.logo && (
                <div className="absolute inset-0 skeleton rounded-lg" />
              )}
              
              {sponsor.logo && !isImageError ? (
                <motion.img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isImageLoading ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.div 
                  className="text-2xl font-bold text-neutral-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {sponsor.name.substring(0, 2).toUpperCase()}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div 
            className="flex-grow flex flex-col space-y-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.05 + 0.1,
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <h3 className="text-body-1 font-black text-brand-navy line-clamp-2 whitespace-pre-line">
              {sponsor.name}
            </h3>
            <p className="text-body-2 font-light text-neutral-5 flex-grow line-clamp-2">
              {sponsor.tagline}
            </p>

            {/* Industry Tag */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              <motion.span 
                className="inline-block px-2 py-1 bg-primary-blue/10 text-primary-blue text-subtitle-1 font-medium rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.05 + 0.3,
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {sponsor.industry}
              </motion.span>
            </div>
          </motion.div>

          {/* Hover CTA - Pure CSS hover */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
            <div className="bg-primary-blue text-white text-center py-2 px-4 rounded-lg font-medium text-sm shadow-lg">
              Visit Booth →
            </div>
          </div>

          {/* Decorative Elements for Diamond Tier - Pure CSS hover */}
          {sponsor.tier === 'diamond' && (
            <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-blue/10 to-purple-500/10 rounded-full blur-3xl opacity-60 scale-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-50 scale-100 group-hover:opacity-70 group-hover:scale-120 transition-all duration-400"></div>
            </div>
          )}
        </motion.div>
      </Link>
    </div>
    </DiamondCardEnhancements>
  )
}