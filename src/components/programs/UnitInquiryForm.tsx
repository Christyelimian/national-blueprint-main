import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Building } from 'lucide-react';

interface UnitInquiryFormProps {
  projectName: string;
  onSubmit: (data: InquiryData) => void;
}

interface InquiryData {
  inquiryType: 'individual' | 'corporate' | 'institutional';
  fullName: string;
  email: string;
  phone: string;
  unitInterests: string[];
  message: string;
  agreeToProcess: boolean;
}

const UnitInquiryForm: React.FC<UnitInquiryFormProps> = ({ projectName, onSubmit }) => {
  const [formData, setFormData] = useState<InquiryData>({
    inquiryType: 'individual',
    fullName: '',
    email: '',
    phone: '',
    unitInterests: [],
    message: '',
    agreeToProcess: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleUnitInterestChange = (unit: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      unitInterests: checked 
        ? [...prev.unitInterests, unit]
        : prev.unitInterests.filter(interest => interest !== unit)
    }));
  };

  return (
    <div className="unit-inquiry-form">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="text-accent" size={20} />
            Unit Acquisition Inquiry
          </CardTitle>
          <CardDescription>
            {projectName} - Nigeria Urban Housing Acceleration Program
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Program Information */}
            <Alert className="bg-slate-50 border-slate-200">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                This project operates under the Nigeria Urban Housing Acceleration Program framework. 
                Unit allocation follows structured protocols with institutional standards.
              </AlertDescription>
            </Alert>

            {/* Inquiry Type */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Inquiry Type*</Label>
              <RadioGroup
                value={formData.inquiryType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value as any }))}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual">Individual</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="corporate" id="corporate" />
                  <Label htmlFor="corporate">Corporate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="institutional" id="institutional" />
                  <Label htmlFor="institutional">Institutional</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name*</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone*</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                placeholder="+234 XXX XXX XXXX"
              />
            </div>

            {/* Unit Interest */}
            <div className="space-y-3">
              <Label>Unit Interest</Label>
              <div className="space-y-2">
                {[
                  { id: '2-bedroom', label: '2-Bedroom Units' },
                  { id: '3-bedroom', label: '3-Bedroom Units' },
                  { id: '4-bedroom', label: '4-Bedroom Units' },
                ].map((unit) => (
                  <div key={unit.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={unit.id}
                      checked={formData.unitInterests.includes(unit.id)}
                      onCheckedChange={(checked) => handleUnitInterestChange(unit.id, checked as boolean)}
                    />
                    <Label htmlFor={unit.id} className="text-sm">{unit.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Provide any additional information about your inquiry..."
                rows={4}
              />
            </div>

            {/* Allocation Process Information */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Users className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-2">Allocation Process</h4>
                    <ol className="text-sm text-muted-foreground space-y-1">
                      <li>1. Inquiry submission</li>
                      <li>2. Eligibility review</li>
                      <li>3. Unit availability check</li>
                      <li>4. Specification matching</li>
                      <li>5. Commercial discussion</li>
                      <li>6. Documentation process</li>
                    </ol>
                    <p className="text-sm mt-2">
                      <strong>Timeline:</strong> 5-7 business days for initial review
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agreement */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToProcess"
                  checked={formData.agreeToProcess}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToProcess: checked as boolean }))}
                  required
                />
                <Label htmlFor="agreeToProcess" className="text-sm leading-relaxed">
                  I understand this operates under a structured allocation framework. 
                  All inquiries are treated with institutional respect and confidentiality.
                </Label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                className="bg-primary text-primary-foreground px-8"
                disabled={!formData.fullName || !formData.email || !formData.phone || !formData.agreeToProcess}
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnitInquiryForm;