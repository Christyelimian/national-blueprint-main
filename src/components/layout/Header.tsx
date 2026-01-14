import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Shield } from 'lucide-react';
import { GlobalSettingsDropdown } from '@/components/navigation/GlobalSettingsDropdown';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useCountry } from '@/contexts/CountryContext';
import { MegaMenuContainer } from '@/components/navigation/MegaMenuContainer';
import { AboutMenu } from '@/components/navigation/AboutMenu';
import { WhatWeDoMenu } from '@/components/navigation/WhatWeDoMenu';

import { ProgramsMenu } from '@/components/navigation/ProgramsMenu';
import { HowWeDeliverMenu } from '@/components/navigation/HowWeDeliverMenu';
import { MobileNav } from '@/components/navigation/MobileNav';

type MenuKey = 'about' | 'whatWeDo' | 'programs' | 'howWeDeliver' | null;

const navItems: { key: MenuKey; label: string; href: string }[] = [
  { key: 'about', label: 'About', href: '/about' },
  { key: 'whatWeDo', label: 'Services', href: '/what-we-do' },
  { key: 'programs', label: 'Programs', href: '/programs' },
  { key: 'howWeDeliver', label: 'Process', href: '/how-we-deliver' },
  { key: null, label: 'Impact', href: '/impact' },
  { key: null, label: 'Insights', href: '/insights' },
];

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { country } = useCountry();

  // Build hrefs with country prefix if we have a country in path
  const buildCountryHref = (href: string) => {
    const segments = location.pathname.split('/').filter(Boolean);
    const hasCountryPrefix = segments.length > 0 && ['ng', 'sl', 'bw', 'bf'].includes(segments[0]);
    if (hasCountryPrefix) {
      return `/${segments[0]}${href}`;
    }
    return href;
  };

  // Close mega menu on route change
  useEffect(() => {
    setActiveMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (key: MenuKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (key) {
      setActiveMenu(key);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const renderMenu = () => {
    switch (activeMenu) {
      case 'about':
        return <AboutMenu />;
      case 'whatWeDo':
        return <WhatWeDoMenu />;
      case 'programs':
        return <ProgramsMenu />;
      case 'howWeDeliver':
        return <HowWeDeliverMenu />;
      default:
        return null;
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/20"
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 relative z-50">
              <img 
                src="/assets/Premium homes logo.png" 
                alt="Premium Homes" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Global Investment Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  className="relative"
                >
                  <Link
                    to={buildCountryHref(item.href)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-sans tracking-wide transition-colors duration-200 ${
                      location.pathname.endsWith(item.href) || 
                      (item.href.startsWith('/about/') && location.pathname.includes(item.href.replace('/about', ''))) ||
                      (item.href.startsWith('/what-we-do') && location.pathname.includes('/what-we-do')) ||
                      (item.href.startsWith('/how-we-deliver') && location.pathname.includes('/how-we-deliver')) ||
                      (item.href.startsWith('/programs') && location.pathname.includes('/programs')) ||
                      (item.href.startsWith('/impact') && location.pathname.includes('/impact')) ||
                      (item.href.startsWith('/insights') && location.pathname.includes('/insights'))
                        ? 'text-accent'
                        : 'text-foreground/70 hover:text-foreground'
                    } ${activeMenu === item.key ? 'text-foreground' : ''}`}
                  >
                    {item.label}
                    {item.key && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeMenu === item.key ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

{/* Right Section */}
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-4">
                  <Link
                    to={buildCountryHref("/investor-portal")}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-sans tracking-wide border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Shield size={16} />
                    Investor Portal
                  </Link>
                  <ThemeSwitcher />
                  <GlobalSettingsDropdown />
                  <Link
                    to={buildCountryHref("/engage")}
                    className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-sans tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    Engage
                  </Link>
                </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <div onMouseEnter={handleMenuMouseEnter}>
          <MegaMenuContainer isOpen={activeMenu !== null}>
            {renderMenu()}
          </MegaMenuContainer>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
