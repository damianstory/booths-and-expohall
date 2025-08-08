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
          wrapper: 'col-span-2 md:col-span-2 lg:col-span-2',
          card: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-transparent hover:border-primary-blue',
          badge: 'bg-gradient-to-r from-primary-blue to-indigo-600 text-white',
          glow: 'hover:shadow-2xl hover:shadow-primary-blue/20',
        }
      case 'gold':
        return {
          wrapper: 'col-span-2 md:col-span-2 lg:col-span-1',
          card: 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-transparent hover:border-amber-500',
          badge: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white',
          glow: 'hover:shadow-xl hover:shadow-amber-500/20',
        }
      case 'silver':
        return {
          wrapper: 'col-span-2 md:col-span-1 lg:col-span-1',
          card: 'bg-white border-2 border-gray-200 hover:border-gray-400',
          badge: 'bg-gradient-to-r from-gray-400 to-gray-600 text-white',
          glow: 'hover:shadow-lg',
        }
      default:
        return {
          wrapper: 'col-span-1',
          card: 'bg-white border-2 border-gray-200',
          badge: 'bg-gray-500 text-white',
          glow: '',
        }
    }
  }

  const styles = getTierStyles()

  return (
    <div className={`${styles.wrapper} booth-card-wrapper`}>
      <Link href={`/${sponsor.slug}`}>
        <motion.div
          ref={cardRef}
          className={`
            booth-card relative rounded-xl p-6 cursor-pointer flex flex-col
            ${styles.card} ${styles.glow}
            ${sponsor.tier === 'diamond' ? 'h-[320px]' : sponsor.tier === 'gold' ? 'h-[280px]' : 'h-[280px]'}
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
          onHoverEnd={() => setIsHovered(false)}
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
              bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative
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
                  className="text-2xl font-bold text-gray-400"
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
            <h3 className="text-xl font-black text-brand-navy line-clamp-2">
              {sponsor.name}
            </h3>
            <p className={`
              text-base font-light text-neutral-5 flex-grow
              ${sponsor.tier === 'diamond' ? 'line-clamp-3' : 'line-clamp-2'}
            `}>
              {sponsor.tagline}
            </p>

            {/* Industry Tag */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              <motion.span 
                className="inline-block px-2 py-1 bg-primary-blue/10 text-primary-blue text-xs font-medium rounded-full"
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

          {/* Hover CTA */}
          <motion.div 
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 10 
            }}
            transition={{ 
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <div className="bg-primary-blue text-white text-center py-2 px-4 rounded-lg font-medium text-sm shadow-lg">
              Visit Booth →
            </div>
          </motion.div>

          {/* Decorative Elements for Diamond Tier */}
          {sponsor.tier === 'diamond' && (
            <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none overflow-hidden">
              <motion.div 
                className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-blue/10 to-purple-500/10 rounded-full blur-3xl"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  opacity: isHovered ? 0.8 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.7 : 0.5,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
          )}
        </motion.div>
      </Link>
    </div>
  )
}