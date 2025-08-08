'use client'

import React, { useState } from 'react'
import { EngagementActivityData, BrandColors } from '@/types/booth'
import { Sparkles, Trophy, Clock, ArrowRight, Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'

const SkillsGapQuiz = dynamic(() => import('./SkillsGapQuiz'), { ssr: false })

interface EngagementActivityProps {
  activity: EngagementActivityData
  brandColors?: BrandColors
}

const EngagementActivity: React.FC<EngagementActivityProps> = ({ 
  activity, 
  brandColors 
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showEmbed, setShowEmbed] = useState(false)

  const gradientStyle = brandColors?.primary && brandColors?.secondary
    ? `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`
    : 'linear-gradient(135deg, #0092FF 0%, #667eea 100%)'

  const handleStartActivity = () => {
    setShowEmbed(true)
  }

  return (
    <div 
      className="relative h-full min-h-[350px] p-6 text-white overflow-hidden"
      style={{ background: gradientStyle }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl transform -translate-x-12 translate-y-12" />
      
      <div className="relative z-10 h-full flex flex-col">
        {!showEmbed ? (
          <>
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Interactive Activity</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">
                {activity.title}
              </h3>
              
              <p className="text-white/90 text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>

            {activity.prize && (
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Prize to Win!</h4>
                    <p className="text-xs text-white/80">{activity.prize.title}</p>
                    {activity.prize.description && (
                      <p className="text-xs text-white/70 mt-1">
                        {activity.prize.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activity.duration && (
              <div className="flex items-center gap-2 text-xs text-white/80 mb-4">
                <Clock className="w-3 h-3" />
                <span>Duration: {activity.duration}</span>
              </div>
            )}

            <button
              onClick={handleStartActivity}
              className="mt-auto w-full bg-white text-brand-navy font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group"
            >
              Start Activity
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </>
        ) : (
          <div className="h-full min-h-0 flex flex-col">
            <button
              onClick={() => setShowEmbed(false)}
              className="text-white/80 hover:text-white text-sm mb-3 transition-colors"
            >
              ← Back to description
            </button>

            {activity.embedType === 'skills-gap-quiz' ? (
              <div className="flex-1 min-h-0">
                <SkillsGapQuiz />
              </div>
            ) : (
              <div className="relative flex-1 min-h-0 bg-white rounded-lg overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Loader2 className="w-6 h-6 text-primary-blue animate-spin" />
                  </div>
                )}
                <iframe
                  src={activity.embedUrl}
                  className="w-full h-full"
                  onLoad={() => setIsLoading(false)}
                  title={activity.title}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default EngagementActivity