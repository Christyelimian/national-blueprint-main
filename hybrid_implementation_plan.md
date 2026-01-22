# Premium Homes — Hybrid Implementation Plan
## Complete Technical & Content Strategy

---

## IMPLEMENTATION OVERVIEW

**Timeline**: 3-4 weeks
**Approach**: Hybrid global site with country-aware content
**Result**: Professional institutional platform with smart country personalization

---

## PHASE 1: ROUTING RESTRUCTURE (Week 1, Days 1-3)

### Task 1.1: Remove Country-Prefixed Routes

**File**: `src/App.tsx` or `src/routes.tsx`

**BEFORE** (Current Broken Structure):
```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Broken country routes */}
        <Route path="/ng" element={<Layout country="nigeria" />}>
          <Route index element={<Homepage />} />
          <Route path="about/*" element={<AboutRoutes />} />
          {/* ... */}
        </Route>
        <Route path="/sl" element={<Layout country="sierra-leone" />}>
          {/* Same routes... */}
        </Route>
        <Route path="/bw" element={<Layout country="botswana" />}>
          {/* Same routes... */}
        </Route>
        <Route path="/bf" element={<Layout country="burkina-faso" />}>
          {/* Same routes... */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
```

**AFTER** (Clean Structure):
```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';

const App = () => {
  return (
    <BrowserRouter>
      <CountryProvider>
        <Routes>
          {/* Single root route */}
          <Route path="/" element={<Layout />}>
            
            {/* Homepage */}
            <Route index element={<Homepage />} />
            
            {/* About Section */}
            <Route path="about">
              <Route index element={<AboutOverview />} />
              <Route path="who-we-are" element={<WhoWeAre />} />
              <Route path="our-philosophy" element={<OurPhilosophy />} />
              <Route path="what-we-stand-for" element={<WhatWeStandFor />} />
              <Route path="our-legacy" element={<OurLegacy />} />
              <Route path="leadership" element={<Leadership />} />
              <Route path="partners" element={<Partners />} />
              <Route path="development-approach" element={<DevelopmentApproach />} />
              <Route path="quality-framework" element={<QualityFramework />} />
              <Route path="sustainability" element={<Sustainability />} />
              <Route path="track-record" element={<TrackRecord />} />
              <Route path="recognition" element={<Recognition />} />
              <Route path="impact-communities" element={<ImpactCommunities />} />
            </Route>
            
            {/* Programs Section */}
            <Route path="programs">
              <Route index element={<ProgramsOverview />} />
              <Route path="nigeria" element={<NigeriaProgram />} />
              <Route path="sierra-leone" element={<SierraLeoneProgram />} />
              <Route path="botswana" element={<BotswanaProgram />} />
              <Route path="burkina-faso" element={<BurkinaFasoProgram />} />
              
              {/* Nigeria sub-programs */}
              <Route path="nigeria/bromley-court" element={<BromleyCourtProject />} />
              <Route path="nigeria/central-district" element={<CentralDistrictProject />} />
              <Route path="nigeria/gwarinpa" element={<GwarinpaProject />} />
              <Route path="nigeria/kubwa" element={<KubwaProject />} />
            </Route>
            
            {/* Delivery Section */}
            <Route path="delivery">
              <Route index element={<DeliveryOverview />} />
              <Route path="development-model" element={<DevelopmentModel />} />
              <Route path="financing-frameworks" element={<FinancingFrameworks />} />
              <Route path="risk-management" element={<RiskManagement />} />
              <Route path="phased-execution" element={<PhasedExecution />} />
              <Route path="track-record" element={<DeliveryTrackRecord />} />
            </Route>
            
            {/* Impact */}
            <Route path="impact" element={<Impact />} />
            
            {/* Insights */}
            <Route path="insights">
              <Route index element={<InsightsListing />} />
              <Route path=":slug" element={<InsightArticle />} />
            </Route>
            
            {/* Engage */}
            <Route path="engage" element={<Engage />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CountryProvider>
    </BrowserRouter>
  );
};

export default App;
```

**Deliverable**: ✅ Clean route structure with NO /ng, /sl, /bw, /bf prefixes

---

### Task 1.2: Update Country Context Provider

**File**: `src/context/CountryContext.tsx`

**CREATE NEW** (Complete Implementation):
```typescript
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Country = 'nigeria' | 'sierra-leone' | 'botswana' | 'burkina-faso';

interface CountryConfig {
  code: Country;
  name: string;
  flag: string;
  flagEmoji: string;
  currency: string;
  phoneCode: string;
}

export const COUNTRIES: Record<Country, CountryConfig> = {
  nigeria: {
    code: 'nigeria',
    name: 'Nigeria',
    flag: '🇳🇬',
    flagEmoji: '🇳🇬',
    currency: 'NGN',
    phoneCode: '+234',
  },
  'sierra-leone': {
    code: 'sierra-leone',
    name: 'Sierra Leone',
    flag: '🇸🇱',
    flagEmoji: '🇸🇱',
    currency: 'SLL',
    phoneCode: '+232',
  },
  botswana: {
    code: 'botswana',
    name: 'Botswana',
    flag: '🇧🇼',
    flagEmoji: '🇧🇼',
    currency: 'BWP',
    phoneCode: '+267',
  },
  'burkina-faso': {
    code: 'burkina-faso',
    name: 'Burkina Faso',
    flag: '🇧🇫',
    flagEmoji: '🇧🇫',
    currency: 'XOF',
    phoneCode: '+226',
  },
};

interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  countryConfig: CountryConfig;
  allCountries: CountryConfig[];
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  // Initialize from localStorage or default to Nigeria
  const [selectedCountry, setSelectedCountryState] = useState<Country>(() => {
    const saved = localStorage.getItem('premium-homes-country');
    if (saved && saved in COUNTRIES) {
      return saved as Country;
    }
    return 'nigeria'; // Default
  });

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('premium-homes-country', selectedCountry);
  }, [selectedCountry]);

  const setSelectedCountry = (country: Country) => {
    setSelectedCountryState(country);
    
    // Optional: Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'country_change', {
        country: country,
      });
    }
  };

  const countryConfig = COUNTRIES[selectedCountry];
  const allCountries = Object.values(COUNTRIES);

  return (
    <CountryContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        countryConfig,
        allCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

// Custom hook for easy usage
export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within CountryProvider');
  }
  return context;
};
```

**Deliverable**: ✅ Country context that manages state without URL changes

---

### Task 1.3: Update Country Selector Component

**File**: `src/components/CountrySelector.tsx`

**BEFORE** (Changes URL - causes 404):
```typescript
const CountrySelector = () => {
  const navigate = useNavigate();
  
  const handleChange = (country: string) => {
    navigate(`/${country}`); // ❌ WRONG - causes 404 on refresh
  };
  
  return (/* ... */);
};
```

