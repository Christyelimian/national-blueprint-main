import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { MegaMenuLink } from './MegaMenuLink';

const developmentModel = [
  { title: 'Project Origination', description: 'Identifying and structuring opportunities', href: '/delivery/origination' },
  { title: 'Land & Planning', description: 'Site acquisition and master planning', href: '/delivery/land-planning' },
  { title: 'Capital Orchestration', description: 'Multi-source financing structures', href: '/delivery/capital' },
  { title: 'Engineering Excellence', description: 'Technical execution and oversight', href: '/delivery/engineering' },
  { title: 'Phased Delivery', description: 'Stage-by-stage implementation', href: '/delivery/phased' },
];

const financingFrameworks = [
  { title: 'BOT Structures', description: 'Build-Operate-Transfer models', href: '/delivery/bot' },
  { title: 'PPP Partnerships', description: 'Public-private collaboration', href: '/delivery/ppp' },
  { title: 'Development Finance', description: 'Institutional capital partnerships', href: '/delivery/finance' },
  { title: 'Blended Capital', description: 'Mixed-source funding strategies', href: '/delivery/blended' },
];

const trackRecord = [
  {
    title: 'Nigeria Urban Housing',
    subtitle: 'Phase I Active',
    metric: '5,200 units',
    status: '● Implementation',
    href: '/delivery/nigeria'
  },
  {
    title: 'Bromley Court',
    subtitle: 'Abuja District',
    metric: '850 units',
    status: '● 60% Complete',
    href: '/delivery/bromley-court'
  }
];

export const DeliveryMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-background border border-border/30 backdrop-blur-md shadow-xl"
    >
      <div className="container mx-auto px-6 lg:px-12 py-12 max-w-7xl">
        <div className="grid grid-cols-12 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Development Model */}
          <div className="col-span-6 lg:col-span-1 order-1 lg:order-1">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Development Model
            </h3>
            <nav className="space-y-1">
              {developmentModel.map((item) => (
                <MegaMenuLink
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </nav>
            <Link
              to="/delivery/model"
              className="inline-flex items-center gap-2 mt-4 text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              → Full Process
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Column 2: Financing Frameworks */}
          <div className="col-span-6 lg:col-span-1 order-2 lg:order-2">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Financing Frameworks
            </h3>
            <nav className="space-y-1">
              {financingFrameworks.map((item) => (
                <MegaMenuLink
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </nav>
            <Link
              to="/delivery/financial-models"
              className="inline-flex items-center gap-2 mt-4 text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              → Financial Models
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Column 3: Track Record */}
          <div className="col-span-6 lg:col-span-1 order-3 lg:order-3">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Track Record
            </h3>
            <div className="space-y-4">
              {trackRecord.map((project) => (
                <Link
                  key={project.title}
                  to={project.href}
                  className="block p-3 rounded-lg border border-border/20 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-serif text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{project.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-accent">{project.metric}</span>
                    <span className="text-xs text-muted-foreground">{project.status}</span>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/delivery/projects"
              className="inline-flex items-center gap-2 mt-4 text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              → View All Projects
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Panel - Visual with Statement */}
          <div className="col-span-12 lg:col-span-1 lg:col-start-4 order-4 lg:order-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[250px] lg:h-[350px] rounded-lg overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
              
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <blockquote className="font-serif text-lg md:text-xl font-light text-white leading-relaxed mb-4">
                    "From concept to completion:<br/>Demonstrated execution at scale."
                  </blockquote>
                  <div className="flex items-center gap-6 text-sm text-white/80">
                    <div>
                      <div className="font-medium">Bromley Court</div>
                      <div className="text-xs text-white/60">60% Complete</div>
                    </div>
                    <div>
                      <div className="font-medium">Phase I Nigeria</div>
                      <div className="text-xs text-white/60">On Schedule</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};