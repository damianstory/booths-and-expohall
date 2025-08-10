'use client'

import React from 'react'
import { DeluxeBoothProps } from '@/types/booth'
import SmartContextHeader from './sections/SmartContextHeader'
import BoothHeader from './sections/BoothHeader'
import CompanyStory from './sections/CompanyStory'
import VideoSection from './sections/VideoSection'
import EngagementActivity from './sections/EngagementActivity'
import SessionSlides from './sections/SessionSlides'
import ResourceCards from './sections/ResourceCards'
import ContactInfo from './sections/ContactInfo'
import FooterCTA from './sections/FooterCTA'

const DeluxeBooth: React.FC<DeluxeBoothProps> = ({ sponsor }) => {
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

        <div className="expo-bento-grid">
          <div className={`${bentoCardClass} p-0 col-span-12 sm:col-span-6 lg:col-span-4 hover:scale-[1.02] h-[450px] lg:h-[500px]`}>
            <VideoSection video={sponsor.video} />
          </div>

          {sponsor.engagementActivity && (
            <div className={`col-span-12 sm:col-span-6 lg:col-span-8 rounded-xl overflow-hidden hover:scale-[1.02] hover:-rotate-1 transition-all duration-300 h-[450px] lg:h-[500px]`}>
              <EngagementActivity 
                activity={sponsor.engagementActivity}
                brandColors={sponsor.brandColors}
              />
            </div>
          )}


          <div className={`${bentoCardClass} p-6 col-span-12 sm:col-span-6 lg:col-span-6 hover:scale-[1.02] hover:rotate-1 h-[450px]`}>
            <ResourceCards resources={sponsor.resources} maxDisplay={5} variant="mosaic" />
          </div>

          {sponsor.sessionSlides && (
            <div className={`${bentoCardClass} p-6 col-span-12 sm:col-span-6 lg:col-span-6 hover:scale-[1.02] h-[450px]`}>
              <SessionSlides slides={sponsor.sessionSlides} />
            </div>
          )}


          {/* Bottom band now hosts Contact (33%) + Our Story (66%); responsive */}
          <div className="col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[220px]">
            <div className={`${bentoCardClass} p-6 col-span-12 lg:col-span-8 h-full`}>
              <CompanyStory description={sponsor.description} maxLength={420} />
            </div>
            <div className={`${bentoCardClass} p-6 col-span-12 lg:col-span-4 h-full`}>
              <ContactInfo contact={sponsor.contact} website={sponsor.website} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .lg\\:col-span-3 {
            grid-column: span 3 / span 3;
          }
          .lg\\:col-span-4 {
            grid-column: span 4 / span 4;
          }
          .lg\\:col-span-5 {
            grid-column: span 5 / span 5;
          }
          .lg\\:col-span-6 {
            grid-column: span 6 / span 6;
          }
          .lg\\:col-span-12 {
            grid-column: span 12 / span 12;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .expo-bento-grid > * {
            grid-column: span 6 / span 6;
          }
        }
      `}</style>
      
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

export default DeluxeBooth