**AFTER** (Changes Context Only):
```typescript
import React, { useState, useRef, useEffect } from 'react';
import { useCountry, COUNTRIES } from '../context/CountryContext';
import type { Country } from '../context/CountryContext';

const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry, countryConfig, allCountries } = useCountry();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    // NO navigation - just context change!
  };

  return (
    <div className="country-selector" ref={dropdownRef}>
      <button
        className="country-selector__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select country"
        aria-expanded={isOpen}
      >
        <span className="country-selector__flag">{countryConfig.flag}</span>
        <span className="country-selector__code">{countryConfig.code.toUpperCase().slice(0, 2)}</span>
        <svg className="country-selector__chevron" width="12" height="12" viewBox="0 0 12 12">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>

      {isOpen && (
        <div className="country-selector__dropdown">
          <div className="country-selector__header">
            Select Country
          </div>
          {allCountries.map((country) => (
            <button
              key={country.code}
              className={`country-selector__option ${
                selectedCountry === country.code ? 'country-selector__option--active' : ''
              }`}
              onClick={() => handleCountryChange(country.code)}
            >
              <span className="country-selector__option-flag">{country.flag}</span>
              <span className="country-selector__option-name">{country.name}</span>
              {selectedCountry === country.code && (
                <svg className="country-selector__check" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M6 12L2 8l1.4-1.4L6 9.2l6.6-6.6L14 4z" fill="currentColor" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
```

**CSS** (`src/components/CountrySelector.css`):
```css
.country-selector {
  position: relative;
  z-index: 1000;
}

.country-selector__trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: transparent;
  border: 1px solid #D3CFCB;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease;
  font-size: 14px;
  color: #1A2332;
}

.country-selector__trigger:hover {
  border-color: #B8860B;
  background: rgba(184, 134, 11, 0.05);
}

.country-selector__flag {
  font-size: 18px;
  line-height: 1;
}

.country-selector__code {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.country-selector__chevron {
  transition: transform 200ms ease;
}

.country-selector__trigger[aria-expanded="true"] .country-selector__chevron {
  transform: rotate(180deg);
}

.country-selector__dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  animation: dropdown-appear 200ms ease;
}

@keyframes dropdown-appear {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.country-selector__header {
  padding: 12px 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #1A2332;
  border-bottom: 1px solid #E8E8E8;
  background: #F8F8F8;
}

.country-selector__option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background 150ms ease;
}

.country-selector__option:hover {
  background: rgba(184, 134, 11, 0.08);
}

.country-selector__option--active {
  background: rgba(184, 134, 11, 0.12);
  font-weight: 600;
}

.country-selector__option-flag {
  font-size: 20px;
  line-height: 1;
}

.country-selector__option-name {
  flex: 1;
  font-size: 15px;
  color: #1A2332;
}

.country-selector__check {
  color: #B8860B;
  flex-shrink: 0;
}
```

**Deliverable**: ✅ Professional country selector that updates context, not URL

---

### Task 1.4: Configure Server Rewrites (Prevent 404s)

**For Apache** - Create/Update `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories that exist
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Don't rewrite service worker
  RewriteCond %{REQUEST_URI} !=/service-worker.js
  
  # Rewrite everything else to index.html for client-side routing
  RewriteRule ^ index.html [L]
</IfModule>

# Browser caching for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>
```

**For Nginx** - Update `nginx.conf` or site config:
```nginx
server {
    listen 80;
    server_name premiumhomes.com.ng www.premiumhomes.com.ng;
    root /var/www/premium-homes/dist;
    index index.html;

    # Try files, fallback to index.html for client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|webp|gif|svg|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    gzip_min_length 1000;
}
```

**For Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**For Netlify** - Create `_redirects` file in `public/`:
```
/*    /index.html   200
```

**Deliverable**: ✅ Server configured to handle client-side routing without 404s

---

## PHASE 2: HOMEPAGE COUNTRY AWARENESS (Week 1, Days 4-5)

### Task 2.1: Create Country Program Data Structure

**File**: `src/data/countryPrograms.ts`

```typescript
import type { Country } from '../context/CountryContext';

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
```

**Deliverable**: ✅ Structured data for all country programs

---

### Task 2.2: Update Homepage Component

**File**: `src/pages/Homepage.tsx`

```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { useCountry } from '../context/CountryContext';
import { COUNTRY_PROGRAMS, getOtherPrograms } from '../data/countryPrograms';

const Homepage = () => {
  const { selectedCountry, countryConfig } = useCountry();
  
  const featuredProgram = COUNTRY_PROGRAMS[selectedCountry];
  const otherPrograms = getOtherPrograms(selectedCountry);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <img 
            src="/images/hero-infrastructure.webp" 
            alt="Infrastructure development"
            className="hero__image"
          />
        </div>
        <div className="hero__content container">
          <h1 className="hero__title">
            Designing Africa's Next Generation Cities,<br />
            Infrastructure & National Assets
          </h1>
          <p className="hero__subtitle">
            PPP • BOT • Mega Cities • National Infrastructure • Development Finance
          </p>
          <div className="hero__metrics">
            <div className="metric">
              <div className="metric__value">$38B+</div>
              <div className="metric__label">Project Pipeline</div>
            </div>
            <div className="metric">
              <div className="metric__value">4</div>
              <div className="metric__label">Countries</div>
            </div>
            <div className="metric">
              <div className="metric__value">PPP/BOT</div>
              <div className="metric__label">Delivery Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Mandate */}
      <section className="mandate container">
        <div className="mandate__content">
          <h2>Structured Infrastructure & Urban Development Institution</h2>
          <p>
            Premium Homes Global Investment Services designs, finances, and delivers
            nation-building projects across Africa through Public-Private Partnerships,
            BOT, and Development Finance models.
          </p>
          <p>
            Operating at the intersection of government policy, private capital, and
            engineering excellence, we transform national housing and infrastructure
            deficits into bankable, scalable delivery programs.
          </p>
        </div>
      </section>

      {/* Featured Program (Based on Selected Country) */}
      <section className="programs-featured">
        <div className="container">
          <div className="section-header">
            <h2>Featured Program: {countryConfig.name}</h2>
            <p>Current focus based on your country selection</p>
          </div>
          
          <div className="featured-program-card">
            <div className="featured-program-card__image">
              <img src={featuredProgram.image} alt={featuredProgram.title} />
              <div className={`status-badge status-badge--${featuredProgram.statusType}`}>
                {featuredProgram.status}
              </div>
            </div>
            <div className="featured-program-card__content">
              <div className="featured-program-card__flag">
                {countryConfig.flag}
              </div>
              <h3 className="featured-program-card__title">
                {featuredProgram.title}
              </h3>
              <p className="featured-program-card__subtitle">
                {featuredProgram.subtitle}
              </p>
              <div className="featured-program-card__stats">
                <div className="stat">
                  <div className="stat__label">Investment</div>
                  <div className="stat__value">{featuredProgram.investment}</div>
                </div>
                {featuredProgram.units && (
                  <div className="stat">
                    <div className="stat__label">Scale</div>
                    <div className="stat__value">{featuredProgram.units}</div>
                  </div>
                )}
              </div>
              <p className="featured-program-card__description">
                {featuredProgram.description}
              </p>
              <ul className="featured-program-card__highlights">
                {featuredProgram.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <Link 
                to={`/programs/${featuredProgram.slug}`}
                className="btn btn--primary"
              >
                View Full Program Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs Grid */}
      <section className="programs-grid">
        <div className="container">
          <div className="section-header">
            <h2>Other Country Programs</h2>
            <Link to="/programs" className="link-arrow">
              View All Programs →
            </Link>
          </div>
          
          <div className="program-cards">
            {otherPrograms.map((program) => (
              <Link
                key={program.country}
                to={`/programs/${program.slug}`}
                className="program-card"
              >
                <div className="program-card__image">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="program-card__content">
                  <div className="program-card__header">
                    <span className="program-card__flag">
                      {COUNTRIES[program.country].flag}
                    </span>
                    <span className="program-card__country">
                      {COUNTRIES[program.country].name}
                    </span>
                  </div>
                  <h3 className="program-card__title">{program.title}</h3>
                  <p className="program-card__investment">{program.investment}</p>
                  <div className={`program-card__status status-badge--${program.statusType}`}>
                    {program.status}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver Preview */}
      <section className="delivery-preview">
        <div className="container">
          <div className="delivery-preview__content">
            <h2>Demonstrated Execution Capability</h2>
            <p>
              From project origination to active delivery, Premium Homes has
              demonstrated institutional capacity to manage complex urban development programs.
            </p>
            <div className="delivery-preview__stats">
              <div className="stat-item">
                <div className="stat-item__value">60%</div>
                <div className="stat-item__label">Bromley Court Construction Complete</div>
              </div>
              <div className="stat-item">
                <div className="stat-item__value">5,200</div>
                <div className="stat-item__label">Units Under Active Implementation</div>
              </div>
              <div className="stat-item">
                <div className="stat-item__value">94%</div>
                <div className="stat-item__label">Timeline Adherence Rate</div>
              </div>
            </div>
            <Link to="/delivery/track-record" className="btn btn--secondary">
              View Delivery Track Record →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Engage With Premium Homes</h2>
          <p>Government & Institutional Inquiries</p>
          <Link to="/engage" className="btn btn--primary btn--large">
            Request Program Briefing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
```

