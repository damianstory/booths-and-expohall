# Virtual Career Fair Expo & Booth System PRD

## Executive Summary

A dedicated expo platform featuring individual sponsor booths for the myBlueprint Career Launch virtual career fair. The system will showcase sponsor companies through immersive, content-rich booth experiences using a bento grid layout, allowing students to explore company information, resources, and interactive content.

## Project Overview

### Purpose
Create individual digital booth experiences for event sponsors that remain accessible beyond the event day, providing ongoing value for both sponsors and students.

### Scope
- Main expo directory page (`/expo`)
- Individual deluxe booth pages (`/sponsor-name`)
- Individual standard booth pages (`/sponsor-name`)
- Template-based system with manual content management
- Responsive design matching existing myBlueprint branding

## User Personas & Use Cases

### Primary Users

**Students (Grades 7-12)**
- **Goals:** Explore career opportunities, learn about companies, access resources
- **Use Cases:** 
  - Browse expo to discover interesting companies
  - Explore booth content during and after the event
  - Engage with interactive activities and download resources
  - Watch company videos and learn about career paths

**Teachers/Educators**
- **Goals:** Guide students to relevant resources, support career exploration
- **Use Cases:**
  - Share specific booth links with students
  - Use booths as supplementary career education resources
  - Access downloadable teaching materials

**Sponsors**
- **Goals:** Showcase company culture, recruit future talent, provide educational value
- **Use Cases:**
  - Direct students to their booth via social media/email
  - Track engagement through embedded analytics
  - Share booth as ongoing recruitment tool

## Technical Architecture

### Platform
- **Framework:** Next.js 14+ with TypeScript
- **Styling:** Tailwind CSS (matching existing design system)
- **Deployment:** Vercel
- **Content Management:** Static JSON/TypeScript configuration files

### URL Structure
```
/expo                    # Main expo directory
/company-name           # Individual booth pages
/company-name-2         # Additional booth pages
```

### Project Structure
```
src/
├── app/
│   ├── expo/
│   │   └── page.tsx           # Main expo directory
│   ├── [sponsor]/
│   │   └── page.tsx           # Dynamic booth pages
│   └── layout.tsx
├── components/
│   ├── expo/
│   │   ├── BoothDeluxe.tsx    # Deluxe booth template
│   │   ├── BoothStandard.tsx  # Standard booth template
│   │   └── ExpoDirectory.tsx  # Main expo page
│   └── ui/                    # Shared UI components
├── data/
│   ├── sponsors.ts            # Sponsor configuration
│   └── booth-content.ts       # Booth content data
└── styles/
    └── globals.css            # Existing design system
```

## Booth Content Structure

### Deluxe Booth Content (Platinum Sponsors)

```typescript
interface DeluxeBoothData {
  id: string
  name: string
  slug: string
  tier: 'deluxe'
  
  // Basic Info
  logo: string
  tagline: string
  description: string
  website: string
  
  // Media Content
  video: {
    url: string
    type: 'youtube' | 'vimeo' | 'google-drive'
    title: string
    thumbnail?: string
  }
  
  // Resources
  resources: Array<{
    title: string
    description: string
    url: string
    type: 'pdf' | 'link' | 'document'
  }>
  
  // Session Integration
  sessionSlides?: {
    embedUrl: string
    title: string
    description: string
  }
  
  // Interactive Content
  engagementActivity?: {
    embedUrl: string
    title: string
    description: string
  }
  
  // Call to Actions
  primaryCTA: {
    text: string
    url: string
    type: 'website' | 'careers' | 'contact' | 'application'
  }
  
  secondaryCTA?: {
    text: string
    url: string
  }
  
  // Styling
  brandColors: {
    primary: string
    secondary?: string
    accent?: string
  }
}
```

### Standard Booth Content (Silver/Gold Sponsors)

```typescript
interface StandardBoothData {
  id: string
  name: string
  slug: string
  tier: 'standard'
  
  // Basic Info (same as deluxe)
  logo: string
  tagline: string
  description: string
  website: string
  
  // Media Content (same as deluxe)
  video: VideoContent
  
  // Resources (fewer items)
  resources: ResourceItem[] // Max 2-3 items
  
  // Raffle Integration
  raffleForm?: {
    embedUrl: string // Google Form URL
    title: string
    description: string
    prize?: string
  }
  
  // Call to Actions (same as deluxe)
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  
  // Styling (same as deluxe)
  brandColors: BrandColors
}
```

## Design Specifications

### Deluxe Booth Layout (Bento Grid)

**Layout Grid: 12 columns × flexible rows**

```
┌─────────────────────────────────────────────────┐
│ Header Section (12 cols)                        │
│ [Logo] [Company Name + Tagline]        [CTA]   │
├─────────────────┬─────────────────┬─────────────┤
│ Company Story   │ Promo Video     │ Quick Facts │
│ (4 cols)        │ (5 cols)        │ (3 cols)    │
│                 │                 │             │
├─────────────────┼─────────────────┼─────────────┤
│ Engagement      │ Session Slides  │ Resources   │
│ Activity        │ (6 cols)        │ (3 cols)    │
│ (3 cols)        │                 │             │
├─────────────────┴─────────────────┼─────────────┤
│ Footer CTAs (9 cols)               │ Contact     │
│                                    │ Info        │
│                                    │ (3 cols)    │
└────────────────────────────────────┴─────────────┘
```

### Mobile Layout (Stacked)
- Single column layout
- Maintain content hierarchy
- Optimized touch targets
- Collapsible sections for better UX

### Design System Integration

**Colors (from existing system):**
- Primary Blue: `#0092FF`
- Brand Navy: `#22224C` 
- Background Light: `#F9FAFB`
- Neutral grays from existing palette

