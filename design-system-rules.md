# Garage Cowboy Design System Rules

## Overview
This design system defines the visual language and component patterns for the Garage Cowboy website - a professional garage door repair service platform.

---

## Color Palette

### Primary Colors
- **Brand Yellow**: `#fec300` / `#f7bd15`
  - Primary CTA buttons
  - Accent elements
  - Form backgrounds
  - Brand highlights

- **Dark Gray**: `#35363a`
  - Navigation background
  - Dark UI elements
  - Button borders
  - Text overlays

- **Black**: `#000000` / `#222` / `#303135`
  - Primary text
  - Borders
  - Icons
  - Strong emphasis

### Secondary Colors
- **White**: `#ffffff` / `#eaeaea`
  - Background
  - Light text on dark backgrounds
  - Card backgrounds
  
- **Light Gray**: `rgba(48, 49, 53, 0.75)` / `#8b8b92`
  - Placeholder text
  - Subtle borders
  - Disabled states

- **Background Overlay**: `rgba(255, 255, 255, 0.5)`
  - Form input backgrounds
  - Semi-transparent layers

### Text Colors
- **Primary Text**: `#323232` / `#222`
- **Secondary Text**: `rgba(48, 49, 53, 0.75)`
- **Light Text**: `#eaeaea` / `white`

---

## Typography

### Font Families

#### Primary Font Stack
- **Product Sans Black**: Bold headings, CTAs, emphasis
- **Product Sans Bold**: Subheadings, strong text
- **Product Sans Medium**: Body text, labels
- **Product Sans Regular**: General content
- **Product Sans Light**: Fine print, disclaimers

#### Secondary Fonts
- **PT Sans Italic**: Testimonials, quotes
- **Montserrat**:
  - Italic for specific UI elements
  - ExtraBold for strong CTAs

### Font Sizes
- **Hero Text**: `48px` - `52px`
- **Large Headings**: `24px` - `28px`
- **Body/Navigation**: `20px` - `24px`
- **Form Labels**: `13px`
- **Fine Print**: `12px`

### Text Treatments
- **Line Heights**: 
  - Headings: `26px` - `52px` (varies by size)
  - Body: `27.2px`
  - Compact: `10px` (navigation)
  
- **Letter Spacing**: `-0.32px` (for specific elements)
- **Text Shadow**: `0px 2px 2px rgba(0,0,0,0.25)` / `0px 8px 8px rgba(0,0,0,0.25)`
- **Uppercase**: Applied to navigation and CTAs

---

## Spacing System

### Gap Sizes
- **Extra Large**: `50px`
- **Large**: `32px`
- **Medium**: `24px`
- **Default**: `14px` - `15px`
- **Small**: `10px` - `12px`
- **Extra Small**: `5px`

### Padding/Margins
- **Section Padding**: `101px` (horizontal), varies vertical
- **Button Padding**: `32px` horizontal, `17px` vertical
- **Form Padding**: `10px` - `20px`
- **Input Padding**: `14px` - `17px`

---

## Border Radius

### Sizes
- **Large**: `20px` - Used for sections, major containers
- **Medium**: `10px` - `15px` - Used for buttons, cards
- **Small**: `5px` - Used for inputs, small elements

### Corner Variations
- **Top Rounded**: `rounded-tl-[20px] rounded-tr-[20px]`
- **Individual Corners**: Applied to form inputs for seamless connection

---

## Shadows

### Box Shadows
- **Button Shadow**: `0px 5px 5px 0px rgba(0,0,0,0.25)`
- **Input Shadow**: `0px 2px 4px 0px rgba(0,0,0,0.25)`
- **Submit Button**: `0px 2px 5px 0px #535458`
- **Section Shadow**: `0px 1px 0px 0px rgba(17,17,26,0.05), 0px 0px 8px 0px rgba(17,17,26,0.1)`

### Text Shadows
- **Standard**: `0px 2px 2px rgba(0,0,0,0.25)`
- **Heavy**: `0px 8px 8px rgba(0,0,0,0.25)`

---

## Borders

### Border Widths
- **Heavy**: `4px` - Section dividers, strong emphasis
- **Standard**: `3px` - Default containers
- **Medium**: `2px` - Buttons, inputs
- **Light**: `1.5px` - Subtle dividers

