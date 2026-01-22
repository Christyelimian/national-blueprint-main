import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, Users, Building, Leaf, Award, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ESGMetrics {
  category: string;
  score: number;
  target: number;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface ImpactData {
  metric: string;
  current: string;
  target: string;
  progress: number;
  unit: string;
}

export const ESGImpactMeasurement = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('environmental');

  const esgMetrics: ESGMetrics[] = [
    {
      category: 'Environmental',
      score: 87,
      target: 90,
      description: 'Carbon reduction, sustainable building practices, renewable energy integration',
      icon: Leaf,
      color: 'text-green-600'
    },
    {
      category: 'Social',
      score: 92,
      target: 95,
      description: 'Community development, job creation, affordable housing initiatives',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      category: 'Governance',
      score: 94,
      target: 95,
      description: 'Transparency, accountability, ethical investment practices',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const impactData: ImpactData[] = [
    {
      metric: 'CO₂ Emissions Reduced',
      current: '450K',
      target: '500K',
      progress: 90,
      unit: 'tons/year'
    },
    {
      metric: 'Jobs Created',
      current: '12.5K',
      target: '15K',
      progress: 83,
      unit: 'direct/indirect'
    },
    {
      metric: 'Housing Units',
      current: '8.2K',
      target: '10K',
      progress: 82,
      unit: 'affordable units'
    },
    {
      metric: 'Energy from Renewables',
      current: '65%',
      target: '80%',
      progress: 81,
      unit: 'total energy'
    },
    {
      metric: 'Community Projects',
      current: '24',
      target: '30',
      progress: 80,
      unit: 'active programs'
    },
    {
      metric: 'Local Procurement',
      current: '78%',
      target: '85%',
      progress: 92,
      unit: 'of spend'
    }
  ];

  const sdgAlignment = [
    { sdg: 'SDG 7', title: 'Affordable Clean Energy', alignment: 95 },
    { sdg: 'SDG 8', title: 'Decent Work & Economic Growth', alignment: 92 },
    { sdg: 'SDG 9', title: 'Industry, Innovation & Infrastructure', alignment: 98 },
    { sdg: 'SDG 11', title: 'Sustainable Cities & Communities', alignment: 96 },
    { sdg: 'SDG 13', title: 'Climate Action', alignment: 88 }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            ESG Integration
          </Badge>
          
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-4">
            Impact Measurement & ESG Performance
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Comprehensive environmental, social, and governance metrics aligned with institutional investment standards and UN Sustainable Development Goals.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 md:mb-8">
            <TabsTrigger value="overview" className="text-sm md:text-base py-3">ESG Overview</TabsTrigger>
            <TabsTrigger value="impact" className="text-sm md:text-base py-3">Impact Metrics</TabsTrigger>
            <TabsTrigger value="sdg" className="text-sm md:text-base py-3">SDG Alignment</TabsTrigger>
          </TabsList>

{/* ESG Overview */}
          <TabsContent value="overview" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {esgMetrics.map((metric, index) => {
                const Icon = metric.icon;
                 return (
                  <motion.div
                    key={metric.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2 md:pb-4">
                        <div className="flex items-center justify-between">
                          <div className={`p-2 md:p-3 rounded-lg bg-slate-100 ${metric.color} bg-opacity-10`}>
                            <Icon size={20} className={metric.color.replace('bg-', 'text-')} />
                          </div>
                          <Badge variant="outline" className="text-xs md:text-sm">
                            {metric.score}/{metric.target}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="font-serif text-lg md:text-xl font-medium text-slate-900 mb-2">
                          {metric.category}
                        </CardTitle>
                        <CardDescription className="mb-3 md:mb-4 text-xs md:text-sm">
                          {metric.description}
                        </CardDescription>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs md:text-sm">
                            <span>Current Score</span>
                            <span className="font-medium">{metric.score}%</span>
                          </div>
                          <Progress value={metric.score} className="h-2" />
                          <div className="flex justify-between text-xs md:text-sm text-slate-500">
                            <span>Target</span>
                            <span>{metric.target}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

{/* Impact Metrics */}
          <TabsContent value="impact" className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {impactData.map((impact, index) => (
                <motion.div
                  key={impact.metric}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200 rounded-lg p-4 md:p-6"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                      <div className="flex-1">
                        <h3 className="font-serif text-lg md:text-xl font-medium text-slate-900 mb-1">
                          {impact.metric}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500">{impact.unit}</p>
                      </div>
                      <div className="flex items-center justify-center md:items-end">
                        <div className="text-center">
                          <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                            {impact.current}
                          </div>
                          <div className="text-xs text-slate-500">
                            / {impact.target}
                          </div>
                        </div>
                        <Badge 
                          variant={impact.progress >= 90 ? 'default' : 'secondary'}
                          className="text-xs mt-1"
                        >
                          {impact.progress}%
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs md:text-sm">
                        <span>Progress</span>
                        <span>{impact.progress}%</span>
                      </div>
                      <Progress value={impact.progress} className="h-2" />
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* SDG Alignment */}
          <TabsContent value="sdg" className="space-y-4 md:space-y-6">
            <Card className="border-slate-200">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-slate-600 size-20 md:size-24" />
                  <span className="text-lg md:text-xl">UN SDGs Alignment</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Our investment framework directly contributes to achieving key UN SDGs through infrastructure development and impact creation.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <div className="space-y-3 md:space-y-4">
                  {sdgAlignment.map((sdg, index) => (
                    <motion.div
                      key={sdg.sdg}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <Badge variant="outline" className="text-xs font-mono">
                          {sdg.sdg}
                        </Badge>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-900 mb-1 text-sm md:text-base">
                          {sdg.title}
                        </h4>
                        <div className="flex items-center gap-2 md:gap-3">
                          <Progress value={sdg.alignment} className="flex-1 h-2" />
                          <span className="text-xs md:text-sm font-medium text-slate-600 min-w-[3rem]">
                            {sdg.alignment}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};