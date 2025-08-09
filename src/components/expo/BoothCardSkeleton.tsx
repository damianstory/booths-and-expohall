'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface BoothCardSkeletonProps {
  tier?: 'platinum' | 'gold' | 'silver'
  index?: number
}

export default function BoothCardSkeleton({ tier = 'silver', index = 0 }: BoothCardSkeletonProps) {
  // Tier-specific styles to match real cards
  const getTierStyles = () => {
    switch (tier) {
      case 'platinum':
        return {
          wrapper: 'col-span-2 md:col-span-2 lg:col-span-2',
          height: 'h-[320px]',
          logoSize: 'w-24 h-24'
        }
      case 'gold':
        return {
          wrapper: 'col-span-2 md:col-span-2 lg:col-span-1',
          height: 'h-[320px]',
          logoSize: 'w-20 h-20'
        }
      case 'silver':
        return {
          wrapper: 'col-span-2 md:col-span-1 lg:col-span-1',
          height: 'h-[320px]',
          logoSize: 'w-20 h-20'
        }
    }
  }

  const styles = getTierStyles()
  const animationDelay = index * 0.05

  return (
    <motion.div 
      className={`${styles.wrapper} booth-card-skeleton-wrapper`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <div className={`
        relative rounded-xl p-6 flex flex-col bg-off-white border-2 border-neutral-2
        ${styles.height}
      `}>
        {/* Tier Badge Skeleton */}
        <div className="absolute top-4 right-4 z-10">
          <div className="skeleton w-16 h-6 rounded-full"></div>
        </div>

        {/* Logo Skeleton */}
        <div className="mb-4 flex-shrink-0">
          <div className={`
            skeleton rounded-lg
            ${styles.logoSize}
          `}></div>
        </div>

        {/* Company Info Skeleton */}
        <div className="flex-grow flex flex-col space-y-2">
          {/* Company Name */}
          <div className="skeleton h-6 w-3/4 rounded mb-2"></div>
          
          {/* Tagline Lines */}
          <div className="skeleton h-4 w-full rounded mb-1"></div>
          <div className="skeleton h-4 w-2/3 rounded mb-1"></div>
          {tier === 'platinum' && (
            <div className="skeleton h-4 w-1/2 rounded mb-1"></div>
          )}

          {/* Industry Tag */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            <div className="skeleton w-20 h-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}