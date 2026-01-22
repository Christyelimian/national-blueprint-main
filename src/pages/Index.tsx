import React from 'react';
import { Link } from 'react-router-dom';
import { useCountry, COUNTRY_CONFIGS } from '@/contexts/CountryContext';
import { COUNTRY_PROGRAMS, getOtherPrograms } from '@/data/countryPrograms';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { MandateSection } from '@/components/home/MandateSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { ESGImpactMeasurement } from '@/components/esg/ESGImpactMeasurement';
import { InsightsSection } from '@/components/home/InsightsSection';
import { EngageSection } from '@/components/home/EngageSection';
import { Button } from '@/components/ui/button';
import './Homepage.css';

const Homepage = () => {
  const { selectedCountry, countryConfig } = useCountry();
  
  const featuredProgram = COUNTRY_PROGRAMS[selectedCountry];
  const otherPrograms = getOtherPrograms(selectedCountry);

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Institutional Mandate */}
      <section className="mandate">
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
              <Button asChild>
                <Link to={`/programs/${featuredProgram.slug}`}>
                  View Full Program Details →
                </Link>
              </Button>
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
                      {COUNTRY_CONFIGS[program.country as keyof typeof COUNTRY_CONFIGS]?.flag || program.country}
                    </span>
                    <span className="program-card__country">
                      {COUNTRY_CONFIGS[program.country as keyof typeof COUNTRY_CONFIGS]?.name || program.country}
                    </span>
                    <h3>{program.title}</h3>
                    <p className="program-card__subtitle">{program.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MandateSection />
      <ImpactSection />
      <ESGImpactMeasurement />
      <InsightsSection />
      <EngageSection />
    </Layout>
  );
};

export default Homepage;