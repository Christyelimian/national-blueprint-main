import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MegaMenuLink } from './MegaMenuLink';

const countryPrograms = [
  {
    country: 'Sierra Leone',
    flag: '🇸🇱',
    program: '$10B Program',
    status: 'Advanced',
    statusColor: 'bg-accent',
    href: '/programs/sierra-leone',
  },
  {
    country: 'Botswana',
    flag: '🇧🇼',
    program: 'Smart Housing',
    status: 'Initiated',
    statusColor: 'bg-secondary',
    href: '/programs/botswana',
  },
  {
    country: 'Burkina Faso',
    flag: '🇧🇫',
    program: '$14B Program',
    status: 'Strategic',
    statusColor: 'bg-muted-foreground',
    href: '/programs/burkina-faso',
  },
  {
    country: 'Nigeria',
    flag: '🇳🇬',
    program: 'Select Programs',
    status: 'Active',
    statusColor: 'bg-accent/70',
    href: '/programs/nigeria',
  },
];

const thematicPrograms = [
  { title: 'National Housing Acceleration Program', href: '/programs/housing-acceleration' },
  { title: 'Veteran & Workforce Housing Initiative', href: '/programs/veteran-housing' },
  { title: 'Smart City Infrastructure Framework', href: '/programs/smart-city' },
  { title: 'BOT Infrastructure Development Model', href: '/programs/bot-model' },
];

export const ProgramsMenu = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Country Programs */}
      <div>
        <div className="mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Country Programs
          </span>
        </div>
        
        <div className="space-y-1">
          {countryPrograms.map((program) => (
            <Link
              key={program.country}
              to={program.href}
              className="group flex items-center justify-between py-4 px-4 -mx-4 hover:bg-accent/5 transition-colors duration-200 border-b border-border/30 last:border-0"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{program.flag}</span>
                <div>
                  <h4 className="font-serif text-base font-medium text-foreground group-hover:text-accent transition-colors">
                    {program.country}
                  </h4>
                  <p className="text-xs text-muted-foreground">{program.program}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${program.statusColor}`} />
                  <span className="text-xs text-muted-foreground">{program.status}</span>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
        
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 mt-6 text-sm text-foreground/70 hover:text-accent transition-colors"
        >
          View All Programs
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Thematic Programs */}
      <div>
        <div className="mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Thematic Programs
          </span>
        </div>
        
        <div className="space-y-1">
          {thematicPrograms.map((program) => (
            <MegaMenuLink
              key={program.title}
              title={program.title}
              href={program.href}
            />
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex gap-4">
            <Link
              to="/programs?sort=investment"
              className="text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              → Explore by Investment Size
            </Link>
            <Link
              to="/programs?sort=status"
              className="text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              → Explore by Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
