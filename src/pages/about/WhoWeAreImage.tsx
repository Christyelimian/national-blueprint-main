import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/who-we-are.png" 
            alt="Premium Architecture"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient if image fails
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        {/* Content - Properly positioned */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center py-16"
          >
            <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/90 border border-white/30 rounded-sm bg-white/10 backdrop-blur-sm mb-8">
              Identity
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
              Who We Are
            </h1>
            
            <p className="font-serif text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
              A premium residential developer focused on timeless design, disciplined execution, and long-term value creation.
            </p>
            
            <Link to="/about/philosophy">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 group">
                Explore Our Philosophy
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

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
                  We select materials and methods that ensure durability, reducing environmental impact over building's lifecycle.
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Our leadership team brings decades of collective experience in premium residential development and capital projects.
            </p>
            <Link to="/about/leadership">
              <Button variant="outline" className="group">
                Meet Our Leadership
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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