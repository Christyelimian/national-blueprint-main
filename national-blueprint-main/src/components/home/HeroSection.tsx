import { motion } from 'framer-motion';
import { SimpleVideoHero } from '@/components/ui/SimpleVideoHero';

const metrics = [
  { value: '$10B+', label: 'Institutional AUM Target' },
  { value: '15+', label: 'Institutional Partners' },
  { value: 'ESG', label: 'Impact-First Framework' },
];

export const HeroSection = () => {
  return (
    <SimpleVideoHero
      videoSrc="/assets/premiumhomes-video.mp4"
      title=""
      subtitle=""
      className="min-h-[100vh] md:min-h-[90vh]" // Taller for better video showcase
    >
      {/* Content Container - Mobile optimized to prevent overlap */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center min-h-[100vh] py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Pre-heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/90 border border-white/30 rounded-sm bg-white/10 backdrop-blur-sm">
                Institutional Investment & Impact Infrastructure
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.2] tracking-tight mb-8 drop-shadow-lg"
            >
              Institutional-Grade Infrastructure Investment for Long-Term Impact
            </motion.h1>
          </motion.div>
          
          {/* Mobile-Optimized Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 md:mt-16"
          >
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-serif text-2xl md:text-3xl font-light text-white mb-2 drop-shadow-lg">
                    {metric.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/80">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile-Optimized Sub-heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-center text-sm md:text-base text-white/60 font-sans tracking-wide drop-shadow-lg">
              ESG-Integrated • Institutional Capital • Development Finance
            </p>
          </motion.div>
        </div>
      </div>
    </SimpleVideoHero>
  );
};
