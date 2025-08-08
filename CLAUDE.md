# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **myBlueprint Career Launch Virtual Expo & Booth System** - a dedicated platform for showcasing sponsor companies through immersive digital booth experiences. The system features a deluxe booth template with a bento grid layout and modular components for different content sections.

## Technology Stack

- **Framework:** Next.js 15.4.6 with TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Content Management:** TypeScript interfaces with static data files

## Project Architecture

### URL Structure
```
/expo                    # Main expo directory
/company-name           # Individual booth pages (dynamic routing)
```

### Current Directory Structure
```
src/
├── app/
│   ├── [sponsor]/             # Dynamic booth routes (e.g., /techcorp-innovations)
│   │   └── page.tsx           # Individual booth page wrapper
│   ├── globals.css            # Global styles with CSS variables
│   ├── layout.tsx             # Root layout with Inter font
│   └── page.tsx               # Homepage
├── components/
│   └── booth/
│       ├── DeluxeBooth.tsx    # Main deluxe booth component
│       └── sections/          # Modular booth sections
│           ├── BoothHeader.tsx
│           ├── CompanyStory.tsx
│           ├── ContactInfo.tsx
│           ├── EngagementActivity.tsx
│           ├── FooterCTA.tsx
│           ├── ResourceCards.tsx
│           ├── SessionSlides.tsx
│           ├── SkillsGapQuiz.tsx
│           └── VideoSection.tsx
├── data/
│   └── sample-sponsors.ts     # Sample sponsor data
├── types/
│   └── booth.ts               # TypeScript interfaces for booth data
└── styles/                    # Additional styles directory
```

## Architecture Overview

The system uses a modular approach with booth sections as separate components. The main `DeluxeBooth.tsx` component orchestrates the layout using CSS Grid (bento grid) with responsive breakpoints.

### Key Components

1. **DeluxeBooth.tsx** - Main booth container with 12-column bento grid layout
2. **Booth Sections** - Modular components in `components/booth/sections/`:
   - `VideoSection.tsx` - Multi-provider video embeds
   - `EngagementActivity.tsx` - Interactive content embeds (quizzes, activities)
   - `ResourceCards.tsx` - Downloadable resources with mosaic layout
   - `SessionSlides.tsx` - Presentation embed section
   - `CompanyStory.tsx` - Truncated company description
   - `ContactInfo.tsx` - Contact details and social links
   - `BoothHeader.tsx` - Logo, tagline, and primary branding

## Design System

### Color Palette (defined in globals.css and tailwind.config.ts)
- Primary Blue: `#0092FF` (`--primary-blue`, `primary-blue`)
- Brand Navy: `#22224C` (`--brand-navy`, `brand-navy`) 
- Background Light: `#F9FAFB` (`--background-light`, `background-light`)
- Secondary Blue Pale: `#E6F4FF` (`--secondary-blue-pale`)
- Neutral 5: `#6B7280` (`--neutral-5`)

### Typography
- Font: Inter (loaded via Next.js Google Fonts)
- System fallbacks: system-ui, sans-serif

### Layout System
- **Bento Grid**: `.expo-bento-grid` class with 12-column CSS Grid
- **Spacing**: CSS variables (--space-sm: 16px, --space-md: 24px, --space-lg: 32px)
- **Responsive**: Mobile-first with tablet (768px+) and desktop (1024px+) breakpoints

## Data Structure

TypeScript interfaces defined in `src/types/booth.ts`:

- **`DeluxeBoothData`** - Main booth interface with full feature set
- **Supporting interfaces**:
  - `VideoContent` - Video embed data (YouTube, Vimeo, Google Drive, custom)
  - `ResourceItem` - Downloadable resources
  - `EngagementActivityData` - Interactive content embeds
  - `SessionSlidesData` - Presentation slides with metadata
  - `ContactDetails` - Company contact info including headquarters and social links
  - `CTAButton` - Call-to-action button configuration
  - `BrandColors` - Sponsor brand color customization

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## Workflow Requirements

1. **Planning First:** Always write a plan to todo.md before implementation
2. **Check-in:** Verify the plan before beginning work
3. **Simple Changes:** Make minimal, focused changes that impact as little code as possible
4. **Progress Updates:** Provide high-level explanations of changes made
5. **Review:** Add summary to todo.md when tasks are complete

## Performance Targets

- **LCP:** < 2.5 seconds
- **FID:** < 100ms
- **CLS:** < 0.1

Optimization strategies include image optimization, lazy loading for embeds, code splitting, and progressive enhancement.

## Important Files

- **PRD.md**: Complete product requirements document with detailed specifications
- **design-specs.md**: Visual design specifications (currently placeholder)
- **todo.md**: Task tracking and progress documentation
