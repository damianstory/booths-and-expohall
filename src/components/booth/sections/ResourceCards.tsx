import React from 'react'
import { ResourceItem } from '@/types/booth'
import { FileText, Link, File, Video, Download, ExternalLink } from 'lucide-react'

interface ResourceCardsProps {
  resources: ResourceItem[]
  maxDisplay?: number
  variant?: 'list' | 'mosaic'
}

const ResourceCards: React.FC<ResourceCardsProps> = ({ 
  resources, 
  maxDisplay = 5,
  variant = 'list'
}) => {
  const displayedResources = resources.slice(0, maxDisplay)

  const getIcon = (type: ResourceItem['type']) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-4 h-4" />
      case 'link':
        return <Link className="w-4 h-4" />
      case 'video':
        return <Video className="w-4 h-4" />
      default:
        return <File className="w-4 h-4" />
    }
  }

  const getIconColor = (type: ResourceItem['type']) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-50 text-red-600'
      case 'link':
        return 'bg-blue-50 text-blue-600'
      case 'video':
        return 'bg-orange-50 text-orange-600'
      default:
        return 'bg-purple-50 text-purple-600'
    }
  }

  const handleResourceClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-body-1 font-black text-brand-navy">Resources</h3>
        <span className="text-subtitle-1 text-neutral-5 bg-neutral-2 px-2 py-1 rounded-full">
          {resources.length} items
        </span>
      </div>

      {variant === 'mosaic' ? (
        <div className="flex-grow grid grid-cols-6 grid-rows-6 auto-rows-fr gap-4">
          {displayedResources.map((resource, index) => {
            // Predefined span classes (static strings so Tailwind keeps them)
            const spanClassMap = [
              'col-span-3 row-span-4',
              'col-span-3 row-span-2',
              'col-span-3 row-span-2',
              'col-span-3 row-span-2',
              'col-span-3 row-span-2'
            ]
            const spanClass = spanClassMap[index] || 'col-span-2 row-span-2'
            return (
              <button
                key={index}
                onClick={() => handleResourceClick(resource.url)}
                className={`group text-left bg-off-white border border-neutral-2 rounded-xl p-3 hover:border-primary-blue hover:shadow-md hover:bg-light-blue/10 transition-all overflow-hidden ${spanClass}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${getIconColor(resource.type)}`}>
                    {getIcon(resource.type)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-compact font-medium text-brand-navy group-hover:text-primary-blue transition-colors truncate">
                      {resource.title}
                    </h4>
                    <p className="text-subtitle-1 font-light text-neutral-5 mt-0.5 line-clamp-2">
                      {resource.description}
                    </p>
                    {resource.fileSize && (
                      <span className="text-subtitle-2 font-light text-neutral-5/70">
                        {resource.fileSize}
                      </span>
                    )}
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    {resource.type === 'link' ? (
                      <ExternalLink className="w-4 h-4 text-primary-blue" />
                    ) : (
                      <Download className="w-4 h-4 text-primary-blue" />
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      ) : (
        <div className="flex-grow space-y-2 overflow-visible">
          {displayedResources.map((resource, index) => (
            <button
              key={index}
              onClick={() => handleResourceClick(resource.url)}
              className="w-full group block text-left"
            >
              <div className="flex items-start gap-2.5 p-2.5 border border-neutral-2 rounded-lg hover:border-primary-blue hover:shadow-md hover:bg-light-blue/10 transform hover:scale-[1.02] transition-all duration-200">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getIconColor(resource.type)}`}>
                  {getIcon(resource.type)}
                </div>
                
                <div className="flex-grow min-w-0">
                  <h4 className="font-semibold text-sm text-brand-navy group-hover:text-primary-blue transition-colors truncate">
                    {resource.title}
                  </h4>
                  <p className="text-xs text-neutral-5 mt-0.5 line-clamp-1">
                    {resource.description}
                  </p>
                  {resource.fileSize && (
                    <span className="text-xs text-neutral-5/70">
                      {resource.fileSize}
                    </span>
                  )}
                </div>

                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  {resource.type === 'link' ? (
                    <ExternalLink className="w-4 h-4 text-primary-blue" />
                  ) : (
                    <Download className="w-4 h-4 text-primary-blue" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {resources.length > maxDisplay && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-neutral-5 text-center">
            Showing {maxDisplay} of {resources.length} resources
          </p>
        </div>
      )}
    </div>
  )
}

export default ResourceCards