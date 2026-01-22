import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CountryProvider } from "@/contexts/CountryContext";
import { CountryRoute } from "@/components/routing/CountryRoute";
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
              <Route path="/" element={<Index />} />
              
              {/* Country-prefixed routes */}
              <Route path="/:country" element={
                <CountryRoute>
                  <Index />
                </CountryRoute>
              } />
              <Route path="/:country/about" element={
                <CountryRoute>
                  <WhoWeAre />
                </CountryRoute>
              } />
              <Route path="/:country/about/who-we-are" element={
                <CountryRoute>
                  <WhoWeAre />
                </CountryRoute>
              } />
              <Route path="/:country/about/philosophy" element={
                <CountryRoute>
                  <Philosophy />
                </CountryRoute>
              } />
              <Route path="/:country/about/values" element={
                <CountryRoute>
                  <Values />
                </CountryRoute>
              } />
              <Route path="/:country/about/leadership" element={
                <CountryRoute>
                  <Leadership />
                </CountryRoute>
              } />
              <Route path="/:country/what-we-do" element={
                <CountryRoute>
                  <WhatWeDo />
                </CountryRoute>
              } />
              <Route path="/:country/programs" element={
                <CountryRoute>
                  <Index />
                </CountryRoute>
              } />
              <Route path="/:country/how-we-deliver" element={
                <CountryRoute>
                  <HowWeDeliver />
                </CountryRoute>
              } />
              <Route path="/:country/investor-portal" element={
                <CountryRoute>
                  <InvestorPortal />
                </CountryRoute>
              } />
              <Route path="/:country/engage" element={
                <CountryRoute>
                  <Index />
                </CountryRoute>
              } />
              <Route path="/:country/impact" element={
                <CountryRoute>
                  <Index />
                </CountryRoute>
              } />
              <Route path="/:country/insights" element={
                <CountryRoute>
                  <Index />
                </CountryRoute>
              } />
              <Route path="/:country/projects/:id" element={
                <CountryRoute>
                  <InstitutionalProjectDetail />
                </CountryRoute>
              } />
              
              {/* Legacy routes for backward compatibility */}
              <Route path="/how-we-deliver" element={<HowWeDeliver />} />
              <Route path="/how-we-deliver/*" element={<HowWeDeliver />} />
              <Route path="/investor-portal" element={<InvestorPortal />} />
              <Route path="/projects/:id" element={<InstitutionalProjectDetail />} />
              <Route path="/about/who-we-are" element={<WhoWeAre />} />
              <Route path="/about/philosophy" element={<Philosophy />} />
              <Route path="/about/values" element={<Values />} />
              <Route path="/about/leadership" element={<Leadership />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </CountryProvider>
);

export default App;
