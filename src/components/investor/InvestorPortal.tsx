import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, User, Shield, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface InvestorPortalProps {
  className?: string;
}

export const InvestorPortal = ({ className }: InvestorPortalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [accessLevel, setAccessLevel] = useState<'view' | 'review' | 'execute'>('view');

  const accessLevels = {
    view: {
      title: 'View Access',
      description: 'Basic project overview and public information',
      icon: Eye,
      color: 'bg-blue-500'
    },
    review: {
      title: 'Review Access', 
      description: 'Detailed investment memoranda and due diligence materials',
      icon: FileText,
      color: 'bg-amber-500'
    },
    execute: {
      title: 'Execute Access',
      description: 'Full investment capabilities and secure document signing',
      icon: Shield,
      color: 'bg-green-500'
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg mb-6">
            <Lock size={16} />
            <span className="text-sm font-medium">Secure Investor Portal</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-4">
            Institutional Investment Access
          </h1>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Secure access to institutional-grade investment opportunities, detailed due diligence materials, and comprehensive impact reporting.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Investor Login</TabsTrigger>
              <TabsTrigger value="access">Access Levels</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="mt-8">
              <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User size={20} />
                    Institutional Investor Authentication
                  </CardTitle>
                  <CardDescription>
                    Enter your institutional credentials to access the secure investor portal.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Institutional Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@institution.com"
                        className="border-slate-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Secure Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your secure password"
                          className="border-slate-300 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="access">Access Level</Label>
                      <select 
                        id="access"
                        value={accessLevel}
                        onChange={(e) => setAccessLevel(e.target.value as 'view' | 'review' | 'execute')}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white"
                      >
                        <option value="view">View Access</option>
                        <option value="review">Review Access</option>
                        <option value="execute">Execute Access</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      Secure Login
                    </Button>
                    
                    <div className="text-center">
                      <Button variant="link" className="text-sm text-slate-600">
                        Request Institutional Access
                      </Button>
                    </div>
                  </div>

                  <Alert>
                    <Shield className="h-4 w-4" />
                    <div className="pl-7">
                      <AlertDescription>
                        This portal uses multi-factor authentication and end-to-end encryption to protect sensitive investment information.
                      </AlertDescription>
                    </div>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Access Levels Tab */}
            <TabsContent value="access" className="mt-8">
              <div className="grid gap-6">
                {Object.entries(accessLevels).map(([level, config]) => {
                  const Icon = config.icon;
                  return (
                    <motion.div
                      key={level}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: parseInt(level) * 0.1 }}
                    >
                      <Card className="border-slate-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${config.color} bg-opacity-10`}>
                              <Icon size={24} className={config.color.replace('bg-', 'text-')} />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="font-serif text-xl font-medium text-slate-900 mb-2">
                                {config.title}
                              </h3>
                              <p className="text-slate-600 mb-4">
                                {config.description}
                              </p>
                              
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                  <BarChart3 size={16} />
                                  <span>Access to {level === 'view' ? 'basic' : level === 'review' ? 'detailed' : 'comprehensive'} analytics</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                  <FileText size={16} />
                                  <span>{level === 'view' ? 'Limited' : level === 'review' ? 'Extensive' : 'Complete'} document access</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};