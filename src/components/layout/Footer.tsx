import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-xl font-semibold tracking-tight">
                Premium Homes
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">
                Global Investment Services
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Structured Infrastructure & Urban Development Institution designing, financing, and delivering nation-building projects across Africa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-6">
              Institution
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About Premium Homes
              </Link>
              <Link to="/what-we-do" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                What We Do
              </Link>
              <Link to="/how-we-deliver" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                How We Deliver
              </Link>
              <Link to="/impact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Impact & Economics
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-6">
              Programs
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/programs/sierra-leone" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Sierra Leone
              </Link>
              <Link to="/programs/botswana" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Botswana
              </Link>
              <Link to="/programs/burkina-faso" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Burkina Faso
              </Link>
              <Link to="/programs/nigeria" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Nigeria
              </Link>
            </nav>
          </div>

          {/* Engage */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-6">
              Engage
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/engage" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Institutional Inquiries
              </Link>
              <Link to="/insights" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Insights
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Premium Homes Global Investment Services Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/governance" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
                Governance & Ethics
              </Link>
              <Link to="/privacy" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
