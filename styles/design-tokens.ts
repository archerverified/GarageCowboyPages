/**
 * Garage Cowboy Design Tokens
 * TypeScript/JavaScript version for programmatic access
 */

export const colors = {
  brand: {
    yellowPrimary: '#fec300',
    yellowSecondary: '#f7bd15',
    dark: '#35363a',
    black: '#222222',
  },
  neutral: {
    black: '#000000',
    blackSoft: '#303135',
    grayDark: '#323232',
    grayMedium: '#8b8b92',
    grayLight: '#eaeaea',
    white: '#ffffff',
  },
  overlay: {
    light: 'rgba(255, 255, 255, 0.5)',
    dark: 'rgba(0, 0, 0, 0.25)',
  },
  text: {
    primary: '#323232',
    secondary: 'rgba(48, 49, 53, 0.75)',
    onDark: '#eaeaea',
    muted: 'rgba(48, 49, 53, 0.75)',
  },
  border: {
    primary: '#303135',
    dark: '#35363a',
    subtle: '#8b8b92',
  },
  gradient: {
    textStart: 'rgba(63, 63, 63, 0.22)',
    textEnd: '#000000',
  },
} as const;

export const fonts = {
  family: {
    primaryBlack: "'Product_Sans_Black:Regular', sans-serif",
    primaryBold: "'Product_Sans:Bold', sans-serif",
    primaryMedium: "'Product_Sans_Medium:Regular', sans-serif",
    primaryRegular: "'Product_Sans:Regular', sans-serif",
    primaryLight: "'Product_Sans_Light:Regular', sans-serif",
    secondaryItalic: "'PT_Sans:Italic', sans-serif",
    tertiaryItalic: "'Montserrat:Italic', sans-serif",
    tertiaryExtraBold: "'Montserrat:ExtraBold', sans-serif",
  },
  size: {
    hero: '52px',
    h1: '48px',
    h2: '28px',
    h3: '24px',
    h4: '22px',
    h5: '20px',
    base: '15px',
    label: '13px',
    small: '12px',
  },
  lineHeight: {
    hero: '52px',
    h1: '42px',
    h2: '36px',
    h3: '28px',
    base: '27.2px',
    body: '26px',
    tight: '10px',
    normal: 'normal',
  },
  letterSpacing: {
    tight: '-0.32px',
    normal: '0',
  },
} as const;

export const spacing = {
  gap: {
    xl: '50px',
    lg: '32px',
    md: '24px',
    sm: '14px',
    xs: '12px',
    xxs: '10px',
    tiny: '5px',
  },
  padding: {
    sectionX: '101px',
    buttonX: '32px',
    buttonY: '17px',
    buttonLgX: '60px',
    buttonLgY: '16px',
    inputX: '14px',
    inputY: '17px',
    form: '10px',
    container: '20px',
  },
  margin: {
    section: '103px',
  },
} as const;

export const borderRadius = {
  xl: '20px',
  lg: '15px',
  md: '10px',
  sm: '5px',
} as const;

export const borders = {
  width: {
    heavy: '4px',
    lg: '3px',
    md: '2px',
    sm: '1.5px',
  },
  style: {
    heavy: '4px solid #000000',
    standard: '3px solid #303135',
    button: '2px solid #35363a',
    input: '2px solid #303135',
    textarea: '2px solid #222222',
    subtle: '1.5px solid #8b8b92',
  },
} as const;

export const shadows = {
  box: {
    button: '0px 5px 5px 0px rgba(0, 0, 0, 0.25)',
    input: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    submit: '0px 2px 5px 0px #535458',
    section: '0px 1px 0px 0px rgba(17, 17, 26, 0.05), 0px 0px 8px 0px rgba(17, 17, 26, 0.1)',
  },
  text: {
    sm: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    lg: '0px 8px 8px rgba(0, 0, 0, 0.25)',
  },
} as const;

export const layout = {
  width: {
    max: '1920px',
    content: '1292px',
    form: '1140px',
    nav: '954px',
  },
  height: {
    header: '207px',
    nav: '137px',
    hero: '659px',
    form: '279px',
    testimonial: '342px',
    buttonSm: '59px',
    buttonLg: '85px',
    input: '120px',
    textarea: '100px',
  },
  formColumns: {
    sm: '285px',
    md: '342px',
    button: '228px',
  },
} as const;

export const icons = {
  social: '55.994px',
  phone: '40px',
  verified: '32.5px',
  arrow: '18px',
  sm: '25px',
  xs: '20px',
  dot: '10px',
} as const;

export const logo = {
  width: '414px',
  height: '153.719px',
  emergency: {
    width: '209.242px',
    height: '81.354px',
  },
} as const;

export const opacity = {
  inactive: 0.2,
  muted: 0.75,
  overlay: 0.5,
  full: 1,
} as const;

export const zIndex = {
  base: 0,
  overlay: 1,
  dropdown: 10,
  nav: 50,
  modal: 100,
} as const;

export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
} as const;

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
  wide: '1920px',
  
  // Numeric values for programmatic use
  values: {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    wide: 1920,
  },
} as const;

// Component-specific token combinations
export const components = {
  button: {
    primary: {
      bg: colors.brand.yellowPrimary,
      border: borders.style.button,
      shadow: shadows.box.button,
      radius: borderRadius.xl,
      paddingX: spacing.padding.buttonLgX,
      paddingY: spacing.padding.buttonLgY,
      fontFamily: fonts.family.primaryBlack,
      fontSize: fonts.size.h3,
      color: colors.brand.black,
    },
    submit: {
      border: borders.style.button,
      shadow: shadows.box.submit,
      radius: borderRadius.sm,
      paddingX: spacing.padding.buttonX,
      paddingY: spacing.padding.buttonY,
      fontFamily: fonts.family.primaryBlack,
      fontSize: fonts.size.label,
      color: colors.neutral.blackSoft,
    },
  },
  navigation: {
    bg: colors.brand.dark,
    border: borders.style.heavy,
    radiusTop: borderRadius.xl,
    textColor: colors.neutral.white,
    textColorActive: colors.neutral.grayLight,
    height: layout.height.nav,
  },
  form: {
    bg: colors.brand.yellowSecondary,
    inputBg: colors.overlay.light,
    inputBorder: borders.style.input,
    inputShadow: shadows.box.input,
    inputRadius: borderRadius.sm,
    placeholderColor: colors.text.muted,
  },
  card: {
    bg: colors.neutral.white,
    radius: borderRadius.lg,
    border: borders.width.md,
  },
  testimonial: {
    bg: colors.neutral.white,
    border: borders.style.standard,
    shadow: shadows.box.section,
  },
  carousel: {
    dotSize: icons.dot,
    dotGap: spacing.gap.xs,
    dotRadius: borderRadius.sm,
    dotActiveColor: colors.neutral.black,
    dotInactiveOpacity: opacity.inactive,
  },
} as const;

// Type exports for TypeScript usage
export type Color = typeof colors;
export type Font = typeof fonts;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Border = typeof borders;
export type Shadow = typeof shadows;
export type Layout = typeof layout;
export type Icon = typeof icons;
export type Logo = typeof logo;
export type Opacity = typeof opacity;
export type ZIndex = typeof zIndex;
export type Transition = typeof transitions;
export type Breakpoint = typeof breakpoints;
export type Component = typeof components;

// Default export for convenience
export default {
  colors,
  fonts,
  spacing,
  borderRadius,
  borders,
  shadows,
  layout,
  icons,
  logo,
  opacity,
  zIndex,
  transitions,
  breakpoints,
  components,
} as const;
