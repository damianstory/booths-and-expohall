'use client'

import React, { useState } from 'react'
import { SessionSlidesData } from '@/types/booth'
import { Presentation, Calendar, Clock, Users, Maximize2, Loader2 } from 'lucide-react'

interface SessionSlidesProps {
  slides: SessionSlidesData
}

const SessionSlides: React.FC<SessionSlidesProps> = ({ slides }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const statusColors = {
    live: 'bg-red-50 text-red-600 border-red-200',
    recorded: 'bg-green-50 text-green-600 border-green-200',
    upcoming: 'bg-yellow-50 text-yellow-600 border-yellow-200'
  }

  const statusIcons = {
    live: '🔴',
    recorded: '📹',
    upcoming: '📅'
  }

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Presentation className="w-5 h-5 text-primary-blue" />
          <h3 className="text-xl font-bold text-brand-navy">
            {slides.title}
          </h3>
        </div>
        
        <button
          onClick={handleFullscreen}
          className="p-2 text-neutral-5 hover:text-primary-blue hover:bg-primary-blue/10 rounded-lg transition-colors"
          title="Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${isFullscreen ? 'fixed inset-4 z-50' : 'flex-grow min-h-[300px]'}`}>
        {isFullscreen && (
          <button
            onClick={handleFullscreen}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors"
          >
            <span className="text-sm font-medium text-brand-navy">Exit Fullscreen</span>
          </button>
        )}
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <Loader2 className="w-6 h-6 text-primary-blue animate-spin" />
          </div>
        )}
        
        <iframe
          src={slides.embedUrl}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          title={slides.title}
        />
      </div>
    </div>
  )
}

export default SessionSlides