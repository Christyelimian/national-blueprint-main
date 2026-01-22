import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import UnitAllocationStatus from '@/components/programs/UnitAllocationStatus';
import UnitInquiryForm from '@/components/programs/UnitInquiryForm';
import '../../../components/programs/ProgramComponents.css';

const BromleyCourtProject = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  return (
    <div className="project-page">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero__background">
          <img src="/images/projects/bromley-court-hero.webp" alt="Bromley Court" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/programs">Programs</Link> / 
            <Link to="/programs/nigeria">Nigeria</Link> / 
            <span>Bromley Court</span>
          </div>
          <h1 className="project-hero__title">Bromley Court</h1>
          <p className="project-hero__subtitle">
            Nigeria Housing Program — Phase I Pilot Implementation
          </p>
          <div className="status-badge status-badge--implementation">
            Active Delivery: 60% Complete
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="project-stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat__value">850</div>
              <div className="stat__label">Units</div>
            </div>
            <div className="stat">
              <div className="stat__value">₦38.25B</div>
              <div className="stat__label">Project Value</div>
            </div>
            <div className="stat">
              <div className="stat__value">60%</div>
              <div className="stat__label">Complete</div>
            </div>
            <div className="stat">
              <div className="stat__value">2024-2026</div>
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
              className={activeTab === 'progress' ? 'active' : ''}
              onClick={() => setActiveTab('progress')}
            >
              Construction Progress
            </button>
            <button 
              className={activeTab === 'specifications' ? 'active' : ''}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={activeTab === 'impact' ? 'active' : ''}
              onClick={() => setActiveTab('impact')}
            >
              Impact
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
                    <h2>Strategic Context</h2>
                    <p>
                      Bromley Court represents initial implementation of Premium Homes' 
                      Nigeria Urban Housing Acceleration Program, demonstrating integrated 
                      housing delivery at scale. This project validates technical, 
                      financial, and operational frameworks that will be scaled across 
                      100,000-unit national program.
                    </p>
                  </section>

                  <section>
                    <h2>Program Role</h2>
                    <p>
                      As first delivery under the Nigeria Housing Program, Bromley Court 
                      serves multiple strategic functions:
                    </p>
                    <ul>
                      <li>Pilot for phased financing structure</li>
                      <li>Validation of multi-income tier integration</li>
                      <li>Demonstration of infrastructure-first delivery</li>
                      <li>Testing of quality standards framework</li>
                      <li>Development of community integration model</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Residential Units Breakdown</h2>
                    <div className="units-breakdown">
                      <div className="unit-category">
                        <h4>Market Rate Units</h4>
                        <div className="unit-count">620 units</div>
                        <p>2-4 bedroom apartments targeting mid-to-upper income</p>
                      </div>
                      <div className="unit-category">
                        <h4>Mid-Income Units</h4>
                        <div className="unit-count">180 units</div>
                        <p>2-3 bedroom units with optimized pricing</p>
                      </div>
                      <div className="unit-category">
                        <h4>Workforce Housing</h4>
                        <div className="unit-count">50 units</div>
                        <p>Designated for essential workers and civil servants</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2>Integrated Amenities</h2>
                    <div className="amenities-grid">
                      <div className="amenity-card">
                        <h4>Primary Healthcare Center</h4>
                        <p>24-hour clinic serving residents and surrounding community</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Educational Facility (K-6)</h4>
                        <p>Primary school with capacity for 480 students</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Commercial District</h4>
                        <p>15,000 sqm retail and services area</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Recreational Spaces</h4>
                        <p>Parks, playgrounds, fitness areas, community center</p>
                      </div>
                      <div className="amenity-card">
                        <h4>Digital Connectivity</h4>
                        <p>Fiber optic infrastructure throughout</p>
                      </div>
                    </div>
                  </section>

                  <section className="gallery-section">
                    <h2>Project Gallery</h2>
                    <p>Visual documentation of Bromley Court development progress</p>
                    <div className="gallery-grid">
                      <img 
                        src="/images/projects/gallery/bromley-1.jpeg" 
                        alt="Bromley Court site view - progress update" 
                        className="gallery-image"
                        loading="lazy"
                      />
                      <img 
                        src="/images/projects/gallery/bromley-2.jpeg" 
                        alt="Bromley Court construction detail" 
                        className="gallery-image"
                        loading="lazy"
                      />
                      <img 
                        src="/images/projects/gallery/bromley-3.jpeg" 
                        alt="Bromley Court aerial view" 
                        className="gallery-image"
                        loading="lazy"
                      />
                    </div>
                  </section>

                  <section className="gallery-videos-section">
                    <h2>Construction Video Tour</h2>
                    <p>Watch the progress of Bromley Court development</p>
                    <div className="gallery-videos">
                      <video 
                        className="gallery-video"
                        controls
                        preload="metadata"
                        aria-label="Bromley Court under construction - Part 1"
                      >
                        <source src="/videos/broomley-court-under-construction-1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <video 
                        className="gallery-video"
                        controls
                        preload="metadata"
                        aria-label="Bromley Court under construction - Part 2"
                      >
                        <source src="/videos/broomley-court-under-construction-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <video 
                        className="gallery-video"
                        controls
                        preload="metadata"
                        aria-label="Bromley Court under construction - Part 3"
                      >
                        <source src="/videos/broomley-court-under-construction-3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <video 
                        className="gallery-video"
                        controls
                        preload="metadata"
                        aria-label="Bromley Court under construction - Part 4"
                      >
                        <source src="/videos/broomley-court-under-construction-4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <video 
                        className="gallery-video"
                        controls
                        preload="metadata"
                        aria-label="Bromley Court under construction - Part 5"
                      >
                        <source src="/videos/broomley-court-under-construction-5.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </section>
                </div>

                <aside className="content-sidebar">
                  <div className="sidebar-card">
                    <h3>Project Facts</h3>
                    <dl>
                      <dt>Location</dt>
                      <dd>Central Abuja, FCT</dd>
                      
                      <dt>Site Area</dt>
                      <dd>12.5 hectares</dd>
                      
                      <dt>Development Model</dt>
                      <dd>PPP Implementation</dd>
                      
                      <dt>Construction Start</dt>
                      <dd>Q2 2024</dd>
                      
                      <dt>Estimated Completion</dt>
                      <dd>Q4 2026</dd>
                      
                      <dt>Timeline Adherence</dt>
                      <dd>94%</dd>
                      
                      <dt>Budget Performance</dt>
                      <dd>Within 3% variance</dd>
                    </dl>
                  </div>

                  <UnitAllocationStatus
                    projectName="Bromley Court"
                    totalUnits={850}
                    onInquiryClick={() => setShowInquiryForm(true)}
                    onInstitutionalClick={() => window.location.href = '/engage'}
                  />
                </aside>
              </div>
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="tab-content">
              <h2>Construction Progress Documentation</h2>
              <p>Real-time progress tracking demonstrating delivery capability</p>
              
              <div className="progress-timeline">
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q2 2024</div>
                  <div className="milestone-content">
                    <h4>Site Preparation Complete</h4>
                    <p>Land clearing, surveying, and initial infrastructure</p>
                  </div>
                </div>
                
                <div className="progress-milestone completed">
                  <div className="milestone-date">Q3 2024</div>
                  <div className="milestone-content">
                    <h4>Foundation Work</h4>
                    <p>All building foundations completed, utilities installed</p>
                  </div>
                </div>
                
                <div className="progress-milestone active">
                  <div className="milestone-date">Q4 2024</div>
                  <div className="milestone-content">
                    <h4>Structural Construction</h4>
                    <p>Currently: 60% complete. Buildings 1-4 at roof level</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q1-Q2 2025</div>
                  <div className="milestone-content">
                    <h4>Finishing & MEP</h4>
                    <p>Interior finishing, mechanical, electrical, plumbing</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q3-Q4 2025</div>
                  <div className="milestone-content">
                    <h4>Landscaping & Infrastructure</h4>
                    <p>Roads, parks, amenities, final infrastructure</p>
                  </div>
                </div>
                
                <div className="progress-milestone upcoming">
                  <div className="milestone-date">Q1 2026</div>
                  <div className="milestone-content">
                    <h4>Handover & Occupancy</h4>
                    <p>Final inspections, certifications, resident move-in</p>
                  </div>
                </div>
              </div>

              <div className="progress-metrics">
                <h3>Key Performance Metrics</h3>
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-value">1,240</div>
                    <div className="metric-label">Jobs Created</div>
                    <div className="metric-detail">Peak construction employment</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">94%</div>
                    <div className="metric-label">Timeline Adherence</div>
                    <div className="metric-detail">Ahead of initial projections</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">100%</div>
                    <div className="metric-label">Quality Inspections</div>
                    <div className="metric-detail">All inspections passed to date</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">82%</div>
                    <div className="metric-label">Local Sourcing</div>
                    <div className="metric-detail">Materials from Nigerian suppliers</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specifications' && (
            <div className="tab-content">
              <h2>Project Specifications</h2>
              
              <div className="spec-layout">
                <section className="spec-section">
                  <h2>Site Master Plan</h2>
                  <div className="site-plan-viewer">
                    <img 
                      src="/images/projects/bromley-site-plan.png"
                      alt="Bromley Court Site Master Plan"
                      className="site-plan-image"
                    />
                  </div>
                  <div className="plan-legend">
                    <h4>Site Layout</h4>
                    <ul>
                      <li><span className="legend-color" style={{background: '#1A2332'}}></span> Residential Buildings (8 blocks)</li>
                      <li><span className="legend-color" style={{background: '#B8860B'}}></span> Commercial District</li>
                      <li><span className="legend-color" style={{background: '#8B9A8B'}}></span> Recreational Areas</li>
                      <li><span className="legend-color" style={{background: '#C86240'}}></span> Healthcare & Education</li>
                      <li><span className="legend-color" style={{background: '#D3CFCB'}}></span> Roads & Infrastructure</li>
                    </ul>
                  </div>
                </section>

                <section className="spec-section">
                  <h2>Unit Floor Plans</h2>
                  <div className="floor-plans">
                    <div className="floor-plan-card">
                      <h4>2-Bedroom Unit</h4>
                      <img src="/images/projects/bromley-2bed-plan.png" alt="2-bedroom floor plan" />
                      <div className="plan-specs">
                        <p><strong>Area:</strong> 85 sqm</p>
                        <p><strong>Layout:</strong> 2 bed, 2 bath, living, kitchen, balcony</p>
                      </div>
                    </div>
                    <div className="floor-plan-card">
                      <h4>3-Bedroom Unit</h4>
                      <img src="/images/projects/bromley-3bed-plan.png" alt="3-bedroom floor plan" />
                      <div className="plan-specs">
                        <p><strong>Area:</strong> 110 sqm</p>
                        <p><strong>Layout:</strong> 3 bed, 2 bath, living, dining, kitchen, balcony</p>
                      </div>
                    </div>
                    <div className="floor-plan-card">
                      <h4>4-Bedroom Unit</h4>
                      <img src="/images/projects/bromley-4bed-plan.png" alt="4-bedroom floor plan" />
                      <div className="plan-specs">
                        <p><strong>Area:</strong> 145 sqm</p>
                        <p><strong>Layout:</strong> 4 bed, 3 bath, living, dining, kitchen, 2 balconies</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="spec-section">
                  <h2>Construction Standards</h2>
                  <div className="standards-grid">
                    <div className="standard-item">
                      <h4>Structural</h4>
                      <ul>
                        <li>Reinforced concrete frame</li>
                        <li>Seismic design compliance</li>
                        <li>Foundation depth: 3.5m average</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Finishes</h4>
                      <ul>
                        <li>Ceramic floor tiles</li>
                        <li>Premium paint systems</li>
                        <li>Aluminum windows & doors</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Mechanical & Electrical</h4>
                      <ul>
                        <li>Split A/C units</li>
                        <li>200A electrical service per unit</li>
                        <li>Backup generator system</li>
                      </ul>
                    </div>
                    <div className="standard-item">
                      <h4>Plumbing</h4>
                      <ul>
                        <li>Pressurized water system</li>
                        <li>Water storage: 1000L per unit</li>
                        <li>Waste treatment facility</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* Impact Tab */}
          {activeTab === 'impact' && (
            <div className="tab-content">
              <h2>Lessons for National Scale</h2>
              <p>
                Bromley Court provides validated data and operational insights that directly 
                inform scaling of Nigeria Housing Program to 100,000 units.
              </p>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <h4>Construction Efficiency</h4>
                  <p>
                    Optimized construction sequencing reduced timeline by 12% compared to 
                    initial projections. This model will be applied to Phase II Lagos projects.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Cost Optimization</h4>
                  <p>
                    Value engineering and local sourcing strategies reduced per-unit costs 
                    by 8% while maintaining quality standards.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Community Integration</h4>
                  <p>
                    Social integration protocols tested here inform community engagement 
                    frameworks for all future phases.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Infrastructure Coordination</h4>
                  <p>
                    Government utility coordination protocols developed through this project 
                    streamline future infrastructure integration.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Quality Assurance</h4>
                  <p>
                    100% inspection pass rate validates quality control framework for 
                    national-scale deployment.
                  </p>
                </div>
                <div className="lesson-card">
                  <h4>Financial Model</h4>
                  <p>
                    PPP financing structure proven viable, providing template for Phase II 
                    capital mobilization.
                  </p>
                </div>
              </div>

              <section className="impact-section">
                <h3>Economic Contribution</h3>
                <div className="impact-stats">
                  <div className="impact-stat">
                    <div className="impact-stat__value">₦38.25B</div>
                    <div className="impact-stat__label">Local Economic Activity</div>
                  </div>
                  <div className="impact-stat">
                    <div className="impact-stat__value">1,240</div>
                    <div className="impact-stat__label">Direct Jobs Created</div>
                  </div>
                  <div className="impact-stat">
                    <div className="impact-stat__value">82%</div>
                    <div className="impact-stat__label">Local Material Sourcing</div>
                  </div>
                </div>
              </section>

              <section className="impact-section">
                <h3>Social Impact</h3>
                <ul>
                  <li>850 families housed in quality accommodation</li>
                  <li>480 children educated in on-site school facility</li>
                  <li>Primary healthcare access for 3,000+ residents</li>
                  <li>50 workforce housing units for essential workers</li>
                  <li>Community center serving broader neighborhood</li>
                </ul>
              </section>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="project-bottom-cta">
        <div className="container">
          <div className="cta-content">
            <h3>Bromley Court demonstrates Premium Homes' execution capability at scale</h3>
            <p>
              This project validates institutional capacity to deliver complex urban 
              development programs, supporting engagement on larger sovereign-scale initiatives.
            </p>
            <div className="cta-actions">
              <Button asChild variant="secondary">
                <Link to="/programs/nigeria">
                  ← Back to Nigeria Program
                </Link>
              </Button>
              <Button asChild>
                <Link to="/engage">
                  Request Project Documentation
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
                  Unit Acquisition Inquiry - Bromley Court
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
                projectName="Bromley Court"
                onSubmit={(data) => {
                  console.log('Inquiry submitted:', data);
                  setShowInquiryForm(false);
                  // Here you would handle the form submission
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BromleyCourtProject;