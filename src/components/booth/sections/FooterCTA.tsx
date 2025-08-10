import React from 'react'
import { CTAButton } from '@/types/booth'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface FooterCTAProps {
  primaryCTA?: CTAButton
  secondaryCTA?: CTAButton
  companyName: string
}

const FooterCTA: React.FC<FooterCTAProps> = ({ 
  primaryCTA, 
  secondaryCTA, 
  companyName 
}) => {
  const handleCTAClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-3">
        Ready to Start Your Journey with {companyName}?
      </h2>
      
      <p className="text-neutral-5 mb-8 max-w-2xl mx-auto">
        Take the next step in your career exploration. Connect with our team, explore opportunities, 
        and discover how you can be part of our story.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {primaryCTA && (
          <button
            onClick={() => handleCTAClick(primaryCTA.url)}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white font-semibold text-lg rounded-lg hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {primaryCTA.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
        
        {secondaryCTA && (
          <button
            onClick={() => handleCTAClick(secondaryCTA.url)}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-blue font-semibold text-lg rounded-lg border-2 border-primary-blue hover:bg-primary-blue hover:text-white transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {secondaryCTA.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-5 hover:text-primary-blue transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Virtual Expo Directory
        </Link>
      </div>
    </div>
  )
}

export default FooterCTA