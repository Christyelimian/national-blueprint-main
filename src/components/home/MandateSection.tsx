import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const MandateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <span className="text-xs uppercase tracking-[0.2em] text-accent mb-6 block">
              Our Mandate
            </span>

            {/* Main Statement */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.2] mb-8">
              A bridge between governments and global capital, orchestrating nation-building infrastructure across Africa.
            </h2>

            {/* Description */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Premium Homes Global Investment Services Ltd operates as a Structured Infrastructure & Urban Development Institution. The organization designs, finances, and delivers sovereign-scale projects through PPP, BOT, and Development Finance frameworks.
              </p>
              <p>
                The institution serves as a project origination, structuring, and orchestration platform—integrating master development expertise, financial architecture, and delivery management into a unified capability set that addresses Africa's infrastructure and urbanization requirements.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
              {[
                { label: 'Project Origination', desc: 'Strategic identification' },
                { label: 'Financial Structuring', desc: 'Capital orchestration' },
                { label: 'Delivery Integration', desc: 'End-to-end execution' },
                { label: 'Asset Management', desc: 'Long-term stewardship' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="font-sans text-sm font-medium text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
