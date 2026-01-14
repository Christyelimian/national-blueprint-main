import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeVariant = 'institutional' | 'lemon';

interface ThemeContextType {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariant>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('ph-theme') as ThemeVariant) || 'lemon';
    }
    return 'lemon';
  });

  useEffect(() => {
    localStorage.setItem('ph-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'institutional' ? 'lemon' : 'institutional');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
