// Base Types
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
  icon?: string;
  isExternal?: boolean;
  active?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  location?: string;
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
  category?: string;
  features?: string[];
  price?: string;
  startingPrice?: string;
  popular?: boolean;
}

// Site Configuration
export interface SiteConfig {
  name: string;
  phone: string;
  email: string;
  address?: string;
  serviceArea: string;
  socialLinks: SocialLink[];
  emergencyBadge: {
    enabled: boolean;
    imageUrl: string;
  };
}

// Hero Sections
export interface HeroContent {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaPhone?: string;
  backgroundImage: string;
  badge?: string;
}

// About Us Page
export interface AboutUsContent {
  hero: HeroContent;
  story: {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  values: {
    title: string;
    items: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    members: Array<{
      id: string;
      name: string;
      role: string;
      photo: string;
      bio: string;
    }>;
  };
  certifications: {
    title: string;
    items: Array<{
      id: string;
      name: string;
      logo: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    phone: string;
    buttonText: string;
  };
}

// Services Page
export interface ServicesPageContent {
  hero: HeroContent;
  categories: Array<{
    id: string;
    name: string;
  }>;
  services: Service[];
  emergency: {
    title: string;
    description: string;
    phone: string;
  };
  process: {
    title: string;
    steps: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  warranty: {
    icon: string;
    title: string;
    description: string;
  };
}

// Texas Page
export interface TexasPageContent {
  hero: HeroContent;
  coverage: {
    stats: Array<{
      id: string;
      value: string;
      label: string;
    }>;
  };
  serviceAreas: {
    title: string;
    description: string;
    primaryCities: {
      title: string;
      cities: Array<{
        id: string;
        name: string;
        county: string;
      }>;
    };
    additionalCities: {
      title: string;
      cities: Array<{
        id: string;
        name: string;
      }>;
    };
  };
  map: {
    title: string;
    embedUrl: string;
  };
  whyChooseUs: {
    title: string;
    reasons: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
}

// Residential Page
export interface ResidentialPageContent {
  hero: HeroContent;
  benefits: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }>;
  services: {
    title: string;
    description: string;
    items: Service[];
  };
  problems: {
    title: string;
    items: Array<{
      id: string;
      icon: string;
      issue: string;
      description: string;
      solution: string;
    }>;
  };
  gallery: {
    title: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      beforeImage: string;
      afterImage: string;
    }>;
  };
  tips: {
    title: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  warranty: {
    icon: string;
    title: string;
    description: string;
    features: string[];
  };
}

// Commercial Page
export interface CommercialPageContent {
  hero: HeroContent;
  trustIndicators: Array<{
    id: string;
    value: string;
    label: string;
  }>;
  industries: {
    title: string;
    description: string;
    items: Array<{
      id: string;
      name: string;
      icon: string;
      description: string;
      examples: string[];
    }>;
  };
  services: {
    title: string;
    items: Service[];
  };
  whyChooseUs: {
    title: string;
    reasons: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
    }>;
  };
  caseStudies: {
    title: string;
    items: Array<{
      id: string;
      title: string;
      industry: string;
      imageUrl: string;
      description: string;
      challenge: string;
      solution: string;
    }>;
  };
  maintenancePlans: {
    title: string;
    description: string;
    plans: Array<{
      id: string;
      name: string;
      price: string;
      period: string;
      features: string[];
      featured: boolean;
    }>;
  };
  certifications: {
    title: string;
    items: Array<{
      id: string;
      name: string;
      logo: string;
    }>;
  };
}

// Form Configuration
export interface FormConfig {
  title: string;
  subtitle: string;
  fields: FormField[];
  submitText: string;
  successMessage: string;
  errorMessage: string;
  requiredLabel?: string;
  poweredBy?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required: boolean;
  validation?: ValidationRule[];
  gridColumn?: number;
}

export interface ValidationRule {
  type: 'min' | 'max' | 'pattern' | 'email' | 'required';
  value?: string | number;
  message: string;
}