### Border Colors
- **Dark**: `#35363a` / `#222` / `#303135`
- **Black**: `#000000`
- **Subtle**: `#8b8b92`

### Border Styles
- **Solid**: Default
- **Border Combinations**: Top/side only borders for layered effects

---

## Components

### Buttons

#### Primary CTA Button
- **Background**: `#fec300`
- **Border**: `2px solid #35363a`
- **Border Radius**: `20px` (large) or `10px` (medium)
- **Shadow**: `0px 5px 5px 0px rgba(0,0,0,0.25)`
- **Padding**: `60px horizontal, 16px vertical`
- **Text**: Product Sans Black, `24px`, `#222`
- **Height**: `59px` (standard), `85px` (large)

#### Submit Button
- **Border**: `2px solid #35363a`
- **Border Radius**: `5px`
- **Shadow**: `0px 2px 5px 0px #535458`
- **Padding**: `32px horizontal, 17px vertical`
- **Text**: Product Sans Black, `13px`, `#303135`, uppercase
- **Max Width**: `208px`

### Navigation

#### Navigation Bar
- **Background**: `#35363a`
- **Border**: `4px solid black` (top/sides only)
- **Border Radius**: `20px` (top corners)
- **Height**: `137px`
- **Padding**: Horizontal padding `390px`

#### Navigation Items
- **Font**: Product Sans Bold, `24px`, uppercase
- **Default Color**: `white`
- **Active Color**: `#eaeaea`
- **Spacing**: `50px` gap between items
- **Line Height**: `10px`

### Form Elements

#### Text Inputs
- **Background**: `rgba(255, 255, 255, 0.5)`
- **Border**: `2px solid #303135`
- **Border Radius**: Varies by position (5px corners)
- **Shadow**: `0px 2px 4px 0px rgba(0,0,0,0.25)`
- **Padding**: `14px horizontal, 16-17px vertical`
- **Label Font**: Product Sans Medium, `13px`
- **Placeholder Color**: `rgba(48, 49, 53, 0.75)`
- **Required Indicator**: Asterisk in black

#### Textarea
- **Border**: `2px solid #222`
- **Height**: `100px`
- **Padding**: `17px`
- **Other properties**: Same as text inputs

### Cards/Sections

#### Service Cards
- **Border Radius**: `15px` (top left)
- **Image Size**: `265px × 194.63px` (max)
- **Border**: `2px` solid dark

#### Testimonial Section
- **Background**: `white`
- **Border**: `3px solid #303135`
- **Shadow**: `0px 1px 0px 0px rgba(17,17,26,0.05), 0px 0px 8px 0px rgba(17,17,26,0.1)`
- **Height**: `342px`
- **Padding**: `3px`

### Icons & Logos

#### Social Media Icons
- **Size**: `55.994px` square
- **Spacing**: Evenly distributed in header

#### Phone Icon
- **Size**: `40px` square
- **Fill**: `#222`

#### Decorative Elements
- **Arrow/Chevron**: `18px × 10.211px`
- **Color**: `rgba(247, 189, 21, 1)` (brand yellow)

---

## Layout Patterns

### Container Widths
- **Full Width**: `1920px` (max design width)
- **Content Container**: `1292px`
- **Form Container**: `1140px` (total form width)
- **Navigation**: `954px`

### Grid System
- **Form Grid**: 4 columns
  - Column 1: `285px` (Name, Email)
  - Column 2: `285px` (Phone, Zip)
  - Column 3: `342px` (Message)
  - Column 4: `228px` (Submit)
- **Gap**: `24px` between columns

### Section Heights
- **Header**: `207px`
- **Navigation**: `137px`
- **Hero Section**: `659px`
- **Form Section**: `279px`
- **Testimonial**: `342px`

---

## Imagery

### Background Patterns
- **Hero Background**: Tiled garage door texture
- **Size**: `1920px × 665.896px`
- **Position**: Top left, repeat

### Image Treatment
- **Object Fit**: Cover for backgrounds, Contain for logos
- **Border Radius**: Applied to service images
- **Aspect Ratios**: Maintain consistent proportions

