import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

const Philosophy = () => {
  const principles = [
    {
      title: "Longevity Over Trends",
      description: "We design for permanence, not fashion. Our developments appreciate because they endure, not because they chase temporary preferences.",
      quote: "Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated."
    },
    {
      title: "Detail Over Scale",
      description: "We obsess over details that others overlook. The difference between premium and ordinary lives in the execution of subtle elements.",
      quote: "God is in the details. The smallest elements determine the quality of the whole."
    },
    {
      title: "Experience Over Volume",
      description: "We choose to do fewer projects exceptionally well rather than many projects adequately. Each development represents our full commitment.",
      quote: "Quality is not an act, it is a habit. We build excellence into our process, not just our products."
    }
  ];

  const designApproach = [
    {
      category: "Architecture",
      focus: "Contextual response, proportion, and material honesty",
      practice: "Every building responds to its environment while asserting its own character"
    },
    {
      category: "Interiors", 
      focus: "Human scale, natural light, and spatial flow",
      practice: "Spaces are designed for how people actually live, not just how they might appear"
    },
    {
      category: "Landscape",
      focus: "Indoor-outdoor continuity and native adaptation",
      practice: "Gardens and grounds extend the living space while respecting local ecology"
    },
    {
      category: "Light & Space",
      focus: "Natural rhythm, seasonal variation, and emotional response",
      practice: "We choreograph light and shadow to enhance the experience of place throughout the day"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
             <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-500 border border-slate-200 rounded-sm mb-8">
              Institutional Mandate
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight mb-8">
              Our Philosophy
            </h1>
            
            <blockquote className="font-serif text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We don't build houses. We craft enduring places to live.
            </blockquote>
            
            <p className="font-serif text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              This philosophy scales from individual units to entire cities. Whether delivering 850 units in Abuja or structuring a $10B mega city in Sierra Leone, the same commitment to quality, sustainability, and community integration guides every decision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Development Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
                From Strategy to Execution
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We believe infrastructure is not merely construction—it is nation-building. Each project must serve not just its immediate residents, but contribute to economic transformation, social stability, and long-term national development.
              </p>
            </motion.div>

            <div className="space-y-24">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-16 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-slate-900 mb-6">
                      {principle.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {principle.description}
                    </p>
                    <blockquote className="border-l-4 border-slate-300 pl-6 italic text-slate-500">
                      {principle.quote}
                    </blockquote>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-slate-100 rounded-lg h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4 opacity-50">
                          {index === 0 ? '⏳' : index === 1 ? '🎯' : '💎'}
                        </div>
                        <p className="text-sm text-slate-500">Principle {index + 1}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
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
                Development Approach
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We merge strategic development with design excellence and quality delivery to create institutional-grade projects at scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {designApproach.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-slate-200"
                >
                  <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">
                    {item.category}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Focus:</h4>
                      <p className="text-sm text-slate-600">{item.focus}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Practice:</h4>
                      <p className="text-sm text-slate-600 italic">{item.practice}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scale Statement Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-slate-900 text-white p-16 rounded-lg">
              <blockquote className="font-serif text-2xl md:text-3xl font-light leading-relaxed mb-8">
                We believe infrastructure is not merely construction—it is nation-building. Each project must serve not just its immediate residents, but contribute to economic transformation, social stability, and long-term national development.
              </blockquote>
              <cite className="text-sm text-slate-300">From Units to Cities: Institutional Philosophy</cite>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophy;