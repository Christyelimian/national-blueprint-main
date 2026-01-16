import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, Globe, Sun, Moon, Monitor, FileText, Users, MessageCircle, Settings, ChevronRight } from 'lucide-react';
import { useCountry } from '@/contexts/CountryContext';
import { useTheme } from '@/contexts/ThemeContext';

interface CanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CanvasMenu: React.FC<CanvasMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { country, setCountry } = useCountry();
  const { theme, setTheme } = useTheme();

  // Build hrefs with country prefix if we have a country in path
  const buildCountryHref = (href: string) => {
    const segments = location.pathname.split('/').filter(Boolean);
    const hasCountryPrefix = segments.length > 0 && ['ng', 'sl', 'bw', 'bf'].includes(segments[0]);
    if (hasCountryPrefix) {
      return `/${segments[0]}${href}`;
    }
    return href;
  };

  const countries = [
    { code: 'ng', name: 'Nigeria', flag: '🇳🇬', active: country?.code === 'ng' },
    { code: 'sl', name: 'Sierra Leone', flag: '🇸🇱', active: country?.code === 'sl' },
    { code: 'bw', name: 'Botswana', flag: '🇧🇼', active: country?.code === 'bw' },
    { code: 'bf', name: 'Burkina Faso', flag: '🇧🇫', active: country?.code === 'bf' },
  ];

  const sidebarSections = [
    {
      title: 'ENGAGE',
      items: [
        { 
          title: 'Institutional Inquiries', 
          href: '/engage/institutional',
          icon: Users,
          highlight: true,
          description: 'Government and investor partnerships'
        },
        { 
          title: 'Investor Portal Access', 
          href: '/investor-portal',
          icon: Settings,
          description: 'Secure investor resources'
        },
        { 
          title: 'Partnership Opportunities', 
          href: '/engage/partnerships',
          icon: MessageCircle,
          description: 'Strategic collaboration'
        },
      ]
    },
    {
      title: 'RESOURCES',
      items: [
        { 
          title: 'Program Briefings', 
          href: '/resources/briefings',
          icon: FileText,
          description: 'Download program summaries (PDF)'
        },
        { 
          title: 'Economic Impact Reports', 
          href: '/resources/impact',
          icon: FileText,
          description: 'Development impact analysis'
        },
        { 
          title: 'Delivery Methodology', 
          href: '/resources/methodology',
          icon: FileText,
          description: 'Process documentation'
        },
        { 
          title: 'Media Kit', 
          href: '/resources/media-kit',
          icon: FileText,
          description: 'Brand assets and information'
        },
        { 
          title: 'Contact Directory', 
          href: '/contact',
          icon: MessageCircle,
          description: 'Key contacts by region'
        },
      ]
    },
    {
      title: 'INSIGHTS',
      items: [
        { 
          title: 'Latest Articles', 
          href: '/insights',
          icon: FileText,
          description: 'Thought leadership and updates'
        },
        { 
          title: 'Subscribe to Updates', 
          href: '/insights/subscribe',
          icon: MessageCircle,
          description: 'Newsletter and notifications'
        },
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border/50 shadow-2xl z-[70] overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/30">
                <div>
                  <h2 className="font-serif text-lg font-medium text-foreground">
                    Premium Homes
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Global Investment Services
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Country Focus */}
                <div className="p-6 border-b border-border/30">
                  <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
                    Country Focus
                  </h3>
                  <div className="space-y-2">
                    {countries.map((countryItem) => (
                      <button
                        key={countryItem.code}
                        onClick={() => {
                          // Find the country in the countries config and set it
                          setCountry(countryItem.code);
                          onClose();
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                          countryItem.active 
                            ? 'bg-accent/20 border border-accent/30 text-accent' 
                            : 'hover:bg-accent/10 border border-border/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{countryItem.flag}</span>
                          <span className="text-sm font-medium">{countryItem.name}</span>
                        </div>
                        {countryItem.active && (
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        )}
                      </button>
                    ))}
                    <Link
                      to="/programs"
                      onClick={onClose}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 border border-border/20 transition-all duration-200"
                    >
                      <span className="text-sm">Global Overview</span>
                      <Globe size={14} className="text-muted-foreground" />
                    </Link>
                  </div>
                </div>

                {/* Settings */}
                <div className="p-6 border-b border-border/30">
                  <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
                    Settings
                  </h3>
                  
                  {/* Theme Selection */}
                  <div className="mb-6">
                    <label className="text-xs font-medium text-foreground mb-3 block">Theme</label>
                    <div className="flex gap-2">
                      {[
                        { value: 'auto', label: 'Auto', icon: Monitor },
                        { value: 'light', label: 'Light', icon: Sun },
                        { value: 'dark', label: 'Dark', icon: Moon },
                      ].map((themeOption) => (
                        <button
                          key={themeOption.value}
                          onClick={() => setTheme(themeOption.value as 'auto' | 'light' | 'dark')}
                          className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all duration-200 ${
                            theme === themeOption.value
                              ? 'bg-accent/20 border-accent/30 text-accent'
                              : 'border-border/20 hover:bg-accent/10'
                          }`}
                        >
                          <themeOption.icon size={14} />
                          <span className="text-xs font-medium">{themeOption.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label className="text-xs font-medium text-foreground mb-3 block">Language</label>
                    <div className="flex gap-2">
                      <button className="flex-1 p-3 rounded-lg bg-accent/20 border border-accent/30 text-accent">
                        <span className="text-xs font-medium">English</span>
                      </button>
                      <button className="flex-1 p-3 rounded-lg border border-border/20 hover:bg-accent/10 transition-colors">
                        <span className="text-xs font-medium">Français</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dynamic Sections */}
                {sidebarSections.map((section) => (
                  <div key={section.title} className="p-6 border-b border-border/30 last:border-b-0">
                    <h3 className="font-serif text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            to={buildCountryHref(item.href)}
                            onClick={onClose}
                            className={`group flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                              item.highlight 
                                ? 'bg-accent/10 border border-accent/30 hover:bg-accent/20' 
                                : 'hover:bg-accent/5 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon size={16} className={`${
                                item.highlight ? 'text-accent' : 'text-muted-foreground'
                              }`} />
                              <div>
                                <div className={`text-sm font-medium ${
                                  item.highlight ? 'text-accent' : 'text-foreground group-hover:text-accent'
                                } transition-colors`}>
                                  {item.title}
                                </div>
                                {item.description && (
                                  <div className="text-xs text-muted-foreground mt-0.5">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </div>
                            <ChevronRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Legal */}
                <div className="p-6 border-t border-border/30">
                  <div className="space-y-3">
                    <Link
                      to="/privacy"
                      onClick={onClose}
                      className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms"
                      onClick={onClose}
                      className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Terms of Use
                    </Link>
                    <Link
                      to="/cookies"
                      onClick={onClose}
                      className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Cookie Preferences
                    </Link>
                    <Link
                      to="/compliance"
                      onClick={onClose}
                      className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Compliance Statement
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};