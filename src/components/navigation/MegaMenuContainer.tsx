import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

export const MegaMenuContainer = ({ isOpen, children }: MegaMenuContainerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 bg-foreground/5 backdrop-blur-[2px] z-40"
          />
          
          {/* Menu Container */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-elevated z-50"
          >
            <div className="container mx-auto px-6 lg:px-12 py-10">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
