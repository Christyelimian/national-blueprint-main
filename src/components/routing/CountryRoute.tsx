import { useParams, Navigate } from 'react-router-dom';
import { COUNTRIES } from '@/config/countries';

interface CountryRouteProps {
  children: React.ReactNode;
}

export const CountryRoute: React.FC<CountryRouteProps> = ({ children }) => {
  const { country } = useParams<{ country: string }>();
  
  if (!country) {
    return <>{children}</>;
  }
  
  const isValidCountry = COUNTRIES.some(c => c.code === country);
  
  if (!isValidCountry) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};