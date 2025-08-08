# Virtual Career Fair Expo & Booth System
## Design Specifications Document

### Version: 1.0
### Date: August 2025
### Project: myBlueprint Career Launch Expo Platform

---

## Design System Integration

### Brand Consistency
This system extends the existing myBlueprint Career Launch design system with identical:
- Color palette and variables
- Typography scale and font families  
- Component styling patterns
- Animation timing and easing functions
- Responsive breakpoints and grid system

### Design Philosophy
- **Content-First**: Information hierarchy prioritizes sponsor value props
- **Bento Grid Flexibility**: Modular layout adapts to varying content lengths
- **Brand Theming**: Each booth can incorporate sponsor brand colors while maintaining consistency
- **Performance-Conscious**: Optimized for fast loading and smooth interactions

---

## Component Architecture

### 1. Layout Components

#### BoothLayout Component
```typescript
interface BoothLayoutProps {
  children: React.ReactNode
  sponsor: SponsorData
  tier: 'deluxe' | 'standard'
}
```

**Specifications:**
- Max width: `1400px` with `4rem` horizontal padding
- Background: `background-light` (#F9FAFB)
- Responsive breakpoints: mobile (320px), tablet (768px), desktop (1024px)

#### BentoGrid Component (Extended)
```typescript
interface ExpoB entoGridProps extends BentoGridProps {
  columns: 12 // Fixed 12-column grid for booth layouts
  gap: 'sm' | 'md' | 'lg' // 16px | 24px | 32px
  responsive: boolean // Auto-stacking on mobile
}
```

**Grid Specifications:**
```css
.expo-bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-lg); /* 24px */
  width: 100%;
}

/* Mobile: Stack all cards */
@media (max-width: 767px) {
  .expo-bento-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md); /* 16px */
  }
}

/* Tablet: 6-column adaptation */
@media (min-width: 768px) and (max-width: 1023px) {
  .expo-bento-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

### 2. Content Components

#### BoothHeader Component
```typescript
interface BoothHeaderProps {
  logo: string
  companyName: string
  tagline: string
  tier: 'deluxe' | 'standard'
  brandColors: {
    primary: string
    secondary?: string
  }
  primaryCTA: {
    text: string
    url: string
    type: 'website' | 'careers' | 'contact'
  }
  secondaryCTA?: {
    text: string
    url: string
  }
}
```

**Design Specifications:**
- Height: `auto` with minimum `120px` padding
- Logo sizing: `80px × 80px` on desktop, `64px × 64px` on mobile
- Tier badge: Positioned top-right, styled according to tier level
- CTA buttons: Follow existing Button component patterns
- Background: `background-white` with `bento-card` shadow

**Tier Badge Styling:**
```css
.tier-badge {
  position: absolute;
  top: -12px;
  right: 24px;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tier-badge--deluxe {
  background: linear-gradient(135deg, #0092FF 0%, #667eea 100%);
  color: white;
}

.tier-badge--standard {
  background: #E6F4FF;
  color: #0092FF;
  border: 2px solid #0092FF;
}
```

#### CompanyStory Component
```typescript
interface CompanyStoryProps {
  description: string
  quickFacts?: Array<{
    icon: React.ReactNode
    label: string
    value: string
  }>
  maxLength?: number // Character limit for description
}
```

**Design Specifications:**
- Grid span: `lg:col-span-4` (1/3 width on desktop)
- Typography: `text-body` for description, `text-body-small` for facts
- Quick facts: Icon + label layout with consistent spacing
- Icon styling: `32px × 32px` containers with `secondary-blue-pale` background

**Quick Facts Layout:**
```css
.quick-fact {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.quick-fact-icon {
  width: 32px;
  height: 32px;
  background: var(--secondary-blue-pale);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quick-fact-text {
  font-size: 14px;
  line-height: 1.4;
  color: var(--neutral-5);
}
```

#### VideoSection Component
```typescript
interface VideoSectionProps {
  video: {
    url: string
    type: 'youtube' | 'vimeo' | 'google-drive' | 'custom'
    title: string
    description?: string
    thumbnail?: string
  }
  autoplay?: boolean
  controls?: boolean
}
```

**Design Specifications:**
- Grid span: `lg:col-span-5` (5/12 width on desktop)
- Aspect ratio: `16:9` for all video embeds
- Lazy loading: Intersection Observer implementation
- Fallback: Custom thumbnail with play button overlay
- Border radius: `12px` to match bento card styling

**Video Embed Styling:**
```css
.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: var(--background-light);
}

.video-embed {
  width: 100%;
  height: 100%;
  border: none;
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.play-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  background: var(--primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-button-overlay:hover {
  background: #0074CC;
  transform: translate(-50%, -50%) scale(1.1);
}
```

#### ContactInfo Component
```typescript
interface ContactInfoProps {
  headquarters?: {
    address: string
    city: string
    province: string
    postalCode: string
  }
  email?: string
  phone?: string
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
```

**Design Specifications:**
- Grid span: `lg:col-span-3` (1/4 width on desktop)
- Icon spacing: `12px` gap between icon and text
- Social links: `32px × 32px` buttons in horizontal layout
- Divider: `1px` solid `gray-100` between sections

#### EngagementActivity Component
```typescript
interface EngagementActivityProps {
  title: string
  description: string
  embedUrl: string
  prize?: {
    title: string
    description: string
  }
  duration?: string
  brandColors?: {
    primary: string
    secondary: string
  }
}
```

**Design Specifications:**
- Grid span: `lg:col-span-3` (1/4 width on desktop)
- Background: Gradient using sponsor's brand colors or default primary blue
- Text color: White for contrast over gradient background
- CTA button: White background with dark text
- Prize display: Semi-transparent white background container

**Engagement Activity Styling:**
```css
.engagement-activity {
  background: linear-gradient(135deg, var(--primary-blue) 0%, #667eea 100%);
  color: white;
  padding: 24px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.engagement-activity::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(30px, -30px);
}

.prize-container {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  backdrop-filter: blur(10px);
}

.engagement-cta {
  width: 100%;
  background: white;
  color: var(--brand-navy);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.engagement-cta:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}
```

#### SessionSlides Component
```typescript
interface SessionSlidesProps {
  embedUrl: string
  title: string
  description: string
  metadata: {
    date: string
    duration: string
    attendeeCount?: number
  }
  status: 'live' | 'recorded' | 'upcoming'
}
```

**Design Specifications:**
- Grid span: `lg:col-span-6` (1/2 width on desktop)
- Embed aspect ratio: `16:9`
- Status badge: Positioned top-right with color coding
- Metadata display: Small text with icon indicators

**Status Badge Colors:**
```css
.session-status {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.session-status--live {
  background: #FEF2F2;
  color: #DC2626;
}

.session-status--recorded {
  background: #F0FDF4;
  color: #059669;
}

.session-status--upcoming {
  background: #FEF3C7;
  color: #D97706;
}
```

#### ResourceCard Component
```typescript
interface ResourceCardProps {
  resources: Array<{
    title: string
    description: string
    url: string
    type: 'pdf' | 'link' | 'document' | 'video'
    fileSize?: string
  }>
  maxDisplay: number // 3 for standard, 5 for deluxe
}
```

**Design Specifications:**
- Grid span: `lg:col-span-3` (1/4 width on desktop)
- Card layout: Stacked vertical list with hover effects
- Icon sizing: `40px × 40px` containers with type-specific colors
- Hover state: `2px` translateY and border color change

**Resource Type Icons & Colors:**
```css
.resource-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.resource-icon--pdf { background: #FEE2E2; color: #DC2626; }
.resource-icon--link { background: #DBEAFE; color: #2563EB; }
.resource-icon--document { background: #F3E8FF; color: #7C3AED; }
.resource-icon--video { background: #FED7AA; color: #EA580C; }

.resource-card {
  display: block;
  padding: 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
}

.resource-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 146, 255, 0.15);
}
```

### 3. Navigation Components

#### BreadcrumbNavigation Component
```typescript
interface BreadcrumbNavigationProps {
  paths: Array<{
    label: string
    href: string
  }>
  currentPage: string
}
```

**Design Specifications:**
- Background: `background-white` with bottom border
- Typography: `text-body-small` with `neutral-4` color for links
- Current page: `brand-navy` color and `font-medium` weight
- Separator: Chevron right icon, `16px` size

#### FooterCTA Component
```typescript
interface FooterCTAProps {
  title: string
  description: string
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  backToExpoLink: boolean
}
```

---

## Responsive Behavior

### Breakpoint System
```css
/* Mobile First Approach */
.booth-container {
  padding: 16px; /* Mobile default */
}

@media (min-width: 768px) {
  .booth-container {
    padding: 24px; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .booth-container {
    padding: 32px; /* Desktop */
  }
}
```

### Grid Adaptations

**Desktop (1024px+):** 12-column bento grid
- Company Story: 4 cols
- Video Section: 5 cols  
- Contact Info: 3 cols
- Engagement Activity: 3 cols
- Session Slides: 6 cols
- Resources: 3 cols

**Tablet (768px - 1023px):** 6-column adaptation
- All sections: 6 cols (full width)
- Stack vertically in defined order

**Mobile (320px - 767px):** Single column
- All sections: Full width
- Optimized spacing and typography
- Touch-friendly interaction targets (minimum 48px)

### Typography Scaling

**Desktop:**
- Company Name: `text-h1` (64px)
- Section Headers: `text-h3` (32px)
- Body Text: `text-body` (16px)

**Mobile:**
- Company Name: `text-h1-mobile` (40px)
- Section Headers: `text-h3-mobile` (24px)
- Body Text: `text-body` (16px)

---

## Animation Specifications

### Page Load Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.booth-section {
  animation: fadeInUp 0.6s ease-out;
}

.booth-section:nth-child(1) { animation-delay: 0ms; }
.booth-section:nth-child(2) { animation-delay: 100ms; }
.booth-section:nth-child(3) { animation-delay: 200ms; }
/* Continue pattern for staggered loading */
```

### Hover Interactions
```css
.interactive-element {
  transition: all 0.3s var(--ease-standard);
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.resource-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary-blue);
}

.cta-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 146, 255, 0.25);
}
```

### Loading States
```css
.skeleton-loader {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-wave 1.5s infinite;
}

@keyframes skeleton-wave {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## Asset Requirements

### Image Specifications
- **Company Logos:** SVG preferred, PNG fallback
  - Size: 320px × 320px minimum
  - Format: Transparent background
  - Optimization: WebP with fallback

- **Video Thumbnails:** 
  - Aspect Ratio: 16:9
  - Resolution: 1280px × 720px minimum
  - Format: WebP with JPEG fallback

### Icon System
- Use Lucide React icons for consistency
- Size variants: 16px, 20px, 24px, 32px
- Color: Inherit from parent or use semantic colors

### File Structure
```
public/
├── sponsors/
│   ├── [sponsor-slug]/
│   │   ├── logo.svg
│   │   ├── logo-fallback.png
│   │   ├── video-thumbnail.webp
│   │   └── video-thumbnail.jpg
│   └── placeholders/
│       ├── company-logo.svg
│       └── video-thumbnail.jpg
```

---

## Brand Theming System

### Sponsor Brand Integration
```typescript
interface SponsorBrandColors {
  primary: string     // Main brand color
  secondary?: string  // Accent color  
  text?: string      // Text override color
}

// CSS Custom Properties for theming
const applyBrandTheme = (colors: SponsorBrandColors) => ({
  '--sponsor-primary': colors.primary,
  '--sponsor-secondary': colors.secondary || colors.primary,
  '--sponsor-text': colors.text || 'inherit'
});
```

### Brand-Aware Components
- Engagement Activity: Uses sponsor primary color for background gradient
- CTA Buttons: Option to use sponsor colors while maintaining accessibility
- Tier Badges: Sponsor color accents where appropriate

### Accessibility Compliance
- Minimum contrast ratio: 4.5:1 for normal text
- Color-blind friendly: Never rely solely on color for information
- Focus indicators: 3px solid outline with 2px offset
- Touch targets: Minimum 48px × 48px

---

## Performance Specifications

### Loading Optimization
- **Lazy Loading:** All images and video embeds below the fold
- **Code Splitting:** Separate chunks for deluxe vs standard booth components
- **Progressive Enhancement:** Core content loads first, enhancements follow

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5 seconds
- **FID (First Input Delay):** < 100ms  
- **CLS (Cumulative Layout Shift):** < 0.1

### Bundle Size Targets
- **Initial JS Bundle:** < 50KB gzipped
- **CSS Bundle:** < 20KB gzipped
- **Image Optimization:** 85% quality WebP with fallbacks

---

## Development Guidelines

### Component Patterns
- Use composition over inheritance for booth layouts
- Implement error boundaries for embed content
- Follow existing project's TypeScript patterns
- Maintain consistency with current component API design

### Testing Requirements
- Unit tests for all interactive components
- Visual regression tests for booth layouts
- Accessibility testing with axe-core
- Performance testing with Lighthouse CI

### Documentation Standards
- JSDoc comments for all component interfaces
- Storybook stories for component variations
- README with setup and customization instructions

This design specification document provides the technical foundation needed to implement the booth system while maintaining consistency with the existing myBlueprint Career Launch design system.