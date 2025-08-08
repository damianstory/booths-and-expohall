'use client'

import React from 'react'
import { GraduationCap, Briefcase } from 'lucide-react'
import { Industry, Pathway } from '@/types/booth'

interface FilterBarProps {
  selectedIndustry: Industry | 'all'
  selectedPathway: Pathway | 'all'
  showPostSecondary: boolean | 'all'
  onIndustryChange: (industry: Industry | 'all') => void
  onPathwayChange: (pathway: Pathway | 'all') => void
  onPostSecondaryChange: (show: boolean | 'all') => void
}

const INDUSTRIES: Industry[] = [
  'Technology',
  'Healthcare',
  'Finance',
  'Engineering',
  'Education',
  'Manufacturing',
  'Retail',
  'Energy',
  'Marketing',
  'Consulting'
]

const PATHWAYS: { value: Pathway; label: string }[] = [
  { value: 'direct-to-workplace', label: 'Direct to Workplace' },
  { value: 'apprenticeship', label: 'Apprenticeship' },
  { value: 'college', label: 'College' },
  { value: 'university', label: 'University' },
  { value: 'gap-year', label: 'Gap Year' }
]

export default function FilterBar({
  selectedIndustry,
  selectedPathway,
  showPostSecondary,
  onIndustryChange,
  onPathwayChange,
  onPostSecondaryChange
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Post-Secondary Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">INSTITUTION TYPE</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onPostSecondaryChange('all')}
            className={`
              px-4 py-2 rounded-full font-medium text-sm transition-all
              ${showPostSecondary === 'all'
                ? 'bg-primary-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            All Organizations
          </button>
          <button
            onClick={() => onPostSecondaryChange(false)}
            className={`
              px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-2
              ${showPostSecondary === false
                ? 'bg-primary-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <Briefcase className="w-4 h-4" />
            Employers Only
          </button>
          <button
            onClick={() => onPostSecondaryChange(true)}
            className={`
              px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-2
              ${showPostSecondary === true
                ? 'bg-primary-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <GraduationCap className="w-4 h-4" />
            Post-Secondary Only
          </button>
        </div>
      </div>

      {/* Pathway Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">PATHWAY</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onPathwayChange('all')}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all
              ${selectedPathway === 'all'
                ? 'bg-primary-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            All Pathways
          </button>
          {PATHWAYS.map((pathway) => (
            <button
              key={pathway.value}
              onClick={() => onPathwayChange(pathway.value)}
              className={`
                px-3 py-1.5 rounded-full text-sm font-medium transition-all
                ${selectedPathway === pathway.value
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {pathway.label}
            </button>
          ))}
        </div>
      </div>

      {/* Industry Filters */}
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-3">INDUSTRY</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onIndustryChange('all')}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all
              ${selectedIndustry === 'all'
                ? 'bg-primary-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            All Industries
          </button>
          {INDUSTRIES.map((industry) => (
            <button
              key={industry}
              onClick={() => onIndustryChange(industry)}
              className={`
                px-3 py-1.5 rounded-full text-sm font-medium transition-all
                ${selectedIndustry === industry
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedIndustry !== 'all' || selectedPathway !== 'all' || showPostSecondary !== 'all') && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <span>Active filters:</span>
            {showPostSecondary !== 'all' && (
              <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {showPostSecondary ? 'Post-Secondary' : 'Employers'}
              </span>
            )}
            {selectedPathway !== 'all' && (
              <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {PATHWAYS.find(p => p.value === selectedPathway)?.label}
              </span>
            )}
            {selectedIndustry !== 'all' && (
              <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {selectedIndustry}
              </span>
            )}
            <button
              onClick={() => {
                onIndustryChange('all')
                onPathwayChange('all')
                onPostSecondaryChange('all')
              }}
              className="ml-auto text-primary-blue hover:text-blue-700 font-medium"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  )
}