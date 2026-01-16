import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface VideoHeroProps {
  videoSrc?: string;
  title: string;
  subtitle: string;
  className?: string;
  children?: React.ReactNode;
}

export const VideoHero: React.FC<VideoHeroProps> = ({ 
  videoSrc = '/assets/premiumhomes-video.mp4', 
  title, 
  subtitle,
  className = '',
  children 
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      setCanPlay(true);
    };

    const handleCanPlay = () => {
      setCanPlay(true);
    };

    const handlePlay = () => {
      setIsVideoPlaying(true);
    };

    const handlePause = () => {
      setIsVideoPlaying(false);
    };

    const handleError = () => {
      setHasError(true);
      console.error('Video failed to load');
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    // Set video properties for subtle background
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // Try to load and play
    try {
      video.load();
      
      // Wait a bit then attempt to play
      setTimeout(() => {
        if (video.readyState >= 2) { // HAVE_CURRENT_DATA
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Auto-play was blocked, user interaction needed
            });
          }
        }
      }, 1000);
    } catch (error) {
      setHasError(true);
      console.error('Video setup failed:', error);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, [videoSrc]);

  const handlePlayPause = async () => {
    const video = videoRef.current;
    if (!video || !canPlay) return;

    try {
      if (isVideoPlaying) {
        video.pause();
      } else {
        await video.play();
      }
    } catch (error) {
      console.error('Play/pause failed:', error);
    }
  };

  return (
    <section className={`relative min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Mobile optimization hint for browsers */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      
      {/* Mobile-optimized loading state */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:hidden" />
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Video element with mobile optimization */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{ 
            opacity: isVideoLoaded ? 0.3 : 0, // Reduced for mobile
            objectPosition: 'center center' // Better mobile framing
          }}
          poster="/assets/placeholder.svg"
          preload="metadata" // Better for mobile
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" /> {/* WebM for better mobile support */}
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Darker gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        

      </div>



       {/* Content - Fixed positioning to avoid overlap */}
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
          
          {/* Additional content (like metrics) */}
          {children}
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 transition-all duration-300 hover:scale-105"
        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
      >
        {isVideoPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>



      {/* Loading indicator */}
      {!isVideoLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-900 z-5 flex items-center justify-center">
          <div className="text-white text-sm">Loading premium experience...</div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-900 z-5 flex items-center justify-center">
          <div className="text-white text-sm text-center">
            <div className="mb-2">🏛️</div>
            <div>Premium experience</div>
          </div>
        </div>
      )}
    </section>
  );
};