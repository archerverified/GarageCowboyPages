# Garage Cowboy Homepage - Dynamic Staging Implementation Plan

## Executive Summary

This document outlines the implementation strategy for converting the static Figma export into a dynamic, production-ready staging environment with content management capabilities, responsive design, and modular architecture.

---

## Table of Contents

1. [Current State Analysis](#current-state-analysis)
2. [Architecture Overview](#architecture-overview)
3. [Implementation Phases](#implementation-phases)
4. [Component Structure](#component-structure)
5. [Data Layer Design](#data-layer-design)
6. [State Management](#state-management)
7. [Responsive Strategy](#responsive-strategy)
8. [Content Management](#content-management)
9. [API Integration Points](#api-integration-points)
10. [Environment Configuration](#environment-configuration)
11. [Testing Strategy](#testing-strategy)
12. [Deployment Plan](#deployment-plan)

---

## Current State Analysis

### Existing Structure Issues

```
❌ Problems:
- Heavy absolute positioning (not responsive)
- Hardcoded content in components
- Non-semantic component names (Container1, Frame2)
- Deeply nested structure (Container → Container1 → Container2...)
- Fixed pixel widths (w-[954px], w-[1292px])
- No separation of data and presentation
- No state management
- No form validation
- No error handling
- No loading states
```

### Identified Sections

```
✅ Main Sections:
1. Header
   - Logo (414px × 153px)
   - Emergency badge
   - Phone number with CTA

2. Navigation Bar
   - Menu items (Home, About, Services, etc.)
   - Dropdown indicators
   - Social media links (Google, Facebook, Yelp, Maps)
   - CTA Button (Schedule Free Inspection)

3. Hero Section
   - Background image (garage door texture)
   - Headline text (multi-line, styled)
   - Phone CTA button

4. Contact Form
   - 4-column layout
   - Fields: Name*, Phone*, Email, Zip, Message
   - Submit button
   - Required field indicators
   - "Powered by Google" badge

5. Testimonials Section
   - Carousel/slider
   - Quote text
   - Attribution
   - Verified badge
   - Pagination dots
   - Navigation arrows

6. Services Grid (implied from images)
   - Service cards with images
   - 8+ service types

7. Footer/Contact (structure analysis needed)
```

---

## Architecture Overview

### High-Level Structure

```
┌─────────────────────────────────────────┐
│         Environment Config              │
│    (staging/production/local)           │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│         Content Management Layer        │
│  (JSON/API/CMS - Configurable Content)  │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│         State Management Layer          │
│    (Forms, UI State, User Actions)      │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│         Component Layer                 │
│  (Modular, Reusable, Responsive)        │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│         Design System Layer             │
│    (Tokens, Utilities, Themes)          │
└─────────────────────────────────────────┘
```

### Technology Stack

```typescript
// Core
- React 18+ (with hooks)
- TypeScript (type safety)
- Tailwind CSS v4 (styling)

// State Management
- React Hook Form (forms)
- Zustand or Context API (global state)

// Data Fetching (if needed)
- React Query / TanStack Query

// Animations
- Motion/React (Framer Motion)
- React Slick (carousel)

// Validation
- Zod (schema validation)

// Utilities
- clsx / tailwind-merge (class management)
- date-fns (if needed for timestamps)
```

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
**Goal:** Set up architecture and core infrastructure

```
Tasks:
□ Create folder structure
□ Set up environment configuration system
□ Implement design tokens (already complete)
□ Create base layout components
□ Set up routing (if multi-page)
□ Configure build pipeline
□ Set up ESLint/Prettier
□ Create development environment
```

**Deliverables:**
- `/src` folder structure
- Environment config files
- Base component templates
- Dev server running

---

### Phase 2: Data Layer (Week 1-2)
**Goal:** Separate content from presentation

```
Tasks:
□ Create content schema/types
□ Build JSON data files
□ Create data hooks/fetchers
□ Implement content validation
□ Set up mock API endpoints
□ Create CMS adapter interfaces
```

**Deliverables:**
- `/data` folder with JSON files
- TypeScript interfaces
- Data fetching hooks
- API mock server (optional)

---

### Phase 3: Core Components (Week 2-3)
**Goal:** Build modular, reusable components

```
Tasks:
□ Header component with props
□ Navigation component (responsive)
□ Hero section (dynamic content)
□ Contact form (with validation)
□ Testimonial carousel
□ Service card grid
□ Footer component
□ CTA buttons (reusable)
□ Form inputs (reusable)
```

**Deliverables:**
- `/components` folder
- Storybook/component docs
- Unit tests

---

### Phase 4: Responsive Design (Week 3)
**Goal:** Make design work on all devices

```
Tasks:
□ Mobile layout (< 768px)
□ Tablet layout (768px - 1024px)
□ Desktop layout (> 1024px)
□ Touch-friendly interactions
□ Mobile navigation (hamburger)
□ Form layout adaptation
□ Image optimization/srcsets
□ Performance optimization
```

**Deliverables:**
- Responsive components
- Mobile-first CSS
- Performance metrics

---

### Phase 5: Interactivity & State (Week 4)
**Goal:** Add dynamic behavior

```
Tasks:
□ Form submission logic
□ Form validation (client-side)
□ Carousel functionality
□ Navigation dropdowns (if any)
□ Modal/popup systems
□ Loading states
□ Error handling
□ Success messages
□ Analytics tracking points
```

**Deliverables:**
- Interactive components
- State management setup
- Error boundaries

---

### Phase 6: Integration & Testing (Week 4-5)
**Goal:** Connect to backend and test

```
Tasks:
□ API integration
□ Form submission endpoint
□ Environment-specific configs
□ E2E testing
□ Accessibility audit
□ Browser compatibility testing
□ Performance optimization
□ SEO optimization
```

**Deliverables:**
- Integrated staging site
- Test reports
- Documentation

---

### Phase 7: Deployment & Monitoring (Week 5)
**Goal:** Deploy to staging and set up monitoring

```
Tasks:
□ Set up staging environment
□ Configure CI/CD pipeline
□ Set up monitoring (errors, performance)
□ Configure analytics
□ Set up A/B testing framework (optional)
□ Documentation for stakeholders
□ Training materials
```

**Deliverables:**
- Live staging URL
- Deployment documentation
- Monitoring dashboard

---

## Component Structure

### Folder Organization

```
src/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── EmergencyBadge.tsx
│   │   │   ├── PhoneContact.tsx
│   │   │   └── index.ts
│   │   ├── Navigation/
│   │   │   ├── Navigation.tsx
│   │   │   ├── NavMenu.tsx
│   │   │   ├── NavItem.tsx
│   │   │   ├── SocialLinks.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── index.ts
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── index.ts
│   ├── sections/
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroHeadline.tsx
│   │   │   └── index.ts
│   │   ├── ContactFormSection/
│   │   │   ├── ContactFormSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── index.ts
│   │   ├── TestimonialsSection/
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TestimonialCarousel.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── index.ts
│   │   └── ServicesSection/
│   │       ├── ServicesSection.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ServiceGrid.tsx
│   │       └── index.ts
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── CTAButton.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   └── index.ts
│   │   ├── Carousel/
│   │   │   ├── Carousel.tsx
│   │   │   ├── CarouselDots.tsx
│   │   │   ├── CarouselArrows.tsx
│   │   │   └── index.ts
│   │   └── Card/
│   │       ├── Card.tsx
│   │       └── index.ts
│   └── icons/
│       ├── PhoneIcon.tsx
│       ├── ArrowIcon.tsx
│       └── index.ts
├── data/
│   ├── navigation.json
│   ├── testimonials.json
│   ├── services.json
│   ├── contact.json
│   └── site-config.json
├── hooks/
│   ├── useFormSubmit.ts
│   ├── useCarousel.ts
│   ├── useResponsive.ts
│   └── useContent.ts
├── lib/
│   ├── api.ts
│   ├── validation.ts
│   └── utils.ts
├── types/
│   ├── content.ts
│   ├── components.ts
│   └── api.ts
├── config/
│   ├── env.ts
│   ├── features.ts
│   └── analytics.ts
└── App.tsx
```

---

## Data Layer Design

### Content Schema

```typescript
// types/content.ts

export interface SiteConfig {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceArea: string;
  socialLinks: SocialLink[];
  emergencyBadge: {
    enabled: boolean;
    imageUrl: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
  icon?: string;
  isExternal?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  verified: boolean;
  date?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  featured?: boolean;
}

export interface HeroContent {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaPhone: string;
  backgroundImage: string;
}

export interface FormConfig {
  title: string;
  subtitle: string;
  fields: FormField[];
  submitText: string;
  successMessage: string;
  errorMessage: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required: boolean;
  validation?: ValidationRule[];
}
```

### Sample Data Files

```json
// data/site-config.json
{
  "name": "Garage Cowboy",
  "phone": "(871) 256-0122",
  "email": "info@garagecowboy.com",
  "serviceArea": "Dallas-Fort Worth (DFW) & ALL surrounding cities",
  "emergencyBadge": {
    "enabled": true,
    "imageUrl": "/images/emergency-badge.png"
  },
  "socialLinks": [
    {
      "platform": "google",
      "url": "https://google.com",
      "icon": "/images/google.png"
    },
    {
      "platform": "facebook",
      "url": "https://facebook.com",
      "icon": "/images/facebook.png"
    },
    {
      "platform": "yelp",
      "url": "https://yelp.com",
      "icon": "/images/yelp.png"
    },
    {
      "platform": "google-maps",
      "url": "https://maps.google.com",
      "icon": "/images/google-maps.png"
    }
  ]
}
```

```json
// data/navigation.json
{
  "mainMenu": [
    {
      "id": "home",
      "label": "Home",
      "href": "/",
      "active": true
    },
    {
      "id": "about",
      "label": "About Us",
      "href": "/about-us",
      "isExternal": true
    },
    {
      "id": "services",
      "label": "Services",
      "href": "/services",
      "children": [
        {
          "id": "broken-spring",
          "label": "Broken Spring Repair",
          "href": "/services/broken-spring"
        },
        {
          "id": "opener-repair",
          "label": "Opener Repair",
          "href": "/services/opener-repair"
        }
      ]
    },
    {
      "id": "texas",
      "label": "Texas",
      "href": "/texas"
    },
    {
      "id": "residential",
      "label": "Residential",
      "href": "/residential"
    },
    {
      "id": "commercial",
      "label": "Commercial",
      "href": "/commercial"
    }
  ]
}
```

```json
// data/testimonials.json
{
  "testimonials": [
    {
      "id": "1",
      "quote": "Deno and crew did a great job. They arrived on time and finished in a timely manner. Great price, professional and courteous. Would highly recommend his company.",
      "author": "T. Bradley",
      "verified": true,
      "rating": 5
    },
    {
      "id": "2",
      "quote": "Great price, professional and courteous.",
      "author": "T. Bradley",
      "verified": true,
      "rating": 5
    }
  ],
  "settings": {
    "autoplay": true,
    "autoplaySpeed": 5000,
    "showNavigation": true,
    "showPagination": true
  }
}
```

```json
// data/services.json
{
  "services": [
    {
      "id": "broken-spring",
      "title": "Broken Spring Repair",
      "description": "Fast and reliable spring replacement service",
      "imageUrl": "/images/broken-spring-repair.jpg",
      "featured": true
    },
    {
      "id": "opener-repair",
      "title": "Opener Repair & Installation",
      "description": "Expert garage door opener services",
      "imageUrl": "/images/opener-repair-installation.jpg",
      "featured": true
    },
    {
      "id": "door-off-track",
      "title": "Door Off Track",
      "description": "Quick door realignment services",
      "imageUrl": "/images/door-off-track.jpg",
      "featured": true
    },
    {
      "id": "broken-cable",
      "title": "Broken Cable Repair",
      "description": "Safe cable replacement and repair",
      "imageUrl": "/images/broken-cable-repair.jpg",
      "featured": false
    },
    {
      "id": "new-door",
      "title": "New Door Installation",
      "description": "Professional door installation services",
      "imageUrl": "/images/new-door-installation.jpg",
      "featured": true
    },
    {
      "id": "remote-repair",
      "title": "Remote Repair & Programming",
      "description": "Remote troubleshooting and setup",
      "imageUrl": "/images/remote-repair-program.jpg",
      "featured": false
    },
    {
      "id": "roller-repair",
      "title": "Garage Door Roller Repair",
      "description": "Roller replacement and maintenance",
      "imageUrl": "/images/garage-door-roller-repair.jpg",
      "featured": false
    }
  ]
}
```

```json
// data/hero.json
{
  "headline": "Same-day Garage Door Repair across DALLAS-FORT WORTH (DFW) & ALL surrounding cities",
  "highlightedText": "Same-day Garage Door Repair",
  "ctaText": "Contact Us Today",
  "ctaPhone": "(871) 256-0122",
  "backgroundImage": "/images/background-top.png"
}
```

```json
// data/contact-form.json
{
  "title": "Send us a message & GET a FREE estimate within 24 hours",
  "subtitle": "",
  "fields": [
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "placeholder": "Name",
      "required": true,
      "gridColumn": 1
    },
    {
      "name": "email",
      "label": "Email Address",
      "type": "email",
      "placeholder": "Email Address",
      "required": false,
      "gridColumn": 1
    },
    {
      "name": "phone",
      "label": "Phone Number",
      "type": "tel",
      "placeholder": "Phone Number",
      "required": true,
      "gridColumn": 2
    },
    {
      "name": "zip",
      "label": "Zip Code",
      "type": "text",
      "placeholder": "Zip Code",
      "required": false,
      "gridColumn": 2
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "placeholder": "Type your message...",
      "required": false,
      "gridColumn": 3
    }
  ],
  "submitText": "SUBMIT",
  "successMessage": "Thank you! We'll contact you within 24 hours.",
  "errorMessage": "Something went wrong. Please try again.",
  "requiredLabel": "*Required",
  "poweredBy": "Powered by Google"
}
```

---

## State Management

### Form State Management

```typescript
// hooks/useFormSubmit.ts
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  phone: z.string().regex(/^\(\d{3}\)\s\d{3}-\d{4}$/, 'Invalid phone format'),
  zip: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      zip: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    submitStatus,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
```

### Carousel State

```typescript
// hooks/useCarousel.ts
import { useState, useCallback, useEffect } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export function useCarousel({ 
  totalSlides, 
  autoplay = false, 
  autoplaySpeed = 5000 
}: UseCarouselOptions) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index % totalSlides);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!autoplay || isPaused) return;

    const interval = setInterval(nextSlide, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, isPaused, nextSlide]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
  };
}
```

### Global Site State (Optional)

```typescript
// store/siteStore.ts
import { create } from 'zustand';

interface SiteState {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  
  currentSection: string;
  setCurrentSection: (section: string) => void;
  
  formSubmitted: boolean;
  setFormSubmitted: (submitted: boolean) => void;
}

export const useSiteStore = create<SiteState>((set) => ({
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  
  currentSection: 'hero',
  setCurrentSection: (section) => set({ currentSection: section }),
  
  formSubmitted: false,
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),
}));
```

---

## Responsive Strategy

### Breakpoint System

```typescript
// hooks/useResponsive.ts
import { useState, useEffect } from 'react';
import { breakpoints } from '@/styles/design-tokens';

export function useResponsive() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowWidth < breakpoints.values.mobile,
    isTablet: windowWidth >= breakpoints.values.mobile && windowWidth < breakpoints.values.desktop,
    isDesktop: windowWidth >= breakpoints.values.desktop,
    width: windowWidth,
  };
}
```

### Layout Transformations

```
Desktop (1920px)          Tablet (768-1024px)       Mobile (<768px)
┌─────────────────┐       ┌──────────────┐          ┌────────┐
│ Logo  Emergency │       │ Logo         │          │  Logo  │
│       Badge     │       │ Emergency    │          │ Menu   │
│     Phone       │       │ Phone        │          └────────┘
├─────────────────┤       ├──────────────┤          ┌────────┐
│ Nav Nav Nav Nav │       │ ☰ Menu       │          │ Hero   │
│ Social  CTA     │       │ Social CTA   │          │ Text   │
├─────────────────┤       ├──────────────┤          │ Phone  │
│                 │       │              │          └────────┘
│   Hero Text     │       │  Hero Text   │          ┌────────┐
│                 │       │              │          │ Form   │
├─────┬─────┬─────┤       ├──────┬───────┤          │ Stack  │
│Form │Form │Form │       │ Form │ Form  │          │ Vert.  │
│Col1 │Col2 │Col3 │       │ Col  │ Col   │          └────────┘
└─────┴─────┴─────┘       └──────┴───────┘          ┌────────┐
                                                     │ Testi. │
                                                     │ Slider │
                                                     └────────┘
```

### Responsive Component Example

```tsx
// components/sections/ContactFormSection/ContactForm.tsx
import { useResponsive } from '@/hooks/useResponsive';

export function ContactForm() {
  const { isMobile, isTablet } = useResponsive();

  const gridLayout = isMobile 
    ? 'grid-cols-1' 
    : isTablet 
    ? 'grid-cols-2' 
    : 'grid-cols-4';

  return (
    <form className={`grid ${gridLayout} gap-6`}>
      {/* Form fields */}
    </form>
  );
}
```

---

## Content Management

### Content Loading Strategy

```typescript
// hooks/useContent.ts
import { useState, useEffect } from 'react';

export function useContent<T>(contentPath: string): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        
        // In development: load from JSON files
        if (process.env.NODE_ENV === 'development') {
          const response = await fetch(`/data/${contentPath}.json`);
          const json = await response.json();
          setData(json);
        } 
        // In production: load from API/CMS
        else {
          const response = await fetch(`/api/content/${contentPath}`);
          const json = await response.json();
          setData(json);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [contentPath]);

  return { data, loading, error };
}
```

### CMS Integration Points

```typescript
// lib/cms.ts
/**
 * CMS Adapter Interface
 * Allows easy integration with various CMS platforms
 */

export interface CMSAdapter {
  getSiteConfig(): Promise<SiteConfig>;
  getNavigation(): Promise<NavigationItem[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getServices(): Promise<Service[]>;
  getHeroContent(): Promise<HeroContent>;
  getFormConfig(): Promise<FormConfig>;
}

// Example: Contentful Adapter
export class ContentfulAdapter implements CMSAdapter {
  async getSiteConfig() {
    // Fetch from Contentful
  }
  // ... other methods
}

// Example: Sanity Adapter
export class SanityAdapter implements CMSAdapter {
  async getSiteConfig() {
    // Fetch from Sanity
  }
  // ... other methods
}

// Factory function
export function createCMSAdapter(type: 'json' | 'contentful' | 'sanity'): CMSAdapter {
  switch (type) {
    case 'contentful':
      return new ContentfulAdapter();
    case 'sanity':
      return new SanityAdapter();
    default:
      return new JSONAdapter(); // Default local JSON
  }
}
```

---

## API Integration Points

### Form Submission API

```typescript
// app/api/contact/route.ts (Next.js App Router example)
import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional(),
  phone: z.string(),
  zip: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Send to email service (SendGrid, Mailgun, etc.)
    await sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: 'New Contact Form Submission',
      data,
    });

    // Save to database
    await saveToDatabase(data);

    // Send to CRM (optional)
    await sendToCRM(data);

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid form data' },
      { status: 400 }
    );
  }
}
```

### Analytics Tracking

```typescript
// lib/analytics.ts
export const analytics = {
  trackPageView(pageName: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
      });
    }
  },

  trackFormSubmit(formName: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: formName,
      });
    }
  },

  trackPhoneClick(phone: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        phone_number: phone,
      });
    }
  },

  trackCTAClick(ctaName: string, location: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_name: ctaName,
        cta_location: location,
      });
    }
  },
};
```

---

## Environment Configuration

### Environment Files

```bash
# .env.local (local development)
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_CMS_TYPE=json
NEXT_PUBLIC_ENVIRONMENT=local
CONTACT_EMAIL=dev@localhost
ENABLE_ANALYTICS=false
```

```bash
# .env.staging
NEXT_PUBLIC_API_URL=https://staging-api.garagecowboy.com
NEXT_PUBLIC_CMS_TYPE=contentful
NEXT_PUBLIC_ENVIRONMENT=staging
CONTACT_EMAIL=staging@garagecowboy.com
ENABLE_ANALYTICS=true
CONTENTFUL_SPACE_ID=xxx
CONTENTFUL_ACCESS_TOKEN=xxx
```

```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.garagecowboy.com
NEXT_PUBLIC_CMS_TYPE=contentful
NEXT_PUBLIC_ENVIRONMENT=production
CONTACT_EMAIL=info@garagecowboy.com
ENABLE_ANALYTICS=true
GA_TRACKING_ID=UA-XXXXXXXXX-X
```

### Configuration File

```typescript
// config/env.ts
export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  cmsType: (process.env.NEXT_PUBLIC_CMS_TYPE as 'json' | 'contentful' | 'sanity') || 'json',
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'local',
  enableAnalytics: process.env.ENABLE_ANALYTICS === 'true',
  gaTrackingId: process.env.GA_TRACKING_ID,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isStaging: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging',
} as const;
```

### Feature Flags

```typescript
// config/features.ts
export const features = {
  showEmergencyBadge: true,
  enableTestimonialCarousel: true,
  enableFormValidation: true,
  showSocialLinks: true,
  enableMobileMenu: true,
  enableA11yMode: false,
  enableDarkMode: false,
  
  // Environment-specific
  showDebugInfo: process.env.NODE_ENV === 'development',
  enableMockAPI: process.env.NEXT_PUBLIC_ENVIRONMENT === 'local',
} as const;
```

---

## Testing Strategy

### Unit Tests

```typescript
// components/ui/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant styles', () => {
    const { container } = render(<Button variant="primary">Click Me</Button>);
    expect(container.firstChild).toHaveClass('gc-button-primary');
  });
});
```

### Integration Tests

```typescript
// components/sections/ContactFormSection/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('submits form with valid data', async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: '(123) 456-7890' },
    });
    
    fireEvent.click(screen.getByText(/submit/i));
    
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it('shows validation errors for invalid data', async () => {
    render(<ContactForm />);
    
    fireEvent.click(screen.getByText(/submit/i));
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });
});
```

### E2E Tests (Playwright/Cypress)

```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display all sections', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('heading', { name: /same-day/i })).toBeVisible();
    await expect(page.locator('form')).toBeVisible();
  });

  test('should submit contact form', async ({ page }) => {
    await page.goto('/');
    
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="phone"]', '(123) 456-7890');
    await page.click('button[type="submit"]');
    
    await expect(page.getByText(/thank you/i)).toBeVisible();
  });

  test('should navigate carousel', async ({ page }) => {
    await page.goto('/');
    
    const nextButton = page.locator('[data-carousel-next]');
    await nextButton.click();
    
    await expect(page.locator('[data-carousel-slide="1"]')).toBeVisible();
  });
});
```

### Accessibility Tests

```typescript
// a11y/homepage.test.ts
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import { HomePage } from '@/components/pages/HomePage';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<HomePage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Deployment Plan

### CI/CD Pipeline

```yaml
# .github/workflows/staging.yml
name: Deploy to Staging

on:
  push:
    branches: [develop]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Run linting
        run: npm run lint
        
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_ENVIRONMENT: staging
          
      - name: Deploy to Staging
        run: npm run deploy:staging
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

### Deployment Checklist

```
Pre-Deployment:
□ Run all tests (unit, integration, e2e)
□ Run accessibility audit
□ Run performance audit (Lighthouse)
□ Review environment variables
□ Test on multiple browsers
□ Test on mobile devices
□ Review SEO meta tags
□ Check for console errors
□ Verify analytics setup
□ Test form submissions
□ Verify API endpoints

Deployment:
□ Backup current production (if applicable)
□ Deploy to staging
□ Smoke test staging environment
□ Run E2E tests on staging
□ Get stakeholder approval
□ Deploy to production
□ Monitor error logs
□ Verify analytics tracking

Post-Deployment:
□ Verify all pages load
□ Test critical user flows
□ Monitor performance metrics
□ Check error tracking
□ Verify form submissions work
□ Test on production devices
□ Update documentation
```

---

## Success Metrics

### Performance Targets

```
Lighthouse Scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

Core Web Vitals:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Additional Metrics:
- Time to Interactive: < 3.5s
- First Contentful Paint: < 1.8s
- Bundle Size: < 200KB (gzipped)
```

### Business Metrics

```
User Engagement:
- Form submission rate: Track baseline
- Phone click-through rate: Track baseline
- CTA click rate: Track baseline
- Bounce rate: < 50%
- Average session duration: > 1 minute

Technical Metrics:
- Uptime: > 99.9%
- Error rate: < 0.1%
- API response time: < 500ms
- Build time: < 5 minutes
```

---

## Timeline Summary

```
Week 1: Foundation & Data Layer
Week 2: Core Components Development
Week 3: Responsive Design Implementation
Week 4: Interactivity & State Management
Week 5: Integration, Testing & Deployment

Total: 5 weeks for MVP
Additional: 1-2 weeks for iterations and polish
```

---

## Risk Assessment

### High Priority Risks

```
1. Absolute Positioning Complexity
   Risk: Hard to make responsive
   Mitigation: Redesign with flexbox/grid early

2. Content Loading Performance
   Risk: Slow initial page load
   Mitigation: Code splitting, lazy loading, image optimization

3. Form Submission Reliability
   Risk: Lost form submissions
   Mitigation: Client-side storage, retry logic, monitoring

4. Browser Compatibility
   Risk: Layout breaks in older browsers
   Mitigation: Progressive enhancement, polyfills, testing matrix
```

### Medium Priority Risks

```
1. CMS Integration Complexity
   Risk: Delays in content updates
   Mitigation: Mock data layer, adapter pattern

2. Analytics Integration
   Risk: Missing tracking data
   Mitigation: Test tracking in staging, use GTM

3. Mobile Performance
   Risk: Poor mobile experience
   Mitigation: Mobile-first approach, performance budgets
```

---

## Next Steps

1. **Review and approve this plan** with stakeholders
2. **Set up development environment** and repository
3. **Begin Phase 1: Foundation** (folder structure, tokens)
4. **Create data schema** and sample JSON files
5. **Build first component** (Header) as proof of concept
6. **Iterate based on feedback**

---

## Appendix

### Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run lint         # Run linter
npm run format       # Format code

# Deployment
npm run deploy:staging     # Deploy to staging
npm run deploy:production  # Deploy to production

# Utilities
npm run analyze      # Analyze bundle size
npm run lighthouse   # Run Lighthouse audit
npm run a11y         # Run accessibility tests
```

### Resources

- Design Tokens: `/styles/design-tokens.ts`
- Design System Rules: `/design-system-rules.md`
- Token Usage Guide: `/DESIGN_TOKENS_USAGE.md`
- Figma Design: [Link to Figma]
- API Documentation: [To be created]
- Deployment Docs: [To be created]

---

**Document Version:** 1.0  
**Last Updated:** January 2, 2026  
**Status:** Ready for Review
