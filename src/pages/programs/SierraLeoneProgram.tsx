import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import ProgramHero from '../../components/programs/ProgramHero';
import ProgramSidebar from '../../components/programs/ProgramSidebar';
import EconomicImpact from '../../components/programs/EconomicImpact';
import './ProgramComponents.css';

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
      <Header />
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
            {/* Sidebar */}
            <ProgramSidebar facts={quickFacts} country="sierra-leone" />

            {/* Main Content */}
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
                  A distinctive feature of Sierra Leone program is integration 
                  of veterans and military personnel housing, recognizing their role in 
                  national stability and providing structured support for their 
                  post-service integration.
                </p>
                <div className="program-highlights">
                  <div className="highlight-card">
                    <h4>3,000 Dedicated Units</h4>
                    <p>Purpose-built housing for veterans and military families</p>
                  </div>
                  <div className="highlight-card">
                    <h4>Skills Training</h4>
                    <p>Technical training center with priority access for veterans</p>
                  </div>
                  <div className="highlight-card">
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
                <Button asChild>
                  <Link to="/engage">
                    Request Program Briefing
                  </Link>
                </Button>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SierraLeoneProgram;