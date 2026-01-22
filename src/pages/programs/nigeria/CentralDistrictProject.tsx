import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import UnitAllocationStatus from '@/components/programs/UnitAllocationStatus';
import UnitInquiryForm from '@/components/programs/UnitInquiryForm';
import '../../../components/programs/ProgramComponents.css';

const CentralDistrictProject = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  return (
    <div className="project-page">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero__background">
          <img src="/images/programs/central-district-hero.webp" alt="Central District Development" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/programs">Programs</Link> / 
            <Link to="/programs/nigeria">Nigeria</Link> / 
            <span>Central District Development</span>
          </div>
          <h1 className="project-hero__title">Central District Development</h1>
          <p className="project-hero__subtitle">
            Nigeria Housing Program — Phase I Implementation
          </p>
          <div className="status-badge status-badge--planning">
            Advanced Planning: 15% Complete
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="project-stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat__value">1,400</div>
              <div className="stat__label">Units</div>
            </div>
            <div className="stat">
              <div className="stat__value">₦63B</div>
              <div className="stat__label">Project Value</div>
            </div>
            <div className="stat">
              <div className="stat__value">15%</div>
              <div className="stat__label">Planning Complete</div>
            </div>
            <div className="stat">
              <div className="stat__value">2025-2027</div>
              <div className="stat__label">Timeline</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="project-tabs">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={activeTab === 'overview' ? 'active' : ''}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={activeTab === 'planning' ? 'active' : ''}
              onClick={() => setActiveTab('planning')}
            >
              Planning Progress
            </button>
            <button 
              className={activeTab === 'specifications' ? 'active' : ''}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={activeTab === 'innovation' ? 'active' : ''}
              onClick={() => setActiveTab('innovation')}
            >
              Innovation Focus
            </button>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="content-layout">
                <div className="content-main">
                  <section>
                    <h2>Strategic Function</h2>
                    <p>
                      Central District Development serves as the mid-rise urban density model 
                      for Nigeria Housing Program Phase I. This project tests innovative approaches 
                      to high-density, sustainable urban housing in Abuja's central business district.
                    </p>
                  </section>

                  <section>
                    <h2>Program Role</h2>
                    <p>
                      As Phase I's largest implementation, Central District validates:
                    </p>
                    <ul>
                      <li>Mid-rise construction efficiency (8-12 stories)</li>
                      <li>Urban integration with existing infrastructure</li>
                      <li>Mixed-use development framework</li>
                      <li>Transportation hub integration</li>
                      <li>Commercial-residential synergy models</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Development Framework</h2>
                    <div className="units-breakdown">
                      <div className="unit-category">
                        <h4>Urban Professional Units</h4>
                        <div className="unit-count">720 units</div>
                        <p>1-2 bedroom units targeting young professionals</p>
                      </div>
                      <div className="unit-category">
                        <h4>Family Apartments</h4>
                        <div className="unit-count">500 units</div>
                        <p>2-3 bedroom units for growing families</p>
                      </div>
                      <div className="unit-category">
                        <h4>Executive Residences</h4>
                        <div className="unit-count">180 units</div>
                        <p>3-4 bedroom premium units with city views</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2>Integrated Urban Features</h2>
                    <div className="amenities-grid">
                      <div className="amenity-card">
                        <h4>Transportation Hub</h4>
                        <p>Integrated bus terminal and metro connectivity</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Commercial Center</h4>
                        <p>25,000 sqm retail and office space</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Civic Plaza</h4>
                        <p>Public spaces, market areas, community facilities</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Smart Infrastructure</h4>
                        <p>IoT systems, energy management, digital services</p>
                      </div>
                    </div>
                  </section>
                </div>

                <aside className="content-sidebar">
                  <div className="sidebar-card">
                    <h3>Project Facts</h3>
                    <dl>
                      <dt>Location</dt>
                      <dd>Central Business District, Abuja</dd>
                      
                      <dt>Site Area</dt>
                      <dd>8.5 hectares</dd>
                      
                      <dt>Development Model</dt>
                      <dd>PPP Urban Framework</dd>
                      
                      <dt>Planning Start</dt>
                      <dd>Q4 2024</dd>
                      
                      <dt>Construction Start</dt>
                      <dd>Q2 2025</dd>
                      
                      <dt>Estimated Completion</dt>
                      <dd>Q4 2027</dd>
                      
                      <dt>Zoning</dt>
                      <dd>Mixed-use (C1/C2)</dd>
                      
                      <dt>Density</dt>
                      <dd>165 units/hectare</dd>
                    </dl>
                  </div>

                  <UnitAllocationStatus
                    projectName="Central District Development"
                    totalUnits={1400}
                    onInquiryClick={() => setShowInquiryForm(true)}
                    onInstitutionalClick={() => window.location.href = '/engage'}
                  />
                </aside>
              </div>
            </div>
          )}

          {/* Planning Progress Tab */}
          {activeTab === 'planning' && (
            <div className="tab-content">
              <h2>Planning Progress Documentation</h2>
              <p>Advanced planning phase demonstrating systematic development approach</p>
              
              <div className="progress-timeline">
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q4 2024</div>
                  <div className="milestone-content">
                    <h4>Site Acquisition Complete</h4>
                    <p>Land secured, title perfection completed</p>
                  </div>
                </div>
                
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q1 2025</div>
                  <div className="milestone-content">
                    <h4>Urban Planning Approval</h4>
                    <p>FCDA approval, zoning variances secured</p>
                  </div>
                </div>
                
                <div className="progress-milestone active">
                  <div className="milestone-date">Q2 2025</div>
                  <div className="milestone-content">
                    <h4>Architectural Design</h4>
                    <p>Currently: Detailed design development (60% complete)</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q3 2025</div>
                  <div className="milestone-content">
                    <h4>Infrastructure Design</h4>
                    <p>Utilities, roads, transportation systems</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q4 2025</div>
                  <div className="milestone-content">
                    <h4>Construction Permitting</h4>
                    <p>Building permits, environmental clearance</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specifications' && (
            <div className="tab-content">
              <h2>Technical Specifications</h2>
              
              <div className="spec-layout">
                <section className="spec-section">
                  <h2>Urban Design Parameters</h2>
                  <div className="standards-grid">
                    <div className="standard-item">
                      <h4>Building Height</h4>
                      <ul>
                        <li>8-12 stories maximum</li>
                        <li>Step-down design from center</li>
                        <li>Setback requirements maintained</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Building Separation</h4>
                      <ul>
                        <li>6-meter minimum separation</li>
                        <li>Natural light optimization</li>
                        <li>Fire safety compliance</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Parking Ratios</h4>
                      <ul>
                        <li>1:1 for residential units</li>
                        <li>Additional for commercial</li>
                        <li>Underground parking prioritized</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="spec-section">
                  <h2>Sustainability Standards</h2>
                  <div className="standards-grid">
                    <div className="standard-item">
                      <h4>Energy Efficiency</h4>
                      <ul>
                        <li>Solar panel integration (40% coverage)</li>
                        <li>LED lighting throughout</li>
                        <li>Smart climate control systems</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Water Management</h4>
                      <ul>
                        <li>Rainwater harvesting systems</li>
                        <li>Greywater recycling</li>
                        <li>Low-flow fixtures</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Green Spaces</h4>
                      <ul>
                        <li>30% site area dedicated</li>
                        <li>Vertical garden integration</li>
                        <li>Rooftop garden access</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* Innovation Focus Tab */}
          {activeTab === 'innovation' && (
            <div className="tab-content">
              <h2>Innovation Framework for National Scale</h2>
              <p>
                Central District Development serves as innovation laboratory for Nigeria Housing 
                Program scale-up to Phase II and III cities.
              </p>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <h4>Urban Density Model</h4>
                  <p>
                    Testing optimal 165 units/hectare density for Nigerian cities, 
                    balancing livability with efficiency for Lagos application.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Transportation Integration</h4>
                  <p>
                    Multi-modal transportation hub design template for secondary 
                    cities with developing transit systems.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Mixed-Use Synergy</h4>
                  <p>
                    Commercial-residential integration model supporting 
                    local economic development and reduced commuting.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Smart City Infrastructure</h4>
                  <p>
                    IoT and digital systems framework applicable to 
                    28,000-unit Phase II Lagos corridor.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="project-bottom-cta">
        <div className="container">
          <div className="cta-content">
            <h3>Central District validates urban housing at scale</h3>
            <p>
              This project demonstrates Premium Homes' capacity to deliver complex 
              urban developments, informing national program expansion.
            </p>
            <div className="cta-actions">
              <Button asChild variant="secondary">
                <Link to="/programs/nigeria">
                  ← Back to Nigeria Program
                </Link>
              </Button>
              <Button asChild>
                <Link to="/engage">
                  Request Development Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Inquiry Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-medium">
                  Unit Acquisition Inquiry - Central District Development
                </h2>
                <button
                  onClick={() => setShowInquiryForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <UnitInquiryForm
                projectName="Central District Development"
                onSubmit={(data) => {
                  console.log('Inquiry submitted:', data);
                  setShowInquiryForm(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CentralDistrictProject;