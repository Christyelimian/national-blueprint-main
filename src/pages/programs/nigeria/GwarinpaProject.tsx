import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import UnitAllocationStatus from '@/components/programs/UnitAllocationStatus';
import UnitInquiryForm from '@/components/programs/UnitInquiryForm';
import '../../../components/programs/ProgramComponents.css';

const GwarinpaProject = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  return (
    <div className="project-page">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero__background">
          <img src="/images/programs/gwarinpa-hero.webp" alt="Gwarinpa Expansion" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/programs">Programs</Link> / 
            <Link to="/programs/nigeria">Nigeria</Link> / 
            <span>Gwarinpa Expansion</span>
          </div>
          <h1 className="project-hero__title">Gwarinpa Expansion</h1>
          <p className="project-hero__subtitle">
            Nigeria Housing Program — Phase I Implementation
          </p>
          <div className="status-badge status-badge--land">
            Land Secured: 8% Complete
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="project-stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat__value">1,200</div>
              <div className="stat__label">Units</div>
            </div>
            <div className="stat">
              <div className="stat__value">₦54B</div>
              <div className="stat__label">Project Value</div>
            </div>
            <div className="stat">
              <div className="stat__value">8%</div>
              <div className="stat__label">Planning Progress</div>
            </div>
            <div className="stat">
              <div className="stat__value">2025-2028</div>
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
              className={activeTab === 'land' ? 'active' : ''}
              onClick={() => setActiveTab('land')}
            >
              Land Development
            </button>
            <button 
              className={activeTab === 'community' ? 'active' : ''}
              onClick={() => setActiveTab('community')}
            >
              Community Integration
            </button>
            <button 
              className={activeTab === 'framework' ? 'active' : ''}
              onClick={() => setActiveTab('framework')}
            >
              Suburban Framework
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
                      Gwarinpa Expansion serves as the suburban integration framework for 
                      Nigeria Housing Program Phase I. This project tests scalable approaches 
                      to suburban residential development with urban connectivity.
                    </p>
                  </section>

                  <section>
                    <h2>Program Role</h2>
                    <p>
                      As Phase I's suburban model, Gwarinpa Expansion validates:
                    </p>
                    <ul>
                      <li>Suburban residential development patterns</li>
                      <li>Urban-suburban transportation integration</li>
                      <li>Community facility planning models</li>
                      <li>Infrastructure extension frameworks</li>
                      <li>Affordable housing delivery systems</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Development Approach</h2>
                    <div className="units-breakdown">
                      <div className="unit-category">
                        <h4>Suburban Family Homes</h4>
                        <div className="unit-count">540 units</div>
                        <p>3-4 bedroom detached and semi-detached units</p>
                      </div>
                      <div className="unit-category">
                        <h4>Townhouse Communities</h4>
                        <div className="unit-count">420 units</div>
                        <p>2-3 bedroom townhouse configurations</p>
                      </div>
                      <div className="unit-category">
                        <h4>Affordable Apartments</h4>
                        <div className="unit-count">240 units</div>
                        <p>1-2 bedroom units for young families</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2>Community Infrastructure</h2>
                    <div className="amenities-grid">
                      <div className="amenity-card">
                        <h4>Community Center</h4>
                        <p>Multi-purpose facility with recreational and educational programs</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Local Commercial</h4>
                        <p>Neighborhood retail, services, and small business incubator</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Educational Campus</h4>
                        <p>Primary and secondary school with sports facilities</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Healthcare Center</h4>
                        <p>Primary care facility serving surrounding communities</p>
                      </div>
                    </div>
                  </section>
                </div>

                <aside className="content-sidebar">
                  <div className="sidebar-card">
                    <h3>Project Facts</h3>
                    <dl>
                      <dt>Location</dt>
                      <dd>Gwarinpa District, Abuja</dd>
                      
                      <dt>Site Area</dt>
                      <dd>25 hectares</dd>
                      
                      <dt>Development Model</dt>
                      <dd>Suburban Integration Framework</dd>
                      
                      <dt>Land Secured</dt>
                      <dd>Q1 2025</dd>
                      
                      <dt>Construction Start</dt>
                      <dd>Q3 2025</dd>
                      
                      <dt>Estimated Completion</dt>
                      <dd>Q4 2028</dd>
                      
                      <dt>Density</dt>
                      <dd>48 units/hectare</dd>
                      
                      <dt>Green Space Ratio</dt>
                      <dd>40%</dd>
                    </dl>
                  </div>

                  <UnitAllocationStatus
                    projectName="Gwarinpa Expansion"
                    totalUnits={1200}
                    onInquiryClick={() => setShowInquiryForm(true)}
                    onInstitutionalClick={() => window.location.href = '/engage'}
                  />
                </aside>
              </div>
            </div>
          )}

          {/* Land Development Tab */}
          {activeTab === 'land' && (
            <div className="tab-content">
              <h2>Land Development Progress</h2>
              <p>Systematic land preparation for sustainable suburban development</p>
              
              <div className="progress-timeline">
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q1 2025</div>
                  <div className="milestone-content">
                    <h4>Land Acquisition Complete</h4>
                    <p>25 hectares secured, title perfected</p>
                  </div>
                </div>
                
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q2 2025</div>
                  <div className="milestone-content">
                    <h4>Site Survey Complete</h4>
                    <p>Topographical survey, soil analysis completed</p>
                  </div>
                </div>
                
                <div className="progress-milestone active">
                  <div className="milestone-date">Q3 2025</div>
                  <div className="milestone-content">
                    <h4>Infrastructure Planning</h4>
                    <p>Currently: Road network and utility routing design</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q4 2025</div>
                  <div className="milestone-content">
                    <h4>Site Preparation</h4>
                    <p>Clearing, grading, and initial infrastructure</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q1 2026</div>
                  <div className="milestone-content">
                    <h4>Utility Installation</h4>
                    <p>Water, electricity, sewage systems</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Community Integration Tab */}
          {activeTab === 'community' && (
            <div className="tab-content">
              <h2>Community Integration Framework</h2>
              <p>
                Comprehensive approach to creating sustainable suburban communities 
                with strong social fabric and economic opportunity.
              </p>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <h4>Educational Integration</h4>
                  <p>
                    Coordinated K-12 educational facility serving 1,200 students 
                    with STEM focus and community programs.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Healthcare Access</h4>
                  <p>
                    Primary healthcare center with telemedicine capabilities 
                    serving 5,000+ residents in surrounding area.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Economic Development</h4>
                  <p>
                    Small business incubator and local market space supporting 
                    entrepreneurial activity and job creation.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Transportation Connectivity</h4>
                  <p>
                    Feeder road network and transit hub connecting to 
                    Abuja central business district.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Framework Tab */}
          {activeTab === 'framework' && (
            <div className="tab-content">
              <h2>Suburban Framework for National Scale</h2>
              <p>
                Gwarinpa Expansion develops replicable suburban housing models 
                for application in secondary cities during Phase III.
              </p>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <h4>Scalable Density Models</h4>
                  <p>
                    Testing optimal suburban density (48 units/hectare) for 
                    secondary cities with different growth patterns.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Community Facility Planning</h4>
                  <p>
                    Developing templates for integrated community facilities 
                    applicable to smaller municipalities.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Infrastructure Extension</h4>
                  <p>
                    Cost-effective utility and road infrastructure extension 
                    models for rapidly growing urban areas.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Affordable Housing Delivery</h4>
                  <p>
                    Testing construction methods reducing costs while 
                    maintaining quality for mass housing programs.
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
            <h3>Gwarinpa validates suburban housing integration</h3>
            <p>
              This project demonstrates Premium Homes' capacity to deliver 
              comprehensive suburban communities with full amenities.
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
                  Unit Acquisition Inquiry - Gwarinpa Expansion
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
                projectName="Gwarinpa Expansion"
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

export default GwarinpaProject;