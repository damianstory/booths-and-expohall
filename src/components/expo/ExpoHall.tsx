'use client'

import React, { useState, useMemo } from 'react'
import { sponsors } from '@/data/sample-sponsors'
import { Industry, Pathway } from '@/types/booth'
import BoothCard from './BoothCard'
import FilterBar from './FilterBar'
import { Sparkles } from 'lucide-react'

export default function ExpoHall() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | 'all'>('all')
  const [selectedPathway, setSelectedPathway] = useState<Pathway | 'all'>('all')
  const [showPostSecondary, setShowPostSecondary] = useState<boolean | 'all'>('all')

  // Filter sponsors based on selected criteria
  const filteredSponsors = useMemo(() => {
    let filtered = [...sponsors]

    // Filter by post-secondary status
    if (showPostSecondary !== 'all') {
      filtered = filtered.filter(sponsor => sponsor.isPostSecondary === showPostSecondary)
    }

    // Filter by pathway
    if (selectedPathway !== 'all') {
      filtered = filtered.filter(sponsor => sponsor.pathway === selectedPathway)
    }

    // Filter by industry
    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(sponsor => sponsor.industry === selectedIndustry)
    }

    // Sort by tier priority: diamond > gold > silver
    filtered.sort((a, b) => {
      const tierOrder = { diamond: 0, gold: 1, silver: 2 }
      return tierOrder[a.tier] - tierOrder[b.tier]
    })

    return filtered
  }, [selectedIndustry, selectedPathway, showPostSecondary])

  // Count statistics
  const stats = useMemo(() => {
    return {
      postSecondary: sponsors.filter(s => s.isPostSecondary).length,
      employers: sponsors.filter(s => !s.isPostSecondary).length,
      diamond: sponsors.filter(s => s.tier === 'diamond').length,
      gold: sponsors.filter(s => s.tier === 'gold').length,
      silver: sponsors.filter(s => s.tier === 'silver').length
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-blue to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-5xl font-bold">Virtual Career Expo</h1>
              <Sparkles className="w-8 h-8" />
            </div>
            <p className="text-xl opacity-90 mb-8">
              Explore interactive booths from leading companies and institutions across Canada
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-bold">{stats.postSecondary}</span> Post-Secondary
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-bold">{stats.employers}</span> Employers
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-bold">{sponsors.length}</span> Total Booths
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-240 16-480 24-720 24S240 16 0 0v48z" fill="currentColor" className="text-background-light" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Bar */}
        <FilterBar
          selectedIndustry={selectedIndustry}
          selectedPathway={selectedPathway}
          showPostSecondary={showPostSecondary}
          onIndustryChange={setSelectedIndustry}
          onPathwayChange={setSelectedPathway}
          onPostSecondaryChange={setShowPostSecondary}
        />

        {/* Results Summary */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-brand-navy">{filteredSponsors.length}</span> 
            {' '}of {sponsors.length} booths
          </p>
        </div>

        {/* Booth Grid */}
        {filteredSponsors.length > 0 ? (
          <div className="expo-booth-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSponsors.map((sponsor, index) => (
              <BoothCard 
                key={sponsor.id} 
                sponsor={sponsor} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No booths found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters to find more organizations.
              </p>
              <button
                onClick={() => {
                  setSelectedIndustry('all')
                  setSelectedPathway('all')
                  setShowPostSecondary('all')
                }}
                className="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-20 bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Visit individual booths to learn more about each organization, watch videos, 
            download resources, and connect with recruiters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold">{sponsors.length}+</span>
              <p className="text-sm">Organizations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold">1000s</span>
              <p className="text-sm">of Opportunities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold">5</span>
              <p className="text-sm">Pathways</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold">10+</span>
              <p className="text-sm">Industries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}