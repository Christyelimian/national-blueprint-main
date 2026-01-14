import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { VideoHero } from '@/components/ui/VideoHero';

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero Section with Video */}
      <VideoHero
        videoSrc="/assets/premiumhomes-video.mp4"
        title="Who We Are"
        subtitle="Identity"
        className="min-h-[60vh]"
      >
        <div className="absolute bottom-16 left-0 right-0">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-lg">
                A premium residential developer focused on timeless design, disciplined execution, and long-term value creation.
              </p>
              
              <Link to="/about/philosophy">
                <Button variant="outline" className="group bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Explore Our Philosophy
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </VideoHero>

      {/* Core Identity Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl">⏳</div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-4">
                We Think in Decades
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our decisions are guided by permanence over trends. Every project is conceived to serve generations, not just markets.
              </p>
            </motion.div>

            {/* Craft */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl">🎯</div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-4">
                We Value Restraint
              </h3>
              <p className="text-slate-600 leading-relaxed">
                True luxury reveals itself through disciplined design choices and exceptional execution, not excessive decoration.
              </p>
            </motion.div>

            {/* Relationships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl">🤝</div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-4">
                We Build Relationships
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our reputation is built on one project at a time, through transparent communication and unwavering accountability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-8">
              Our Guiding Philosophy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Design with Intent</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every architectural decision serves a purpose, balancing aesthetics with functionality and context.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Build for Generations</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We select materials and methods that ensure durability, reducing environmental impact over the building's lifecycle.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Respect for Place</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our developments enhance their surroundings while honoring local culture and environmental context.
                </p>
              </div>
            </div>
            
            <Link to="/about/philosophy">
              <Button className="group">
                Discover Our Philosophy
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Backed by Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our leadership team brings decades of collective experience in premium residential development and capital projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-8 border border-slate-200 rounded-lg"
            >
              <div className="font-serif text-4xl font-light text-slate-900 mb-2">25+</div>
              <div className="text-sm text-slate-600">Years Combined Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 border border-slate-200 rounded-lg"
            >
              <div className="font-serif text-4xl font-light text-slate-900 mb-2">$2.5B</div>
              <div className="text-sm text-slate-600">Project Value Delivered</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 border border-slate-200 rounded-lg"
            >
              <div className="font-serif text-4xl font-light text-slate-900 mb-2">1,200+</div>
              <div className="text-sm text-slate-600">Premium Units Completed</div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;