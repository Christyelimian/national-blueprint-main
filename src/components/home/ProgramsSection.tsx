import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    country: 'Sierra Leone',
    flag: '🇸🇱',
    program: 'Smart Mega City Program',
    investment: '$10B',
    status: 'Advanced Structuring',
    statusColor: 'bg-accent',
    href: '/projects/sl-mega-city-01',
  },
  {
    country: 'Botswana',
    flag: '🇧🇼',
    program: 'Smart Mega City & Housing Program',
    investment: '$2.5B',
    status: 'Structured Initiative',
    statusColor: 'bg-secondary',
    href: '/projects/bw-mega-city-01',
  },
  {
    country: 'Burkina Faso',
    flag: '🇧🇫',
    program: 'National Urban & Infrastructure Program',
    investment: '$14–15B',
    status: 'Strategic Development',
    statusColor: 'bg-muted-foreground',
    href: '/projects/bf-urban-program-01',
  },
  {
    country: 'Nigeria',
    flag: '🇳🇬',
    program: 'Selective Development Programs',
    investment: 'Multi-Phase',
    status: 'Active Engagement',
    statusColor: 'bg-accent/70',
    href: '/projects/ng-development-01',
  },
];

export const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block">
              Country Programs
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Active Development Programs
            </h2>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors group"
          >
            View All Programs
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.country}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Link
                to={program.href}
                className="block bg-background border border-border/50 p-8 hover:border-accent/30 hover:shadow-card transition-all duration-300 group"
              >
                {/* Country Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{program.flag}</span>
                    <h3 className="font-serif text-xl font-medium text-foreground">
                      {program.country}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${program.statusColor}`} />
                    <span className="text-xs text-muted-foreground">
                      {program.status}
                    </span>
                  </div>
                </div>

                {/* Program Info */}
                <p className="text-sm text-muted-foreground mb-6">
                  {program.program}
                </p>

                {/* Investment */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground block mb-1">
                      Investment Scale
                    </span>
                    <span className="font-serif text-2xl font-medium text-accent">
                      {program.investment}
                    </span>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" 
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
