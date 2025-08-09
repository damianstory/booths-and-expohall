'use client'

import React from 'react'
import { GraduationCap, Briefcase, Gift, Dices } from 'lucide-react'
import { Industry, Pathway } from '@/types/booth'

interface FilterBarProps {
  selectedIndustries: Industry[]
  selectedPathways: Pathway[]
  showPostSecondary: boolean | 'all'
  showPrizesOnly: boolean
  onIndustriesChange: (industries: Industry[]) => void
  onPathwaysChange: (pathways: Pathway[]) => void
  onPostSecondaryChange: (show: boolean | 'all') => void
  onPrizesOnlyChange: (show: boolean) => void
  onRandomSelect: () => void
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
  selectedIndustries,
  selectedPathways,
  showPostSecondary,
  showPrizesOnly,
  onIndustriesChange,
  onPathwaysChange,
  onPostSecondaryChange,
  onPrizesOnlyChange,
  onRandomSelect
}: FilterBarProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Action Buttons Container - Responsive positioning */}
      <div className="flex gap-3 mb-4 min-[800px]:absolute min-[800px]:top-4 min-[800px]:right-4 min-[800px]:mb-0 min-[800px]:flex-col min-[800px]:gap-2">
        {/* Prize Filter Toggle */}
        <button
          onClick={() => onPrizesOnlyChange(!showPrizesOnly)}
          className={showPrizesOnly 
            ? "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-out group bg-gradient-to-r from-[#0092FF] to-blue-600 shadow-lg z-10 hover:from-blue-600 hover:to-[#0092FF]"
            : "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-out group bg-transparent hover:bg-gradient-to-r hover:from-[#0092FF] hover:to-sky-500 border border-gray-400 hover:border-transparent z-10 hover:shadow-lg"
          }
          title={showPrizesOnly ? 'Showing booths with prizes only' : 'Show all booths'}
        >
          <Gift 
            className={showPrizesOnly 
              ? "w-5 h-5 transition-colors duration-200 text-white"
              : "w-5 h-5 transition-colors duration-200 text-[#65738B] group-hover:text-white"
            }
          />
        </button>

        {/* Random Booth Selector */}
        <button
          onClick={onRandomSelect}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-out group bg-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border border-gray-400 hover:border-transparent z-10 hover:shadow-lg"
          title="Visit a random booth"
        >
          <Dices className="w-5 h-5 transition-colors duration-200 text-[#65738B] group-hover:text-white" />
        </button>
      </div>

      {/* Post-Secondary Filter */}
      <div className="mb-6">
        <h3 className="text-subtitle-2 font-bold uppercase text-neutral-4 mb-3">INSTITUTION TYPE</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onPostSecondaryChange('all')}
            className={`
              px-4 py-2 rounded-full text-compact font-light transition-all
              ${showPostSecondary === 'all'
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            All Organizations
          </button>
          <button
            onClick={() => onPostSecondaryChange(showPostSecondary === false ? 'all' : false)}
            className={`
              px-4 py-2 rounded-full text-compact font-light transition-all flex items-center gap-2
              ${showPostSecondary === false
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            <Briefcase className="w-4 h-4" />
            Employers Only
          </button>
          <button
            onClick={() => onPostSecondaryChange(showPostSecondary === true ? 'all' : true)}
            className={`
              px-4 py-2 rounded-full text-compact font-light transition-all flex items-center gap-2
              ${showPostSecondary === true
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
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
        <h3 className="text-subtitle-2 font-bold uppercase text-neutral-4 mb-3">PATHWAY</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onPathwaysChange([])}
            className={`
              px-3 py-1.5 rounded-full text-compact font-light transition-all
              ${selectedPathways.length === 0
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            All Pathways
          </button>
          {PATHWAYS.map((pathway) => (
            <button
              key={pathway.value}
              onClick={() => {
                const isSelected = selectedPathways.includes(pathway.value)
                const newPathways = isSelected
                  ? selectedPathways.filter(p => p !== pathway.value)
                  : [...selectedPathways, pathway.value]
                onPathwaysChange(newPathways)
              }}
              className={`
                px-3 py-1.5 rounded-full text-compact font-light transition-all
                ${selectedPathways.includes(pathway.value)
                  ? 'bg-primary-blue text-white'
                  : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
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
        <h3 className="text-subtitle-2 font-bold uppercase text-neutral-4 mb-3">INDUSTRY</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onIndustriesChange([])}
            className={`
              px-3 py-1.5 rounded-full text-compact font-light transition-all
              ${selectedIndustries.length === 0
                ? 'bg-primary-blue text-white'
                : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
              }
            `}
          >
            All Industries
          </button>
          {INDUSTRIES.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                const isSelected = selectedIndustries.includes(industry)
                const newIndustries = isSelected
                  ? selectedIndustries.filter(i => i !== industry)
                  : [...selectedIndustries, industry]
                onIndustriesChange(newIndustries)
              }}
              className={`
                px-3 py-1.5 rounded-full text-compact font-light transition-all
                ${selectedIndustries.includes(industry)
                  ? 'bg-primary-blue text-white'
                  : 'bg-neutral-2 text-neutral-5 hover:bg-neutral-3'
                }
              `}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedIndustries.length > 0 || selectedPathways.length > 0 || showPostSecondary !== 'all' || showPrizesOnly) && (
        <div className="mt-4 pt-4 border-t border-neutral-2">
          <div className="flex items-center gap-2 text-compact text-neutral-4 flex-wrap">
            <span>Active filters:</span>
            {showPostSecondary !== 'all' && (
              <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {showPostSecondary ? 'Post-Secondary' : 'Employers'}
              </span>
            )}
            {selectedPathways.map(pathway => (
              <span key={pathway} className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {PATHWAYS.find(p => p.value === pathway)?.label}
              </span>
            ))}
            {selectedIndustries.map(industry => (
              <span key={industry} className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full">
                {industry}
              </span>
            ))}
            {showPrizesOnly && (
              <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue rounded-full flex items-center gap-1">
                <Gift className="w-3 h-3" />
                Prizes
              </span>
            )}
            <button
              onClick={() => {
                onIndustriesChange([])
                onPathwaysChange([])
                onPostSecondaryChange('all')
                onPrizesOnlyChange(false)
              }}
              className="ml-auto text-primary-blue hover:text-blue-700 font-light"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  )
}