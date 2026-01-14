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
      className="min-h-[100vh]" // Taller for better video showcase
    >
      {/* Metrics Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-16 left-0 right-0"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-light text-white mb-2 drop-shadow-lg">
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

      {/* Sub-heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-32 left-0 right-0"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-lg md:text-xl text-white/90 font-sans tracking-wide drop-shadow-lg">
            ESG-Integrated • Institutional Capital • Development Finance • Impact Measurement
          </p>
        </div>
      </motion.div>
    </VideoHero>
  );
};
