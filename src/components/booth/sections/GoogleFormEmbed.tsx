import React from 'react'
import { FileText } from 'lucide-react'

interface GoogleFormEmbedProps {
  formUrl?: string
  title?: string
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({ 
  formUrl,
  title = "Quick Registration"
}) => {
  if (!formUrl) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-neutral-5 p-8">
        <FileText className="w-12 h-12 mb-4 text-neutral-4" />
        <p className="text-center">Registration form will be displayed here</p>
      </div>
    )
  }

  return (
    <div className="h-full p-6">
      <iframe
        src={formUrl}
        className="w-full h-full rounded-lg"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
      >
        Loading...
      </iframe>
    </div>
  )
}

export default GoogleFormEmbed