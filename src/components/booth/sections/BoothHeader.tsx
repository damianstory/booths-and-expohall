import React from 'react'
import { DeluxeBoothData, StandardBoothData } from '@/types/booth'
import { ExternalLink } from 'lucide-react'

interface BoothHeaderProps {
  sponsor: DeluxeBoothData | StandardBoothData
}

const BoothHeader: React.FC<BoothHeaderProps> = ({ sponsor }) => {
  const handleCTAClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="relative p-8 lg:p-12 bg-white border border-[#0092ff] rounded-xl"
    >
      {/* Removed "Deluxe Booth" pill */}

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="flex-shrink-0">
          <img 
            src={sponsor.logo} 
            alt={`${sponsor.name} logo`}
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-lg bg-white p-2 shadow-sm"
          />
        </div>

        <div className="flex-grow">
          <h1 className="text-header-2 text-brand-navy mb-2">
            {sponsor.name}
          </h1>
          <p className="text-body-1 font-light text-neutral-5">
            {sponsor.tagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button
            onClick={() => handleCTAClick(sponsor.primaryCTA.url)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-brand-navy transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {sponsor.primaryCTA.text}
            <ExternalLink className="w-4 h-4" />
          </button>
          
          {sponsor.secondaryCTA && (
            <button
              onClick={() => handleCTAClick(sponsor.website || sponsor.secondaryCTA!.url)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-blue font-semibold rounded-lg border-2 border-primary-blue hover:bg-primary-blue hover:text-white transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Submit a Question
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BoothHeader