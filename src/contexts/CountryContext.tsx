import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { COUNTRIES } from '@/config/countries';

export type Country = 'nigeria' | 'sierra-leone' | 'botswana' | 'burkina-faso';

interface CountryConfig {
  code: Country;
  name: string;
  flag: string;
  flagEmoji: string;
  currency: string;
  phoneCode: string;
}

export const COUNTRY_CONFIGS: Record<Country, CountryConfig> = {
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
    if (saved && saved in COUNTRY_CONFIGS) {
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

  const countryConfig = COUNTRY_CONFIGS[selectedCountry];
  const allCountries = Object.values(COUNTRY_CONFIGS);

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
