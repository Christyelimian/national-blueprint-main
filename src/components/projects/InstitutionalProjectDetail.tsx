import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar,
  DollarSign,
  FileText,
  Download,
  Shield,
  BarChart3,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ProjectDetail {
  id: string;
  name: string;
  country: string;
  investmentSize: string;
  status: string;
  description: string;
  keyMetrics: {
    roi: string;
    timeline: string;
    jobs: string;
    housing: string;
  };
  documents: {
    name: string;
    type: string;
    size: string;
    access: 'public' | 'restricted' | 'confidential';
  }[];
  financials: {
    totalInvestment: string;
    sources: { name: string; amount: string; percentage: number }[];
    uses: { category: string; amount: string; percentage: number }[];
  };
  esg: {
    score: number;
    carbonReduction: string;
    communityImpact: string;
    sustainableFeatures: string[];
  };
}

const InstitutionalProjectDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [accessLevel, setAccessLevel] = useState<'view' | 'review' | 'execute'>('review');

  const project: ProjectDetail = {
    id: 'sl-mega-city-01',
    name: 'Freetown Smart Mega City',
    country: 'Sierra Leone',
    investmentSize: '$10B',
    status: 'Advanced Structuring',
    description: 'Comprehensive urban development project integrating smart city infrastructure, sustainable housing, and economic zones to create a model for African urban transformation.',
    keyMetrics: {
      roi: '12-15% IRR',
      timeline: '10-12 years',
      jobs: '50,000+',
      housing: '25,000 units'
    },
    documents: [
      { name: 'Investment Memorandum', type: 'PDF', size: '2.4 MB', access: 'restricted' },
      { name: 'Financial Model', type: 'Excel', size: '8.1 MB', access: 'restricted' },
      { name: 'ESG Impact Report', type: 'PDF', size: '1.8 MB', access: 'public' },
      { name: 'Due Diligence Summary', type: 'PDF', size: '3.2 MB', access: 'confidential' },
      { name: 'Legal Documentation', type: 'ZIP', size: '15.7 MB', access: 'confidential' }
    ],
    financials: {
      totalInvestment: '$10B',
      sources: [
        { name: 'Institutional Equity', amount: '$4B', percentage: 40 },
        { name: 'Development Finance', amount: '$3B', percentage: 30 },
        { name: 'Sovereign Funding', amount: '$2B', percentage: 20 },
        { name: 'Private Capital', amount: '$1B', percentage: 10 }
      ],
      uses: [
        { category: 'Infrastructure', amount: '$4B', percentage: 40 },
        { category: 'Housing Development', amount: '$3B', percentage: 30 },
        { category: 'Economic Zones', amount: '$2B', percentage: 20 },
        { category: 'Smart Systems', amount: '$1B', percentage: 10 }
      ]
    },
    esg: {
      score: 89,
      carbonReduction: '45% vs. baseline',
      communityImpact: '200,000+ beneficiaries',
      sustainableFeatures: [
        'Solar energy integration',
        'Rainwater harvesting',
        'Green building standards',
        'Waste-to-energy systems',
        'Electric transportation'
      ]
    }
  };

  const getAccessBadge = (access: string) => {
    const variants = {
      public: 'bg-green-100 text-green-800 border-green-200',
      restricted: 'bg-amber-100 text-amber-800 border-amber-200',
      confidential: 'bg-red-100 text-red-800 border-red-200'
    };
    return variants[access as keyof typeof variants] || variants.public;
  };

  const canAccessDocument = (access: string) => {
    if (access === 'public') return true;
    if (access === 'restricted' && (accessLevel === 'review' || accessLevel === 'execute')) return true;
    if (access === 'confidential' && accessLevel === 'execute') return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start justify-between"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  {project.status}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <MapPin size={16} />
                  <span>{project.country}</span>
                </div>
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                {project.name}
              </h1>
              
              <p className="text-lg text-slate-600 max-w-3xl mb-6">
                {project.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <DollarSign size={16} />
                  <span>Total Investment: {project.investmentSize}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>Phase 1: 2025-2028</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <select 
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value as 'view' | 'review' | 'execute')}
                className="px-3 py-2 border border-slate-300 rounded-md text-sm"
              >
                <option value="view">View Access</option>
                <option value="review">Review Access</option>
                <option value="execute">Execute Access</option>
              </select>
              
              <Button className="bg-slate-900 hover:bg-slate-800">
                <Shield size={16} className="mr-2" />
                Secure Investment
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-600" size={20} />
                <span className="text-sm text-slate-500">Expected IRR</span>
              </div>
              <div className="font-serif text-2xl font-medium text-slate-900">
                {project.keyMetrics.roi}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-blue-600" size={20} />
                <span className="text-sm text-slate-500">Timeline</span>
              </div>
              <div className="font-serif text-2xl font-medium text-slate-900">
                {project.keyMetrics.timeline}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-purple-600" size={20} />
                <span className="text-sm text-slate-500">Jobs Created</span>
              </div>
              <div className="font-serif text-2xl font-medium text-slate-900">
                {project.keyMetrics.jobs}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="text-amber-600" size={20} />
                <span className="text-sm text-slate-500">Housing Units</span>
              </div>
              <div className="font-serif text-2xl font-medium text-slate-900">
                {project.keyMetrics.housing}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Information Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="esg">ESG Impact</TabsTrigger>
            <TabsTrigger value="risks">Risk Analysis</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Investment Overview</CardTitle>
                <CardDescription>
                  Comprehensive analysis of the investment opportunity and strategic value proposition.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Investment Thesis</h4>
                  <p className="text-slate-600 leading-relaxed">
                    The Freetown Smart Mega City represents a transformative opportunity to develop 
                    sustainable urban infrastructure in one of Africa's fastest-growing economies. 
                    With strong government support, clear regulatory framework, and increasing 
                    institutional demand for quality infrastructure assets, this project offers 
                    attractive risk-adjusted returns with significant positive impact.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Key Differentiators</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>First-mover advantage in Sierra Leone's smart city development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated development approach with multiple revenue streams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Strong ESG credentials with measurable impact metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Experienced development team with proven track record</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign size={20} />
                    Capital Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.financials.sources.map((source, index) => (
                      <div key={source.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{source.name}</span>
                          <span>{source.amount} ({source.percentage}%)</span>
                        </div>
                        <Progress value={source.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 size={20} />
                    Use of Funds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.financials.uses.map((use, index) => (
                      <div key={use.category} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{use.category}</span>
                          <span>{use.amount} ({use.percentage}%)</span>
                        </div>
                        <Progress value={use.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="mt-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={20} />
                  Investment Documentation
                </CardTitle>
                <CardDescription>
                  Secure access to project documentation based on your permission level.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.documents.map((doc, index) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={20} className="text-slate-400" />
                        <div>
                          <h4 className="font-medium text-slate-900">{doc.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge className={getAccessBadge(doc.access)}>
                          {doc.access}
                        </Badge>
                        
                        {canAccessDocument(doc.access) ? (
                          <Button variant="outline" size="sm">
                            <Download size={16} className="mr-2" />
                            Download
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" disabled>
                            <Shield size={16} className="mr-2" />
                            Restricted
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {accessLevel !== 'execute' && (
                  <Alert className="mt-4">
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      Some documents require elevated access permissions. Contact your investment representative 
                      to request access to confidential materials.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ESG Impact Tab */}
          <TabsContent value="esg" className="mt-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe size={20} />
                  ESG Impact Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {project.esg.score}
                    </div>
                    <div className="text-sm text-slate-500">ESG Score</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {project.esg.carbonReduction}
                    </div>
                    <div className="text-sm text-slate-500">Carbon Reduction</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {project.esg.communityImpact}
                    </div>
                    <div className="text-sm text-slate-500">Community Beneficiaries</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Sustainable Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.esg.sustainableFeatures.map((feature, index) => (
                      <div key={feature} className="flex items-center gap-2 p-3 rounded-lg bg-green-50">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <span className="text-sm text-green-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risk Analysis Tab */}
          <TabsContent value="risks" className="mt-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Risk Analysis & Mitigation</CardTitle>
                <CardDescription>
                  Comprehensive assessment of investment risks and mitigation strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-3">Key Risk Factors</h4>
                    <div className="space-y-3">
                      {[
                        { risk: 'Political Risk', level: 'Medium', mitigation: 'Government guarantees and multilateral support' },
                        { risk: 'Currency Risk', level: 'Medium', mitigation: 'Hedging strategies and dollar-denominated returns' },
                        { risk: 'Construction Risk', level: 'Low', mitigation: 'Experienced contractors with performance bonds' },
                        { risk: 'Market Risk', level: 'Low', mitigation: 'Strong demand fundamentals and scarcity premium' }
                      ].map((item, index) => (
                        <div key={item.risk} className="p-4 rounded-lg border border-slate-200">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-medium text-slate-900">{item.risk}</h5>
                            <Badge 
                              variant={item.level === 'Low' ? 'default' : item.level === 'Medium' ? 'secondary' : 'destructive'}
                              className="text-xs"
                            >
                              {item.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600">
                            <strong>Mitigation:</strong> {item.mitigation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstitutionalProjectDetail;