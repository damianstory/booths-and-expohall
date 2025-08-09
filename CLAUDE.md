# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **myBlueprint Career Launch Virtual Expo & Booth System** - a dedicated platform for showcasing sponsor companies through immersive digital booth experiences. The system features two booth types (Deluxe and Standard) with tier-based styling (Platinum, Gold, Silver) and modular components for different content sections.

## Technology Stack

- **Framework:** Next.js 15.4.6 with TypeScript 5
- **Styling:** Tailwind CSS 3.4.1 with custom design tokens and CSS variables
- **Animation:** Framer Motion 12.23.12 for micro-interactions and state transitions
- **Icons:** Lucide React 0.469.0
- **Fonts:** Inter via Next.js Google Fonts, with Museo Sans and Open Sans custom imports
- **Linting:** ESLint 8 with Next.js core-web-vitals preset
- **Content Management:** TypeScript interfaces with static data files

## Project Architecture

### URL Structure
```
/                       # Homepage (ExpoHall with sponsor cards)
/deluxe-booth-template  # Platinum tier booth example
/gold-booth-template    # Gold tier booth example  
/silver-booth-template  # Silver tier booth example
/test                   # Test page
```

### Directory Structure
```
src/
├── app/
│   ├── deluxe-booth-template/  # Platinum tier booth demo
│   ├── gold-booth-template/    # Gold tier booth demo
│   ├── silver-booth-template/  # Silver tier booth demo
│   ├── test/                   # Test page
│   ├── globals.css             # Global styles with CSS variables
│   ├── layout.tsx              # Root layout with Inter font
│   └── page.tsx                # Homepage (ExpoHall)
├── components/
│   ├── booth/                  # Individual booth components
│   │   ├── DeluxeBooth.tsx     # Platinum tier booth (full features)
│   │   ├── StandardBooth.tsx   # Gold/Silver tier booth (simplified)
│   │   └── sections/           # Modular booth sections
│   │       ├── BoothHeader.tsx
│   │       ├── CompanyStory.tsx
│   │       ├── ContactInfo.tsx
│   │       ├── EngagementActivity.tsx
│   │       ├── FooterCTA.tsx
│   │       ├── GoogleFormEmbed.tsx
│   │       ├── ResourceCards.tsx
│   │       ├── SessionSlides.tsx
│   │       ├── SkillsGapQuiz.tsx
│   │       └── VideoSection.tsx
│   ├── expo/                   # Sponsor listing components
│   │   ├── BoothCard.tsx       # Sponsor card with tier-specific styling
│   │   ├── BoothCardSkeleton.tsx
│   │   ├── ExpoHall.tsx        # Main sponsor listing page
│   │   └── FilterBar.tsx       # Industry/pathway filtering
│   └── ui/                     # Reusable UI components
│       ├── EmptyStateIllustration.tsx
│       ├── ErrorBoundary.tsx
│       ├── LoadingSpinner.tsx
│       └── NetworkError.tsx
├── data/
│   └── sample-sponsors.ts      # Static sponsor data (10 sponsors)
└── types/
    └── booth.ts                # TypeScript interfaces for booth data
```

## Architecture Overview

### Core Application Flow
1. **Homepage (ExpoHall)** - Displays sponsor cards with advanced multi-select filtering capabilities
2. **Booth Pages** - Individual sponsor experiences (Deluxe vs Standard based on tier)
3. **Data Layer** - Static sponsor data with TypeScript interfaces

### Two-Booth System
- **DeluxeBooth** (Platinum Tier): Full-featured booth with bento grid, video, resources, interactive activities
- **StandardBooth** (Gold/Silver Tiers): Simplified booth with basic sections and Google Form embed

### Tier-Based Styling System
The `BoothCard` component uses a sophisticated tier-based styling system:
- **Platinum**: Enhanced animations, floating effects, shimmer, particle effects, larger grid span, animated gradient header text
- **Gold**: Standard animations, gradient backgrounds, medium grid span  
- **Silver**: Minimal effects, basic hover states, small grid span

### Multi-Select Filter System
The filtering system supports:
- **Industries**: Multi-select array-based filtering allowing users to select multiple industries simultaneously
- **Pathways**: Multi-select array-based filtering for educational/career pathways
- **Institution Type**: Single-select binary choice (Post-Secondary/Employers/All)
- **Prize Filter**: Toggle button for booths offering prizes
- **Filter State Management**: Uses arrays for industries/pathways, proper state tracking with filter change animations

### Key Architectural Patterns

#### Component Composition
- Booth sections are standalone, reusable components that accept sponsor data
- Each section handles its own loading states, error boundaries, and responsive behavior
- Sections communicate with parent through props, not state lifting

#### Animation Strategy
- **Framer Motion** for complex state transitions and 3D transforms
- **Pure CSS** for hover effects to avoid re-render performance issues
- **Staggered animations** on component mount based on array index
- **Hover optimization** using CSS `group` classes to prevent dual card refreshes

#### Data Flow
```
sample-sponsors.ts → ExpoHall (filtering) → BoothCard (tier styling)
sample-sponsors.ts → Booth Pages → Booth Sections (individual features)
```

## Design System

### Color Palette (defined in globals.css and tailwind.config.ts)
- Primary Blue: `#0092FF` (`--primary-blue`, `primary-blue`)
- Brand Navy: `#22224C` (`--brand-navy`, `brand-navy`) 
- Background Light: `#F9FAFB` (`--background-light`, `background-light`)
- Secondary Blue Pale: `#E6F4FF` (`--secondary-blue-pale`)
- Neutral 5: `#6B7280` (`--neutral-5`)

