import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, Building2, User, MapPin, FileText, Zap, Shield } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountryCurrencySelector from './CountryCurrencySelector';

interface RegistrationData {
  // Step 1: Basic Company Info
  companyName: string;
  companyType: string;
  gstNumber: string;
  panNumber: string;
  aadhaarNumber: string;
  
  // Step 2: Contact Info
  ownerName: string;
  email: string;
  mobile: string;
  designation: string;
  website: string;
  
  // Step 3: Business Address
  address: string;
  city: string;
  state: string;
  pinCode: string;
  
  // Step 4: Documents
  documents: {
    pan: File | null;
    aadhaar: File | null;
    visitingCard: File | null;
    logo: File | null;
  };
  
  // Step 5: Use Case
  useCase: string;
  industry: string;
  teamSize: string;
  
  // Step 6: Credentials
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;

  // Country and Currency
  country: string;
  currency: string;
}

interface RegistrationStepsProps {
  onComplete: (data: RegistrationData) => void;
  onBack: () => void;
}

const RegistrationSteps: React.FC<RegistrationStepsProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<RegistrationData>({
    companyName: '',
    companyType: '',
    gstNumber: '',
    panNumber: '',
    aadhaarNumber: '',
    ownerName: '',
    email: '',
    mobile: '',
    designation: '',
    website: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    documents: {
      pan: null,
      aadhaar: null,
      visitingCard: null,
      logo: null
    },
    useCase: '',
    industry: '',
    teamSize: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    country: '',
    currency: ''
  });

  const totalSteps = 7; // Including country/currency selection

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: keyof RegistrationData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field: keyof RegistrationData['documents'], file: File) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  const handleCountryCurrencySubmit = (data: { country: string; currency: string }) => {
    setFormData(prev => ({
      ...prev,
      country: data.country,
      currency: data.currency
    }));
    handleNext();
  };

  const handleFinalSubmit = () => {
    console.log('Registration Data:', formData);
    onComplete(formData);
  };

  const stepTitles = [
    'Country & Currency',
    'Basic Company Information',
    'Contact Information',
    'Business Address',
    'Upload Documents',
    'Choose Use Case',
    'Create Login Credentials'
  ];

  const stepIcons = [
    Shield,
    Building2,
    User,
    MapPin,
    Upload,
    Zap,
    FileText
  ];

  // Country and Currency Selection (Step 0)
  if (currentStep === 0) {
    return (
      <CountryCurrencySelector
        onSubmit={handleCountryCurrencySubmit}
        onBack={onBack}
        defaultCountry="India|INR"
        defaultCurrency="INR"
      />
    );
  }

  const renderStepContent = () => {
    const StepIcon = stepIcons[currentStep];
    
    switch (currentStep) {
      case 1: // Basic Company Info
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <StepIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Basic Company Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <Label htmlFor="companyType">Company Type *</Label>
                <Select value={formData.companyType} onValueChange={(value) => handleInputChange('companyType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="agency">Agency</SelectItem>
                    <SelectItem value="franchise">Franchise</SelectItem>
                    <SelectItem value="advisor">Advisor</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="gstNumber">GST Number (Optional)</Label>
                <Input
                  id="gstNumber"
                  value={formData.gstNumber}
                  onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  placeholder="Enter GST number"
                />
              </div>
              
              <div>
                <Label htmlFor="panNumber">PAN Number</Label>
                <Input
                  id="panNumber"
                  value={formData.panNumber}
                  onChange={(e) => handleInputChange('panNumber', e.target.value)}
                  placeholder="Enter PAN number"
                />
              </div>
              
              <div>
                <Label htmlFor="aadhaarNumber">Aadhaar Number (Optional)</Label>
                <Input
                  id="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                  placeholder="Enter Aadhaar number"
                />
              </div>
            </div>
          </div>
        );

      case 2: // Contact Info
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <StepIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Contact Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ownerName">Owner/Director Name *</Label>
                <Input
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e.target.value)}
                  placeholder="Enter full name"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Official Email ID *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="Enter mobile number"
                />
              </div>
              
              <div>
                <Label htmlFor="designation">Designation</Label>
                <Input
                  id="designation"
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  placeholder="Enter designation"
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="Enter website URL"
                />
              </div>
            </div>
          </div>
        );

      case 3: // Business Address
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <StepIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Business Address</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="address">Office Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter complete office address"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter city"
                  />
                </div>
                
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="Enter state"
                  />
                </div>
                
                <div>
                  <Label htmlFor="pinCode">PIN Code *</Label>
                  <Input
                    id="pinCode"
                    value={formData.pinCode}
                    onChange={(e) => handleInputChange('pinCode', e.target.value)}
                    placeholder="Enter PIN code"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4: // Upload Documents
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <StepIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Upload Documents</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="panDoc">PAN Document</Label>
                <Input
                  id="panDoc"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => e.target.files && handleFileUpload('pan', e.target.files[0])}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="aadhaarDoc">Aadhaar Document (Optional)</Label>
                <Input
                  id="aadhaarDoc"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => e.target.files && handleFileUpload('aadhaar', e.target.files[0])}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="visitingCard">Visiting Card / Letterhead</Label>
                <Input
                  id="visitingCard"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => e.target.files && handleFileUpload('visitingCard', e.target.files[0])}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="logo">Business Logo</Label>
                <Input
                  id="logo"
                  type="file"
                  accept=".jpg,.jpeg,.png,.svg"
                  onChange={(e) => e.target.files && handleFileUpload('logo', e.target.files[0])}
                />
              </div>
            </div>
          </div>
        );

      case 5: // Choose Use Case
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <StepIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Choose Use Case</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="useCase">AI Sales Agent for:</Label>
                <Select value={formData.useCase} onValueChange={(value) => handleInputChange('useCase', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select use case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="broking-franchise">Broking Franchise</SelectItem>
                    <SelectItem value="insurance-loans">Insurance & Loans</SelectItem>
                    <SelectItem value="edtech-leads">EdTech Leads</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 employees</SelectItem>
                      <SelectItem value="6-20">6-20 employees</SelectItem>
                      <SelectItem value="21-50">21-50 employees</SelectItem>
                      <SelectItem value="51-100">51-100 employees</SelectItem>
                      <SelectItem value="100+">100+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 6: // Create Login Credentials
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <StepIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Create Login Credentials</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm password"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I accept the Terms & Conditions and Privacy Policy
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" onClick={currentStep === 1 ? onBack : handlePrevious}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps - 1}
            </div>
          </div>
          
          <Progress value={(currentStep / (totalSteps - 1)) * 100} className="mb-4" />
          
          <h2 className="text-2xl font-bold text-center mb-2">
            {stepTitles[currentStep]}
          </h2>
        </div>

        <Card>
          <CardContent className="p-8">
            {renderStepContent()}
            
            <div className="flex justify-end mt-8">
              {currentStep === totalSteps - 1 ? (
                <Button onClick={handleFinalSubmit} className="px-8">
                  Complete Registration
                </Button>
              ) : (
                <Button onClick={handleNext} className="px-8">
                  Next
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationSteps;
