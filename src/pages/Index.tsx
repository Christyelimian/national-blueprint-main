import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { MandateSection } from '@/components/home/MandateSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { ESGImpactMeasurement } from '@/components/esg/ESGImpactMeasurement';
import { InsightsSection } from '@/components/home/InsightsSection';
import { EngageSection } from '@/components/home/EngageSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MandateSection />
      <ProgramsSection />
      <ImpactSection />
      <ESGImpactMeasurement />
      <InsightsSection />
      <EngageSection />
    </Layout>
  );
};

export default Index;
