import { motion } from 'framer-motion';
import { VideoHero } from '@/components/ui/VideoHero';

const metrics = [
  { value: '$10B+', label: 'Institutional AUM Target' },
  { value: '15+', label: 'Institutional Partners' },
  { value: 'ESG', label: 'Impact-First Framework' },
];

export const HeroSection = () => {
return (
    <VideoHero
      videoSrc="/assets/premiumhomes-video.mp4"
      title="Institutional-Grade Infrastructure Investment for Long-Term Impact"
      subtitle="Institutional Investment & Impact Infrastructure"
      className="min-h-[100vh] md:min-h-[90vh]" // Taller for better video showcase
    >
      {/* Mobile-Optimized Metrics Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-16 md:bottom-24 left-0 right-0 z-30 px-4"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center mb-4 md:mb-0">
                <div className="font-serif text-2xl md:text-3xl font-light text-white mb-2 drop-shadow-lg">
                  {metric.value}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-white/80">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile-Optimized Sub-heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-24 md:bottom-32 left-0 right-0 z-30 px-4"
      >
        <div className="container mx-auto">
          <p className="text-center text-sm md:text-base text-white/60 font-sans tracking-wide drop-shadow-lg px-4">
            ESG-Integrated • Institutional Capital • Development Finance
          </p>
        </div>
      </motion.div>
    </VideoHero>
  );
};
