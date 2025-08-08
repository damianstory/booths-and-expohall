'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { DeluxeBoothData, StandardBoothData } from '@/types/booth'

interface BoothCardProps {
  sponsor: DeluxeBoothData | StandardBoothData
  index?: number
}

export default function BoothCard({ sponsor, index = 0 }: BoothCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    // Enhanced tilt for diamond tier
    const tiltMultiplier = sponsor.tier === 'diamond' ? 1.5 : 1
    
    setTransform(`perspective(1000px) rotateX(${rotateX * tiltMultiplier}deg) rotateY(${rotateY * tiltMultiplier}deg) scale(${isHovered ? 1.05 : 1})`)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransform('')
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
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

  // Staggered animation delay based on index
  const animationDelay = index * 0.05

  return (
    <div 
      className={`${styles.wrapper} booth-card-wrapper`}
      style={{
        animationDelay: `${animationDelay}s`,
      }}
    >
      <Link href={`/${sponsor.slug}`}>
        <div
          ref={cardRef}
          className={`
            booth-card relative rounded-xl p-6 transition-all duration-300 cursor-pointer flex flex-col
            ${styles.card} ${styles.glow}
            ${sponsor.tier === 'diamond' ? 'h-[320px]' : sponsor.tier === 'gold' ? 'h-[280px]' : 'h-[280px]'}
          `}
          style={{
            transform: transform,
            transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Tier Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`
              inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase
              ${styles.badge}
            `}>
              {sponsor.tier}
            </span>
          </div>

          {/* Logo */}
          <div className="mb-4 flex-shrink-0">
            <div className={`
              bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden
              ${sponsor.tier === 'diamond' ? 'w-24 h-24' : 'w-20 h-20'}
            `}>
              {sponsor.logo ? (
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-2xl font-bold text-gray-400">
                  {sponsor.name.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-grow flex flex-col space-y-2">
            <h3 className={`
              font-bold text-brand-navy line-clamp-2
              ${sponsor.tier === 'diamond' ? 'text-xl' : 'text-lg'}
            `}>
              {sponsor.name}
            </h3>
            <p className={`
              text-sm text-neutral-5 line-clamp-2 flex-grow
              ${sponsor.tier === 'diamond' ? 'line-clamp-3' : 'line-clamp-2'}
            `}>
              {sponsor.tagline}
            </p>

            {/* Industry Tag */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              <span className="inline-block px-2 py-1 bg-primary-blue/10 text-primary-blue text-xs font-medium rounded-full">
                {sponsor.industry}
              </span>
            </div>
          </div>

          {/* Hover CTA */}
          <div className={`
            absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-2 transition-all duration-300
            ${isHovered ? 'opacity-100 translate-y-0' : ''}
          `}>
            <div className="bg-primary-blue text-white text-center py-2 px-4 rounded-lg font-medium text-sm">
              Visit Booth →
            </div>
          </div>

          {/* Decorative Elements for Diamond Tier */}
          {sponsor.tier === 'diamond' && (
            <>
              <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-blue/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl" />
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  )
}