import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const impactMetrics = [
  { 
    value: '2.5%', 
    label: 'Projected GDP Contribution',
    description: 'Aggregate national impact across program countries'
  },
  { 
    value: '500K+', 
    label: 'Employment Generation',
    description: 'Direct and indirect employment projected'
  },
  { 
    value: '150K+', 
    label: 'Housing Units',
    description: 'Addressing Africa\'s housing deficit'
  },
  { 
    value: '$25B+', 
    label: 'Infrastructure Investment',
    description: 'Total development pipeline value'
  },
];

export const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block">
            Economic Impact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Projected Development Impact
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Modeled economic and social outcomes across active country programs, aligned with national development objectives.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="border-t border-primary-foreground/20 pt-8"
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-accent mb-3">
                {metric.value}
              </div>
              <h3 className="text-sm font-medium text-primary-foreground mb-2">
                {metric.label}
              </h3>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs text-primary-foreground/40 mt-16 max-w-2xl"
        >
          * All figures represent projected outcomes based on current program structures and development models. Actual results subject to implementation progress and market conditions.
        </motion.p>
      </div>
    </section>
  );
};
