import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import ProgramHero from '../../components/programs/ProgramHero';
import ProgramSidebar from '../../components/programs/ProgramSidebar';
import EconomicImpact from '../../components/programs/EconomicImpact';
import './ProgramComponents.css';

const BotswanaProgram = () => {
  const quickFacts = {
    investment: 'Comprehensive Program',
    units: '15,000',
    model: 'BOT / PPP',
    status: 'Structured Initiative',
    timeline: '2025-2030',
  };

  return (
    <div className="country-program">
      <Header />
      <ProgramHero
        country="botswana"
        title="Botswana Smart Housing Program"
        subtitle="Urban & District Development"
        image="/images/programs/botswana-hero.webp"
        status="Structured Initiative"
      />

      <div className="program-content">
        <div className="container">
          <div className="program-layout">
            {/* Sidebar */}
            <ProgramSidebar facts={quickFacts} country="botswana" />

            {/* Main Content */}
            <div className="program-main">
              {/* National Context */}
              <section className="program-section">
                <h2>National Context</h2>
                <p>
                  Botswana faces growing urban housing demands alongside opportunities 
                  for sustainable development through strategic public-private partnerships. 
                  The country's stable political environment and commitment to good governance 
                  create ideal conditions for large-scale housing programs.
                </p>
                <p>
                  This program addresses housing deficits across major urban centers and 
                  district areas while establishing replicable models for affordable, 
                  quality housing delivery throughout the country.
                </p>
              </section>

              {/* Program Overview */}
              <section className="program-section">
                <h2>Program Overview</h2>
                <p>
                  The Botswana Smart Housing Program delivers 15,000 housing units 
                  through a Build-Operate-Transfer framework, integrating sustainable 
                  development practices with modern urban planning principles. The program 
                  balances market-rate housing with targeted social housing components.
                </p>
                <div className="program-highlights">
                  <div className="highlight-card">
                    <div className="highlight-card__icon">🏘️</div>
                    <h3>Total Program Scale</h3>
                    <p>15,000 housing units across urban and district locations</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-card__icon">🏠</div>
                    <h3>Social Housing Component</h3>
                    <p>500 free housing units for vulnerable populations</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-card__icon">🤝</div>
                    <h3>BOT Delivery Model</h3>
                    <p>25-year Build-Operate-Transfer framework with asset handover</p>
                  </div>
                  <div className="highlight-card">
                    <div className="highlight-card__icon">🌱</div>
                    <h3>Sustainable Development</h3>
                    <p>Green building standards and renewable energy integration</p>
                  </div>
                </div>
              </section>

              {/* Geographic Distribution */}
              <section className="program-section">
                <h2>Geographic Distribution</h2>
                <p>
                  The program strategically targets both major urban centers and 
                  district development areas to ensure balanced national coverage and 
                  address varying housing needs across different regions.
                </p>
                
                <div className="geographic-zones">
                  <div className="zone-card">
                    <h4>Gaborone Metropolitan</h4>
                    <p className="zone-units">6,500 units</p>
                    <p>Capital city expansion with mixed-income housing</p>
                  </div>
                  <div className="zone-card">
                    <h4>Francistown</h4>
                    <p className="zone-units">3,200 units</p>
                    <p>Urban renewal and infill development</p>
                  </div>
                  <div className="zone-card">
                    <h4>Maun</h4>
                    <p className="zone-units">2,100 units</p>
                    <p>Tourism-linked housing development</p>
                  </div>
                  <div className="zone-card">
                    <h4>Selibe-Phikwe</h4>
                    <p className="zone-units">1,800 units</p>
                    <p>Industrial zone worker housing</p>
                  </div>
                  <div className="zone-card">
                    <h4>District Centers</h4>
                    <p className="zone-units">1,400 units</p>
                    <p>Rural district hub development</p>
                  </div>
                </div>
              </section>

              {/* Housing Mix Strategy */}
              <section className="program-section">
                <h2>Housing Mix & Affordability</h2>
                <p>
                  The program implements a tiered housing strategy to serve 
                  diverse income levels while ensuring financial sustainability and 
                  long-term operational viability.
                </p>
                
                <div className="housing-mix">
                  <div className="mix-category">
                    <h4>Market-Rate Housing (10,000 units)</h4>
                    <p>2-4 bedroom units targeting middle and upper-middle income families. 
                    Premium finishes, modern amenities, and strategic location positioning 
                    ensure market viability and cross-subsidization potential.</p>
                  </div>
                  
                  <div className="mix-category">
                    <h4>Affordable Housing (4,500 units)</h4>
                    <p>1-3 bedroom units designed for young professionals and 
                    public sector workers. Optimized layouts and cost-effective construction 
                    maintain affordability without quality compromise.</p>
                  </div>
                  
                  <div className="mix-category">
                    <h4>Social Housing (500 units)</h4>
                    <p>Dedicated free housing for vulnerable populations, 
                    elderly, and persons with disabilities. Integrated into larger developments 
                    to ensure community inclusion and access to services.</p>
                  </div>
                </div>
              </section>

              {/* Delivery Model */}
              <section className="program-section">
                <h2>BOT Framework Implementation</h2>
                <p>
                  The Build-Operate-Transfer model ensures professional delivery 
                  with clear government handover protocols, maintaining public asset 
                  ownership while leveraging private sector efficiency.
                </p>
                
                <div className="program-highlights">
                  <div className="highlight-card">
                    <h4>Build Phase (2025-2028)</h4>
                    <p>Construction of all 15,000 units with infrastructure</p>
                  </div>
                  <div className="highlight-card">
                    <h4>Operate Phase (2028-2053)</h4>
                    <p>25-year professional management and maintenance</p>
                  </div>
                  <div className="highlight-card">
                    <h4>Transfer Phase (2053)</h4>
                    <p>Asset handover to government with capacity building</p>
                  </div>
                </div>
              </section>

              {/* Economic Impact */}
              <EconomicImpact
                gdp="P8.5 Billion"
                directJobs="25,000"
                indirectJobs="75,000"
                housingReduction="12%"
                localSourcing="90%"
              />

              {/* Government Partnership */}
              <section className="program-section">
                <h2>Government Partnership Framework</h2>
                <div className="partnership-structure">
                  <div className="partnership-role">
                    <h4>Government of Botswana Provides:</h4>
                    <ul>
                      <li>Land allocation and development rights</li>
                      <li>Regulatory approvals and permits</li>
                      <li>Infrastructure connection facilitation</li>
                      <li>Tax incentives and customs waivers</li>
                      <li>Long-term policy support framework</li>
                    </ul>
                  </div>
                  <div className="partnership-role">
                    <h4>Premium Homes Delivers:</h4>
                    <ul>
                      <li>Program design and development management</li>
                      <li>Construction delivery and quality oversight</li>
                      <li>Financing structuring and capital mobilization</li>
                      <li>25-year operations and maintenance</li>
                      <li>Asset transfer and capacity building</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Program Status */}
              <section className="program-section">
                <h2>Current Program Status</h2>
                <div className="status-update">
                  <div className="status-badge status-badge--structured">
                    Structured Initiative
                  </div>
                  <p>
                    The Botswana Smart Housing Program is in structured development 
                    with government partnership negotiations underway.
                  </p>
                  <ul className="status-milestones">
                    <li>✓ Feasibility studies completed</li>
                    <li>✓ Government MOU signed</li>
                    <li>✓ Site identification advanced</li>
                    <li>✓ Financial model structuring</li>
                    <li>→ Land acquisition: Q2 2025</li>
                    <li>→ Construction commencement: Q4 2025</li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="program-cta">
                <h3>Request Botswana Program Briefing</h3>
                <p>
                  For comprehensive program documentation, investment opportunities, 
                  and partnership details.
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

export default BotswanaProgram;