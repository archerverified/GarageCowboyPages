# Garage Cowboy Page Templates Documentation

## Overview

This document provides comprehensive information about the 5 master page templates created for the Garage Cowboy website. All templates follow the same design framework, using consistent design tokens, components, and patterns established in the homepage.

---

## Table of Contents

1. [Page Templates Overview](#page-templates-overview)
2. [Design Consistency](#design-consistency)
3. [Component Reuse](#component-reuse)
4. [Content Management](#content-management)
5. [Page-Specific Features](#page-specific-features)
6. [Implementation Guide](#implementation-guide)
7. [Customization](#customization)

---

## Page Templates Overview

### 1. About Us (`/pages/AboutUs.tsx`)

**Purpose:** Tell the company story, showcase team, and build trust

**Key Sections:**
- Hero with company tagline
- Company story (text + image)
- Core values (3-column grid)
- Team members (4-column grid)
- Certifications & awards
- CTA section

**Content File:** `/data/about-us.json`

**Unique Features:**
- Team member cards with photos
- Values showcase with icons
- Awards/certifications grid
- Split content/image layout

---

### 2. Services (`/pages/Services.tsx`)

**Purpose:** Comprehensive service catalog with filtering and detailed information

**Key Sections:**
- Hero with service overview
- Category filter buttons
- Services grid (filterable)
- Emergency service banner
- Service process steps
- Warranty information

**Content File:** `/data/services-page.json`

**Unique Features:**
- Interactive category filtering
- Service cards with pricing
- Feature lists with checkmarks
- Popular service badges
- 4-step process visualization

---

### 3. Texas (`/pages/Texas.tsx`)

**Purpose:** Location-specific landing page for Texas service areas

**Key Sections:**
- Hero with Texas map background
- Coverage statistics
- Primary service cities grid
- Additional cities list
- Interactive map embed
- Local testimonials
- Contact form

**Content File:** `/data/texas-page.json`

**Unique Features:**
- City-specific service cards
- Interactive Google Maps embed
- Location-based testimonials
- Coverage area statistics
- County information

---

### 4. Residential (`/pages/Residential.tsx`)

**Purpose:** Showcase residential-specific services and solutions

**Key Sections:**
- Hero with residential focus
- Key benefits (4 icons)
- Residential services grid
- Common problems & solutions
- Before/after gallery
- Homeowner tips
- Warranty information
- Contact form

**Content File:** `/data/residential-page.json`

**Unique Features:**
- Problem-solution format
- Before/after image comparisons
- Homeowner maintenance tips
- Residential-specific pricing
- Warranty details

---

### 5. Commercial (`/pages/Commercial.tsx`)

**Purpose:** Target commercial clients with business-focused solutions

**Key Sections:**
- Hero with business badge
- Trust indicators (statistics)
- Industries served
- Commercial services
- Why choose us (6 reasons)
- Case studies
- Maintenance plans (pricing tiers)
- Certifications
- Contact form

**Content File:** `/data/commercial-page.json`

**Unique Features:**
- Industry-specific solutions
- Business statistics/trust indicators
- Tiered maintenance plans
- Case study showcases
- OSHA/UL certifications
- 24/7 emergency emphasis

---

## Design Consistency

### Shared Design Elements

All pages use the same:

```typescript
// Design Tokens
import { colors, fonts, spacing, borderRadius, shadows } from '@/styles/design-tokens';

// Colors
--gc-brand-yellow-primary: #fec300
--gc-brand-yellow-secondary: #f7bd15
--gc-brand-dark: #35363a
--gc-brand-black: #222222

// Typography
--gc-font-hero (52px, Product Sans Black)
--gc-font-h1 (48px, Product Sans Bold)
--gc-font-h2 (28px, Product Sans Bold)
--gc-font-h3 (24px, Product Sans Bold)
--gc-font-body (15px, Product Sans Regular)

// Spacing
--gc-gap-xl: 50px
--gc-gap-lg: 32px
--gc-padding-section-x: 101px

// Shadows
--gc-shadow-button
--gc-shadow-section
--gc-text-shadow-lg
```

### Shared Components

All pages import and use:

```typescript
import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactFormSection/ContactForm';
```

---

## Component Reuse

### Layout Components

#### Header
```tsx
<Header />
```
- Logo (414px × 153px)
- Emergency badge
- Phone contact with CTA
- Consistent across all pages

#### Navigation
```tsx
<Navigation activeItem="about" />
```
- Menu items (Home, About, Services, Texas, Residential, Commercial)
- Social media links
- CTA button
- Active state highlighting
- Responsive mobile menu

#### Footer
```tsx
<Footer />
```
- Contact information
- Quick links
- Service areas
- Social links
- Copyright

#### Contact Form
```tsx
<ContactForm />
```
- Name, Email, Phone, Zip, Message fields
- Validation
- Submit handling
- Success/error states

---

### Section Patterns

#### Hero Section Pattern
```tsx
<section 
  className="relative h-[500px] flex items-center bg-cover bg-center"
  style={{ backgroundImage: `url('${content.hero.backgroundImage}')` }}
>
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <h1 className="gc-font-hero text-white mb-6">
      {content.hero.headline}
    </h1>
    <p className="gc-font-h3 text-white mb-8">
      {content.hero.subheadline}
    </p>
    <a href="#contact" className="gc-button-primary">
      {content.hero.ctaText}
    </a>
  </div>
</section>
```

#### Grid Section Pattern
```tsx
<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="gc-font-h1 text-center mb-12">
      {content.section.title}
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {content.section.items.map((item) => (
        <div key={item.id} className="bg-white p-8 rounded-lg shadow-lg">
          {/* Card content */}
        </div>
      ))}
    </div>
  </div>
</section>
```

#### CTA Section Pattern
```tsx
<section 
  className="py-16 px-4"
  style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="gc-font-h1 text-[var(--gc-brand-black)] mb-6">
      {content.cta.title}
    </h2>
    <a href={`tel:${content.cta.phone}`} className="gc-button-primary">
      {content.cta.buttonText}
    </a>
  </div>
</section>
```

---

## Content Management

### Data Structure

Each page has a corresponding JSON file:

```
/data/
├── about-us.json
├── services-page.json
├── texas-page.json
├── residential-page.json
└── commercial-page.json
```

### Content Loading

All pages use the `useContent` hook:

```typescript
import { useContent } from '@/hooks/useContent';
import type { AboutUsContent } from '@/types/content';

const { data: content, loading } = useContent<AboutUsContent>('about-us');
```

### Type Safety

All content structures are fully typed:

```typescript
// /types/content.ts
export interface AboutUsContent {
  hero: HeroContent;
  story: { ... };
  values: { ... };
  team: { ... };
  certifications: { ... };
  cta: { ... };
}
```

---

## Page-Specific Features

### About Us Page

**Team Grid:**
```tsx
<div className="grid md:grid-cols-4 gap-8">
  {content.team.members.map((member) => (
    <div key={member.id} className="text-center">
      <img src={member.photo} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>{member.bio}</p>
    </div>
  ))}
</div>
```

**Values Showcase:**
- 3-column responsive grid
- Icon + title + description
- Yellow circular icon backgrounds
- White cards with borders

---

### Services Page

**Category Filtering:**
```tsx
const [selectedCategory, setSelectedCategory] = useState<string>('all');

const filteredServices = selectedCategory === 'all'
  ? content.services
  : content.services.filter(s => s.category === selectedCategory);
```

**Service Cards:**
- Image with hover scale effect
- Featured badge overlay
- Feature list with checkmarks
- Pricing display
- CTA button

**Service Process:**
- Numbered steps (1-4)
- Circular number badges
- Clear descriptions
- 4-column responsive layout

---

### Texas Page

**Service Areas Grid:**
```tsx
// Primary Cities
<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
  {content.serviceAreas.primaryCities.cities.map((city) => (
    <div key={city.id}>
      <h4>{city.name}</h4>
      <p>{city.county} County</p>
      <button>Get Service</button>
    </div>
  ))}
</div>

// Additional Cities
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
  {content.serviceAreas.additionalCities.cities.map((city) => (
    <div key={city.id}>{city.name}</div>
  ))}
</div>
```

**Map Integration:**
```tsx
<iframe
  src={content.map.embedUrl}
  width="100%"
  height="100%"
  allowFullScreen
  loading="lazy"
/>
```

---

### Residential Page

**Before/After Gallery:**
```tsx
<div className="grid grid-cols-2">
  <div className="relative">
    <img src={item.beforeImage} alt="Before" />
    <div className="absolute top-4 left-4">
      <span>BEFORE</span>
    </div>
  </div>
  <div className="relative">
    <img src={item.afterImage} alt="After" />
    <div className="absolute top-4 right-4">
      <span>AFTER</span>
    </div>
  </div>
</div>
```

**Problem-Solution Cards:**
- Icon emoji indicators
- Issue description
- Solution highlight
- Two-column responsive layout

**Homeowner Tips:**
- Numbered list
- Actionable advice
- Easy-to-scan format

---

### Commercial Page

**Industry Grid:**
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {content.industries.items.map((industry) => (
    <div key={industry.id}>
      <div className="w-24 h-24 rounded-full">
        <img src={industry.icon} alt={industry.name} />
      </div>
      <h3>{industry.name}</h3>
      <p>{industry.description}</p>
      <ul>
        {industry.examples.map((example) => (
          <li>{example}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
```

**Maintenance Plans (Pricing Tiers):**
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {content.maintenancePlans.plans.map((plan) => (
    <div 
      key={plan.id}
      className={plan.featured ? 'scale-105 shadow-2xl' : 'shadow-lg'}
    >
      {plan.featured && <div>Most Popular</div>}
      <h3>{plan.name}</h3>
      <div>{plan.price}/{plan.period}</div>
      <ul>
        {plan.features.map((feature) => (
          <li>✓ {feature}</li>
        ))}
      </ul>
      <button>Select Plan</button>
    </div>
  ))}
</div>
```

**Case Studies:**
- Industry badge
- Challenge/Solution format
- Project images
- 3-column grid

---

## Implementation Guide

### Step 1: Set Up Files

```bash
# Create page files
/pages/AboutUs.tsx
/pages/Services.tsx
/pages/Texas.tsx
/pages/Residential.tsx
/pages/Commercial.tsx

# Create data files
/data/about-us.json
/data/services-page.json
/data/texas-page.json
/data/residential-page.json
/data/commercial-page.json

# Create type definitions
/types/content.ts
```

### Step 2: Import Shared Components

```typescript
// In each page file
import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactFormSection/ContactForm';
import { useContent } from '@/hooks/useContent';
```

### Step 3: Load Content

```typescript
const { data: content, loading } = useContent<PageContentType>('content-file-name');

if (loading || !content) {
  return <div>Loading...</div>;
}
```

### Step 4: Render Sections

```typescript
return (
  <div className="min-h-screen bg-white">
    <Header />
    <Navigation activeItem="page-name" />
    {/* Page-specific sections */}
    <Footer />
  </div>
);
```

### Step 5: Add Routing

```typescript
// In your routing configuration
import AboutUs from '@/pages/AboutUs';
import Services from '@/pages/Services';
import Texas from '@/pages/Texas';
import Residential from '@/pages/Residential';
import Commercial from '@/pages/Commercial';

const routes = [
  { path: '/about-us', component: AboutUs },
  { path: '/services', component: Services },
  { path: '/texas', component: Texas },
  { path: '/residential', component: Residential },
  { path: '/commercial', component: Commercial },
];
```

---

## Customization

### Changing Content

Edit the corresponding JSON file:

```json
// /data/about-us.json
{
  "hero": {
    "headline": "Your New Headline",
    "subheadline": "Your new subheadline"
  }
}
```

### Adding New Sections

1. Add section to data file:
```json
{
  "newSection": {
    "title": "Section Title",
    "items": [...]
  }
}
```

2. Update TypeScript interface:
```typescript
export interface PageContent {
  // ... existing
  newSection: {
    title: string;
    items: Array<...>;
  };
}
```

3. Add section to page component:
```tsx
<section className="py-20 px-4">
  <h2>{content.newSection.title}</h2>
  {/* Render items */}
</section>
```

### Styling Modifications

Use design tokens for consistency:

```tsx
// Use CSS variables
<div style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}>

// Use utility classes
<div className="gc-button-primary">

// Use imported tokens
import { colors } from '@/styles/design-tokens';
<div style={{ color: colors.brand.yellowPrimary }}>
```

### Responsive Adjustments

```tsx
// Breakpoint-based classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

// Conditional rendering
const { isMobile } = useResponsive();
{isMobile ? <MobileComponent /> : <DesktopComponent />}
```

---

## Best Practices

### 1. Maintain Consistency
- Always use design tokens
- Reuse existing components
- Follow established patterns

### 2. Content First
- Separate content from presentation
- Use JSON for all page content
- Keep components data-agnostic

### 3. Type Safety
- Define TypeScript interfaces
- Use type checking
- Document data structures

### 4. Performance
- Lazy load images
- Code split pages
- Optimize bundle size

### 5. Accessibility
- Use semantic HTML
- Include alt text
- Ensure keyboard navigation
- Maintain color contrast

### 6. SEO
- Use proper heading hierarchy
- Add meta descriptions
- Include structured data
- Optimize images

---

## Quick Reference

### Page Files
| Page | Component File | Data File | Type Interface |
|------|---------------|-----------|----------------|
| About Us | `/pages/AboutUs.tsx` | `/data/about-us.json` | `AboutUsContent` |
| Services | `/pages/Services.tsx` | `/data/services-page.json` | `ServicesPageContent` |
| Texas | `/pages/Texas.tsx` | `/data/texas-page.json` | `TexasPageContent` |
| Residential | `/pages/Residential.tsx` | `/data/residential-page.json` | `ResidentialPageContent` |
| Commercial | `/pages/Commercial.tsx` | `/data/commercial-page.json` | `CommercialPageContent` |

### Common Sections
- Hero (all pages)
- Contact Form (Texas, Residential, Commercial)
- CTA Banner (all pages)
- Grid Layouts (all pages)
- Statistics/Metrics (Texas, Commercial)

### Design Token Classes
- `gc-font-hero` - 52px hero text
- `gc-font-h1` - 48px headings
- `gc-font-h2` - 28px subheadings
- `gc-font-h3` - 24px section titles
- `gc-font-body` - 15px body text
- `gc-button-primary` - Primary CTA button
- `gc-button-submit` - Form submit button

---

## Support & Resources

- **Design System Rules:** `/design-system-rules.md`
- **Design Tokens:** `/styles/design-tokens.ts`
- **Token Usage Guide:** `/DESIGN_TOKENS_USAGE.md`
- **Implementation Plan:** `/IMPLEMENTATION_PLAN.md`

---

**Version:** 1.0  
**Last Updated:** January 2, 2026  
**Status:** Ready for Implementation
