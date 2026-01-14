import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { COUNTRIES } from '@/config/countries';

export type CountryCode = typeof COUNTRIES[number]['code'];

type CountryState = {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
};

type CountryContextValue = {
  country: CountryState;
  setCountry: (code: CountryCode) => void;
};

const CountryContext = createContext<CountryContextValue | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // default to first country (Nigeria) for initial load
  const defaultCountry = COUNTRIES[0];
  const [country, setCountryState] = useState<CountryState>({
    code: defaultCountry.code,
    name: defaultCountry.name,
    flag: defaultCountry.flag,
    currency: defaultCountry.currency,
  });

  const setCountry = (code: string) => {
    const found = COUNTRIES.find((c) => c.code === code);
    if (found) {
      setCountryState({ code: found.code, name: found.name, flag: found.flag, currency: found.currency });
    }
  };

  const value = useMemo(() => ({ country, setCountry }), [country]);

  // Persist country in localStorage for session continuity
  useEffect(() => {
    const saved = localStorage.getItem('country_code');
    if (saved) {
      setCountry(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('country_code', country.code);
  }, [country.code]);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error('useCountry must be used within CountryProvider');
  return ctx;
};
