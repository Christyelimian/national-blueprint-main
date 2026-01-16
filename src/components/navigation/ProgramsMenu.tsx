import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { MegaMenuLink } from './MegaMenuLink';

const countryPrograms = [
  {
    country: 'Sierra Leone',
    flag: '🇸🇱',
    program: '$10B Smart City',
    status: '◆ Strategic Development',
    statusColor: 'bg-accent',
    href: '/programs/sierra-leone',
  },
  {
    country: 'Botswana',
    flag: '🇧🇼',
    program: 'Smart Housing',
    status: '◉ Structured Initiative',
    statusColor: 'bg-secondary',
    href: '/programs/botswana',
  },
  {
    country: 'Burkina Faso',
    flag: '🇧🇫',
    program: '$14B National',
    status: '◈ Active Engagement',
    statusColor: 'bg-muted-foreground',
    href: '/programs/burkina-faso',
  },
  {
    country: 'Nigeria',
    flag: '🇳🇬',
    program: '100,000 Units',
    status: '● Implementation Phase',
    statusColor: 'bg-accent/70',
    href: '/programs/nigeria',
  },
];

const thematicFocus = [
  { title: 'Mega Cities', description: 'Urban development at scale', href: '/programs/mega-cities' },
  { title: 'Housing at Scale', description: 'National housing programs', href: '/programs/housing-scale' },
  { title: 'Infrastructure', description: 'Critical infrastructure networks', href: '/programs/infrastructure' },
  { title: 'PPP/BOT Models', description: 'Partnership frameworks', href: '/programs/ppp-bot' },
];

const programStatus = [
  { title: 'Strategic Development', count: '2 programs', href: '/programs?status=strategic' },
  { title: 'Structured Initiative', count: '1 program', href: '/programs?status=structured' },
  { title: 'Active Engagement', count: '1 program', href: '/programs?status=active' },
  { title: 'Implementation Phase', count: '4 programs', href: '/programs?status=implementation' },
];

export const ProgramsMenu = () => {
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
          
          {/* Column 1: Country Programs */}
          <div className="col-span-6 lg:col-span-1 order-1 lg:order-1">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Country Programs
            </h3>
            
            <div className="space-y-1">
              {countryPrograms.map((program) => (
                <Link
                  key={program.country}
                  to={program.href}
                  className="group flex items-center justify-between py-3 px-3 -mx-3 hover:bg-accent/5 transition-colors duration-200 border-b border-border/20 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{program.flag}</span>
                    <div>
                      <h4 className="font-serif text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {program.country}
                      </h4>
                      <p className="text-xs text-muted-foreground">{program.program}</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
            
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 mt-4 text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              → View All Programs
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Column 2: Thematic Focus */}
          <div className="col-span-6 lg:col-span-1 order-2 lg:order-2">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Thematic Focus
            </h3>
            
            <div className="space-y-1">
              {thematicFocus.map((item) => (
                <MegaMenuLink
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-center gap-2 text-xs text-accent">
                <MapPin size={14} />
                <span>Interactive Map</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Click to explore programs by region
              </p>
            </div>
          </div>

          {/* Column 3: Program Status */}
          <div className="col-span-6 lg:col-span-1 order-3 lg:order-3">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Program Status
            </h3>
            
            <div className="space-y-1">
              {programStatus.map((status) => (
                <Link
                  key={status.title}
                  to={status.href}
                  className="group flex items-center justify-between py-3 px-3 -mx-3 hover:bg-accent/5 transition-colors duration-200 border-b border-border/20 last:border-0"
                >
                  <div>
                    <h4 className="font-serif text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {status.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{status.count}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
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
                    "Structuring development programs<br/>across four African nations."
                  </blockquote>
                  <div className="flex items-center gap-6 text-sm text-white/80">
                    <div>
                      <div className="font-medium">Current Pipeline</div>
                      <div className="text-xs text-white/60">$38B+</div>
                    </div>
                    <div>
                      <div className="font-medium">Active Implementation</div>
                      <div className="text-xs text-white/60">5,200 units</div>
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
