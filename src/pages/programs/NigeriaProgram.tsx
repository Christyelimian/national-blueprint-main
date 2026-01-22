import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import ProgramHero from '../../components/programs/ProgramHero';
import ProgramSidebar from '../../components/programs/ProgramSidebar';
import EconomicImpact from '../../components/programs/EconomicImpact';
import './ProgramComponents.css';

const NigeriaProgram = () => {
  const quickFacts = {
    investment: '$25-30 Billion',
    model: 'Multi-State Platform',
    status: 'Active Implementation',
    timeline: '2024-2032',
    components: ['FCT/Abuja', 'Akwa Ibom', 'Cross River'],
  };

  return (
    <div className="country-program">
      <Header />
      <ProgramHero
        country="nigeria"
        title="Nigeria National Development Platform"
        subtitle="Multi-State Urban Development Initiative"
        image="/images/programs/nigeria-hero.webp"
        status="Active Implementation & Strategic Expansion"
      />

      <div className="program-content">
        <div className="container">
          <div className="program-layout">
            {/* Sidebar */}
            <ProgramSidebar facts={quickFacts} country="nigeria" />

            {/* Main Content */}
            <div className="program-main">
              {/* National Context */}
              <section className="program-section">
                <h2>Nigeria: Premium Homes' Flagship Platform</h2>
                <p>
                  Nigeria represents Premium Homes' largest and most strategic development platform, 
                  structured as a $25-30 billion multi-state initiative that demonstrates our capability 
                  to deliver at sovereign scale. As our home market, Nigeria provides the regulatory 
                  expertise, market understanding, and execution track record that validates our 
                  continental expansion strategy.
                </p>
                <p>
                  With a 28 million unit housing deficit and rapid urbanization across multiple states, 
                  Nigeria offers both the continent's greatest housing challenge and its largest economic 
                  opportunity. Our multi-state approach diversifies risk while testing distinct development 
                  models across different regional contexts.
                </p>
              </section>

              {/* Platform Overview */}
              <section className="program-section">
                <h2>Multi-State Platform Architecture</h2>
                <p>
                  The Nigeria Platform is structured across three strategic states, each representing 
                  a distinct development model and market opportunity. This $25-30 billion initiative 
                  accounts for 40-50% of Premium Homes' total development pipeline, positioning Nigeria 
                  as the foundation of our continental strategy.
                </p>
                <div className="platform-comparison">
                  <div className="comparison-card">
                    <h4>NIGERIA PLATFORM</h4>
                    <div className="comparison-value">$25-30 Billion</div>
                    <div className="comparison-detail">Multi-State Development Initiative</div>
                  </div>
                  <div className="comparison-card">
                    <h4>SIERRA LEONE</h4>
                    <div className="comparison-value">$10 Billion</div>
                    <div className="comparison-detail">Single Smart Mega City</div>
                  </div>
                  <div className="comparison-card">
                    <h4>BURKINA FASO</h4>
                    <div className="comparison-value">$14-15 Billion</div>
                    <div className="comparison-detail">National Infrastructure</div>
                  </div>
                </div>
              </section>

              {/* State Programs */}
              <section className="program-section">
                <h2>Three State-Level Mega Programs</h2>

                <div className="component-section">
                  <h3>FCT/Abuja - Urban Acceleration (Active Implementation)</h3>
                  <div className="component-details">
                    <p><strong>Investment: $6-8 Billion | Target: 75,000 units</strong></p>
                    <p>
                      The FCT program serves as Premium Homes' execution proof point, with 
                      Bromley Court (60% complete, 850 units) validating our construction methodology, 
                      financial structuring, and quality assurance systems. Phase I includes four 
                      projects delivering 5,200 units as the foundation for expansion to 75,000 units 
                      across Abuja's urban districts.
                    </p>
                    <div className="state-projects">
                      <div className="project-mini-card">
                        <h4>Bromley Court</h4>
                        <span className="status-badge active">60% Complete</span>
                        <p>850 units • Central Abuja • ₦38.25B value</p>
                        <Button asChild size="sm" variant="outline">
                          <Link to="/programs/nigeria/bromley-court">View Project</Link>
                        </Button>
                      </div>
                      <div className="project-mini-card">
                        <h4>Central District</h4>
                        <span className="status-badge planning">Advanced Planning</span>
                        <p>1,400 units • Urban density model</p>
                        <Button asChild size="sm" variant="outline">
                          <Link to="/programs/nigeria/central-district">View Details</Link>
                        </Button>
                      </div>
                      <div className="project-mini-card">
                        <h4>Gwarinpa Project</h4>
                        <span className="status-badge planning">Strategic Planning</span>
                        <p>1,200 units • Mid-rise residential</p>
                        <Button asChild size="sm" variant="outline">
                          <Link to="/programs/nigeria/gwarinpa">View Details</Link>
                        </Button>
                      </div>
                      <div className="project-mini-card">
                        <h4>Kubwa Extension</h4>
                        <span className="status-badge planning">Strategic Planning</span>
                        <p>1,750 units • Satellite township model</p>
                        <Button asChild size="sm" variant="outline">
                          <Link to="/programs/nigeria/kubwa">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="component-section">
                  <h3>Akwa Ibom - Smart Mega City (Advanced Structuring)</h3>
                  <div className="component-details">
                    <p><strong>Investment: $12 Billion | Target: 80,000+ units</strong></p>
                    <p>
                      Akwa Ibom represents Premium Homes' first full-scale smart mega city—a 
                      complete urban ecosystem integrating housing, industry, infrastructure, and 
                      social services. This $12 billion initiative leverages Akwa Ibom's strategic 
                      coastal location, strong fiscal base from oil & gas economy, and state 
                      government development priority.
                    </p>
                    <div className="mega-city-components">
                      <div className="component-item">
                        <h4>🏘 Residential</h4>
                        <p>80,000 mixed-income units including 15,000 social housing</p>
                      </div>
                      <div className="component-item">
                        <h4>🏭 Economic Zones</h4>
                        <p>Technology hub, light industrial park, 150,000 sqm commercial</p>
                      </div>
                      <div className="component-item">
                        <h4>🏥 Healthcare</h4>
                        <p>Teaching hospital (750 beds), 5 district centers, 25 clinics</p>
                      </div>
                      <div className="component-item">
                        <h4>🎓 Education</h4>
                        <p>University campus, 4 secondary schools, 12 primary schools</p>
                      </div>
                      <div className="component-item">
                        <h4>⚡ Infrastructure</h4>
                        <p>100MW power, 40% renewable target, fiber optic backbone</p>
                      </div>
                      <div className="component-item">
                        <h4>🚆 Transport</h4>
                        <p>120km road network, light rail corridor, port connectivity</p>
                      </div>
                    </div>
                    <div className="contingency-notice">
                      <strong>Contingent on FCT Phase I success</strong> - Launches 2026 upon Abuja validation
                    </div>
                  </div>
                </div>

                <div className="component-section">
                  <h3>Cross River - Green Sustainable City (Strategic Planning)</h3>
                  <div className="component-details">
                    <p><strong>Investment: $10 Billion | Target: 65,000+ units</strong></p>
                    <p>
                      Cross River program integrates eco-tourism with sustainable urban development, 
                      leveraging the state's natural assets (rainforest, waterfalls, coastal beauty) 
                      while addressing housing needs. This $10 billion initiative represents Nigeria's 
                      premier "Green Mega City" with 70% green space preservation and 100% renewable 
                      energy target.
                    </p>
                    <div className="green-city-features">
                      <div className="feature-highlight">
                        <h4>🌳 Eco-Tourism Integration</h4>
                        <p>Safari lodges, national park gateways, cultural tourism centers</p>
                      </div>
                      <div className="feature-highlight">
                        <h4>🌿 Sustainable Systems</h4>
                        <p>150MW solar farms, micro-hydro installations, water recycling</p>
                      </div>
                      <div className="feature-highlight">
                        <h4>🎓 Environmental Research</h4>
                        <p>Environmental studies campus, eco-tourism training center</p>
                      </div>
                    </div>
                    <div className="contingency-notice">
                      <strong>Contingent on Akwa Ibom Phase I success</strong> - Launches 2028 upon mega city validation
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Nigeria is Strategic */}
              <section className="program-section highlight-section">
                <h2>Why Nigeria Anchors Our Continental Strategy</h2>
                <div className="strategic-reasons">
                  <div className="reason-card">
                    <h4>🏠 Home Market Advantage</h4>
                    <p>Deep regulatory expertise, cultural context, and market dynamics that don't exist in international markets</p>
                  </div>
                  <div className="reason-card">
                    <h4>✅ Active Proof of Execution</h4>
                    <p>Bromley Court's 60% completion provides tangible validation vs theoretical frameworks</p>
                  </div>
                  <div className="reason-card">
                    <h4>📊 Largest Market Opportunity</h4>
                    <p>28 million unit housing deficit justifies multi-state $25-30B approach</p>
                  </div>
                  <div className="reason-card">
                    <h4>🎯 Multi-State Diversification</h4>
                    <p>Three distinct models (administrative, industrial, eco-tourism) reduce concentration risk</p>
                  </div>
                  <div className="reason-card">
                    <h4>🌍 International Credibility</h4>
                    <p>"If we can deliver $25-30B across Nigeria, we can handle $10B in Sierra Leone"</p>
                  </div>
                </div>
              </section>

              {/* Economic Impact */}
              <EconomicImpact
                gdp="$8.5 Billion"
                directJobs="175,000"
                indirectJobs="520,000"
                housingReduction="30%"
                localSourcing="75%"
              />

              {/* Phased Timeline */}
              <section className="program-section">
                <h2>Progressive Platform Rollout</h2>
                <div className="timeline">
                  <div className="timeline-phase">
                    <div className="timeline-phase__header">
                      <h4>2024-2026: FCT Phase I Validation</h4>
                      <span className="timeline-phase__duration">Active</span>
                    </div>
                    <ul>
                      <li>Bromley Court completion (850 units)</li>
                      <li>Three additional projects (4,350 units)</li>
                      <li>Systems and framework validation</li>
                      <li>Learnings capture for expansion</li>
                    </ul>
                  </div>

                  <div className="timeline-phase">
                    <div className="timeline-phase__header">
                      <h4>2026-2028: Multi-State Expansion</h4>
                      <span className="timeline-phase__duration">Contingent</span>
                    </div>
                    <ul>
                      <li>Akwa Ibom Phase I launch (12,000 units)</li>
                      <li>FCT Phase II expansion (18,000 units)</li>
                      <li>Cross River final structuring</li>
                      <li>Platform scaling validation</li>
                    </ul>
                  </div>

                  <div className="timeline-phase">
                    <div className="timeline-phase__header">
                      <h4>2028-2032: Full Platform Deployment</h4>
                      <span className="timeline-phase__duration">Progressive</span>
                    </div>
                    <ul>
                      <li>All three programs in full delivery</li>
                      <li>200,000+ units under construction</li>
                      <li>Infrastructure integration complete</li>
                      <li>Operations optimization across states</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Current Status */}
              <section className="program-section">
                <h2>Current Platform Status</h2>
                <div className="status-update">
                  <div className="status-badge status-badge--active">
                    Active Implementation & Strategic Expansion
                  </div>
                  <p>
                    The Nigeria Platform demonstrates Premium Homes' largest-scale execution 
                    capability with active implementation in FCT and advanced structuring in 
                    partner states. Key achievements:
                  </p>
                  <ul className="status-milestones">
                    <li>✅ Bromley Court: 60% construction complete, systems validated</li>
                    <li>✅ FCT Phase I: Four projects structured, 5,200 units pipeline</li>
                    <li>✅ Akwa Ibom: Advanced structuring, state government engagement</li>
                    <li>✅ Cross River: Strategic planning, eco-tourism framework development</li>
                    <li>✅ Platform architecture: Multi-state model validated</li>
                    <li>→ 2025: FCT Phase I completion, Akwa Ibom final structuring</li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="program-cta">
                <h3>Request Nigeria Platform Briefing</h3>
                <p>
                  For institutional partners, government agencies, and development finance 
                  organizations seeking detailed platform documentation and partnership opportunities.
                </p>
                <Button asChild>
                  <Link to="/engage">
                    Request Platform Briefing
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

export default NigeriaProgram;