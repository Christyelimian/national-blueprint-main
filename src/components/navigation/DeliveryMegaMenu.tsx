import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProgramsMegaMenu.css';
import './ProgramsMegaMenu.css';

const DeliveryMegaMenu = () => {
  return (
    <div className="mega-menu delivery-mega-menu">
      <div className="mega-menu__content">
        {/* Column 1: Development Model */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Development Model</h3>
          <ul className="nav-list">
            <li>
              <Link to="/delivery/development-model">
                Complete Process Overview
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#origination">
                Project Origination
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#structuring">
                Structuring & Planning
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#execution">
                Phased Execution
              </Link>
            </li>
            <li>
              <Link to="/delivery/development-model#operations">
                Operations & Transfer
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Financing Frameworks */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Financing Frameworks</h3>
          <ul className="nav-list">
            <li>
              <Link to="/delivery/financing-frameworks#bot">
                BOT Structures
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#ppp">
                PPP Models
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#development-finance">
                Development Finance
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#blended-capital">
                Blended Capital
              </Link>
            </li>
            <li>
              <Link to="/delivery/financing-frameworks#risk">
                Risk Allocation
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Track Record */}
        <div className="mega-menu__column">
          <h3 className="mega-menu__heading">Track Record</h3>
          <div className="track-record-preview">
            <div className="project-preview">
              <h4>🏗 Nigeria Phase I</h4>
              <p>5,200 units under active implementation</p>
            </div>
            <div className="project-preview highlight">
              <h4>📋 Bromley Court</h4>
              <p>850 units • 60% complete</p>
              <Link to="/programs/nigeria/bromley-court" className="view-all-link">
                View Project →
              </Link>
            </div>
            <Link to="/delivery/track-record" className="view-all-link">
              → View All Projects
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="mega-menu__panel">
          <div className="panel-content">
            <div className="panel-image">
              <img 
                src="/images/projects/bromley-progress.webp"
                alt="Construction progress"
              />
            </div>
            <p className="panel-statement">
              From concept to completion:<br />
              Demonstrated execution at scale.
            </p>
            <div className="panel-stats">
              <div>Bromley Court: 60% Complete</div>
              <div>Phase I Nigeria: On Schedule</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMegaMenu;