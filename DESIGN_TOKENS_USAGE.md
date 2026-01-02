# Design Tokens Usage Guide

This guide demonstrates how to use the extracted design tokens from the Garage Cowboy Figma design.

## Available Files

### 1. `/styles/design-tokens.css`
CSS custom properties (CSS variables) for use in stylesheets and Tailwind classes.

### 2. `/styles/design-tokens.ts`
TypeScript/JavaScript module for programmatic access to design tokens.

---

## CSS Usage

### Method 1: Using CSS Custom Properties

```css
/* In your component CSS */
.my-button {
  background-color: var(--gc-brand-yellow-primary);
  border: var(--gc-border-button);
  border-radius: var(--gc-radius-xl);
  box-shadow: var(--gc-shadow-button);
  padding: var(--gc-padding-button-lg-y) var(--gc-padding-button-lg-x);
}

.my-heading {
  font-family: var(--gc-font-primary-black);
  font-size: var(--gc-font-size-hero);
  line-height: var(--gc-line-height-hero);
  color: var(--gc-text-primary);
}
```

### Method 2: Using Utility Classes

```tsx
import './styles/design-tokens.css';

function MyButton() {
  return (
    <button className="gc-button-primary">
      Click Me
    </button>
  );
}

function MyHeading() {
  return (
    <h1 className="gc-font-hero">
      Welcome to Garage Cowboy
    </h1>
  );
}
```

### Method 3: Using Tailwind with CSS Variables

```tsx
function MyComponent() {
  return (
    <div className="bg-[var(--gc-brand-yellow-primary)] rounded-[var(--gc-radius-xl)]">
      <h2 className="text-[var(--gc-font-size-h2)]">Title</h2>
    </div>
  );
}
```

---

## TypeScript/JavaScript Usage

### Importing Tokens

```typescript
// Import all tokens
import tokens from '@/styles/design-tokens';

// Import specific token groups
import { colors, fonts, spacing, components } from '@/styles/design-tokens';

// Import with type definitions
import type { Color, Font } from '@/styles/design-tokens';
```

### Using in Styled Components

```typescript
import styled from 'styled-components';
import { colors, fonts, spacing, shadows, borderRadius } from '@/styles/design-tokens';

const PrimaryButton = styled.button`
  background-color: ${colors.brand.yellowPrimary};
  color: ${colors.brand.black};
  font-family: ${fonts.family.primaryBlack};
  font-size: ${fonts.size.h3};
  padding: ${spacing.padding.buttonLgY} ${spacing.padding.buttonLgX};
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.box.button};
  border: 2px solid ${colors.brand.dark};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.box.button}, 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;
```

### Using in Inline Styles

```tsx
import { colors, spacing, borderRadius } from '@/styles/design-tokens';

function MyComponent() {
  return (
    <div
      style={{
        backgroundColor: colors.brand.yellowPrimary,
        padding: spacing.padding.container,
        borderRadius: borderRadius.xl,
        color: colors.text.primary,
      }}
    >
      Content here
    </div>
  );
}
```

### Using Component Tokens

```tsx
import { components } from '@/styles/design-tokens';

function CallToAction() {
  return (
    <button
      style={{
        backgroundColor: components.button.primary.bg,
        border: components.button.primary.border,
        borderRadius: components.button.primary.radius,
        boxShadow: components.button.primary.shadow,
        padding: `${components.button.primary.paddingY} ${components.button.primary.paddingX}`,
        fontFamily: components.button.primary.fontFamily,
        fontSize: components.button.primary.fontSize,
        color: components.button.primary.color,
        textTransform: 'uppercase',
      }}
    >
      Schedule Free Inspection
    </button>
  );
}
```

### Responsive Design with Breakpoints

```typescript
import { breakpoints } from '@/styles/design-tokens';

// In a media query helper
const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
};

// Using with styled-components
const ResponsiveContainer = styled.div`
  padding: ${spacing.padding.sectionX};

  ${media.tablet} {
    padding: ${spacing.padding.container};
  }

  ${media.mobile} {
    padding: ${spacing.padding.form};
  }
`;

// Using programmatically
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoints.values.mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
```

---

## Common Patterns

### Creating a Button Component

```tsx
import { components } from '@/styles/design-tokens';

interface ButtonProps {
  variant?: 'primary' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  const styles = components.button[variant];
  
