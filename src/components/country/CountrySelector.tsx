import React from 'react';
import { COUNTRIES } from '@/config/countries';
import { useCountry } from '@/contexts/CountryContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const CountrySelector: React.FC = () => {
  const { country, setCountry } = useCountry();
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close on outside click
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const onSelect = (code: string) => {
    // Update country in state
    setCountry(code as any);
    // Build a path with country prefix
    const segments = location.pathname.split('/').filter(Boolean);
    const hasCountryPrefix = segments.length > 0 && COUNTRIES.some((c) => c.code === segments[0]);
    if (hasCountryPrefix) {
      segments[0] = code;
    } else {
      segments.unshift(code);
    }
    const newPath = '/' + segments.join('/');
    navigate(newPath);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <button
        className="flex items-center gap-2 px-3 py-2 border border-primary/30 rounded"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select country"
      >
        <span>{country.flag}</span>
        <span className="hidden sm:inline">{country.name}</span>
        <span aria-hidden>▾</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded shadow-md">
          {COUNTRIES.map((c) => (
            <div
              key={c.code}
              className="px-3 py-2 flex items-center space-x-2 hover:bg-muted-foreground cursor-pointer"
              onClick={() => onSelect(c.code)}
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
