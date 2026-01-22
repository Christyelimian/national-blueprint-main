import React, { useState, useRef, useEffect } from 'react';
import { useCountry, COUNTRY_CONFIGS } from '@/contexts/CountryContext';
import type { Country } from '@/contexts/CountryContext';
import './CountrySelector.css';

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
