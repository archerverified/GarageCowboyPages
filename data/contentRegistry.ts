// Static imports for all content files
import aboutUs from './about-us';
import servicesPage from './services-page';
import texasPage from './texas-page';
import residentialPage from './residential-page';
import commercialPage from './commercial-page';

// Content registry
export const contentRegistry = {
  'about-us': aboutUs,
  'services-page': servicesPage,
  'texas-page': texasPage,
  'residential-page': residentialPage,
  'commercial-page': commercialPage,
} as const;

export type ContentKey = keyof typeof contentRegistry;