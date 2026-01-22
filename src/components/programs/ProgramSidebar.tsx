import React from 'react';

interface QuickFacts {
  investment: string;
  units?: string;
  timeline: string;
  model: string;
  status: string;
  phaseI?: string;
  components?: string[];
}

interface ProgramSidebarProps {
  facts: QuickFacts;
  country: string;
}

const ProgramSidebar: React.FC<ProgramSidebarProps> = ({ facts }) => {
  return (
    <aside className="program-sidebar">
      <div className="program-sidebar__card">
        <h3>Program Facts</h3>
        <dl className="program-facts">
          <dt>Investment</dt>
          <dd>{facts.investment}</dd>
          
          {facts.units && (
            <>
              <dt>Units</dt>
              <dd>{facts.units}</dd>
            </>
          )}
          
          <dt>Timeline</dt>
          <dd>{facts.timeline}</dd>
          
          <dt>Delivery Model</dt>
          <dd>{facts.model}</dd>
          
          <dt>Status</dt>
          <dd>{facts.status}</dd>
          
          {facts.phaseI && (
            <>
              <dt>Phase I</dt>
              <dd>{facts.phaseI}</dd>
            </>
          )}
        </dl>
      </div>
      
      {facts.components && (
        <div className="program-sidebar__card">
          <h3>Components</h3>
          <ul className="program-components">
            {facts.components.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default ProgramSidebar;