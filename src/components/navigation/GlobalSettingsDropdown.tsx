import React from 'react';
import { CountrySelector } from '@/components/country/CountrySelector';

export const GlobalSettingsDropdown: React.FC = () => {
  return (
    <div className="relative">
      <CountrySelector />
    </div>
  );
};
