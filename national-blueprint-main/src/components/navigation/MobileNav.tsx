import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ArrowRight, Menu } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Who We Are', href: '/about/who-we-are' },
      { label: 'Our Mandate', href: '/about/mandate' },
      { label: 'Governance & Ethics', href: '/about/governance' },
      { label: 'Leadership', href: '/about/leadership' },
    ],
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Mega City Development', href: '/what-we-do/mega-cities' },
      { label: 'Housing at Scale', href: '/what-we-do/housing' },
      { label: 'National Infrastructure', href: '/what-we-do/infrastructure' },
      { label: 'Public–Private Partnerships', href: '/what-we-do/ppp' },
      { label: 'Development Finance', href: '/what-we-do/finance' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: '🇸🇱 Sierra Leone', href: '/programs/sierra-leone' },
      { label: '🇧🇼 Botswana', href: '/programs/botswana' },
      { label: '🇧🇫 Burkina Faso', href: '/programs/burkina-faso' },
      { label: '🇳🇬 Nigeria', href: '/programs/nigeria' },
    ],
  },
  {
    label: 'How We Deliver',
    href: '/how-we-deliver',
    children: [
      { label: 'Development Model', href: '/how-we-deliver/model' },
      { label: 'Risk Management', href: '/how-we-deliver/risk' },
      { label: 'Financing Frameworks', href: '/how-we-deliver/finance' },
      { label: 'Government Collaboration', href: '/how-we-deliver/government' },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    children: [],
  },
  {
    label: 'Insights',
    href: '/insights',
    children: [],
  },
];

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Enhanced for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Drawer - Improved */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 bottom-0 w-full bg-primary z-50 h-screen lg:hidden overflow-y-auto"
          >
            {/* Header with better mobile layout */}
            <div className="flex items-center justify-between p-4 border-b border-primary-foreground/10">
              <span className="font-serif text-lg text-primary-foreground">Menu</span>
              <button
                onClick={onClose}
                className="p-3 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Navigation with mobile improvements */}
            <nav className="py-4 px-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-primary-foreground/10">
                  {item.children.length > 0 ? (
                    <>
                      {/* Expandable item - mobile optimized */}
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="flex items-center justify-between w-full px-4 py-6 text-left text-primary-foreground hover:text-accent transition-colors min-h-[60px]"
                        aria-expanded={expandedItem === item.label}
                      >
                        <span className="font-sans text-lg">{item.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            expandedItem === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Sub-items with mobile animations */}
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="bg-primary-foreground overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={onClose}
                                className="block px-6 py-4 text-sm text-primary-foreground hover:text-accent transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    {/* Simple link for mobile */}
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block px-4 py-4 text-lg text-primary-foreground hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Enhanced Engage Button */}
            <div className="p-4">
              <Link
                to="/engage"
                onClick={onClose}
                className="flex items-center justify-center gap-3 w-full px-4 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-wide hover:bg-accent/90 transition-colors"
              >
                Engage With Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
