import React from 'react';
import { COUNTRY_CONFIGS } from '../../contexts/CountryContext';
import type { Country } from '../../contexts/CountryContext';

interface ProgramHeroProps {
  country: Country;
  title: string;
  subtitle: string;
  image: string;
  status: string;
}

const ProgramHero: React.FC<ProgramHeroProps> = ({
  country,
  title,
  subtitle,
  image,
  status
}) => {
  const countryConfig = COUNTRY_CONFIGS[country];

  return (
    <div className="program-hero">
      <div className="program-hero__background">
        <img src={image} alt={title} />
        <div className="program-hero__overlay"></div>
      </div>
      <div className="container">
        <div className="program-hero__content">
          <div className="program-hero__flag">
            {countryConfig.flag}
          </div>
          <h1 className="program-hero__title">{title}</h1>
          <p className="program-hero__subtitle">{subtitle}</p>
          <div className="status-badge status-badge--implementation">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHero;