import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2 rounded-sm border border-border/30 bg-surface/50 backdrop-blur-sm hover:bg-surface transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        className="flex items-center gap-2"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'institutional' ? (
          <>
            <div className="w-3 h-3 rounded-full bg-[#1e3a5f]" />
            <span className="text-xs font-sans uppercase tracking-wider text-foreground/70">Navy</span>
          </>
        ) : (
          <>
            <div className="w-3 h-3 rounded-full bg-[#75b743]" />
            <span className="text-xs font-sans uppercase tracking-wider text-foreground/70">Lemon</span>
          </>
        )}
      </motion.div>
    </button>
  );
};
