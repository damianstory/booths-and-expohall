'use client'

import React, { useState, useEffect, useRef } from 'react'
import { VideoContent } from '@/types/booth'
import { Play, Loader2 } from 'lucide-react'

interface VideoSectionProps {
  video: VideoContent
  autoplay?: boolean
  controls?: boolean
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  video, 
  autoplay = false, 
  controls = true 
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !showVideo) {
          setShowVideo(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [showVideo])

  const getEmbedUrl = () => {
    switch (video.type) {
      case 'youtube':
        const youtubeId = video.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1]
        return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}`
      
      case 'vimeo':
        const vimeoId = video.url.match(/vimeo\.com\/(\d+)/)?.[1]
        return `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0${autoplay ? '&autoplay=1' : ''}`
      
      case 'google-drive':
        const driveId = video.url.match(/[-\w]{25,}/)?.[0]
        return `https://drive.google.com/file/d/${driveId}/preview`
      
      default:
        return video.url
    }
  }

  const handlePlayClick = () => {
    setShowVideo(true)
  }

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-brand-navy/5 rounded-xl" />
      
      {!showVideo && video.thumbnail ? (
        <div 
          className="relative w-full h-full cursor-pointer group rounded-xl overflow-hidden"
          onClick={handlePlayClick}
        >
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <button className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
              <Play className="w-6 h-6 lg:w-8 lg:h-8 text-primary-blue ml-1" fill="currentColor" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg drop-shadow-lg">
              {video.title}
            </h3>
            {video.description && (
              <p className="text-white/80 text-sm mt-1 drop-shadow-md">
                {video.description}
              </p>
            )}
          </div>
        </div>
      ) : showVideo ? (
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
          <iframe
            src={getEmbedUrl()}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            title={video.title}
          />
        </div>
      ) : (
        <div 
          className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-blue to-indigo-600 rounded-xl cursor-pointer group"
          onClick={handlePlayClick}
        >
          <div className="text-center">
            <button className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl mx-auto mb-4">
              <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" />
            </button>
            <h3 className="text-white font-semibold text-lg">
              {video.title}
            </h3>
            {video.description && (
              <p className="text-white/80 text-sm mt-1">
                {video.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoSection