import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface MenuItemProps {
  title: string;
  description?: string;
  href: string;
  isHighlighted?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, href, isHighlighted = false }) => (
  <Link
    to={href}
    className={`block py-3 transition-all duration-300 group ${
      isHighlighted ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
    }`}
  >
    <div className="flex items-start justify-between">
      <div className="flex-1 pr-2">
        <h4 className={`font-medium text-sm md:text-base leading-tight ${
          isHighlighted ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
        }`}>
          {title}
        </h4>
        {description && (
          <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed max-w-[200px]">
            {description}
          </p>
        )}
      </div>
      <ArrowRight 
        size={14} 
        className="mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" 
      />
    </div>
  </Link>
);

export const AboutMenu = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      video.muted = true;
      video.play().catch(() => {
        // Auto-play might be blocked
      });
    }
  }, []);

return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-background border border-border/30 backdrop-blur-md shadow-xl"
    >
      <div className="container mx-auto px-6 lg:px-12 py-12 max-w-7xl">
        <div className="grid grid-cols-12 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Institutional Mandate */}
          <div className="col-span-6 lg:col-span-1 order-1 lg:order-1">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Institutional Mandate
            </h3>
            <nav className="space-y-1">
              <MenuItem
                title="Who We Are"
                description="Institutional platform overview"
                href="/about/who-we-are"
                isHighlighted={true}
              />
              <MenuItem
                title="Our Philosophy"
                description="From units to entire cities"
                href="/about/philosophy"
              />
              <MenuItem
                title="What We Stand For"
                description="Institutional values"
                href="/about/values"
              />
            </nav>
          </div>

          {/* Column 2: Governance & Leadership */}
          <div className="col-span-6 lg:col-span-1 order-2 lg:order-2 hidden lg:block">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Governance & Leadership
            </h3>
            <nav className="space-y-1">
              <MenuItem
                title="Our Legacy"
                description="Proven execution capability"
                href="/about/legacy"
              />
              <MenuItem
                title="Leadership"
                description="Institutional experience"
                href="/about/leadership"
              />
              <MenuItem
                title="Partners & Affiliations"
                description="Strategic relationships"
                href="/about/partners"
              />
            </nav>
          </div>

          {/* Column 3: Execution Standards */}
          <div className="col-span-6 lg:col-span-1 order-3 lg:order-3 hidden lg:block">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Execution Standards
            </h3>
            <nav className="space-y-1">
              <MenuItem
                title="Development Approach"
                description="Strategic to design excellence"
                href="/about/development"
              />
              <MenuItem
                title="Quality Framework"
                description="Institutional standards"
                href="/about/standards"
              />
              <MenuItem
                title="Sustainability Standards"
                description="Environmental responsibility"
                href="/about/sustainability"
              />
            </nav>
          </div>

          {/* Column 4: Delivery Validation */}
          <div className="col-span-6 lg:col-span-1 order-4 lg:order-4 hidden lg:block">
            <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Delivery Validation
            </h3>
            <nav className="space-y-1">
              <MenuItem
                title="Track Record"
                description="Demonstrated execution"
                href="/about/track-record"
              />
              <MenuItem
                title="Institutional Recognition"
                description="Third-party validation"
                href="/about/recognition"
              />
              <MenuItem
                title="Impact & Communities"
                description="Economic transformation"
                href="/about/impact"
              />
            </nav>
          </div>

          {/* Visual Panel - Mobile Optimized */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-2 lg:col-end-5 order-5 lg:order-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[250px] lg:h-[400px] rounded-lg overflow-hidden"
            >
              {/* Video Background */}
              <div className="absolute inset-0">
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                
                {/* Video element with reduced opacity */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  style={{ opacity: isVideoLoaded ? 0.25 : 0 }} // Very subtle for menu
                  poster="/placeholder.svg"
                  preload="auto"
                  muted
                  loop
                  playsInline
                >
                  <source src="/assets/premiumhomes-video.mp4" type="video/mp4" />
                  {/* Fallback for browsers that don't support video */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
                </video>
              </div>
              
              {/* Overlay with Statement */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <blockquote className="font-serif text-lg md:text-xl font-light text-white leading-relaxed">
                    From individual homes to entire cities,<br/>enduring quality at every scale.
                  </blockquote>
                </div>
              </div>

              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Loading indicator */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 bg-slate-900 z-5 flex items-center justify-center">
                  <div className="text-white text-sm">Loading...</div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
