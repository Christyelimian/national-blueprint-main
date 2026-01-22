import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface MegaMenuCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const MegaMenuCard = ({ title, description, href, icon: Icon }: MegaMenuCardProps) => {
  return (
    <Link
      to={href}
      className="group block p-6 border border-border/50 bg-background hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
    >
      <div className="mb-4">
        <Icon size={24} className="text-accent" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-sm text-foreground/60 group-hover:text-accent transition-colors">
        Learn More
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
};
