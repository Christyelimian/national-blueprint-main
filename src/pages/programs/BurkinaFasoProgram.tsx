import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import ProgramHero from '../../components/programs/ProgramHero';
import ProgramSidebar from '../../components/programs/ProgramSidebar';
import EconomicImpact from '../../components/programs/EconomicImpact';
import './ProgramComponents.css';

const BurkinaFasoProgram = () => {
  const quickFacts = {
    investment: '$14-15 Billion',
    model: 'PPP / Development Finance',
    status: 'Strategic Development Program',
    timeline: '2025-2032',
    components: ['Housing', 'Rail', 'Water', 'Technology Hubs', 'Healthcare'],
  };

  return (
    <div className="country-program">
      <Header />
      <ProgramHero
        country="burkina-faso"
        title="Burkina Faso National Infrastructure Program"
        subtitle="Comprehensive National Development"
        image="/images/programs/burkina-faso-hero.webp"
        status="Strategic Development Program"
      />

      <div className="program-content">
        <div className="container">
          <div className="program-layout">
            {/* Sidebar */}
            <ProgramSidebar facts={quickFacts} country="burkina-faso" />

            {/* Main Content */}
            <div className="program-main">
              {/* National Context */}
              <section className="program-section">
                <h2>National Context</h2>
                <p>
                  Burkina Faso stands at a transformative juncture, requiring 
                  comprehensive infrastructure modernization to unlock economic potential 
                  and improve quality of life. The country's strategic location 
                  and growing economy create urgent needs for housing, transport, 
                  water, and technology infrastructure.
                </p>
                <p>
                  This $14-15 billion national program addresses critical deficits 
                  through integrated development, positioning Burkina Faso as a 
                  regional leader in sustainable urbanization and digital transformation.
                </p>
              </section>

              {/* Program Overview */}
              <section className="program-section">
                <h2>Program Overview</h2>
                <p>
                  A data-driven national modernization program encompassing housing, 
                  rail, water, technology hubs, and healthcare infrastructure. 
                  The program leverages public-private partnerships and international 
                  development finance to deliver transformative national assets.
                </p>
              </section>

              {/* Infrastructure Pillars */}
              <section className="program-section">
                <h2>Five Infrastructure Pillars</h2>
                
                <div className="infrastructure-pillars">
                  <div className="pillar-card">
                    <h3>🏠 Housing & Urban Development</h3>
                    <p>20,000+ housing units in major cities with integrated 
                    utilities, community facilities, and sustainable design principles.</p>
                  </div>
                  
                  <div className="pillar-card">
                    <h3>🚂 Rail & Transport Network</h3>
                    <p>1,200km modern railway connecting major economic centers, 
                    reducing transport costs and enabling regional trade integration.</p>
                  </div>
                  
                  <div className="pillar-card">
                    <h3>💧 Water & Sanitation Systems</h3>
                    <p>National water infrastructure providing clean water access 
                    to 5 million people with modern treatment and distribution systems.</p>
                  </div>
                  
                  <div className="pillar-card">
                    <h3>💻 Technology & Innovation Hubs</h3>
                    <p>Four technology centers driving digital transformation, 
                    supporting startups, and enabling e-government services.</p>
                  </div>
                  
                  <div className="pillar-card">
                    <h3>🏥 Healthcare Modernization</h3>
                    <p>200 modern healthcare facilities with telemedicine integration, 
                    serving 80% of the population with quality medical services.</p>
                  </div>
                </div>
              </section>

              {/* Regional Development Strategy */}
              <section className="program-section">
                <h2>Regional Development Strategy</h2>
                <p>
                  The program implements balanced regional development to ensure 
                  inclusive growth across all regions while maximizing economic 
                  impact and national cohesion.
                </p>
                
                <div className="geographic-zones">
                  <div className="zone-card">
                    <h4>Ouagadougou Metropolitan</h4>
                    <p className="zone-units">8,000 units</p>
                    <p>Capital city transformation with smart urban planning</p>
                  </div>
                  <div className="zone-card">
                    <h4>Bobo-Dioulasso</h4>
                    <p className="zone-units">4,500 units</p>
                    <p>Economic hub development with industrial integration</p>
                  </div>
                  <div className="zone-card">
                    <h4>Koudougou</h4>
                    <p className="zone-units">3,200 units</p>
                    <p>Educational center with supporting infrastructure</p>
                  </div>
                  <div className="zone-card">
                    <h4>Banfora & Tenkodogo</h4>
                    <p className="zone-units">2,100 units</p>
                    <p>Agricultural processing zone housing</p>
                  </div>
                  <div className="zone-card">
                    <h4>Kaya & Dori</h4>
                    <p className="zone-units">2,200 units</p>
                    <p>Northern regional development hubs</p>
                  </div>
                </div>
              </section>

              {/* Technology Integration */}
              <section className="program-section">
                <h2>Digital Transformation Integration</h2>
                <p>
                  Technology integration across all infrastructure components creates 
                  smart, efficient systems that enable long-term sustainability 
                  and operational excellence.
                </p>
                
                <div className="program-highlights">
                  <div className="highlight-card">
                    <h4>Smart City Management</h4>
                    <p>IoT sensors and AI-powered systems for utilities, traffic, 
                    and services management across all developments.</p>
                  </div>
                  <div className="highlight-card">
                    <h4>Digital Public Services</h4>
                    <p>E-government platforms enabling online access to services, 
                    permits, and civic engagement.</p>
                  </div>
                  <div className="highlight-card">
                    <h4>Skills Development Centers</h4>
                    <p>Technology training facilities creating workforce for 
                    digital economy and modern infrastructure operations.</p>
                  </div>
                </div>
              </section>

              {/* Financing Structure */}
              <section className="program-section">
                <h2>Innovative Financing Framework</h2>
                <p>
                  Multi-layered financing strategy combining development finance, 
                  private investment, and international partnerships to ensure 
                  program sustainability and risk sharing.
                </p>
                
                <div className="financing-structure">
                  <div className="financing-layer">
                    <h4>Development Finance Institutions</h4>
                    <p>AfDB, World Bank, and regional development banks 
                    providing concessional financing for social infrastructure components.</p>
                  </div>
                  
                  <div className="financing-layer">
                    <h4>Private Sector Investment</h4>
                    <p>PPP structures for commercial components with 
                    risk-adjusted returns and long-term concession agreements.</p>
                  </div>
                  
                  <div className="financing-layer">
                    <h4>Sovereign Wealth Integration</h4>
                    <p>Strategic use of national resources and sovereign 
                    wealth funds for strategic infrastructure assets.</p>
                  </div>
                </div>
              </section>

              {/* Economic Impact */}
              <EconomicImpact
                gdp="$45 Billion"
                directJobs="120,000"
                indirectJobs="480,000"
                housingReduction="18%"
                localSourcing="75%"
              />

              {/* Program Status */}
              <section className="program-section">
                <h2>Current Program Status</h2>
                <div className="status-update">
                  <div className="status-badge status-badge--strategic">
                    Strategic Development Program
                  </div>
                  <p>
                    The Burkina Faso National Infrastructure Program is in strategic 
                    development with comprehensive planning and stakeholder engagement.
                  </p>
                  <ul className="status-milestones">
                    <li>✓ National infrastructure assessment completed</li>
                    <li>✓ Program framework established</li>
                    <li>✓ International partner discussions underway</li>
                    <li>✓ Financing structure development advanced</li>
                    <li>→ Groundbreaking: Q3 2025</li>
                    <li>→ Phase I completion: 2028</li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="program-cta">
                <h3>Request Burkina Faso Program Briefing</h3>
                <p>
                  For comprehensive program documentation, investment opportunities, 
                  and partnership frameworks.
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

export default BurkinaFasoProgram;