import React from 'react';

interface EconomicImpactProps {
  gdp: string;
  directJobs: string;
  indirectJobs: string;
  housingReduction: string;
  localSourcing: string;
}

const EconomicImpact: React.FC<EconomicImpactProps> = ({
  gdp,
  directJobs,
  indirectJobs,
  housingReduction,
  localSourcing
}) => {
  return (
    <section className="economic-impact">
      <div className="container">
        <h2>Economic Impact</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-card__value">{gdp}</div>
            <div className="impact-card__label">GDP Contribution</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__value">{directJobs}</div>
            <div className="impact-card__label">Direct Jobs Created</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__value">{indirectJobs}</div>
            <div className="impact-card__label">Indirect Jobs Supported</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__value">{housingReduction}</div>
            <div className="impact-card__label">Housing Deficit Reduction</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__value">{localSourcing}</div>
            <div className="impact-card__label">Local Content Sourcing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicImpact;