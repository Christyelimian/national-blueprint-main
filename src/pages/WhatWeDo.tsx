import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent mb-6 block">
              What We Do
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              What We Do
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive approach to institutional investment and infrastructure development across African markets.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;