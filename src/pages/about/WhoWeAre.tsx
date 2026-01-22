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
        subtitle="Institutional Mandate"
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
                Premium Homes Global Investment Services structures and delivers nation-building development programs across Africa. Operating at the intersection of government policy, private capital, and engineering excellence.
              </p>
              
              <Link to="/programs">
                <Button variant="outline" className="group bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Explore Our Programs
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </VideoHero>

       {/* Institutional Scale Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
              From Local Excellence to Global Scale
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Beginning with proven execution in Nigeria—where we have 5,200 units under active implementation—we have expanded our mandate to include sovereign-scale programs across four African nations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Scale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl">🌍</div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-4">
                Institutional Scale
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Structuring national development programs from $10B mega cities to comprehensive housing initiatives, transforming infrastructure deficits into bankable opportunities.
              </p>
            </motion.div>

            {/* Execution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl">⚡</div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-4">
                Proven Execution
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Demonstrated capability in land acquisition, financing structuring, engineering coordination, and quality-controlled delivery at both project and program scale.
              </p>
            </motion.div>

            {/* Partnership */}
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
                Government Partnerships
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Operating at the intersection of government policy, private capital, and engineering excellence to deliver nation-building infrastructure programs.
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

      {/* Institutional Metrics Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Institutional Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our track record validates our capacity to structure and deliver nation-building programs at sovereign scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-8 border border-slate-200 rounded-lg bg-white"
            >
              <div className="font-serif text-4xl font-light text-slate-900 mb-2">$38B+</div>
              <div className="text-sm text-slate-600">Pipeline Value</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 border border-slate-200 rounded-lg bg-white"
            >
              <div className="font-serif text-4xl font-light text-slate-900 mb-2">4</div>
              <div className="text-sm text-slate-600">Country Programs</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 border border-slate-200 rounded-lg bg-white"
            >
              <div className="font-serif text-4xl font-light text-slate-900 mb-2">5,200</div>
              <div className="text-sm text-slate-600">Units in Implementation</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 border border-slate-200 rounded-lg bg-white"
            >
              <div className="font-serif text-4xl font-light text-slate-900 mb-2">850</div>
              <div className="text-sm text-slate-600">Bromley Court Units</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Programs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Current Program Portfolio
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Active implementation and strategic development across multiple African nations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { flag: '🇳🇬', country: 'Nigeria', program: '100,000 Units', status: 'Implementation Phase' },
              { flag: '🇸🇱', country: 'Sierra Leone', program: '$10B Smart City', status: 'Strategic Development' },
              { flag: '🇧🇼', country: 'Botswana', program: 'Smart Housing', status: 'Structured Initiative' },
              { flag: '🇧🇫', country: 'Burkina Faso', program: '$14B National', status: 'Active Engagement' },
            ].map((program, index) => (
              <motion.div
                key={program.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-slate-200 rounded-lg hover:border-accent/30 transition-colors"
              >
                <div className="text-3xl mb-3">{program.flag}</div>
                <h3 className="font-serif text-lg font-medium text-slate-900 mb-1">{program.country}</h3>
                <p className="text-sm text-slate-600 mb-2">{program.program}</p>
                <div className="text-xs text-accent font-medium">{program.status}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programs">
              <Button className="group">
                View All Programs
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;