**Typography (from existing system):**
- Headers: Museo Sans (fallback: Open Sans)
- Body: Inter font stack
- Existing responsive scale

**Components:**
- Reuse BentoCard, BentoGrid from existing project
- Extend Button component for booth CTAs
- Create new VideoEmbed, ResourceCard components

## Component Specifications

### 1. BoothHeader Component
```typescript
interface BoothHeaderProps {
  logo: string
  name: string
  tagline: string
  website: string
  primaryCTA: CTAButton
  brandColors: BrandColors
}
```

**Features:**
- Company logo with proper sizing
- Animated company name and tagline
- Floating CTA button
- Brand color theming

### 2. VideoSection Component
```typescript
interface VideoSectionProps {
  video: VideoContent
  title?: string
}
```

**Features:**
- Support for YouTube, Vimeo, Google Drive embeds
- Responsive aspect ratios
- Lazy loading for performance
- Fallback thumbnail with play button

### 3. EngagementActivity Component
```typescript
interface EngagementActivityProps {
  embedUrl: string
  title: string
  description: string
  fallbackMessage?: string
}
```

**Features:**
- iframe embed support
- Loading states
- Error handling
- Mobile-optimized sizing

### 4. ResourceCard Component
```typescript
interface ResourceCardProps {
  resources: ResourceItem[]
  maxDisplay?: number
}
```

**Features:**
- Resource type icons (PDF, link, document)
- Hover states with descriptions
- Download/external link indicators
- Grid layout with consistent sizing

### 5. SessionSlides Component
```typescript
interface SessionSlidesProps {
  embedUrl: string
  title: string
  description: string
}
```

**Features:**
- Google Slides embed
- Full-screen viewing option
- Navigation indicators
- Mobile-responsive controls

## Main Expo Page Specifications

### Layout Structure
```
┌─────────────────────────────────────────────┐
│ Hero Section                                │
│ "Explore Our Industry Partners"            │
├─────────────────────────────────────────────┤
│ Filter/Search Bar                           │
│ [All] [Deluxe] [Standard] [Search...]      │
├─────────────────────────────────────────────┤
│ Sponsor Grid                                │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐                    │
│ │ A │ │ B │ │ C │ │ D │                    │
│ └───┘ └───┘ └───┘ └───┘                    │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐                    │
│ │ E │ │ F │ │ G │ │ H │                    │
│ └───┘ └───┘ └───┘ └───┘                    │
└─────────────────────────────────────────────┘
```

### Sponsor Card Features
- Company logo and name
- Booth tier indicator (Deluxe/Standard badge)
- Hover states with company tagline
- Direct link to booth page
- Industry category tags

## Performance Requirements

### Core Web Vitals Targets
- **LCP:** < 2.5 seconds
- **FID:** < 100ms
- **CLS:** < 0.1

### Optimization Strategies
- Image optimization with Next.js Image component
- Lazy loading for embed content
- Code splitting for booth templates
- Progressive enhancement for interactive elements

## Content Management

### Sponsor Data Management
```typescript
// data/sponsors.ts
export const sponsors: (DeluxeBoothData | StandardBoothData)[] = [
  {
    id: 'company-a',
    name: 'Company A',
    slug: 'company-a',
    tier: 'deluxe',
    // ... rest of content
  },
  // Additional sponsors...
]
```

### Content Update Process
1. Update sponsor data in `data/sponsors.ts`
2. Add any new assets to `public/sponsors/[company-slug]/`
3. Test booth page at `/company-slug`
4. Deploy changes via Git push (Vercel auto-deploys)

## Analytics & Tracking

### Booth Analytics
- Page views per booth
- Time spent on booth pages
- Video engagement rates
- Resource download tracking
- CTA click rates

### Implementation
- Google Analytics 4 integration
- Custom events for booth interactions
- Privacy-compliant tracking (GDPR/CCPA ready)

## Success Metrics

### Primary KPIs
- **Booth Visit Rate:** > 60% of expo visitors view at least one booth
- **Engagement Rate:** Average time on booth > 2 minutes
- **Resource Downloads:** > 25% of booth visitors download resources
- **CTA Conversion:** > 8% click-through rate on primary CTAs

### Secondary KPIs
- Video completion rates > 40%
- Mobile usage optimization (smooth experience on mobile)
- Search/filter usage on main expo page
- Return visits to booth pages post-event

## Timeline & Milestones

### Phase 1: Foundation (Week 1)
- [ ] Next.js project setup with design system integration
- [ ] Bento grid layout implementation
- [ ] Basic routing structure (`/expo`, `/[sponsor]`)

### Phase 2: Deluxe Booth Template (Week 2)
- [ ] BoothHeader component
- [ ] VideoSection with multi-provider support
- [ ] ResourceCard grid system
- [ ] EngagementActivity embed support
- [ ] SessionSlides integration

### Phase 3: Content & Polish (Week 3)
- [ ] Sponsor data structure and sample content
- [ ] Main expo directory page
- [ ] Mobile responsiveness
- [ ] Performance optimization

### Phase 4: Standard Booth & Launch (Week 4)
- [ ] Standard booth template
- [ ] Google Form integration for raffles
- [ ] Final testing and accessibility
- [ ] Production deployment

## Future Enhancements

### Post-Launch Improvements
- Admin dashboard for content updates
- Analytics dashboard for sponsors
- Student favorites/bookmarking system
- Social sharing features
- Integration with student profiles

### Advanced Features
- Virtual booth "walk-through" animations
- Live chat integration during event
- Scheduled content releases
- Gamification elements (booth passport, completion badges)

This PRD provides the foundation for building a comprehensive, branded booth experience that aligns with the existing myBlueprint Career Launch event while providing ongoing value for sponsors and students.