import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CountryProvider } from "@/contexts/CountryContext";
import Index from "./pages/Index";
import HowWeDeliver from "./pages/HowWeDeliver";
import WhatWeDo from "./pages/WhatWeDo";
import NotFound from "./pages/NotFound";
import { InvestorPortal } from "./components/investor/InvestorPortal";
import InstitutionalProjectDetail from "./components/projects/InstitutionalProjectDetail";
import WhoWeAre from "./pages/about/WhoWeAreImage";
import Philosophy from "./pages/about/Philosophy";
import Values from "./pages/about/Values";
import Leadership from "./pages/about/Leadership";
import NigeriaProgram from "./pages/programs/NigeriaProgram";
import SierraLeoneProgram from "./pages/programs/SierraLeoneProgram";
import BotswanaProgram from "./pages/programs/BotswanaProgram";
import BurkinaFasoProgram from "./pages/programs/BurkinaFasoProgram";
import BromleyCourtProject from "./pages/programs/nigeria/BromleyCourtProject";
import CentralDistrictProject from "./pages/programs/nigeria/CentralDistrictProject";
import GwarinpaProject from "./pages/programs/nigeria/GwarinpaProject";
import KubwaProject from "./pages/programs/nigeria/KubwaProject";
import DeliveryTrackRecord from "./components/programs/DeliveryTrackRecord";

const queryClient = new QueryClient();

const App = () => (
  <CountryProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Index />} />
              
              {/* About Section */}
              <Route path="/about">
                <Route index element={<WhoWeAre />} />
                <Route path="who-we-are" element={<WhoWeAre />} />
                <Route path="philosophy" element={<Philosophy />} />
                <Route path="values" element={<Values />} />
                <Route path="leadership" element={<Leadership />} />
              </Route>
              
              {/* Programs Section */}
              <Route path="/programs">
                <Route index element={<Index />} />
                <Route path="nigeria" element={<NigeriaProgram />} />
                <Route path="sierra-leone" element={<SierraLeoneProgram />} />
                <Route path="botswana" element={<BotswanaProgram />} />
                <Route path="burkina-faso" element={<BurkinaFasoProgram />} />
                <Route path="nigeria/bromley-court" element={<BromleyCourtProject />} />
                <Route path="nigeria/central-district" element={<CentralDistrictProject />} />
                <Route path="nigeria/gwarinpa" element={<GwarinpaProject />} />
                <Route path="nigeria/kubwa" element={<KubwaProject />} />
                <Route path="nigeria/:id" element={<InstitutionalProjectDetail />} />
              </Route>
              
              {/* Delivery Section */}
              <Route path="/delivery" element={<HowWeDeliver />} />
              
              {/* Other Sections */}
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/investor-portal" element={<InvestorPortal />} />
              <Route path="/engage" element={<Index />} />
              <Route path="/impact" element={<Index />} />
              <Route path="/insights" element={<Index />} />
              <Route path="/delivery-track-record" element={<DeliveryTrackRecord />} />
              
              {/* Legacy redirects for backward compatibility */}
              <Route path="/ng" element={<Index />} />
              <Route path="/sl" element={<Index />} />
              <Route path="/bw" element={<Index />} />
              <Route path="/bf" element={<Index />} />
              <Route path="/how-we-deliver" element={<HowWeDeliver />} />
              <Route path="/projects/:id" element={<InstitutionalProjectDetail />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </CountryProvider>
);

export default App;
