import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Building2, TrendingUp, Users, MapPin, Calendar, CheckCircle2, BarChart3, Globe } from 'lucide-react';

interface Project {
  name: string;
  location: string;
  units: number;
  value: string;
  status: string;
  progress: number;
  timeline: string;
  capabilities: string[];
  metrics: {
    timeline: string;
    budget: string;
    quality: string;
    jobs: number;
  };
}

const DeliveryTrackRecord = () => {
  const projects: Project[] = [
    {
      name: 'Bromley Court',
      location: 'Central Abuja, FCT',
      units: 850,
      value: '₦38.25B',
      status: 'Active Delivery',
      progress: 60,
      timeline: '2024-2026',
      capabilities: [
        'Land acquisition & title perfection',
        'Multi-phase financing structuring',
        'Engineering partnership management',
        'Construction program delivery',
        'Government liaison & compliance',
        'Infrastructure integration'
      ],
      metrics: {
        timeline: '94%',
        budget: 'Within 3% variance',
        quality: '100% inspections passed',
        jobs: 1240
      }
    },
    {
      name: 'Central District Development',
      location: 'Central Business District, Abuja',
      units: 1400,
      value: '₦63B',
      status: 'Advanced Planning',
      progress: 15,
      timeline: '2025-2027',
      capabilities: [
        'Urban planning & zoning',
        'Mixed-use development frameworks',
        'Transportation integration',
        'High-density construction'
      ],
      metrics: {
        timeline: 'On schedule',
        budget: 'Within planning parameters',
        quality: 'Planning standards met',
        jobs: 0
      }
    },
    {
      name: 'Gwarinpa Expansion',
      location: 'Gwarinpa District, Abuja',
      units: 1200,
      value: '₦54B',
      status: 'Land Secured',
      progress: 8,
      timeline: '2025-2028',
      capabilities: [
        'Land acquisition at scale',
        'Suburban development planning',
        'Community facility integration',
        'Infrastructure extension'
      ],
      metrics: {
        timeline: 'On schedule',
        budget: 'Within feasibility parameters',
        quality: 'Feasibility studies complete',
        jobs: 0
      }
    },
    {
      name: 'Kubwa District Integration',
      location: 'Kubwa District, Abuja',
      units: 1750,
      value: '₦78.75B',
      status: 'Design Phase',
      progress: 5,
      timeline: '2026-2028',
      capabilities: [
        'Mixed-income housing models',
        'Cross-subsidy frameworks',
        'Universal design implementation',
        'Community integration strategies'
      ],
      metrics: {
        timeline: 'On schedule',
        budget: 'Design phase parameters',
        quality: 'Design standards development',
        jobs: 0
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active Delivery': return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced Planning': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Land Secured': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Design Phase': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const totalMetrics = {
    units: projects.reduce((sum, p) => sum + p.units, 0),
    value: projects.reduce((sum, p) => sum + p.units, 0),
    jobs: projects.reduce((sum, p) => sum + p.metrics.jobs, 0)
  };

  return (
    <div className="delivery-track-record">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Demonstrated Execution Capability
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Premium Homes has progressed from project origination to active delivery, 
              demonstrating the institutional capacity to manage complex urban development programs 
              at national scale.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-background rounded-lg border border-border/50">
                <Building2 className="mx-auto text-accent mb-3" size={32} />
                <div className="text-3xl font-serif font-bold text-foreground mb-2">
                  {totalMetrics.units.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Units in Pipeline</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border/50">
                <TrendingUp className="mx-auto text-green-600 mb-3" size={32} />
                <div className="text-3xl font-serif font-bold text-foreground mb-2">
                  5,200
                </div>
                <div className="text-sm text-muted-foreground">Phase I Active Units</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border/50">
                <Users className="mx-auto text-blue-600 mb-3" size={32} />
                <div className="text-3xl font-serif font-bold text-foreground mb-2">
                  {totalMetrics.jobs.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Jobs Created</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border/50">
                <CheckCircle2 className="mx-auto text-purple-600 mb-3" size={32} />
                <div className="text-3xl font-serif font-bold text-foreground mb-2">
                  94%
                </div>
                <div className="text-sm text-muted-foreground">Timeline Adherence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Implementations */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                ACTIVE IMPLEMENTATIONS
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Current projects demonstrating delivery capability across multiple development models.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <Card key={project.name} className="border-border/50 hover:border-accent/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="font-serif text-xl mb-2">{project.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-sm">
                          <MapPin size={14} />
                          {project.location}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Units:</span>
                        <span className="font-medium ml-1">{project.units.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Value:</span>
                        <span className="font-medium ml-1">{project.value}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-medium ml-1">{project.timeline}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Progress:</span>
                        <span className="font-medium ml-1">{project.progress}%</span>
                      </div>
                    </div>

                    <Progress value={project.progress} className="mt-3 h-2" />
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Building2 size={16} className="text-accent" />
                        Demonstrated Capabilities
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {project.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.metrics.jobs > 0 && (
                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <BarChart3 size={16} className="text-blue-600" />
                          Key Performance Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Timeline:</span>
                            <span className="font-medium">{project.metrics.timeline}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Budget:</span>
                            <span className="font-medium">{project.metrics.budget}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Quality:</span>
                            <span className="font-medium">{project.metrics.quality}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Jobs:</span>
                            <span className="font-medium">{project.metrics.jobs.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t border-border/50">
                      <div className="flex justify-center">
                        <Button asChild>
                          <a href={`/programs/nigeria/${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            View Full Project Documentation
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Validation */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                INSTITUTIONAL VALIDATION
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <TrendingUp size={24} className="text-accent" />,
                  title: 'Origination Capability',
                  description: 'Bankable project development from concept through feasibility'
                },
                {
                  icon: <Building2 size={24} className="text-blue-600" />,
                  title: 'Structuring Excellence',
                  description: 'Complex financing arrangements with institutional capital'
                },
                {
                  icon: <Users size={24} className="text-green-600" />,
                  title: 'Delivery Execution',
                  description: 'Multi-stakeholder project management within budget and timeline'
                },
                {
                  icon: <Globe size={24} className="text-purple-600" />,
                  title: 'Quality Standards',
                  description: '100% inspection compliance and quality assurance'
                },
                {
                  icon: <MapPin size={24} className="text-amber-600" />,
                  title: 'Scale Operations',
                  description: 'Managing multiple projects simultaneously across locations'
                },
                {
                  icon: <CheckCircle2 size={24} className="text-red-600" />,
                  title: 'Government Partnership',
                  description: 'Effective collaboration with public sector stakeholders'
                }
              ].map((validation, index) => (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {validation.icon}
                    </div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                      {validation.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {validation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-accent/5 rounded-lg border border-accent/20 p-8 text-center">
              <p className="text-lg text-foreground mb-6">
                This track record supports engagement for larger-scale programs including 
                Sierra Leone ($10B), Botswana, and Burkina Faso ($14-15B) initiatives.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link to="/engage">
                    Request Institutional Briefing
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryTrackRecord;