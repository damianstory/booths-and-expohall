'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sponsors } from '@/data/sample-sponsors'
import { Industry, Pathway } from '@/types/booth'
import BoothCard from './BoothCard'
import FilterBar from './FilterBar'
import BoothCardSkeleton from './BoothCardSkeleton'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import NetworkError from '@/components/ui/NetworkError'
import EmptyStateIllustration from '@/components/ui/EmptyStateIllustration'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { Sparkles, TrendingUp, Users, Building, Gift } from 'lucide-react'

type LoadingState = 'initial' | 'loading' | 'success' | 'error'

export default function ExpoHall() {
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([])
  const [selectedPathways, setSelectedPathways] = useState<Pathway[]>([])
  const [showPostSecondary, setShowPostSecondary] = useState<boolean | 'all'>('all')
  const [showPrizesOnly, setShowPrizesOnly] = useState(false)
  const [loadingState, setLoadingState] = useState<LoadingState>('initial')
  const [isFilterChanging, setIsFilterChanging] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [previousFilters, setPreviousFilters] = useState({
    industries: [] as Industry[],
    pathways: [] as Pathway[],
    postSecondary: 'all' as boolean | 'all',
    prizesOnly: false
  })

  // Filter sponsors based on selected criteria
  const filteredSponsors = useMemo(() => {
    let filtered = [...sponsors]

    // Filter by post-secondary status
    if (showPostSecondary !== 'all') {
      filtered = filtered.filter(sponsor => sponsor.isPostSecondary === showPostSecondary)
    }

    // Filter by pathways
    if (selectedPathways.length > 0) {
      filtered = filtered.filter(sponsor => selectedPathways.includes(sponsor.pathway))
    }

    // Filter by industries
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter(sponsor => selectedIndustries.includes(sponsor.industry))
    }

    // Filter by prizes
    if (showPrizesOnly) {
      filtered = filtered.filter(sponsor => sponsor.isPrize)
    }

    // Sort by tier priority: diamond > gold > silver
    filtered.sort((a, b) => {
      const tierOrder = { diamond: 0, gold: 1, silver: 2 }
      return tierOrder[a.tier] - tierOrder[b.tier]
    })

    return filtered
  }, [selectedIndustries, selectedPathways, showPostSecondary, showPrizesOnly])

  // Group filtered sponsors by tier
  const sponsorsByTier = useMemo(() => {
    const diamond = filteredSponsors.filter(s => s.tier === 'diamond')
    const gold = filteredSponsors.filter(s => s.tier === 'gold')
    const silver = filteredSponsors.filter(s => s.tier === 'silver')
    
    return { diamond, gold, silver }
  }, [filteredSponsors])

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

  // Simulate initial loading and handle filter changes
  useEffect(() => {
    // Simulate initial data loading
    if (loadingState === 'initial') {
      setLoadingState('loading')
      setTimeout(() => {
        setLoadingState('success')
      }, 100) // Reduced delay for testing
    }
  }, [loadingState])

  useEffect(() => {
    // Handle filter changes with loading animation
    const arraysEqual = (a: any[], b: any[]) => a.length === b.length && a.every(item => b.includes(item))
    
    const hasFiltersChanged = (
      !arraysEqual(previousFilters.industries, selectedIndustries) ||
      !arraysEqual(previousFilters.pathways, selectedPathways) ||
      previousFilters.postSecondary !== showPostSecondary ||
      previousFilters.prizesOnly !== showPrizesOnly
    )

    if (hasFiltersChanged && loadingState === 'success') {
      setIsFilterChanging(true)
      setTimeout(() => {
        setPreviousFilters({
          industries: [...selectedIndustries],
          pathways: [...selectedPathways],
          postSecondary: showPostSecondary,
          prizesOnly: showPrizesOnly
        })
        setIsFilterChanging(false)
      }, 400) // Short delay for smooth transition
    }
  }, [selectedIndustries, selectedPathways, showPostSecondary, showPrizesOnly, previousFilters, loadingState])

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    setLoadingState('loading')
    setTimeout(() => {
      // Randomly succeed or fail for demo
      const shouldSucceed = Math.random() > 0.3 || retryCount >= 2
      setLoadingState(shouldSucceed ? 'success' : 'error')
    }, 1000)
  }

  const handleFilterChange = (type: 'industries' | 'pathways' | 'postSecondary' | 'prizesOnly', value: any) => {
    switch (type) {
      case 'industries':
        setSelectedIndustries(value)
        break
      case 'pathways':
        setSelectedPathways(value)
        break
      case 'postSecondary':
        setShowPostSecondary(value)
        break
      case 'prizesOnly':
        setShowPrizesOnly(value)
        break
    }
  }

  const clearAllFilters = () => {
    setSelectedIndustries([])
    setSelectedPathways([])
    setShowPostSecondary('all')
    setShowPrizesOnly(false)
  }

  const getPopularFilterSuggestions = () => [
    { 
      label: 'Technology Companies', 
      action: () => {
        setSelectedIndustries(['Technology'])
        setShowPostSecondary(false)
      }
    },
    { 
      label: 'University Programs', 
      action: () => {
        setSelectedPathways(['university'])
        setShowPostSecondary(true)
      }
    },
    { 
      label: 'Booths with Prizes', 
      action: () => {
        setShowPrizesOnly(true)
      }
    }
  ]

  // Generate skeleton cards based on typical distribution
  const generateSkeletonCards = () => {
    const skeletons = []
    for (let i = 0; i < 12; i++) {
      const tier = i < 2 ? 'diamond' : i < 6 ? 'gold' : 'silver'
      skeletons.push(<BoothCardSkeleton key={i} tier={tier} index={i} />)
    }
    return skeletons
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-background-light to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-blue to-indigo-600 text-white">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <motion.div 
                className="flex items-center justify-center gap-2 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <h1 className="text-6xl font-black">myBlueprint Career Launch Expo</h1>
              </motion.div>
              <motion.p 
                className="text-xl font-medium opacity-90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                Explore interactive booths from leading companies and institutions across Canada
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4 justify-center text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-bold">{stats.postSecondary}</span> Post-Secondary
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-bold">{stats.employers}</span> Employers
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-bold">{sponsors.length}</span> Total Booths
                </div>
              </motion.div>
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
          {/* Error State */}
          {loadingState === 'error' && (
            <NetworkError 
              onRetry={handleRetry}
              retryCount={retryCount}
              maxRetries={3}
            />
          )}

          {/* Success State */}
          {loadingState === 'success' && (
            <>
              {/* Filter Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <FilterBar
                  selectedIndustries={selectedIndustries}
                  selectedPathways={selectedPathways}
                  showPostSecondary={showPostSecondary}
                  showPrizesOnly={showPrizesOnly}
                  onIndustriesChange={(value) => handleFilterChange('industries', value)}
                  onPathwaysChange={(value) => handleFilterChange('pathways', value)}
                  onPostSecondaryChange={(value) => handleFilterChange('postSecondary', value)}
                  onPrizesOnlyChange={(value) => handleFilterChange('prizesOnly', value)}
                />
              </motion.div>

              {/* Results Summary with Loading State */}
              <motion.div 
                className="mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {isFilterChanging ? (
                  <div className="flex items-center justify-center gap-2 text-neutral-4">
                    <LoadingSpinner size="sm" />
                    <span>Filtering booths...</span>
                  </div>
                ) : (
                  <p className="text-neutral-4">
                    Showing <span className="font-semibold text-brand-navy">{filteredSponsors.length}</span> 
                    {' '}of {sponsors.length} booths
                  </p>
                )}
              </motion.div>

              {/* Booth Grid with Animation */}
              <AnimatePresence mode="wait">
                {isFilterChanging ? (
                  <motion.div 
                    key="filtering"
                    className="expo-booth-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {generateSkeletonCards()}
                  </motion.div>
                ) : filteredSponsors.length > 0 ? (
                  <motion.div 
                    key="results"
                    className="space-y-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Premier Partners Section (Diamond) */}
                    {sponsorsByTier.diamond.length > 0 && (
                      <div>
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <h2 className="text-3xl font-bold animated-gradient-text mb-2">
                            Platinum Sponsors
                          </h2>
                          <div className="h-1.5 w-24 bg-[#0092FF] rounded-full"></div>
                        </motion.div>
                        <div className="expo-booth-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                          {sponsorsByTier.diamond.map((sponsor, index) => (
                            <motion.div
                              key={sponsor.id}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.5,
                                delay: index * 0.05,
                                ease: [0.4, 0, 0.2, 1]
                              }}
                            >
                              <BoothCard 
                                sponsor={sponsor} 
                                index={index}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Gold Sponsors Section */}
                    {sponsorsByTier.gold.length > 0 && (
                      <div>
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <h2 className="text-2xl font-bold text-amber-600 mb-2">
                            Gold Sponsors
                          </h2>
                          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
                        </motion.div>
                        <div className="expo-booth-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                          {sponsorsByTier.gold.map((sponsor, index) => (
                            <motion.div
                              key={sponsor.id}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.5,
                                delay: (sponsorsByTier.diamond.length + index) * 0.05,
                                ease: [0.4, 0, 0.2, 1]
                              }}
                            >
                              <BoothCard 
                                sponsor={sponsor} 
                                index={sponsorsByTier.diamond.length + index}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Silver Sponsors Section */}
                    {sponsorsByTier.silver.length > 0 && (
                      <div>
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <h2 className="text-xl font-semibold text-gray-600 mb-2">
                            Silver Sponsors
                          </h2>
                          <div className="h-0.5 w-16 bg-gray-400 rounded-full"></div>
                        </motion.div>
                        <div className="expo-booth-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                          {sponsorsByTier.silver.map((sponsor, index) => (
                            <motion.div
                              key={sponsor.id}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.5,
                                delay: (sponsorsByTier.diamond.length + sponsorsByTier.gold.length + index) * 0.05,
                                ease: [0.4, 0, 0.2, 1]
                              }}
                            >
                              <BoothCard 
                                sponsor={sponsor} 
                                index={sponsorsByTier.diamond.length + sponsorsByTier.gold.length + index}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    className="text-center py-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="max-w-lg mx-auto">
                      <EmptyStateIllustration type="no-results" className="mb-6" />
                      <h3 className="text-2xl font-semibold text-brand-navy mb-3">No booths match your filters</h3>
                      <p className="text-neutral-4 mb-8">
                        We couldn&apos;t find any organizations that match your current filter combination. 
                        Try adjusting your filters or explore some popular categories below.
                      </p>

                      {/* Popular Filter Suggestions */}
                      <div className="mb-8">
                        <p className="text-sm font-medium text-neutral-5 mb-4">Try these popular combinations:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                          {getPopularFilterSuggestions().map((suggestion, index) => (
                            <motion.button
                              key={suggestion.label}
                              onClick={suggestion.action}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full hover:bg-primary-blue/20 transition-colors text-sm font-medium"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              {index === 0 && <Building className="w-4 h-4" />}
                              {index === 1 && <Users className="w-4 h-4" />}
                              {index === 2 && <TrendingUp className="w-4 h-4" />}
                              {suggestion.label}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        onClick={clearAllFilters}
                        className="px-8 py-3 bg-primary-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        View All Booths
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {/* Initial Loading State */}
          {loadingState === 'loading' && (
            <div className="expo-booth-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {generateSkeletonCards()}
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="mt-20 bg-brand-navy text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-4">Ready to Connect?</h2>
            <p className="text-lg font-light text-neutral-3 mb-6 max-w-2xl mx-auto">
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
    </ErrorBoundary>
  )
}