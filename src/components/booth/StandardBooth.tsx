'use client'

import React from 'react'
import { StandardBoothProps } from '@/types/booth'
import BoothHeader from './sections/BoothHeader'
import CompanyStory from './sections/CompanyStory'
import VideoSection from './sections/VideoSection'
import ResourceCards from './sections/ResourceCards'
import ContactInfo from './sections/ContactInfo'
import GoogleFormEmbed from './sections/GoogleFormEmbed'

const StandardBooth: React.FC<StandardBoothProps> = ({ sponsor }) => {
  const bentoCardClass = "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
  
  return (
    <div className="min-h-screen bg-background-light">
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center text-sm">
          <a href="/expo" className="text-neutral-5 hover:text-primary-blue transition-colors">
            Career Launch Expo
          </a>
          <span className="mx-2 text-neutral-5">/</span>
          <span className="text-brand-navy font-medium">{sponsor.name}</span>
          <span className="ml-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-semibold rounded-full">
            {sponsor.tier === 'gold' ? 'Gold Booth' : 'Silver Booth'}
          </span>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className={`${bentoCardClass} p-0`}>
            <BoothHeader sponsor={sponsor} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Top row: Video (8 cols) + Google Form (4 cols) */}
          <div className={`${bentoCardClass} p-0 col-span-12 lg:col-span-8 h-[450px]`}>
            <VideoSection video={sponsor.video} />
          </div>

          <div className={`${bentoCardClass} p-0 col-span-12 lg:col-span-4 h-[450px]`}>
            <GoogleFormEmbed formUrl={sponsor.googleFormUrl} />
          </div>

          {/* Bottom section: Resources (4 cols) + Story & Contact stacked (8 cols) */}
          <div className={`${bentoCardClass} p-6 col-span-12 md:col-span-6 lg:col-span-4 h-[320px]`}>
            <ResourceCards resources={sponsor.resources} maxDisplay={3} variant="list" />
          </div>

          <div className={`${bentoCardClass} col-span-12 md:col-span-12 lg:col-span-8 h-[320px] flex flex-col`}>
            <div className="p-6 flex-1">
              <CompanyStory description={sponsor.description} maxLength={400} />
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="p-6 flex-1">
              <ContactInfo contact={sponsor.contact} website={sponsor.website} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardBooth