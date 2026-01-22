import React from 'react';
import { Link } from 'react-router-dom';
import { useCountry, COUNTRY_CONFIGS } from '@/contexts/CountryContext';
import './ProgramsMegaMenu.css';

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
                  {COUNTRY_CONFIGS[program.country as keyof typeof COUNTRY_CONFIGS].flag}
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