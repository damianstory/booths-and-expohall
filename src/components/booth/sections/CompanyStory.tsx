import React from 'react'
import { QuickFact } from '@/types/booth'
import { Building2, Users, Target, TrendingUp, Award, Globe } from 'lucide-react'

interface CompanyStoryProps {
  description: string
  quickFacts?: QuickFact[]
  maxLength?: number
}

const iconMap: { [key: string]: React.ReactNode } = {
  building: <Building2 className="w-4 h-4" />,
  users: <Users className="w-4 h-4" />,
  target: <Target className="w-4 h-4" />,
  trending: <TrendingUp className="w-4 h-4" />,
  award: <Award className="w-4 h-4" />,
  globe: <Globe className="w-4 h-4" />
}

const CompanyStory: React.FC<CompanyStoryProps> = ({ 
  description, 
  quickFacts,
  maxLength = 500 
}) => {
  const truncatedDescription = description.length > maxLength 
    ? `${description.slice(0, maxLength)}...` 
    : description

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Story</h2>
      
      <div className="flex-grow">
        <p className="text-neutral-5 leading-relaxed mb-6 text-sm lg:text-base">
          {truncatedDescription}
        </p>

        {quickFacts && quickFacts.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-3">
              Quick Facts
            </h3>
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue/20 transition-colors">
                  {fact.icon && iconMap[fact.icon] ? (
                    <div className="text-primary-blue">
                      {iconMap[fact.icon]}
                    </div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-primary-blue" />
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-xs text-neutral-5 block">{fact.label}</span>
                  <span className="text-sm font-medium text-brand-navy truncate block">
                    {fact.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CompanyStory