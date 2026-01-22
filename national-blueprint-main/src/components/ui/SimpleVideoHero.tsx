import { motion } from 'framer-motion';

interface SimpleVideoHeroProps {
  videoSrc?: string;
  title: string;
  subtitle: string;
  className?: string;
  children?: React.ReactNode;
}

export const SimpleVideoHero: React.FC<SimpleVideoHeroProps> = ({ 
  videoSrc = '/premiumhomes-video.mp4', 
  title, 
  subtitle,
  className = '',
  children 
}) => {
  return (
    <section className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center min-h-[90vh] py-16">
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
                {subtitle}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg"
            >
              {title}
            </motion.h1>
          </motion.div>
          
          {/* Additional content */}
          {children}
        </div>
      </div>
    </section>
  );
};