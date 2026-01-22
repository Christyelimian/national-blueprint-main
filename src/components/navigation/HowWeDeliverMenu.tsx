import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { MegaMenuLink } from './MegaMenuLink';

const deliveryFramework = [
  { title: 'Development Model', description: 'Seven-stage delivery process', href: '/how-we-deliver/model' },
  { title: 'Risk Management', description: 'Comprehensive mitigation approach', href: '/how-we-deliver/risk' },
  { title: 'Phased Execution', description: 'Stage-by-stage delivery', href: '/how-we-deliver/execution' },
  { title: 'Government Collaboration', description: 'Engagement protocols', href: '/how-we-deliver/government' },
];

const financingModels = [
  { title: 'BOT Structures', description: 'Operational frameworks', href: '/how-we-deliver/bot' },
  { title: 'PPP Models', description: 'Partnership structures', href: '/how-we-deliver/ppp' },
  { title: 'Development Finance', description: 'Capital orchestration', href: '/how-we-deliver/finance' },
  { title: 'Blended Capital', description: 'Financing frameworks', href: '/how-we-deliver/blended' },
];

export const HowWeDeliverMenu = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Delivery Framework */}
        <div>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Delivery Framework
            </span>
          </div>
          
          <div className="space-y-1">
            {deliveryFramework.map((item) => (
              <MegaMenuLink
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </div>

        {/* Financing Models */}
        <div>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Financing Models
            </span>
          </div>
          
          <div className="space-y-1">
            {financingModels.map((item) => (
              <MegaMenuLink
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-10 pt-8 border-t border-border/50">
        <Link
          to="/how-we-deliver/methodology.pdf"
          className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <Download size={18} />
          Download: Complete Delivery Methodology (PDF)
        </Link>
      </div>
    </div>
  );
};
