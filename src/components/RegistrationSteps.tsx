
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Building2, User, MapPin, Upload } from 'lucide-react';

interface RegistrationStepsProps {
  currentStep: string;
  formData: any;
  onInputChange: (field: string, value: any) => void;
  onNext: (nextStep: string) => void;
  onBack: (prevStep: string) => void;
}

export const RegistrationSteps: React.FC<RegistrationStepsProps> = ({
  currentStep,
  formData,
  onInputChange,
  onNext,
  onBack
}) => {
  const renderStep1 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Step 1: Basic Company Information
        </CardTitle>
        <CardDescription>Tell us about your business</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Company Name *</label>
            <Input 
              placeholder="Your Company Name"
              value={formData.companyName}
              onChange={(e) => onInputChange('companyName', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Company Type *</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.companyType}
              onChange={(e) => onInputChange('companyType', e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="startup">Startup</option>
              <option value="agency">Agency</option>
              <option value="franchise">Franchise</option>
              <option value="advisor">Advisor</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">GST Number (Optional)</label>
            <Input 
              placeholder="GST Number"
              value={formData.gstNumber}
              onChange={(e) => onInputChange('gstNumber', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">PAN Number</label>
            <Input 
              placeholder="PAN Number"
              value={formData.panNumber}
              onChange={(e) => onInputChange('panNumber', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => onBack('register')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => onNext('step2')}>
            Next: Contact Info
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Step 2: Contact Information
        </CardTitle>
        <CardDescription>Your business contact details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Owner/Director Name *</label>
            <Input 
              placeholder="Full Name"
              value={formData.ownerName}
              onChange={(e) => onInputChange('ownerName', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Designation *</label>
            <Input 
              placeholder="CEO, Director, Manager"
              value={formData.designation}
              onChange={(e) => onInputChange('designation', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Official Email *</label>
            <Input 
              type="email"
              placeholder="business@company.com"
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Mobile Number *</label>
            <Input 
              placeholder="+91 Mobile Number"
              value={formData.mobile}
              onChange={(e) => onInputChange('mobile', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Website (Optional)</label>
            <Input 
              placeholder="https://yourcompany.com"
              value={formData.website}
              onChange={(e) => onInputChange('website', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => onBack('step1')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => onNext('step3')}>
            Next: Address
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Step 3: Business Address
        </CardTitle>
        <CardDescription>Your office location details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Office Address *</label>
          <Input 
            placeholder="Complete office address"
            value={formData.officeAddress}
            onChange={(e) => onInputChange('officeAddress', e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">City *</label>
            <Input 
              placeholder="City"
              value={formData.city}
              onChange={(e) => onInputChange('city', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">State *</label>
            <Input 
              placeholder="State"
              value={formData.state}
              onChange={(e) => onInputChange('state', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">PIN Code *</label>
            <Input 
              placeholder="PIN Code"
              value={formData.pinCode}
              onChange={(e) => onInputChange('pinCode', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => onBack('step2')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => onNext('step4')}>
            Next: Documents
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep4 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Step 4: Upload Documents
        </CardTitle>
        <CardDescription>Business verification documents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600">Upload PAN Card</p>
            <Button variant="outline" size="sm" className="mt-2">
              Choose File
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600">Upload Aadhaar (Optional)</p>
            <Button variant="outline" size="sm" className="mt-2">
              Choose File
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600">Business Card/Letterhead</p>
            <Button variant="outline" size="sm" className="mt-2">
              Choose File
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600">Business Logo</p>
            <Button variant="outline" size="sm" className="mt-2">
              Choose File
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => onBack('step3')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => onNext('step5')}>
            Next: Use Case
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  if (currentStep === 'step1') return renderStep1();
  if (currentStep === 'step2') return renderStep2();
  if (currentStep === 'step3') return renderStep3();
  if (currentStep === 'step4') return renderStep4();
  
  return null;
};
