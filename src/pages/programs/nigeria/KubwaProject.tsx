import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import UnitAllocationStatus from '@/components/programs/UnitAllocationStatus';
import UnitInquiryForm from '@/components/programs/UnitInquiryForm';
import '../../../components/programs/ProgramComponents.css';

const KubwaProject = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  return (
    <div className="project-page">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero__background">
          <img src="/images/programs/kubwa-hero.webp" alt="Kubwa District Integration" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/programs">Programs</Link> / 
            <Link to="/programs/nigeria">Nigeria</Link> / 
            <span>Kubwa District Integration</span>
          </div>
          <h1 className="project-hero__title">Kubwa District Integration</h1>
          <p className="project-hero__subtitle">
            Nigeria Housing Program — Phase I Implementation
          </p>
          <div className="status-badge status-badge--design">
            Design Phase: 5% Complete
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="project-stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat__value">1,750</div>
              <div className="stat__label">Units</div>
            </div>
            <div className="stat">
              <div className="stat__value">₦78.75B</div>
              <div className="stat__label">Project Value</div>
            </div>
            <div className="stat">
              <div className="stat__value">5%</div>
              <div className="stat__label">Design Progress</div>
            </div>
            <div className="stat">
              <div className="stat__value">2026-2028</div>
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
              className={activeTab === 'design' ? 'active' : ''}
              onClick={() => setActiveTab('design')}
            >
              Design Framework
            </button>
            <button 
              className={activeTab === 'mixed-income' ? 'active' : ''}
              onClick={() => setActiveTab('mixed-income')}
            >
              Mixed-Income Model
            </button>
            <button 
              className={activeTab === 'replication' ? 'active' : ''}
              onClick={() => setActiveTab('replication')}
            >
              Replication Model
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
                      Kubwa District Integration serves as the mixed-income delivery model 
                      for Nigeria Housing Program Phase I. This project tests innovative approaches 
                      to integrated housing serving all income levels within a single development.
                    </p>
                  </section>

                  <section>
                    <h2>Program Role</h2>
                    <p>
                      As Phase I's mixed-income model, Kubwa Integration validates:
                    </p>
                    <ul>
                      <li>Mixed-income housing integration strategies</li>
                      <li>Cross-subsidy financial models</li>
                      <li>Universal design for accessibility</li>
                      <li>Community integration across income groups</li>
                      <li>Scalable affordable housing delivery</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Mixed-Income Distribution</h2>
                    <div className="units-breakdown">
                      <div className="unit-category">
                        <h4>Luxury Segment</h4>
                        <div className="unit-count">350 units</div>
                        <p>3-4 bedroom premium units with high-end finishes</p>
                      </div>
                      <div className="unit-category">
                        <h4>Market-Rate Housing</h4>
                        <div className="unit-count">700 units</div>
                        <p>2-3 bedroom units for middle-income families</p>
                      </div>
                      <div className="unit-category">
                        <h4>Affordable Housing</h4>
                        <div className="unit-count">525 units</div>
                        <p>1-2 bedroom units with subsidized pricing</p>
                      </div>
                      <div className="unit-category">
                        <h4>Workforce Housing</h4>
                        <div className="unit-count">175 units</div>
                        <p>Starter units for essential service workers</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2>Integration Features</h2>
                    <div className="amenities-grid">
                      <div className="amenity-card">
                        <h4>Community Integration Center</h4>
                        <p>Shared facilities promoting interaction across income groups</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Universal Design Standards</h4>
                        <p>Accessibility features throughout all housing types</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Shared Services</h4>
                        <p>Common amenities available to all residents equally</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Mixed-Use Facilities</h4>
                        <p>Commercial spaces serving diverse community needs</p>
                      </div>
                    </div>
                  </section>
                </div>

                <aside className="content-sidebar">
                  <div className="sidebar-card">
                    <h3>Project Facts</h3>
                    <dl>
                      <dt>Location</dt>
                      <dd>Kubwa District, Abuja</dd>
                      
                      <dt>Site Area</dt>
                      <dd>35 hectares</dd>
                      
                      <dt>Development Model</dt>
                      <dd>Mixed-Income Integration</dd>
                      
                      <dt>Design Start</dt>
                      <dd>Q2 2025</dd>
                      
                      <dt>Construction Start</dt>
                      <dd>Q1 2026</dd>
                      
                      <dt>Estimated Completion</dt>
                      <dd>Q4 2028</dd>
                      
                      <dt>Income Mix</dt>
                      <dd>20% / 40% / 30% / 10%</dd>
                      
                      <dt>Integration Ratio</dt>
                      <dd>70% integrated amenities</dd>
                    </dl>
                  </div>

                  <UnitAllocationStatus
                    projectName="Kubwa District Integration"
                    totalUnits={1750}
                    onInquiryClick={() => setShowInquiryForm(true)}
                    onInstitutionalClick={() => window.location.href = '/engage'}
                  />
                </aside>
              </div>
            </div>
          )}

          {/* Design Framework Tab */}
          {activeTab === 'design' && (
            <div className="tab-content">
              <h2>Design Framework Development</h2>
              <p>Creating innovative design approaches for mixed-income integration</p>
              
              <div className="progress-timeline">
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q2 2025</div>
                  <div className="milestone-content">
                    <h4>Concept Development</h4>
                    <p>Mixed-income integration framework established</p>
                  </div>
                </div>
                
                <div className="progress-milestone active">
                  <div className="milestone-date">Q3-Q4 2025</div>
                  <div className="milestone-content">
                    <h4>Architectural Design</h4>
                    <p>Currently: Schematic design (20% complete)</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q1 2026</div>
                  <div className="milestone-content">
                    <h4>Universal Design Integration</h4>
                    <p>Accessibility and inclusive design features</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q2 2026</div>
                  <div className="milestone-content">
                    <h4>Community Facilities Design</h4>
                    <p>Shared spaces and integration centers</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mixed-Income Model Tab */}
          {activeTab === 'mixed-income' && (
            <div className="tab-content">
              <h2>Mixed-Income Delivery Model</h2>
              <p>
                Innovative approach to integrated housing serving all economic segments 
                while maintaining community cohesion and quality standards.
              </p>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <h4>Cross-Subsidy Framework</h4>
                  <p>
                    Market-rate units partially subsidize affordable housing 
                    through innovative financing structures.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Universal Access Design</h4>
                  <p>
                    All housing types and amenities designed for 
                    accessibility regardless of income segment.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Shared Quality Standards</h4>
                  <p>
                    Consistent construction and finish quality across 
                    all income categories.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Community Integration</h4>
                  <p>
                    Shared facilities and programs promoting social 
                    interaction across income groups.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Replication Model Tab */}
          {activeTab === 'replication' && (
            <div className="tab-content">
              <h2>Replication Model for National Scale</h2>
              <p>
                Kubwa Integration develops templates for mixed-income housing 
                applicable to Phase II Lagos and Phase III secondary cities.
              </p>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <h4>Scalable Income Mix Ratios</h4>
                  <p>
                    Testing optimal 20/40/30/10 income distribution 
                    for different market conditions.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Universal Design Templates</h4>
                  <p>
                    Developing standard designs for accessibility 
                    and inclusive living environments.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Integration Facility Models</h4>
                  <p>
                    Templates for community centers and shared amenities 
                    supporting mixed-income communities.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Cross-Subsidy Financial Models</h4>
                  <p>
                    Replicable financing structures enabling 
                    affordable housing without subsidies.
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
            <h3>Kubwa validates mixed-income housing at scale</h3>
            <p>
              This project demonstrates Premium Homes' capacity to deliver 
              integrated communities serving all income segments.
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
                  Unit Acquisition Inquiry - Kubwa District Integration
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
                projectName="Kubwa District Integration"
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

export default KubwaProject;