**Deliverable**: ✅ Homepage that adapts based on selected country

---

## PHASE 3: CREATE COUNTRY PROGRAM PAGES (Week 2)

### Task 3.1: Nigeria Program Page Template

**File**: `src/pages/programs/NigeriaProgram.tsx`

```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import ProgramSidebar from '../../components/programs/ProgramSidebar';
import ProgramPhase from '../../components/programs/ProgramPhase';
import EconomicImpact from '../../components/programs/EconomicImpact';

const NigeriaProgram = () => {
  const quickFacts = {
    investment: '$4.2 Billion',
    units: '100,000',
    timeline: '2024-2032',
    model: 'PPP / BOT',
    status: 'Implementation Phase',
    phaseI: '5,200 units',
  };

  const phaseIProjects = [
    {
      name: 'Bromley Court',
      units: 850,
      status: 'Active Delivery',
      progress: 60,
      timeline: '2024-2026',
      slug: 'bromley-court',
    },
    {
      name: 'Central District Development',
      units: 1400,
      status: 'Advanced Planning',
      progress: 15,
      timeline: '2025-2027',
      slug: 'central-district',
    },
    {
      name: 'Gwarinpa Expansion',
      units: 1200,
      status: 'Land Secured',
      progress: 8,
      timeline: '2025-2028',
      slug: 'gwarinpa',
    },
    {
      name: 'Kubwa Integration',
      units: 1750,
      status: 'Design Phase',
      progress: 5,
      timeline: '2026-2028',
      slug: 'kubwa',
    },
  ];

  return (
    <div className="country-program">
      <ProgramHero
        country="nigeria"
        title="Nigeria Urban Housing Acceleration Program"
        subtitle="National Housing at Scale"
        image="/images/programs/nigeria-hero.webp"
        status="Phase I Active: 5,200 Units"
      />

      <div className="program-content">
        <div className="container">
          <div className="program-layout">
            {/* Sidebar */}
            <ProgramSidebar facts={quickFacts} country="nigeria" />

            {/* Main Content */}
            <div className="program-main">
              {/* National Context */}
              <section className="program-section">
                <h2>National Context</h2>
                <p>
                  Nigeria faces an estimated 28 million unit housing deficit, with rapid
                  urbanization intensifying pressure on major cities. Current housing
                  production meets less than 15% of annual demand, creating significant
                  social and economic challenges.
                </p>
                <p>
                  This program addresses urban housing deficits through structured,
                  phased delivery across Nigeria's major metropolitan areas, beginning
                  with Abuja and expanding to Lagos, Port Harcourt, Kano, and other
                  key cities.
                </p>
              </section>

              {/* Program Overview */}
              <section className="program-section">
                <h2>Program Overview</h2>
                <p>
                  The Nigeria Urban Housing Acceleration Program structures delivery of
                  100,000 housing units between 2024 and 2032 through a phased
                  Public-Private Partnership framework. The program integrates
                  market-rate, affordable, and social housing to serve multiple income
                  tiers while establishing replicable delivery models.
                </p>
                <div className="program-highlights">
                  <div className="highlight-card">
                    <div className="highlight-card__icon">🏗️</div>
                    <h3>Phased Implementation</h3>
                    <p>Four phases from 2024-2032, each building on validated learnings</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-card__icon">🏘️</div>
                    <h3>Mixed-Income Targeting</h3>
                    <p>Market-rate, affordable, and social housing integration</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-card__icon">🤝</div>
                    <h3>PPP Framework</h3>
                    <p>Government partnership with private sector delivery</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-card__icon">📊</div>
                    <h3>Data-Driven Approach</h3>
                    <p>Continuous monitoring and optimization based on metrics</p>
                  </div>
                </div>
              </section>

              {/* Phase I: Abuja District */}
              <section className="program-section">
                <h2>Phase I: Abuja District Implementation (2024-2026)</h2>
                <div className="phase-overview">
                  <div className="phase-stat">
                    <span className="phase-stat__value">5,200</span>
                    <span className="phase-stat__label">Total Units</span>
                  </div>
                  <div className="phase-stat">
                    <span className="phase-stat__value">₦221B</span>
                    <span className="phase-stat__label">Investment</span>
                  </div>
                  <div className="phase-stat">
                    <span className="phase-stat__value">4</span>
                    <span className="phase-stat__label">Active Projects</span>
                  </div>
                  <div className="phase-stat">
                    <span className="phase-stat__value">Implementation</span>
                    <span className="phase-stat__label">Status</span>
                  </div>
                </div>

                <p>
                  Phase I demonstrates the program's delivery model through four Abuja
                  projects, each testing specific aspects of the scalable framework.
                  Lessons from Phase I directly inform Phase II planning and execution.
                </p>

                <div className="phase-projects">
                  {phaseIProjects.map((project) => (
                    <div key={project.slug} className="project-card">
                      <div className="project-card__header">
                        <h3>{project.name}</h3>
                        <span className={`status-badge status-badge--${project.status.toLowerCase().replace(' ', '-')}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="project-card__stats">
                        <div className="stat">
                          <span className="stat__label">Units</span>
                          <span className="stat__value">{project.units.toLocaleString()}</span>
                        </div>
                        <div className="stat">
                          <span className="stat__label">Timeline</span>
                          <span className="stat__value">{project.timeline}</span>
                        </div>
                        <div className="stat">
                          <span className="stat__label">Progress</span>
                          <span className="stat__value">{project.progress}%</span>
                        </div>
                      </div>
                      <div className="project-card__progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-bar__fill" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <Link 
                        to={`/programs/nigeria/${project.slug}`}
                        className="project-card__link"
                      >
                        View Project Details →
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="phase-learning">
                  <h4>Phase I Learning Objectives</h4>
                  <ul>
                    <li>Construction cost optimization through value engineering</li>
                    <li>Infrastructure integration protocols with government utilities</li>
                    <li>Multi-tier income targeting and allocation mechanisms</li>
                    <li>PPP financial model validation and refinement</li>
                    <li>Community engagement and social integration frameworks</li>
                    <li>Quality control and compliance monitoring systems</li>
                  </ul>
                </div>
              </section>

              {/* Phase II: Lagos Corridor */}
              <section className="program-section">
                <h2>Phase II: Lagos Corridor (2026-2028)</h2>
                <div className="phase-overview">
                  <div className="phase-stat">
                    <span className="phase-stat__value">28,000</span>
                    <span className="phase-stat__label">Units</span>
                  </div>
                  <div className="phase-stat">
                    <span className="phase-stat__value">$1.2B</span>
                    <span className="phase-stat__label">Investment</span>
                  </div>
                  <div className="phase-stat">
                    <span className="phase-stat__value">5</span>
                    <span className="phase-stat__label">Development Zones</span>
                  </div>
                  <div className="phase-stat">
                    <span className="phase-stat__value">Advanced Planning</span>
                    <span className="phase-stat__label">Status</span>
                  </div>
                </div>

                <p>
                  Phase II scales the validated Phase I model across Lagos metropolitan
                  corridor, targeting key growth areas with significant housing demand
                  and infrastructure development potential.
                </p>

                <div className="geographic-zones">
                  <div className="zone-card">
                    <h4>Ikorodu Corridor</h4>
                    <p className="zone-units">8,500 units</p>
                    <p>Mixed-use development with transport integration</p>
                  </div>
                  <div className="zone-card">
                    <h4>Lekki Extension</h4>
                    <p className="zone-units">6,200 units</p>
                    <p>Premium and mid-market housing clusters</p>
                  </div>
                  <div className="zone-card">
                    <h4>Epe Development</h4>
                    <p className="zone-units">4,800 units</p>
                    <p>Satellite township with economic zone</p>
                  </div>
                  <div className="zone-card">
                    <h4>Badagry Integration</h4>
                    <p className="zone-units">5,100 units</p>
                    <p>Cross-border economic corridor housing</p>
                  </div>
                  <div className="zone-card">
                    <h4>Inner Corridor Infill</h4>
                    <p className="zone-units">3,400 units</p>
                    <p>Urban renewal and density optimization</p>
                  </div>
                </div>

                <div className="phase-innovations">
                  <h4>Innovations from Phase I Applied</h4>
                  <ul>
                    <li>Optimized delivery timeline reduced to 18-month cycles</li>
                    <li>Blended financing model incorporating institutional investors</li>
                    <li>Standardized community integration protocols</li>
                    <li>Infrastructure-first approach scaled to multiple sites</li>
                    <li>Digital monitoring and progress tracking systems</li>
                  </ul>
                </div>
              </section>

              {/* Phase III & IV Overview */}
              <section className="program-section">
                <h2>Phase III: Secondary Cities (2028-2030)</h2>
                <p>
                  Expanding to Port Harcourt (12,000 units), Kano (10,500 units), 
                  Ibadan (11,200 units), and Kaduna (8,300 units) with regional 
                  adaptation of the validated national framework.
                </p>
                
                <h2>Phase IV: Regional Expansion (2030-2032)</h2>
                <p>
                  Final phase targets 24,800 units across Northern, South-South, 
                  South-East, and North-Central regions, completing the national 
                  100,000-unit objective.
                </p>
              </section>

              {/* Economic Impact */}
              <EconomicImpact
                gdp="₦1.8 Trillion"
                directJobs="85,000"
                indirectJobs="340,000"
                housingReduction="0.36%"
                localSourcing="85%"
              />

              {/* Government Partnership */}
              <section className="program-section">
                <h2>Government Partnership Framework</h2>
                <div className="partnership-grid">
                  <div className="partnership-card">
                    <h4>Federal Level</h4>
                    <ul>
                      <li>Ministry of Works & Housing (policy alignment)</li>
                      <li>Federal Mortgage Bank (financing facilitation)</li>
                      <li>Infrastructure Concession Regulatory Commission</li>
                    </ul>
                  </div>
                  <div className="partnership-card">
                    <h4>FCT Administration</h4>
                    <ul>
                      <li>Land allocation and title perfection</li>
                      <li>Development approvals and permits</li>
                      <li>Infrastructure connection support</li>
                    </ul>
                  </div>
                  <div className="partnership-card">
                    <h4>Lagos State</h4>
                    <ul>
                      <li>Lagos HOMS (Phase II planning)</li>
                      <li>Land use planning coordination</li>
                      <li>Public transport integration</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="program-cta">
                <h3>Request Detailed Program Documentation</h3>
                <p>
                  For comprehensive program briefings, financial models, and 
                  institutional engagement opportunities.
                </p>
                <Link to="/engage" className="btn btn--primary">
                  Request Program Briefing
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NigeriaProgram;
```

**Deliverable**: ✅ Complete Nigeria program page with all phases

---

### Task 3.2: Sierra Leone Program Page

**File**: `src/pages/programs/SierraLeoneProgram.tsx`

```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import ProgramSidebar from '../../components/programs/ProgramSidebar';
import EconomicImpact from '../../components/programs/EconomicImpact';

