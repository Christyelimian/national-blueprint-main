import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const EngageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent mb-6 block">
            Institutional Engagement
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Engage With Premium Homes
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            For government ministries, financial institutions, development partners, and infrastructure stakeholders seeking to explore program collaboration.
          </p>

          <Link
            to="/engage"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-wide hover:bg-primary/90 transition-colors group"
          >
            Submit Institutional Inquiry
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
