import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCountry, COUNTRY_CONFIGS } from '@/contexts/CountryContext';
import { COUNTRY_PROGRAMS, getOtherPrograms } from '@/data/countryPrograms';
import { Layout } from '@/components/layout/Layout';
import { MandateSection } from '@/components/home/MandateSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { ESGImpactMeasurement } from '@/components/esg/ESGImpactMeasurement';
import { InsightsSection } from '@/components/home/InsightsSection';
import { EngageSection } from '@/components/home/EngageSection';
import { Button } from '@/components/ui/button';
import './Homepage.css';

const Homepage = () => {
  const { selectedCountry, countryConfig } = useCountry();
  
  const featuredProgram = COUNTRY_PROGRAMS[selectedCountry];
  const otherPrograms = getOtherPrograms(selectedCountry);

  // Video state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Try to autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Handle video load
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        video.play().catch(() => {
          console.log('Video autoplay blocked - user interaction required');
          setIsPlaying(false);
        });
      };

      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  // Video controls
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Try to play, handling autoplay policies
        videoRef.current.play().catch(() => {
          console.log('Video autoplay prevented by browser');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className={`hero__video ${isVideoLoaded ? 'loaded' : ''} ${isPlaying ? 'playing' : ''}`}
          >
            <source src="/videos/site-overview.mp4" type="video/mp4" />
          </video>
          
          {/* Fallback Image */}
          <img 
            src="/images/hero-infrastructure.webp" 
            alt="Infrastructure development"
            className={`hero__image hero__image-fallback ${isPlaying && isVideoLoaded ? 'hidden' : ''}`}
          />
        </div>
        <div className="hero__content">
          {/* Video Controls */}
          <div className="hero__video-controls">
            <button 
              className="hero__video-control hero__video-pause"
              onClick={toggleVideo}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? '⏸' : '▶️'}
            </button>
            <button 
              className="hero__video-control hero__video-sound"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          </div>
          
          <h1 className="hero__title">
            Designing Africa's Next Generation Cities,<br />
            Infrastructure & National Assets
          </h1>
          <p className="hero__subtitle">
            PPP • BOT • Mega Cities • National Infrastructure • Development Finance
          </p>
          <div className="hero__metrics">
            <div className="metric">
              <div className="metric__value">$38B+</div>
              <div className="metric__label">Project Pipeline</div>
            </div>
            <div className="metric">
              <div className="metric__value">4</div>
              <div className="metric__label">Countries</div>
            </div>
            <div className="metric">
              <div className="metric__value">PPP/BOT</div>
              <div className="metric__label">Delivery Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Mandate */}
      <section className="mandate">
        <div className="mandate__content">
          <h2>Structured Infrastructure & Urban Development Institution</h2>
          <p>
            Premium Homes Global Investment Services designs, finances, and delivers
            nation-building projects across Africa through Public-Private Partnerships,
            BOT, and Development Finance models.
          </p>
          <p>
            Operating at the intersection of government policy, private capital, and
            engineering excellence, we transform national housing and infrastructure
            deficits into bankable, scalable delivery programs.
          </p>
        </div>
      </section>

      {/* Featured Program (Based on Selected Country) */}
      <section className="programs-featured">
        <div className="container">
          <div className="section-header">
            <h2>Featured Program: {countryConfig.name}</h2>
            <p>Current focus based on your country selection</p>
          </div>
          
          <div className="featured-program-card">
            <div className="featured-program-card__image">
              <img src={featuredProgram.image} alt={featuredProgram.title} />
              <div className={`status-badge status-badge--${featuredProgram.statusType}`}>
                {featuredProgram.status}
              </div>
            </div>
            <div className="featured-program-card__content">
              <div className="featured-program-card__flag">
                {countryConfig.flag}
              </div>
              <h3 className="featured-program-card__title">
                {featuredProgram.title}
              </h3>
              <p className="featured-program-card__subtitle">
                {featuredProgram.subtitle}
              </p>
              <div className="featured-program-card__stats">
                <div className="stat">
                  <div className="stat__label">Investment</div>
                  <div className="stat__value">{featuredProgram.investment}</div>
                </div>
                {featuredProgram.units && (
                  <div className="stat">
                    <div className="stat__label">Scale</div>
                    <div className="stat__value">{featuredProgram.units}</div>
                  </div>
                )}
              </div>
              <p className="featured-program-card__description">
                {featuredProgram.description}
              </p>
              <ul className="featured-program-card__highlights">
                {featuredProgram.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <Button asChild>
                <Link to={`/programs/${featuredProgram.slug}`}>
                  View Full Program Details →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs Grid */}
      <section className="programs-grid">
        <div className="container">
          <div className="section-header">
            <h2>Other Country Programs</h2>
            <Link to="/programs" className="link-arrow">
              View All Programs →
            </Link>
          </div>
          
          <div className="program-cards">
            {otherPrograms.map((program) => (
              <Link
                key={program.country}
                to={`/programs/${program.slug}`}
                className="program-card"
              >
                <div className="program-card__image">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="program-card__content">
                  <div className="program-card__header">
                    <span className="program-card__flag">
                      {COUNTRY_CONFIGS[program.country as keyof typeof COUNTRY_CONFIGS]?.flag || program.country}
                    </span>
                    <span className="program-card__country">
                      {COUNTRY_CONFIGS[program.country as keyof typeof COUNTRY_CONFIGS]?.name || program.country}
                    </span>
                  </div>
                  <h3 className="program-card__title">{program.title}</h3>
                  <p className="program-card__investment">{program.investment}</p>
                  <div className={`program-card__status status-badge--${program.statusType}`}>
                    {program.status}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MandateSection />
      <ImpactSection />
      <ESGImpactMeasurement />
      <InsightsSection />
      <EngageSection />
    </Layout>
  );
};

export default Homepage;
