import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MegaMenuLinkProps {
  title: string;
  description?: string;
  href: string;
}

export const MegaMenuLink = ({ title, description, href }: MegaMenuLinkProps) => {
  return (
    <Link
      to={href}
      className="group flex items-start gap-3 py-3 hover:bg-accent/5 px-3 -mx-3 transition-colors duration-200"
    >
      <ArrowRight size={16} className="text-accent mt-0.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
      <div className="-ml-5 group-hover:ml-0 transition-all duration-200">
        <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};
