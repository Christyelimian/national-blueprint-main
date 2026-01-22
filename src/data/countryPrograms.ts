import type { Country } from '../contexts/CountryContext';

export interface ProgramData {
  country: Country;
  title: string;
  subtitle: string;
  investment: string;
  units?: string;
  status: string;
  statusType: 'strategic' | 'structured' | 'active' | 'implementation';
  description: string;
  highlights: string[];
  image: string;
  slug: string;
}

export const COUNTRY_PROGRAMS: Record<Country, ProgramData> = {
  nigeria: {
    country: 'nigeria',
    title: 'Nigeria Urban Housing Acceleration Program',
    subtitle: 'National Housing at Scale',
    investment: '$4.2 Billion',
    units: '100,000 Units',
    status: 'Phase I Active: 5,200 Units',
    statusType: 'implementation',
    description: 'Structured delivery of 100,000 housing units across Nigeria through phased PPP implementation, with Phase I actively under construction in Abuja.',
    highlights: [
      'Bromley Court: 850 units, 60% complete',
      'Phase I: 5,200 units across 4 Abuja projects',
      'Phased implementation: 2024-2032',
      'Mixed-income targeting with social housing integration',
    ],
    image: '/images/programs/nigeria-hero.webp',
    slug: 'nigeria',
  },
  'sierra-leone': {
    country: 'sierra-leone',
    title: 'Sierra Leone Smart Mega City Program',
    subtitle: 'Integrated Urban Development',
    investment: '$10 Billion',
    status: 'Advanced Structuring & Government Engagement',
    statusType: 'structured',
    description: 'Comprehensive smart city development integrating housing, healthcare, education, energy, and transport infrastructure through BOT/PPP framework.',
    highlights: [
      'Integrated urban development model',
      'Veterans and military housing integration',
      'Healthcare and education infrastructure',
      'Government partnership framework established',
    ],
    image: '/images/programs/sierra-leone-hero.webp',
    slug: 'sierra-leone',
  },
  botswana: {
    country: 'botswana',
    title: 'Botswana Smart Housing Program',
    subtitle: 'Urban & District Development',
    investment: 'Comprehensive Program',
    units: '15,000 Units',
    status: 'Structured Initiative',
    statusType: 'structured',
    description: '15,000 housing units across urban centers and districts, including 500 free social housing units under Build-Operate-Transfer model.',
    highlights: [
      '15,000 total housing units planned',
      '500 free social housing units',
      'Build-Operate-Transfer delivery model',
      'Urban and district integration',
    ],
    image: '/images/programs/botswana-hero.webp',
    slug: 'botswana',
  },
  'burkina-faso': {
    country: 'burkina-faso',
    title: 'Burkina Faso National Infrastructure Program',
    subtitle: 'Comprehensive National Development',
    investment: '$14-15 Billion',
    status: 'Strategic Development Program',
    statusType: 'strategic',
    description: 'Data-driven national modernization program encompassing housing, rail, water, technology hubs, and healthcare infrastructure.',
    highlights: [
      'Multi-sector development approach',
      'Rail and transport infrastructure',
      'Technology and innovation hubs',
      'Healthcare and water systems',
    ],
    image: '/images/programs/burkina-faso-hero.webp',
    slug: 'burkina-faso',
  },
};

export const getOtherPrograms = (excludeCountry: Country): ProgramData[] => {
  return Object.values(COUNTRY_PROGRAMS).filter(
    (program) => program.country !== excludeCountry
  );
};