const SierraLeoneProgram = () => {
  const quickFacts = {
    investment: '$10 Billion',
    model: 'BOT / PPP',
    status: 'Advanced Structuring',
    timeline: '2025-2032',
    components: ['Housing', 'Healthcare', 'Education', 'Energy', 'Transport'],
  };

  return (
    <div className="country-program">
      <ProgramHero
        country="sierra-leone"
        title="Sierra Leone Smart Mega City Program"
        subtitle="Integrated Urban Development"
        image="/images/programs/sierra-leone-hero.webp"
        status="Advanced Structuring & Government Engagement"
      />

      <div className="program-content">
        <div className="container">
          <div className="program-layout">
            <ProgramSidebar facts={quickFacts} country="sierra-leone" />

            <div className="program-main">
              {/* National Context */}
              <section className="program-section">
                <h2>National Context</h2>
                <p>
                  Sierra Leone is experiencing rapid post-conflict urbanization with 
                  significant infrastructure deficits. Current housing shortage exceeds 
                  200,000 units with inadequate healthcare, education, and transport systems.
                </p>
                <p>
                  The Smart Mega City Program addresses these national priorities through 
                  integrated, sustainable urban development that serves as a catalyst for 
                  economic transformation and social stability.
                </p>
              </section>

              {/* Program Overview */}
              <section className="program-section">
                <h2>Program Overview</h2>
                <p>
                  This $10 billion integrated urban development program structures delivery 
                  of comprehensive infrastructure through a Build-Operate-Transfer framework. 
                  The program integrates housing, social services, and economic infrastructure 
                  into a cohesive smart city development model.
                </p>
              </section>

              {/* Key Components */}
              <section className="program-section">
                <h2>Program Components</h2>

                <div className="component-section">
                  <h3>Housing Development</h3>
                  <div className="component-details">
                    <p><strong>50,000 residential units</strong> across multiple phases</p>
                    <ul>
                      <li>Market-rate housing: 35,000 units</li>
                      <li>Affordable housing: 12,000 units</li>
                      <li>Veteran housing: 3,000 units</li>
                    </ul>
                    <p>
                      <strong>Delivery approach:</strong> Phased construction with 
                      infrastructure-first methodology ensuring water, power, and roads 
                      precede housing delivery.
                    </p>
                  </div>
                </div>

                <div className="component-section">
                  <h3>Healthcare Infrastructure</h3>
                  <div className="component-details">
                    <ul>
                      <li>1 Teaching Hospital (500 beds)</li>
                      <li>3 District Health Centers</li>
                      <li>15 Primary Care Clinics</li>
                      <li>Emergency response network</li>
                    </ul>
                    <p>
                      Built to WHO standards with telemedicine integration and 
                      pharmaceutical supply chain optimization.
                    </p>
                  </div>
                </div>

                <div className="component-section">
                  <h3>Education Facilities</h3>
                  <div className="component-details">
                    <ul>
                      <li>2 Secondary Schools (capacity: 3,000 students)</li>
                      <li>8 Primary Schools (capacity: 6,400 students)</li>
                      <li>Technical Training Center</li>
                      <li>Digital learning infrastructure</li>
                    </ul>
                  </div>
                </div>

                <div className="component-section">
                  <h3>Energy Infrastructure</h3>
                  <div className="component-details">
                    <ul>
                      <li>50MW power generation capacity</li>
                      <li>Solar integration (30% renewable target)</li>
                      <li>Smart grid distribution</li>
                      <li>Backup systems and reliability protocols</li>
                    </ul>
                  </div>
                </div>

                <div className="component-section">
                  <h3>Transport Network</h3>
                  <div className="component-details">
                    <ul>
                      <li>80km road network (arterial and local)</li>
                      <li>Public transport corridors</li>
                      <li>Pedestrian and cycling infrastructure</li>
                      <li>Connection to national highway system</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Special Focus: Veterans Integration */}
              <section className="program-section highlight-section">
                <h2>Veterans & Military Integration</h2>
                <p>
                  A distinctive feature of the Sierra Leone program is the integration 
                  of veterans and military personnel housing, recognizing their role in 
                  national stability and providing structured support for their 
                  post-service integration.
                </p>
                <div className="veterans-features">
                  <div className="feature-item">
                    <h4>3,000 Dedicated Units</h4>
                    <p>Purpose-built housing for veterans and military families</p>
                  </div>
                  <div className="feature-item">
                    <h4>Skills Training</h4>
                    <p>Technical training center with priority access for veterans</p>
                  </div>
                  <div className="feature-item">
                    <h4>Employment Pathways</h4>
                    <p>Construction and operations employment integration</p>
                  </div>
                </div>
              </section>

              {/* Economic Impact */}
              <EconomicImpact
                gdp="$2.1 Billion"
                directJobs="35,000"
                indirectJobs="120,000"
                housingReduction="25%"
                localSourcing="70%"
              />

              {/* Government Partnership */}
              <section className="program-section">
                <h2>Government Partnership</h2>
                <div className="partnership-structure">
                  <div className="partnership-role">
                    <h4>Government of Sierra Leone Provides:</h4>
                    <ul>
                      <li>Land allocation and title clarity</li>
                      <li>Regulatory approval facilitation</li>
                      <li>Infrastructure connection support</li>
                      <li>Tax framework alignment</li>
                      <li>Long-term operational support</li>
                    </ul>
                  </div>
                  <div className="partnership-role">
                    <h4>Premium Homes Structures:</h4>
                    <ul>
                      <li>Capital mobilization ($10B)</li>
                      <li>Engineering partnerships</li>
                      <li>Construction delivery management</li>
                      <li>Operations and maintenance (25 years)</li>
                      <li>Asset transfer protocols</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Delivery Timeline */}
              <section className="program-section">
                <h2>Phased Delivery Timeline</h2>
                <div className="timeline">
                  <div className="timeline-phase">
                    <div className="timeline-phase__header">
                      <h4>Phase I (2025-2027)</h4>
                      <span className="timeline-phase__duration">24 months</span>
                    </div>
                    <ul>
                      <li>Land preparation and master planning</li>
                      <li>Core infrastructure installation</li>
                      <li>5,000 housing units</li>
                      <li>Primary healthcare center</li>
                      <li>2 primary schools</li>
                    </ul>
                  </div>

                  <div className="timeline-phase">
                    <div className="timeline-phase__header">
                      <h4>Phase II (2027-2030)</h4>
                      <span className="timeline-phase__duration">36 months</span>
                    </div>
                    <ul>
                      <li>25,000 housing units</li>
                      <li>Teaching hospital</li>
                      <li>Secondary schools and technical center</li>
                      <li>Power generation facility</li>
                      <li>Major transport corridors</li>
                    </ul>
                  </div>

                  <div className="timeline-phase">
                    <div className="timeline-phase__header">
                      <h4>Phase III (2030-2032)</h4>
                      <span className="timeline-phase__duration">24 months</span>
                    </div>
                    <ul>
                      <li>Final 20,000 housing units</li>
                      <li>Complete social infrastructure</li>
                      <li>Economic zone development</li>
                      <li>Asset transfer preparation</li>
                      <li>Operations handover protocols</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Program Status */}
              <section className="program-section">
                <h2>Current Program Status</h2>
                <div className="status-update">
                  <div className="status-badge status-badge--structured">
                    Advanced Structuring & Government Engagement
                  </div>
                  <p>
                    The Sierra Leone Smart Mega City Program is in advanced structuring 
                    with active government engagement. Key milestones achieved:
                  </p>
                  <ul className="status-milestones">
                    <li>✓ Feasibility studies completed</li>
                    <li>✓ Preliminary government MOU established</li>
                    <li>✓ Land identification process advanced</li>
                    <li>✓ Financial model development underway</li>
                    <li>✓ Engineering partner discussions ongoing</li>
                    <li>→ Final structuring and approvals: 2025</li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="program-cta">
                <h3>Request Sierra Leone Program Briefing</h3>
                <p>
                  For detailed program documentation, financial models, and partnership 
                  opportunities.
                </p>
                <Link to="/engage" className="btn btn--primary">
                  Request Program Briefing
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SierraLeoneProgram;
```

**Deliverable**: ✅ Complete Sierra Leone program page

---

### Task 3.3: Botswana & Burkina Faso Program Pages

**Files**: 
- `src/pages/programs/BotswanaProgram.tsx`
- `src/pages/programs/BurkinaFasoProgram.tsx`

*Similar structure to Sierra Leone, customized with country-specific details*

**Deliverable**: ✅ All 4 country program pages completed

---

## PHASE 4: BROMLEY COURT PROJECT PAGE (Week 2, Days 4-5)

### Task 4.1: Create Bromley Court Project Page

**File**: `src/pages/programs/nigeria/BromleyCourtProject.tsx`

```typescript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BromleyCourtProject = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="project-page">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero__background">
          <img src="/images/projects/bromley-court-hero.webp" alt="Bromley Court" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/programs">Programs</Link> / 
            <Link to="/programs/nigeria">Nigeria</Link> / 
            <span>Bromley Court</span>
          </div>
          <h1 className="project-hero__title">Bromley Court</h1>
          <p className="project-hero__subtitle">
            Nigeria Housing Program — Phase I Pilot Implementation
          </p>
          <div className="status-badge status-badge--implementation">
            Active Delivery: 60% Complete
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="project-stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat__value">850</div>
              <div className="stat__label">Units</div>
            </div>
            <div className="stat">
              <div className="stat__value">₦38.25B</div>
              <div className="stat__label">Project Value</div>
            </div>
            <div className="stat">
              <div className="stat__value">60%</div>
              <div className="stat__label">Complete</div>
            </div>
            <div className="stat">
              <div className="stat__value">2024-2026</div>
              <div className="stat__label">Timeline</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="project-tabs">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={activeTab === 'overview' ? 'active' : ''}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={activeTab === 'progress' ? 'active' : ''}
              onClick={() => setActiveTab('progress')}
            >
              Construction Progress
            </button>
            <button 
              className={activeTab === 'specifications' ? 'active' : ''}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={activeTab === 'impact' ? 'active' : ''}
              onClick={() => setActiveTab('impact')}
            >
              Impact
            </button>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="content-layout">
                <div className="content-main">
                  <section>
                    <h2>Strategic Context</h2>
                    <p>
                      Bromley Court represents the initial implementation of Premium Homes' 
                      Nigeria Urban Housing Acceleration Program, demonstrating integrated 
                      housing delivery at scale. This project validates the technical, 
                      financial, and operational frameworks that will be scaled across the 
                      100,000-unit national program.
                    </p>
                  </section>

                  <section>
                    <h2>Program Role</h2>
                    <p>
                      As the first delivery under the Nigeria Housing Program, Bromley Court 
                      serves multiple strategic functions:
                    </p>
                    <ul>
                      <li>Pilot for phased financing structure</li>
                      <li>Validation of multi-income tier integration</li>
                      <li>Demonstration of infrastructure-first delivery</li>
                      <li>Testing of quality standards framework</li>
                      <li>Development of community integration model</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Residential Units Breakdown</h2>
                    <div className="units-breakdown">
                      <div className="unit-category">
                        <h4>Market Rate Units</h4>
                        <div className="unit-count">620 units</div>
                        <p>2-4 bedroom apartments targeting mid-to-upper income</p>
                      </div>
                      <div className="unit-category">
                        <h4>Mid-Income Units</h4>
                        <div className="unit-count">180 units</div>
                        <p>2-3 bedroom units with optimized pricing</p>
                      </div>
                      <div className="unit-category">
                        <h4>Workforce Housing</h4>
                        <div className="unit-count">50 units</div>
                        <p>Designated for essential workers and civil servants</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2>Integrated Amenities</h2>
                    <div className="amenities-grid">
                      <div className="amenity-card">
                        <h4>Primary Healthcare Center</h4>
                        <p>24-hour clinic serving residents and surrounding community</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Educational Facility (K-6)</h4>
                        <p>Primary school with capacity for 480 students</p>
                <function_calls>