---

## Animations & Interactions

### Hover States
- **Navigation Links**: Cursor pointer
- **Buttons**: Visual feedback (implied)
- **Links**: Underline or color change

### Carousel/Slider
- **Pagination Dots**: 
  - Size: `10px` square
  - Border Radius: `5px`
  - Active: `black` (100% opacity)
  - Inactive: `black` (20% opacity)
  - Gap: `12px`

### Opacity Variations
- **Inactive Elements**: `20%` opacity
- **Placeholder Text**: `75%` opacity
- **Overlays**: `50%` opacity

---

## Accessibility

### Text Contrast
- Light text on dark backgrounds: `#eaeaea` / `white` on `#35363a`
- Dark text on light backgrounds: `#222` / `#303135` on `white`
- Ensure WCAG AA compliance

### Interactive Elements
- Minimum touch target: `40px` (phone icon size)
- Clear focus states
- Descriptive labels for form inputs

### ARIA Attributes
- Hidden decorative borders: `aria-hidden="true"`
- Semantic HTML structure

---

## Brand Guidelines

### Logo Usage
- **Header Logo**: `414px × 153.719px`
- **Footer Logo**: Maintain aspect ratio
- **Clear Space**: Adequate padding around logo

### Emergency Badge
- **Size**: `209.242px × 81.354px`
- Position: Top right of header

### Tone & Voice
- Professional yet approachable
- Service-oriented language
- Emphasis on speed ("Same-day") and quality
- Local area focus (Dallas-Fort Worth)

---

## Responsive Behavior

### Breakpoints (Recommended)
- **Desktop**: `1920px` (design width)
- **Tablet**: `768px` - `1024px`
- **Mobile**: `< 768px`

### Adaptation Rules
- Stack form columns vertically on mobile
- Reduce padding/margins proportionally
- Scale font sizes appropriately
- Maintain button touch targets
- Collapse navigation to hamburger menu

---

## Special Gradients

### Text Gradient
- **Direction**: Top to bottom
- **From**: `rgba(63, 63, 63, 0.22)`
- **To**: `#000000` at `5.769%`
- **Application**: "FREE" text in CTA
- **WebKit**: `-webkit-text-fill-color: transparent`

---

## Code Patterns

### Utility Classes
- **Flex Layouts**: `content-stretch flex flex-col items-start`
- **Centering**: `translate-x-[-50%] translate-y-[-50%]`
- **Absolute Positioning**: Used extensively for precise placement
- **Text Nowrap**: Applied to preserve single-line text
- **Uppercase**: For navigation and CTAs

### Border Box Pattern
```
<div aria-hidden="true" className="absolute border-2 border-[color] border-solid inset-0 pointer-events-none rounded-[radius]" />
```

### Responsive Images
- Use `max-w-none` for precise control
- `object-50%-50%` for centering
- `pointer-events-none` for non-interactive images

---

## Content Guidelines

### Required Fields
- Marked with asterisk (`*`)
- Label: "*Required" in Product Sans Light, `12px`, `#303135`

### Testimonials
- Quote style: PT Sans Italic, `20px`
- Attribution: Product Sans Regular, `15px` dash, `20px` name
- Verified badge: `32.5px` square

### Call-to-Action Text
- **Urgency**: "Same-day", "FREE", "24 hours"
- **Location**: Specific service areas listed
- **Action Verbs**: "Call us", "Contact us", "Schedule"

---

## Component Hierarchy

1. **Header Section**: Logo, emergency contact, call button
2. **Navigation Section**: Menu items, social links, CTA button
3. **Hero Section**: Main headline, background, form
4. **Services Section**: Grid of service cards
5. **Testimonial Section**: Customer reviews with slider
6. **Footer**: Contact information, service areas

---

## Notes for Developers

- **Font Loading**: Ensure all Product Sans variants are properly loaded
- **Performance**: Optimize background images, use lazy loading
- **Forms**: Validate required fields, provide feedback
- **Accessibility**: Add proper ARIA labels, keyboard navigation
- **Browser Compatibility**: Test shadows, gradients, borders across browsers
- **Mobile First**: Build responsive from mobile up despite desktop design
