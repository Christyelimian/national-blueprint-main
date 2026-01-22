export type CountryConfig = {
  code: string;
  name: string;
  flag: string;
  currency: string;
  domain?: string;
};

// Priority launch countries in order
export const COUNTRIES: CountryConfig[] = [
  { code: 'ng', name: 'Nigeria', flag: '🇳🇬', currency: 'NGN', domain: 'ng.premiumhomes.africa' },
  { code: 'sl', name: 'Sierra Leone', flag: '🇸🇱', currency: 'SLL', domain: 'sl.premiumhomes.africa' },
  { code: 'bw', name: 'Botswana', flag: '🇧🇼', currency: 'BWP', domain: 'bw.premiumhomes.africa' },
  { code: 'bf', name: 'Burkina Faso', flag: '🇧🇫', currency: 'XOF', domain: 'bf.premiumhomes.africa' },
];
