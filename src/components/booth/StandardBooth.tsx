'use client'

import React from 'react'
import { StandardBoothProps } from '@/types/booth'
import SmartContextHeader from './sections/SmartContextHeader'
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
      <SmartContextHeader sponsor={sponsor} />

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

          <div className={`${bentoCardClass} p-0 col-span-12 lg:col-span-4 h-[450px] border border-[#0092ff]`}>
            <GoogleFormEmbed formUrl={sponsor.googleFormUrl} />
          </div>

          {/* Bottom section: Resources (4 cols) + Story & Contact stacked (8 cols) */}
          <div className={`${bentoCardClass} p-6 col-span-12 md:col-span-6 lg:col-span-4 h-auto overflow-visible`}>
            <ResourceCards resources={sponsor.resources} maxDisplay={3} variant="list" />
          </div>

          <div className={`${bentoCardClass} col-span-12 md:col-span-12 lg:col-span-8 h-auto flex flex-col`}>
            <div className="px-6 pt-6 pb-3 flex-grow">
              <CompanyStory description={sponsor.description} maxLength={300} />
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="px-6 pt-3 pb-6 flex-shrink-0">
              <ContactInfo contact={sponsor.contact} website={sponsor.website} />
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white py-8 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 myBlueprint Career Launch.{" "}
            <a 
              href="https://myblueprint.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-blue hover:underline"
            >
              myBlueprint
            </a>
            {" "}Special Projects.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default StandardBooth