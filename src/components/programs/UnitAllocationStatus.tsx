import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Building2, Users, Shield, ArrowRight } from 'lucide-react';

interface UnitAllocationStatusProps {
  projectName: string;
  totalUnits: number;
  onInquiryClick: () => void;
  onInstitutionalClick: () => void;
}

const UnitAllocationStatus: React.FC<UnitAllocationStatusProps> = ({
  projectName,
  totalUnits,
  onInquiryClick,
  onInstitutionalClick
}) => {
  // Allocation breakdown - institutional dignity
  const allocation = {
    total: totalUnits,
    institutional: Math.floor(totalUnits * 0.376), // 37.6%
    market: Math.floor(totalUnits * 0.565), // 56.5%
    workforce: Math.floor(totalUnits * 0.059), // 5.9%
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="text-accent" size={20} />
          Unit Allocation Status
        </CardTitle>
        <CardDescription>
          {projectName} - Nigeria Urban Housing Acceleration Program
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Total Units */}
        <div className="text-center p-4 bg-surface rounded-lg">
          <div className="text-3xl font-serif font-bold text-foreground mb-2">
            {allocation.total.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            Total Program Units
          </div>
        </div>

        {/* Allocation Categories */}
        <div className="space-y-4">
          {/* Institutional Allocation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="text-blue-600" size={16} />
                <span className="text-sm font-medium">Institutional Allocation</span>
              </div>
              <span className="text-sm font-medium">
                {allocation.institutional} units
              </span>
            </div>
            <Progress value={37.6} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Status: Reserved for government/corporate</span>
              <span>37.6%</span>
            </div>
          </div>

          {/* Market Allocation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="text-green-600" size={16} />
                <span className="text-sm font-medium">Market Allocation</span>
              </div>
              <span className="text-sm font-medium">
                {allocation.market} units
              </span>
            </div>
            <Progress value={56.5} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Status: Progressive release (Phase-based)</span>
              <span>56.5%</span>
            </div>
          </div>

          {/* Workforce Housing */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="text-amber-600" size={16} />
                <span className="text-sm font-medium">Workforce Housing</span>
              </div>
              <span className="text-sm font-medium">
                {allocation.workforce} units
              </span>
            </div>
            <Progress value={5.9} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Status: Criteria-based allocation</span>
              <span>5.9%</span>
            </div>
          </div>
        </div>

        {/* Process Information */}
        <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Shield size={16} className="text-accent" />
            Allocation Framework
          </h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Institutional units allocated through formal procurement</p>
            <p>• Market units released progressively by construction phase</p>
            <p>• Workforce housing designated for essential workers</p>
            <p>• All allocations follow Nigeria Housing Program protocols</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onInquiryClick}
            className="w-full bg-primary text-primary-foreground"
          >
            Individual Unit Inquiry
          </Button>
          
          <Button 
            onClick={onInstitutionalClick}
            variant="outline"
            className="w-full"
          >
            Institutional Procurement Process
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        {/* Important Note */}
        <div className="text-xs text-muted-foreground text-center">
          <p>No prices displayed. Commercial terms shared during formal allocation process.</p>
          <p>All inquiries handled with institutional respect and confidentiality.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitAllocationStatus;