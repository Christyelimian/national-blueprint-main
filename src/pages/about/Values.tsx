import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

const Values = () => {
  const values = [
    {
      title: "Integrity of Materials",
      description: "We select materials based on their intrinsic qualities, not their market appeal. Every stone, wood, and metal is chosen for durability, beauty, and appropriateness to place.",
      details: [
        "Sourced from responsible quarries and forests",
        "Chosen for aging characteristics, not initial appearance",
        "Integrated with structural and environmental considerations"
      ]
    },
    {
      title: "Precision in Execution",
      description: "Our construction tolerances exceed industry standards because excellence lives in the details that most never notice but all eventually feel.",
      details: [
        "Millimeter-level precision in critical interfaces",
        "Third-party verification at key milestones",
        "Craftspeople with decades of specialized experience"
      ]
    },
    {
      title: "Respect for Clients' Privacy",
      description: "We understand that privacy is the ultimate luxury. Our designs and processes protect our clients' confidentiality and peace of mind.",
      details: [
        "Discreet project development and communication",
        "Security considerations integrated from concept",
        "Staff trained in confidentiality protocols"
      ]
    },
    {
      title: "Accountability in Delivery",
      description: "We take responsibility for every aspect of our projects, from initial design to final handover and beyond. Our word is our bond.",
      details: [
        "Transparent timeline and budget communication",
        "Comprehensive warranty and aftercare programs",
        "Direct leadership involvement throughout delivery"
      ]
    }
  ];

  const evidence = [
    {
      metric: "0%",
      label: "Compromised Materials",
      explanation: "Never substitute specified materials for cost reasons"
    },
    {
      metric: "100%",
      label: "Client Confidentiality",
      explanation: "All client information protected by NDAs and internal protocols"
    },
    {
      metric: "15+",
      label: "Year Aftercare Program",
      explanation: "Comprehensive maintenance and support long beyond industry standards"
    },
    {
      metric: "3rd Party",
      label: "Quality Verification",
      explanation: "Independent testing and certification at every major milestone"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
        
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-500 border border-slate-200 rounded-sm mb-8">
              Identity
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight mb-8">
              What We Stand For
            </h1>
            
            <p className="font-serif text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Values are not words we use—they're actions we take, every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-20">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="border-b border-slate-100 last:border-0 pb-20 last:pb-0"
                >
                  <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-medium text-slate-900 mb-6">
                        {value.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {value.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {value.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="bg-slate-50 rounded-lg p-8 h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <div className="text-3xl">
                              {index === 0 ? '🪨' : index === 1 ? '📐' : index === 2 ? '🔐' : '✅'}
                            </div>
                          </div>
                          <p className="text-sm text-slate-500 font-medium">
                            Value {index + 1}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
                Measurable Commitments
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We back our values with specific, verifiable commitments and metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {evidence.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-slate-200 text-center"
                >
                  <div className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-4">
                    {item.metric}
                  </div>
                  <h4 className="font-medium text-slate-900 mb-3">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.explanation}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center">
              <blockquote className="font-serif text-2xl md:text-3xl font-light text-slate-900 leading-relaxed mb-8">
                "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
              </blockquote>
              <cite className="text-sm text-slate-600">Aristotle</cite>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Values;