<invoke name="artifacts">
<parameter name="command">update</parameter>
<parameter name="id">hybrid_implementation_plan</parameter>
<parameter name="new_str">                      </div>
                      <div class="amenity-card">
                        <h4>Commercial District</h4>
                        <p>15,000 sqm retail and services area</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Recreational Spaces</h4>
                        <p>Parks, playgrounds, fitness areas, community center</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Digital Connectivity</h4>
                        <p>Fiber optic infrastructure throughout</p>
                      </div>
                    </div>
                  </section>
                </div>

                <aside className="content-sidebar">
                  <div className="sidebar-card">
                    <h3>Project Facts</h3>
                    <dl>
                      <dt>Location</dt>
                      <dd>Central Abuja, FCT</dd>
                      
                      <dt>Site Area</dt>
                      <dd>12.5 hectares</dd>
                      
                      <dt>Development Model</dt>
                      <dd>PPP Implementation</dd>
                      
                      <dt>Construction Start</dt>
                      <dd>Q2 2024</dd>
                      
                      <dt>Estimated Completion</dt>
                      <dd>Q4 2026</dd>
                      
                      <dt>Timeline Adherence</dt>
                      <dd>94%</dd>
                      
                      <dt>Budget Performance</dt>
                      <dd>Within 3% variance</dd>
                    </dl>
                  </div>

                  <div className="sidebar-card">
                    <h3>Download Resources</h3>
                    <button className="download-btn">
                      📄 Project Case Study (PDF)
                    </button>
                    <button className="download-btn">
                      📊 Technical Specifications
                    </button>
                    <button className="download-btn">
                      🗺️ Site Master Plan
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="tab-content">
              <h2>Construction Progress Documentation</h2>
              <p>Real-time progress tracking demonstrating delivery capability</p>
              
              <div className="progress-timeline">
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q2 2024</div>
                  <div className="milestone-content">
                    <h4>Site Preparation Complete</h4>
                    <p>Land clearing, surveying, and initial infrastructure</p>
                  </div>
                </div>
                
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q3 2024</div>
                  <div className="milestone-content">
                    <h4>Foundation Work</h4>
                    <p>All building foundations completed, utilities installed</p>
                  </div>
                </div>
                
                <div className="progress-milestone active">
                  <div className="milestone-date">Q4 2024</div>
                  <div className="milestone-content">
                    <h4>Structural Construction</h4>
                    <p>Currently: 60% complete. Buildings 1-4 at roof level</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q1-Q2 2025</div>
                  <div className="milestone-content">
                    <h4>Finishing & MEP</h4>
                    <p>Interior finishing, mechanical, electrical, plumbing</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q3-Q4 2025</div>
                  <div className="milestone-content">
                    <h4>Landscaping & Infrastructure</h4>
                    <p>Roads, parks, amenities, final infrastructure</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q1 2026</div>
                  <div className="milestone-content">
                    <h4>Handover & Occupancy</h4>
                    <p>Final inspections, certifications, resident move-in</p>
                  </div>
                </div>
              </div>

              <div className="progress-gallery">
                <h3>Site Progress Photos</h3>
                <div className="gallery-grid">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} className="gallery-item">
                      <img 
                        src={`/images/projects/bromley-progress-${num}.webp`}
                        alt={`Construction progress ${num}`}
                      />
                      <div className="gallery-caption">
                        Phase {Math.ceil(num / 2)} - {num % 2 === 0 ? 'Current' : 'Earlier'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="progress-metrics">
                <h3>Key Performance Metrics</h3>
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-value">1,240</div>
                    <div className="metric-label">Jobs Created</div>
                    <div className="metric-detail">Peak construction employment</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">94%</div>
                    <div className="metric-label">Timeline Adherence</div>
                    <div className="metric-detail">Ahead of initial projections</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">100%</div>
                    <div className="metric-label">Quality Inspections</div>
                    <div className="metric-detail">All inspections passed to date</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">82%</div>
                    <div className="metric-label">Local Sourcing</div>
                    <div className="metric-detail">Materials from Nigerian suppliers</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specifications' && (
            <div className="tab-content">
              <div className="specs-layout">
                <section className="spec-section">
                  <h2>Site Master Plan</h2>
                  <div className="site-plan-viewer">
                    <img 
                      src="/images/projects/bromley-site-plan.png"
                      alt="Bromley Court Site Master Plan"
                      className="site-plan-image"
                    />
                  </div>
                  <div className="plan-legend">
                    <h4>Site Layout</h4>
                    <ul>
                      <li><span className="legend-color" style={{background: '#1A2332'}}></span> Residential Buildings (8 blocks)</li>
                      <li><span className="legend-color" style={{background: '#B8860B'}}></span> Commercial District</li>
                      <li><span className="legend-color" style={{background: '#8B9A8B'}}></span> Recreational Areas</li>
                      <li><span className="legend-color" style={{background: '#C86240'}}></span> Healthcare & Education</li>
                      <li><span className="legend-color" style={{background: '#D3CFCB'}}></span> Roads & Infrastructure</li>
                    </ul>
                  </div>
                </section>

                <section className="spec-section">
                  <h2>Unit Floor Plans</h2>
                  <div className="floor-plans">
                    <div className="floor-plan-card">
                      <h4>2-Bedroom Unit</h4>
                      <img src="/images/projects/bromley-2bed-plan.png" alt="2-bedroom floor plan" />
                      <div className="plan-specs">
                        <p><strong>Area:</strong> 85 sqm</p>
                        <p><strong>Layout:</strong> 2 bed, 2 bath, living, kitchen, balcony</p>
                      </div>
                    </div>
                    <div className="floor-plan-card">
                      <h4>3-Bedroom Unit</h4>
                      <img src="/images/projects/bromley-3bed-plan.png" alt="3-bedroom floor plan" />
                      <div className="plan-specs">
                        <p><strong>Area:</strong> 110 sqm</p>
                        <p><strong>Layout:</strong> 3 bed, 2 bath, living, dining, kitchen, balcony</p>
                      </div>
                    </div>
                    <div className="floor-plan-card">
                      <h4>4-Bedroom Unit</h4>
                      <img src="/images/projects/bromley-4bed-plan.png" alt="4-bedroom floor plan" />
                      <div className="plan-specs">
                        <p><strong>Area:</strong> 145 sqm</p>
                        <p><strong>Layout:</strong> 4 bed, 3 bath, living, dining, kitchen, 2 balconies</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="spec-section">
                  <h2>Construction Standards</h2>
                  <div className="standards-grid">
                    <div className="standard-item">
                      <h4>Structural</h4>
                      <ul>
                        <li>Reinforced concrete frame</li>
                        <li>Seismic design compliance</li>
                        <li>Foundation depth: 3.5m average</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Finishes</h4>
                      <ul>
                        <li>Ceramic floor tiles</li>
                        <li>Premium paint systems</li>
                        <li>Aluminum windows & doors</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Mechanical & Electrical</h4>
                      <ul>
                        <li>Split A/C units</li>
                        <li>200A electrical service per unit</li>
                        <li>Backup generator system</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Plumbing</h4>
                      <ul>
                        <li>Pressurized water system</li>
                        <li>Water storage: 1000L per unit</li>
                        <li>Waste treatment facility</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* Impact Tab */}
          {activeTab === 'impact' && (
            <div className="tab-content">
              <h2>Lessons for National Scale</h2>
              <p>
                Bromley Court provides validated data and operational insights that directly 
                inform the scaling of the Nigeria Housing Program to 100,000 units.
              </p>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <h4>Construction Efficiency</h4>
                  <p>
                    Optimized construction sequencing reduced timeline by 12% compared to 
                    initial projections. This model will be applied to Phase II Lagos projects.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Cost Optimization</h4>
                  <p>
                    Value engineering and local sourcing strategies reduced per-unit costs 
                    by 8% while maintaining quality standards.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Community Integration</h4>
                  <p>
                    Social integration protocols tested here inform community engagement 
                    frameworks for all future phases.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Infrastructure Coordination</h4>
                  <p>
                    Government utility coordination protocols developed through this project 
                    streamline future infrastructure integration.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Quality Assurance</h4>
                  <p>
                    100% inspection pass rate validates quality control framework for 
                    national-scale deployment.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Financial Model</h4>
                  <p>
                    PPP financing structure proven viable, providing template for Phase II 
                    capital mobilization.
                  </p>
                </div>
              </div>

              <section className="impact-section">
                <h3>Economic Contribution</h3>
                <div className="impact-stats">
                  <div className="impact-stat">
                    <div className="impact-stat__value">₦38.25B</div>
                    <div className="impact-stat__label">Local Economic Activity</div>
                  </div>
                  <div className="impact-stat">
                    <div className="impact-stat__value">1,240</div>
                    <div className="impact-stat__label">Direct Jobs Created</div>
                  </div>
                  <div className="impact-stat">
                    <div className="impact-stat__value">82%</div>
                    <div className="impact-stat__label">Local Material Sourcing</div>
                  </div>
                </div>
              </section>

              <section className="impact-section">
                <h3>Social Impact</h3>
                <ul>
                  <li>850 families housed in quality accommodation</li>
                  <li>480 children educated in on-site school facility</li>
                  <li>Primary healthcare access for 3,000+ residents</li>
                  <li>50 workforce housing units for essential workers</li>
                  <li>Community center serving broader neighborhood</li>
                </ul>
              </section>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="project-bottom-cta">
        <div className="container">
          <div className="cta-content">
            <h3>Bromley Court demonstrates Premium Homes' execution capability at scale</h3>
            <p>
              This project validates the institutional capacity to deliver complex urban 
              development programs, supporting engagement on larger sovereign-scale initiatives.
            </p>
            <div className="cta-actions">
              <Link to="/programs/nigeria" className="btn btn--secondary">
                ← Back to Nigeria Program
              </Link>
              <Link to="/engage" className="btn btn--primary">
                Request Project Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BromleyCourtProject;
```

**Deliverable**: ✅ Complete Bromley Court project page positioned as proof of execution

---

## PHASE 5: NAVIGATION UPDATES (Week 3, Days 1-2)

### Task 5.1: Update Programs Mega Menu

**File**: `src/components/navigation/ProgramsMegaMenu.tsx`

```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { useCountry, COUNTRIES } from '../../context/CountryContext';

const ProgramsMegaMenu = () => {
  const { selectedCountry } = useCountry();

  const programs = [
    {
      country: 'nigeria',
      title: 'Nigeria',
      subtitle: '100,000 Units',
      slug: 'nigeria',
    },
    {
      country: 'sierra-leone',
      title: 'Sierra Leone',
      subtitle: '$10B Program',
      slug: 'sierra-leone',
    },
    {
      country: 'botswana',
      title: 'Botswana',
      subtitle: 'Smart Housing',
      slug: 'botswana',
    },
    {
      country: 'burkina-faso',
      title: 'Burkina Faso',
      subtitle: '$14B Program',
      slug: 'burkina-faso',
    },
  ];

  return (
    <div className="mega-menu programs-mega-menu">
      <div className="mega-menu__content">
        {/* Column 1: Country Programs */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Country Programs</h3>
          <div className="country-programs-list">
            {programs.map((program) => (
              <Link
                key={program.country}
                to={`/programs/${program.slug}`}
                className={`country-program-link ${
                  selectedCountry === program.country ? 'active' : ''
                }`}
              >
                <span className="country-flag">
                  {COUNTRIES[program.country].flag}
                </span>
                <div className="country-info">
                  <div className="country-name">
                    {program.title}
                    {selectedCountry === program.country && (
                      <span className="active-indicator">★</span>
                    )}
                  </div>
                  <div className="country-subtitle">{program.subtitle}</div>
                </div>
              </Link>
            ))}
            <Link to="/programs" className="view-all-link">
              → View All Programs
            </Link>
          </div>
        </div>

        {/* Column 2: Thematic Focus */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Thematic Focus</h3>
          <ul className="theme-list">
            <li>
              <Link to="/programs#mega-cities">Mega Cities</Link>
            </li>
            <li>
              <Link to="/programs#housing-scale">Housing at Scale</Link>
            </li>
            <li>
              <Link to="/programs#infrastructure">National Infrastructure</Link>
            </li>
            <li>
              <Link to="/programs#ppp-models">PPP/BOT Models</Link>
            </li>
          </ul>

          <h3 className="mega-menu__heading" style={{ marginTop: '24px' }}>
            Program Status
          </h3>
          <div className="status-legend">
            <div className="status-item">
              <span className="status-dot status-dot--strategic"></span>
              Strategic Development
            </div>
            <div className="status-item">
              <span className="status-dot status-dot--structured"></span>
              Structured Initiative
            </div>
            <div className="status-item">
              <span className="status-dot status-dot--active"></span>
              Active Engagement
            </div>
            <div className="status-item">
              <span className="status-dot status-dot--implementation"></span>
              Implementation Phase
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="mega-menu__panel">
          <div className="panel-content">
            <div className="panel-image">
              <img 
                src="/images/navigation/programs-map.webp"
                alt="Programs across Africa"
              />
            </div>
            <p className="panel-statement">
              Structuring development programs<br />
              across four African nations.
            </p>
            <p className="panel-metric">Current Pipeline: $38B+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsMegaMenu;
```

**Deliverable**: ✅ Programs mega menu with country highlighting

---

### Task 5.2: Update Delivery Mega Menu

**File**: `src/components/navigation/DeliveryMegaMenu.tsx`

```typescript
import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryMegaMenu = () => {
  return (
    <div className="mega-menu delivery-mega-menu">
      <div className="mega-menu__content">
        {/* Column 1: Development Model */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Development Model</h3>
          <ul className="nav-list">
            <li>
              <Link to="/delivery/development-model">
                Complete Process Overview
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#origination">
                Project Origination
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#structuring">
                Structuring & Planning
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#execution">
                Phased Execution
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#operations">
                Operations & Transfer
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Financing Frameworks */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Financing Frameworks</h3>
          <ul className="nav-list">
            <li>
              <Link to="/delivery/financing-frameworks#bot">
                BOT Structures
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#ppp">
                PPP Models
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#development-finance">
                Development Finance
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#blended-capital">
                Blended Capital
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#risk">
                Risk Allocation
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Track Record */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Track Record</h3>
          <div className="track-record-preview">
            <div className="project-preview">
              <h4>🏗 Nigeria Phase I</h4>
              <p>5,200 units under active implementation</p>
            </div>
            <div className="project-preview highlight">
              <h4>📋 Bromley Court</h4>
              <p>850 units • 60% complete</p>
              <Link to="/programs/nigeria/bromley-court">
                View Project →
              </Link>
            </div>
            <Link to="/delivery/track-record" className="view-all-link">
              → View All Projects
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="mega-menu__panel">
          <div className="panel-content">
            <div className="panel-image">
              <img 
                src="/images/projects/bromley-progress.webp"
                alt="Construction progress"
              />
            </div>
            <p className="panel-statement">
              From concept to completion:<br />
              Demonstrated execution at scale.
            </p>
            <div className="panel-stats">
              <div>Bromley Court: 60% Complete</div>
              <div>Phase I Nigeria: On Schedule</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMegaMenu;
```

**Deliverable**: ✅ Delivery mega menu showcasing Bromley Court

---

## IMPLEMENTATION TIMELINE SUMMARY

```
WEEK 1: ROUTING & FOUNDATION
├── Day 1-2: Remove country routes, update context
├── Day 3: Country selector component
├── Day 4: Server configuration
└── Day 5: Homepage country awareness

WEEK 2: CONTENT CREATION
├── Day 1: Nigeria program page
├── Day 2: Sierra Leone program page
├── Day 3: Botswana & Burkina Faso pages
└── Day 4-5: Bromley Court project page

WEEK 3: NAVIGATION & POLISH
├── Day 1-2: Mega menus update
├── Day 3: Track record page
├── Day 4: Testing & bug fixes
└── Day 5: Content review & refinement

WEEK 4: LAUNCH PREPARATION
├── Day 1-2: Performance optimization
├── Day 3: Cross-browser testing
├── Day 4: Mobile optimization
└── Day 5: Deploy to production
```

---

This complete implementation plan provides everything needed to execute the hybrid approach successfully!

Would you like me to create any specific component code or continue with additional details?</parameter>
<parameter name="old_str">                      </div>
                      <div class="amenity-card">
                        <h4>Commercial District</h4>
                        <p>15,000 sqm retail and services area</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Recreational Spaces</h4>
                        <p>Parks, playgrounds, fitness areas, community center</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Digital Connectivity</h4>
                        <p>Fiber optic infrastructure throughout</p></parameter>      