  return (
    <button
      onClick={onClick}
      className="gc-button-primary"
      // Or use inline styles:
      style={{
        backgroundColor: styles.bg,
        border: styles.border,
        borderRadius: styles.radius,
        boxShadow: styles.shadow,
        padding: `${styles.paddingY} ${styles.paddingX}`,
        fontFamily: styles.fontFamily,
        fontSize: styles.fontSize,
        color: styles.color,
        textTransform: 'uppercase',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
```

### Creating a Navigation Component

```tsx
import { components, colors } from '@/styles/design-tokens';

export function Navigation() {
  return (
    <nav
      style={{
        backgroundColor: components.navigation.bg,
        height: components.navigation.height,
        border: components.navigation.border,
        borderBottom: 'none',
        borderRadius: `${components.navigation.radiusTop} ${components.navigation.radiusTop} 0 0`,
      }}
    >
      <ul className="flex gap-[var(--gc-gap-xl)]">
        <li>
          <a href="#" style={{ color: components.navigation.textColor }}>
            Home
          </a>
        </li>
        {/* More nav items */}
      </ul>
    </nav>
  );
}
```

### Creating a Form Input

```tsx
import { components, colors } from '@/styles/design-tokens';

interface InputProps {
  label: string;
  required?: boolean;
  placeholder?: string;
}

export function Input({ label, required, placeholder }: InputProps) {
  return (
    <div>
      <label className="gc-font-label" style={{ color: colors.text.muted }}>
        {label}
        {required && <span style={{ color: colors.neutral.black }}>*</span>}
      </label>
      <input
        className="gc-input"
        placeholder={placeholder}
        style={{
          backgroundColor: components.form.inputBg,
          border: components.form.inputBorder,
          borderRadius: components.form.inputRadius,
          boxShadow: components.form.inputShadow,
        }}
      />
    </div>
  );
}
```

### Using Gradient Text

```tsx
import { colors } from '@/styles/design-tokens';

function GradientText() {
  return (
    <span
      className="gc-gradient-text"
      // Or inline:
      style={{
        background: `linear-gradient(to bottom, ${colors.gradient.textStart}, ${colors.gradient.textEnd} 5.769%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      FREE
    </span>
  );
}
```

### Creating Shadow Effects

```tsx
import { shadows } from '@/styles/design-tokens';

function Card() {
  return (
    <div
      style={{
        boxShadow: shadows.box.section,
        padding: '20px',
        borderRadius: 'var(--gc-radius-lg)',
      }}
    >
      <h3 style={{ textShadow: shadows.text.sm }}>Card Title</h3>
    </div>
  );
}
```

---

## Theme Customization

You can override tokens for theme variations:

```css
/* dark-theme.css */
:root.dark-theme {
  --gc-background: var(--gc-brand-dark);
  --gc-text-primary: var(--gc-white);
  --gc-card-bg: var(--gc-black-soft);
}
```

```typescript
// theme-variants.ts
import tokens from '@/styles/design-tokens';

export const darkTheme = {
  ...tokens,
  colors: {
    ...tokens.colors,
    text: {
      primary: tokens.colors.neutral.white,
      secondary: tokens.colors.neutral.grayLight,
      onDark: tokens.colors.neutral.black,
    },
  },
};
```

---

## Best Practices

1. **Always use tokens instead of hardcoded values**
   ```tsx
   // ❌ Bad
   <div style={{ color: '#fec300' }}>
   
   // ✅ Good
   <div style={{ color: colors.brand.yellowPrimary }}>
   ```

2. **Use component tokens for consistent components**
   ```tsx
   // ❌ Bad - piecing together individual tokens
   <button style={{ 
     bg: colors.brand.yellowPrimary,
     padding: '16px 60px',
     // ...
   }}>
   
   // ✅ Good - using component token
   <button style={components.button.primary}>
   ```

3. **Use CSS utility classes for common patterns**
   ```tsx
   // ✅ Good
   <h1 className="gc-font-hero gc-text-shadow-lg">
   ```

4. **Keep tokens in sync**
   - If you update design-tokens.css, update design-tokens.ts
   - If you update design-tokens.ts, update design-tokens.css

5. **Use TypeScript for type safety**
   ```typescript
   import type { Color } from '@/styles/design-tokens';
   
   function getColor(colorPath: string): string {
     // Type-safe color access
   }
   ```

---

## Token Reference

### Quick Reference Table

| Category | CSS Variable Prefix | TS Import |
|----------|-------------------|-----------|
| Colors | `--gc-brand-*`, `--gc-neutral-*` | `colors.brand.*` |
| Fonts | `--gc-font-*` | `fonts.family.*`, `fonts.size.*` |
| Spacing | `--gc-gap-*`, `--gc-padding-*` | `spacing.gap.*`, `spacing.padding.*` |
| Borders | `--gc-border-*` | `borders.width.*`, `borders.style.*` |
| Shadows | `--gc-shadow-*`, `--gc-text-shadow-*` | `shadows.box.*`, `shadows.text.*` |
| Layout | `--gc-width-*`, `--gc-height-*` | `layout.width.*`, `layout.height.*` |
| Components | N/A (use utility classes) | `components.button.*`, etc. |

---

## Migration from Hardcoded Values

If you have existing components with hardcoded values:

1. **Identify the value**
   ```tsx
   <div style={{ backgroundColor: '#fec300' }}>
   ```

2. **Find the matching token**
   - Search design-tokens.css or design-tokens.ts
   - `#fec300` → `--gc-brand-yellow-primary` or `colors.brand.yellowPrimary`

3. **Replace with token**
   ```tsx
   <div style={{ backgroundColor: 'var(--gc-brand-yellow-primary)' }}>
   // or
   <div style={{ backgroundColor: colors.brand.yellowPrimary }}>
   ```

4. **Test and verify**
   - Ensure visual appearance matches
   - Check responsive behavior
   - Verify accessibility

---

## Contributing

When adding new tokens:

1. Add to both `/styles/design-tokens.css` AND `/styles/design-tokens.ts`
2. Follow naming convention: `--gc-category-variant`
3. Document the token in this guide
4. Update type definitions if needed
5. Test across different components

---

## Support

For questions or issues with design tokens:
- Check the design system rules: `/design-system-rules.md`
- Review this usage guide
- Inspect the token files directly