### Typography
- **Primary font:** Inter (loaded via Next.js Google Fonts)
- **Brand fonts:** 'Museo Sans' with 'Open Sans' fallback (custom Google Fonts)
- **System fallbacks:** system-ui, sans-serif
- **Font sizes:** Custom scale from `header-1` (4rem) to `subtitle-2` (0.625rem)
- **Font weights:** light (300), regular (400), medium (500), semibold (600), bold (700), extrabold (800), black (900)

### Layout System
- **Bento Grid**: `.expo-bento-grid` class with 12-column CSS Grid
- **Spacing**: CSS variables (--space-sm: 16px, --space-md: 24px, --space-lg: 32px)
- **Responsive**: Mobile-first with tablet (768px+) and desktop (1024px+) breakpoints
- **Grid Gaps**: Reduced horizontal gaps to prevent hover boundary issues (row gap ≠ column gap)
- **Custom easing**: `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

### Animation System  
- **Float animations**: Subtle 6-second floating with 2px movement for platinum cards
- **Particle effects**: 3 variants (particle-float-1/2/3) with staggered timing for visual depth
- **Shimmer effects**: Horizontal sweep animation on hover
- **Hover optimization**: Extended invisible hover areas (`margin: -2px; padding: 2px`) to prevent dual card refresh
- **Animated gradient text**: CSS-based animated gradient for premium tier headers using brand color variations
- **Fade-in animations**: `fadeInUp` with cubic-bezier easing for smooth entrance
- **Performance optimizations**: `backface-visibility: hidden` and `transform3d` for hardware acceleration
- **Accessibility**: Reduced motion media query support

## Data Structure

### Interface Hierarchy
- **`DeluxeBoothData`** - Full-featured booth (Platinum tier) with all sections
- **`StandardBoothData`** - Simplified booth (Gold/Silver tiers) with Google Form
- **Shared interfaces**:
  - `VideoContent` - Multi-provider video embed support
  - `ResourceItem` - Downloadable resources with type detection
  - `EngagementActivityData` - Interactive quizzes and activities
  - `SessionSlidesData` - Google Slides presentation embed
  - `ContactDetails` - Comprehensive contact information with social links
  - `CTAButton` - Flexible call-to-action configuration
  - `BrandColors` - Sponsor-specific color theming

### Sample Data Structure
- **3 Platinum tier sponsors**: TechCorp, HealthPlus, Global Finance
- **3 Gold tier sponsors**: Green Energy, Nexus Engineering, Strategy Plus  
- **4 Silver tier sponsors**: Digital Marketing Hub, EduTech, Retail Plus, Smart Manufacturing
- Each sponsor includes industry classification, pathway mapping, and post-secondary flags for filtering

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting (ESLint with Next.js core-web-vitals preset)
npm run lint
```

**Note:** No test infrastructure currently implemented. Only the 4 standard Next.js scripts are available.

## Development Patterns

### Component Enhancement Guidelines
- When enhancing BoothCard styling, always test hover behavior to prevent dual refresh issues
- Use pure CSS hover effects (`group-hover:`) over JavaScript state when possible
- For animations, prefer CSS transforms over layout-changing properties
- Test tier-specific styling across all three tiers (Platinum, Gold, Silver)

### Styling Best Practices
- **Tailwind dynamic classes**: Avoid template literals with conditionals, use complete class strings in ternary operators
- **Color consistency**: Use hex values in bracket notation `[#0092FF]` for custom colors to ensure Tailwind compilation
- **Multi-select UI**: Show active state with `bg-primary-blue text-white`, inactive with `bg-neutral-2 text-neutral-5`
- **Gradient animations**: Use CSS keyframes in `globals.css` with `background-clip: text` for animated text effects

### Animation Performance
- Platinum cards use floating CSS animations that should remain subtle (≤2px movement)
- Hover effects should only trigger on mouse enter, not on mouse exit
- Use `group` classes for nested hover effects to maintain performance
- Extended hover areas (invisible padding) prevent hover boundary issues

### Data Management
- All sponsor data lives in `sample-sponsors.ts` with typed interfaces
- Booth routing uses static paths, not dynamic routing
- Filter functionality in ExpoHall supports multi-select industries/pathways, binary institution type, and prize toggle
- Each sponsor includes `isPrize` boolean for prize filtering

### Filter Implementation Pattern
When implementing new filters:
- **Multi-select filters** (industries/pathways): Use arrays (`Industry[]`, `Pathway[]`) with `includes()` logic
- **Toggle filters** (prizes): Use boolean state with direct filtering
- **Binary filters** (institution type): Use `boolean | 'all'` for three-state logic
- **Button behavior**: Toggle items in/out of arrays, show active state when item is in array
- **"All" buttons**: Clear respective arrays to show all items

## Performance Targets

- **LCP:** < 2.5 seconds
- **FID:** < 100ms
- **CLS:** < 0.1

Optimization strategies include image optimization, lazy loading for embeds, code splitting, and progressive enhancement.

## Important Files

- **PRD.md**: Complete product requirements document with detailed specifications
- **design-specs.md**: Visual design specifications (currently placeholder)
- **todo.md**: Task tracking and progress documentation

## Configuration Files

- **next.config.js**: Empty configuration (using Next.js defaults)
- **.eslintrc.json**: Minimal config with "next/core-web-vitals" preset
- **tailwind.config.ts**: Extended color palette and typography system
- **tsconfig.json**: TypeScript config with `@/*` path alias for `./src/*`
- **postcss.config.js**: Standard Tailwind CSS and Autoprefixer setup
