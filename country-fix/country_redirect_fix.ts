// WRONG - This causes redirect loop
useEffect(() => {
  const country = detectCountry();
  if (country === 'ng') {
    router.push('/ng'); // ❌ DON'T DO THIS
  }
}, []);

// CORRECT - Store country without redirecting
useEffect(() => {
  const detectedCountry = detectCountry();
  
  // Only redirect if explicitly on a different country page
  const currentPath = window.location.pathname;
  const pathCountry = currentPath.split('/')[1];
  
  // Don't redirect if already on correct country or root
  if (currentPath === '/' || pathCountry === detectedCountry) {
    // Just store the country, no redirect needed
    localStorage.setItem('userCountry', detectedCountry);
    setCountry(detectedCountry);
  }
}, []);

// Alternative: Use country as state, not routing
function detectCountry() {
  // For .ng domain, default to Nigeria
  if (window.location.hostname.endsWith('.ng')) {
    return 'ng';
  }
  
  // For other domains, detect or default
  const saved = localStorage.getItem('userCountry');
  return saved || 'ng'; // Default to Nigeria
}