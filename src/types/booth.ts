export interface VideoContent {
  url: string
  type: 'youtube' | 'vimeo' | 'google-drive' | 'custom'
  title: string
  description?: string
  thumbnail?: string
}

export interface ResourceItem {
  title: string
  description: string
  url: string
  type: 'pdf' | 'link' | 'document' | 'video'
  fileSize?: string
}

export interface CTAButton {
  text: string
  url: string
  type?: 'website' | 'careers' | 'contact' | 'application'
}

export interface BrandColors {
  primary: string
  secondary?: string
  accent?: string
}

export interface QuickFact {
  icon?: string
  label: string
  value: string
}

export interface ContactDetails {
  email?: string
  phone?: string
  headquarters?: {
    address: string
    city: string
    province: string
    postalCode: string
  }
  internshipInfo?: {
    available: boolean
    period: string
    applicationUrl?: string
  }
  socialLinks?: Array<{
    platform: 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'tiktok'
    url: string
  }>
}

export interface SessionSlidesData {
  embedUrl: string
  title: string
  description: string
  metadata?: {
    date: string
    duration: string
    attendeeCount?: number
  }
  status?: 'live' | 'recorded' | 'upcoming'
}

export interface EngagementActivityData {
  embedUrl: string
  title: string
  description: string
  prize?: {
    title: string
    description: string
  }
  duration?: string
  embedType?: 'iframe' | 'skills-gap-quiz'
}

export interface DeluxeBoothData {
  id: string
  name: string
  slug: string
  tier: 'deluxe'
  logo: string
  tagline: string
  description: string
  website: string
  quickFacts?: QuickFact[]
  video: VideoContent
  resources: ResourceItem[]
  sessionSlides?: SessionSlidesData
  engagementActivity?: EngagementActivityData
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  contact: ContactDetails
  brandColors: BrandColors
}

export interface DeluxeBoothProps {
  sponsor: DeluxeBoothData
}