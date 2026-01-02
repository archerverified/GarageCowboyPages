# Garage Cowboy Page Integration Guidelines

## Overview

This document provides a standardized approach to integrate the new pages (About Us, Services, Texas, Residential, Commercial) from the GarageCowboyPages GitHub repo into the existing Cursor workspace. It ensures fidelity to Figma designs using design tokens, modular components, responsive layouts, and dynamic content management. Follow this for scalable, maintainable code.

**Version:** 1.0  
**Last Updated:** January 2, 2026  
**Status:** Ready for Implementation

---

## Prerequisites

- **Repo Integration**: Clone `https://github.com/archerverified/GarageCowboyPages.git`. Copy `/pages/*`, `/data/*`, `/types/content.ts` to `src/pages`, `src/data`, `src/types`.
- **Dependencies**: Install `react-router-dom@^6.26.1`, `styled-components@^6`, `react-hook-form@^7`, `zod@^3`. Run `npm i`.
- **Design Tokens**: Import from `src/styles/design-tokens.ts` or use CSS vars from `src/styles/design-tokens.css`. Update `tailwind.config.js`:
  ```js
  import type { Config } from 'tailwindcss';

  const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'gc-brand-yellow-primary': '#fec300',
          'gc-brand-yellow-secondary': '#f7bd15',
          'gc-brand-dark': '#35363a',
          'gc-brand-black': '#222222',
        },
        fontFamily: {
          sans: ['Product Sans', 'sans-serif'],
        },
        boxShadow: {
          'gc-button': '0px 5px 5px rgba(0,0,0,0.25)',
          'gc-section': '0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1)',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    darkMode: 'class',
    plugins: [],
  };

  export default config;
  
Shared Components: Use Header, Navigation (with activeItem prop), Footer, ContactForm from src/components/layout and src/components/sections.
Content Management: Pages use useContent hook for JSON loading with interfaces from src/types/content.ts.
Environment Config: Set .env per IMPLEMENTATION_PLAN.md:

NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_API_URL=http://localhost:3000

Integration Steps
Step 1: Routing Setup
@src/App.tsx
Import pages and add routes in BrowserRouter. Wrap in MainLayout. Handle 404.

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Texas from './pages/Texas';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/texas" element={<Texas />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

Step 2: Update Navigation
@src/components/layout/Navigation.tsx
Add links with active state using useLocation. Style with Tailwind.

import { Link, useLocation } from 'react-router-dom';
import { components } from '@/styles/design-tokens';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'text-[var(--gc-brand-yellow-primary)]' : 'text-white';

  return (
    <nav className="flex justify-between items-center p-4 bg-[var(--gc-brand-dark)]" style={components.navigation}>
      <ul className="flex space-x-6">
        <li><Link to="/about-us" className={isActive('/about-us')}>About Us</Link></li>
        <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
        <li><Link to="/texas" className={isActive('/texas')}>Texas</Link></li>
        <li><Link to="/residential" className={isActive('/residential')}>Residential</Link></li>
        <li><Link to="/commercial" className={isActive('/commercial')}>Commercial</Link></li>
      </ul>
      {/* Social links, CTA */}
    </nav>
  );
};

export default Navigation;

Step 3: Implement Page Components
For each page (e.g., @src/pages/AboutUs.tsx):

Use useContent<PageContentType>('data-file-name').
Render sections per PAGE_TEMPLATES_README.md and PAGES_VISUAL_GUIDE.md.
Apply tokens: bg-[var(--gc-brand-yellow-primary)], text-[var(--gc-font-hero)].
Responsive: grid grid-cols-1 md:grid-cols-3 gap-[var(--gc-gap-lg)].

Example for AboutUs.tsx:
import { useContent } from '@/hooks/useContent';
import type { AboutUsContent } from '@/types/content';

const AboutUs = () => {
  const { data: content, loading } = useContent<AboutUsContent>('about-us');
  if (loading || !content) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${content.hero.backgroundImage})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-[var(--gc-font-hero)] text-white mb-6">{content.hero.headline}</h1>
          <p className="text-[var(--gc-font-h3)] text-white mb-8">{content.hero.subheadline}</p>
          <a href="#contact" className="gc-button-primary">{content.hero.ctaText}</a>
        </div>
      </section>
      {/* Company Story: flex md:flex-row */}
      {/* Core Values: grid md:grid-cols-3 */}
      {/* Team: grid md:grid-cols-4 */}
      {/* Certifications: grid md:grid-cols-4 */}
      {/* CTA: bg-[var(--gc-brand-yellow-primary)] */}
    </main>
  );
};

export default AboutUs;

Repeat for other pages:

Services: Add useState for filtering.
Texas: Embed <iframe src={content.map.embedUrl} loading="lazy" />.
Residential: Before/after grid grid-cols-1 md:grid-cols-2.
Commercial: Plans grid md:grid-cols-3, featured scale-105 shadow-2xl.

Step 4: Add Interactivity & State

Forms: Use react-hook-form with Zod validation.
Filtering (Services): const [category, setCategory] = useState('all');.
Dark Mode: Toggle document.documentElement.classList.toggle('dark').

Step 5: Environment & Deployment

Staging: Set NEXT_PUBLIC_ENVIRONMENT=staging in .env.staging.
CI/CD: Follow IMPLEMENTATION_PLAN.md YAML for GitHub Actions.


Best Practices

Tokens Over Hardcodes: Use colors.brand.yellowPrimary instead of #fec300.
Modularity: Reuse hero/grid/CTA patterns from PAGE_TEMPLATES_README.md.
Type Safety: Extend src/types/content.ts for new interfaces.
Content Separation: Edit JSON in src/data/*; keep components data-agnostic.
Responsive Design: Mobile-first; use sm:, md:, breakpoints from tokens.
A11y: Semantic HTML, aria-label, alt text, keyboard focus.
Performance: Lazy load images/maps, code-split routes with React.lazy.
SEO: Use heading hierarchy, add meta tags via JSON.
Sync Tokens: Update design-tokens.css and .ts together.

Quick Reference Table
Page,Data File,Unique Feature,Grid Columns (Desktop)
About Us,about-us.json,Team Grid,md:4
Services,services-page.json,Filtering,md:3
Texas,texas-page.json,Map Embed,md:3-6
Residential,residential-page.json,Before/After,md:2
Commercial,commercial-page.json,Pricing Tiers,md:3

Testing

Unit: Jest for components: npm test.
Integration: Form submits, filtering.
E2E: Playwright: nav flows, interactions.
A11y: axe/jest-axe audits.
Performance: Lighthouse targets (>90 scores).


Troubleshooting

Layout Breaks: Verify flex/grid, breakpoints.
Tokens Undefined: Import design-tokens.ts; check Tailwind config.
Content Load Fails: Validate JSON with Zod; handle errors in useContent.
Responsive Issues: Emulate devices; adjust gap-[var(--gc-gap-lg)].
Dark Mode: Test dark: prefixes.

Refer to attached docs for visuals/rules. For issues, inspect console or repo commits.