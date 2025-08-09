import React from 'react'
import { ContactDetails } from '@/types/booth'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react'

interface ContactInfoProps {
  contact: ContactDetails
  website?: string
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact, website }) => {
  const socialIcons = {
    linkedin: <Linkedin className="w-3 h-3" />,
    twitter: <Twitter className="w-3 h-3" />,
    instagram: <Instagram className="w-3 h-3" />,
    facebook: <Facebook className="w-3 h-3" />,
    tiktok: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    )
  }

  const socialColors = {
    linkedin: 'hover:bg-blue-600',
    twitter: 'hover:bg-sky-500',
    instagram: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500',
    facebook: 'hover:bg-blue-700',
    tiktok: 'hover:bg-black'
  }

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-body-1 font-black text-brand-navy mb-2">Get in Touch</h3>
      
      <div className="space-y-2 mb-3">
        {contact.email && (
          <div className="flex items-center gap-2">
            <Mail className="w-3 h-3 text-primary-blue" />
            <div className="min-w-0 flex-1">
              <a 
                href={`mailto:${contact.email}`}
                className="text-compact font-light text-brand-navy hover:text-primary-blue transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>
          </div>
        )}

        {contact.phone && (
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-primary-blue" />
            <div>
              <a 
                href={`tel:${contact.phone}`}
                className="text-compact font-light text-brand-navy hover:text-primary-blue transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        )}

        {contact.headquarters && (
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-primary-blue flex-shrink-0" />
            <div>
              <p className="text-compact font-light text-brand-navy">
                {contact.headquarters.city}, {contact.headquarters.province}
              </p>
            </div>
          </div>
        )}
      </div>

      {contact.socialLinks && contact.socialLinks.length > 0 && (
        <div className="mt-auto">
          <div className="flex gap-1">
            {contact.socialLinks.slice(0, 4).map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-6 h-6 bg-neutral-2 rounded flex items-center justify-center text-neutral-4 hover:text-white transition-all duration-200 ${socialColors[link.platform]}`}
                title={link.platform}
              >
                {socialIcons[link.platform]}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactInfo