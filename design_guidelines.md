# Trawell Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern travel platforms (Airbnb's card aesthetics, minimalist clarity) combined with clean productivity app design (Linear's typography hierarchy), optimized for conversion-focused landing page.

## Core Design Elements

### A. Color Palette
**Primary Colors** (from attachment):
- Primary Teal/Turquoise: 180 65% 45% (buttons, accents, interactive elements)
- Dark Navy/Charcoal: 210 15% 20% (text, headers)
- Light Background: 0 0% 98% (page background)
- White: 0 0% 100% (card backgrounds, sections)

**Supporting Colors**:
- Subtle Gray: 210 10% 60% (secondary text, borders)
- Success Green: 140 50% 50% (for highlights in group features)
- Soft Sky Blue: 200 40% 90% (section backgrounds for variation)

### B. Typography
**Fonts**:
- Display/Headers: 'Pacifico' (Google Fonts) - for Trawell logo and major section headings
- Body: 'Helvetica Neue', 'Helvetica', Arial, sans-serif

**Type Scale**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl (Pacifico)
- Hero Subheadline: text-xl md:text-2xl (Helvetica)
- Section Headers: text-4xl md:text-5xl (Pacifico)
- Feature Titles: text-2xl md:text-3xl font-semibold (Helvetica)
- Body Text: text-base md:text-lg leading-relaxed
- Small Text: text-sm (for captions, labels)

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl mx-auto px-6 md:px-8
- Card spacing: gap-8 md:gap-12
- Element margins: mb-8, mb-12, mb-16 for hierarchical spacing

### D. Component Library

**Hero Section**:
- Full-width gradient background (subtle teal to light blue gradient)
- Centered content with animated globe/plane visual
- Pacifico headline with main tagline
- Helvetica subheadline explaining the app
- Two CTAs: "Start Planning" (primary teal button) and "Install App" (outline button with backdrop blur)
- Hero image/animation: 3D-style globe illustration (CSS-animated rotation) with small plane icon circling it

**Timeline Section (3 Stages)**:
- Horizontal timeline with connected dots/lines
- Three cards displayed side-by-side (responsive: stack on mobile)
- Each card includes: icon, stage number, title (Pacifico), description (Helvetica)
- Stages: 1. Brainstorm, 2. Planning, 3. On-trip support
- Visual connection: dotted or solid line connecting stages
- Cards with subtle hover lift effect

**Group Travel Section**:
- Split layout: visual on left (user avatars in circular cluster), content on right
- User avatar illustrations (3-4 overlapping circles with initials/icons)
- Chat bubble elements showing collaborative planning
- Emphasize sharing and collaboration with iconography
- Background: subtle color variation to distinguish section

**Exploration Section**:
- Grid layout showcasing popular destinations
- Rating indicators (stars/badges from "fellow Trawellers")
- Location cards with images, names, ratings
- Mix of "unknown spots" and "popular destinations"
- Clean card design with hover state

**Navigation**:
- Fixed top navbar: Trawell logo (Pacifico), minimal links, subtle background
- Mobile: hamburger menu

**Footer**:
- Minimal: logo, quick links, social icons, newsletter signup
- Dark background (navy) with light text

### E. Interactive Elements

**Animations** (subtle, purposeful):
- Globe rotation: continuous slow spin (CSS keyframes)
- Plane movement: follows circular path around globe
- Card hover: subtle translate-y lift (2-4px)
- Timeline: gentle fade-in on scroll
- NO excessive animations - keep focus on content

**Buttons**:
- Primary: Solid teal background, white text, rounded-lg, hover: slight darken
- Outline: Border with teal, transparent bg with backdrop-blur when on images, hover: filled
- Size: px-8 py-3 md:px-10 md:py-4

## Images

**Hero Section**:
- Globe illustration: Use a clean, modern 3D-style globe graphic (can be CSS-created or SVG-based illustration from icon library like Heroicons/custom)
- Plane icon: Simple line-art plane icon circling the globe
- NO photographic hero image - use illustration/animation

**Exploration Section**:
- Destination preview cards: Use placeholder travel destination images (3-4 cards)
- Images: landscape-oriented, showing recognizable travel spots
- Size: aspect-ratio-16/9, object-cover for consistency

**Group Travel Section**:
- User avatars: Illustrated circular avatars (can use colored circles with initials or simple user icons)
- Chat bubbles: Visual representation of collaboration (SVG-based speech bubbles)

## Key Design Principles
1. **Minimalism**: Clean layouts, ample whitespace, focused content
2. **Readability**: Generous line-height, clear hierarchy, high contrast text
3. **Consistency**: Maintain teal/turquoise theme throughout, consistent spacing
4. **Playfulness**: Pacifico font adds personality without overwhelming
5. **Trust**: Professional Helvetica body text ensures credibility

## Accessibility
- Maintain WCAG AA contrast ratios (especially teal on white)
- Ensure buttons have clear focus states
- Readable font sizes (minimum 16px base)
- Semantic HTML structure for screen readers