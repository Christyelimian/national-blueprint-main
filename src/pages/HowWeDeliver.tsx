import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';

const deliveryStages = [
  {
    number: '01',
    title: 'Project Origination',
    description: 'National needs assessment, government engagement, and feasibility studies to identify transformative opportunities.',
  },
  {
    number: '02',
    title: 'Structuring & Planning',
    description: 'Legal framework design, financial modeling, risk allocation, and stakeholder alignment protocols.',
  },
  {
    number: '03',
    title: 'Land Acquisition & Preparation',
    description: 'Title verification, community engagement, environmental assessment, and site preparation.',
  },
  {
    number: '04',
    title: 'Capital Orchestration',
    description: 'Financial structuring, investor engagement, government guarantees, and blended capital models.',
  },
  {
    number: '05',
    title: 'Engineering & Construction',
    description: 'Partner selection, quality management, progress monitoring, and compliance verification.',
  },
  {
    number: '06',
    title: 'Phased Delivery',
    description: 'Stage-by-stage implementation with quality checkpoints and stakeholder handover protocols.',
  },
  {
    number: '07',
    title: 'Operations & Transfer',
    description: 'Asset management, operational optimization, and structured government transfer.',
  },
];

const financingModels = [
  {
    title: 'Build-Operate-Transfer (BOT)',
    description: 'Long-term operational frameworks with structured government transition.',
  },
  {
    title: 'Public-Private Partnership (PPP)',
    description: 'Collaborative structures balancing public interest and private efficiency.',
  },
  {
    title: 'Blended Capital',
    description: 'Integration of development finance, commercial capital, and sovereign guarantees.',
  },
  {
    title: 'No-SBLC Frameworks',
    description: 'Government-friendly structures without standby letter of credit requirements.',
  },
];

const HowWeDeliver = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent mb-6 block">
              Delivery Framework
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              How We Deliver
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive seven-stage development methodology designed for sovereign-scale infrastructure and urban development programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block">
                Development Model
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Seven-Stage Delivery Process
              </h2>
              <p className="text-muted-foreground">
                The framework ensures systematic progression from concept to completion, with structured governance at each milestone.
              </p>
            </motion.div>

            <div className="space-y-8">
              {deliveryStages.map((stage, index) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 pb-8 border-b border-border/50 last:border-0"
                >
                  <span className="font-serif text-4xl font-medium text-accent/30">
                    {stage.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing Models */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4 block">
              Financing Frameworks
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Sovereign-Compliant Capital Models
            </h2>
            <p className="text-primary-foreground/70">
              Development finance structures designed for government partnership and institutional capital deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financingModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-medium mb-2">
                      {model.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/60">
                      {model.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Complete Methodology Documentation
            </h2>
            <p className="text-muted-foreground mb-10">
              Access the comprehensive delivery methodology framework, including detailed process documentation and governance protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-wide hover:bg-primary/90 transition-colors">
                <Download size={18} />
                Download Methodology (PDF)
              </button>
              <Link
                to="/engage"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground font-sans text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
              >
                Discuss Requirements
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HowWeDeliver;
