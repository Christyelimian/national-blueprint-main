import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    category: 'Policy Analysis',
    title: 'Why Africa Needs Mega Cities',
    excerpt: 'An examination of urbanization patterns and the strategic imperative for planned urban development across the continent.',
    date: 'January 2026',
    href: '/insights/africa-mega-cities',
  },
  {
    category: 'Infrastructure',
    title: 'Infrastructure as National Security',
    excerpt: 'How critical infrastructure development shapes national resilience and long-term economic sovereignty.',
    date: 'December 2025',
    href: '/insights/infrastructure-national-security',
  },
  {
    category: 'Development Finance',
    title: 'Why BOT Works for Africa',
    excerpt: 'Analysis of Build-Operate-Transfer frameworks and their alignment with African development contexts.',
    date: 'November 2025',
    href: '/insights/bot-africa',
  },
];

export const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
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
              Insights
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Institutional Perspectives
            </h2>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors group"
          >
            View All Insights
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Link
                to={insight.href}
                className="block group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.1em] text-accent">
                    {insight.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {insight.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  {insight.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {insight.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm text-foreground/70 group-hover:text-accent transition-colors">
                  Read Analysis
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
