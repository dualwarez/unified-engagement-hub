
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Eye, 
  EyeOff, 
  Upload,
  Building2,
  MapPin,
  User,
  FileText,
  Bot,
  CheckCircle
} from 'lucide-react';

interface AuthFlowProps {
  mode: 'login' | 'register';
  onSuccess: () => void;
  onNavigate: (page: string) => void;
}

const AuthFlow: React.FC<AuthFlowProps> = ({ mode, onSuccess, onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Login fields
    email: '',
    password: '',
    mobile: '',
    rememberMe: false,
    
    // Registration fields
    companyName: '',
    companyType: '',
    gstNumber: '',
    panNumber: '',
    aadhaarNumber: '',
    ownerName: '',
    designation: '',
    website: '',
    officeAddress: '',
    city: '',
    state: '',
    pinCode: '',
    industry: '',
    teamSize: '',
    useCase: []
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Simulate authentication
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  if (mode === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('landing')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <img 
              src="/lovable-uploads/e966dfcc-3fb1-4c3f-9347-c92eb3132e2a.png" 
              alt="KALASH Logo" 
              className="h-16 w-16 rounded-full mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your KALASH account</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile OTP</TabsTrigger>
                </TabsList>
                
                <TabsContent value="email" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="mobile" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                  </div>
                  <Button className="w-full">Send OTP</Button>
                </TabsContent>
              </Tabs>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <Button variant="link" className="text-sm p-0">
                    Forgot Password?
                  </Button>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
                  Sign In
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </Button>
                </div>

                <div className="text-center">
                  <span className="text-sm text-gray-600">Don't have an account? </span>
                  <Button 
                    variant="link" 
                    className="p-0 text-green-600"
                    onClick={() => onNavigate('register')}
                  >
                    Register now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Registration Flow
  const steps = [
    { id: 1, title: 'Company Info', icon: Building2 },
    { id: 2, title: 'Contact Details', icon: User },
    { id: 3, title: 'Address', icon: MapPin },
    { id: 4, title: 'Documents', icon: FileText },
    { id: 5, title: 'Use Case', icon: Bot },
    { id: 6, title: 'Credentials', icon: CheckCircle }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Company Type *</Label>
              <div className="grid grid-cols-2 gap-2">
                {['Startup', 'Agency', 'Franchise', 'Advisor', 'Others'].map((type) => (
                  <Button
                    key={type}
                    variant={formData.companyType === type ? 'default' : 'outline'}
                    onClick={() => handleInputChange('companyType', type)}
                    className="text-sm"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gstNumber">GST Number (Optional)</Label>
                <Input
                  id="gstNumber"
                  placeholder="Enter GST number"
                  value={formData.gstNumber}
                  onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panNumber">PAN Number</Label>
                <Input
                  id="panNumber"
                  placeholder="Enter PAN number"
                  value={formData.panNumber}
                  onChange={(e) => handleInputChange('panNumber', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Owner/Director Name *</Label>
              <Input
                id="ownerName"
                placeholder="Enter full name"
                value={formData.ownerName}
                onChange={(e) => handleInputChange('ownerName', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Official Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  placeholder="Enter designation"
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  placeholder="Enter website URL"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="officeAddress">Office Address *</Label>
              <Input
                id="officeAddress"
                placeholder="Enter complete address"
                value={formData.officeAddress}
                onChange={(e) => handleInputChange('officeAddress', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pinCode">PIN Code *</Label>
                <Input
                  id="pinCode"
                  placeholder="Enter PIN"
                  value={formData.pinCode}
                  onChange={(e) => handleInputChange('pinCode', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Upload Documents</h3>
              <p className="text-gray-600 mb-6">Upload the following documents for verification</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Business Logo', desc: 'For dashboard branding' },
                { label: 'PAN Card', desc: 'Identity verification' },
                { label: 'Aadhaar Card', desc: 'Address verification (optional)' },
                { label: 'Visiting Card / Letterhead', desc: 'Business verification' }
              ].map((doc, index) => (
                <div key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="font-medium text-gray-700">{doc.label}</p>
                  <p className="text-sm text-gray-500">{doc.desc}</p>
                  <Button variant="outline" className="mt-2">Choose File</Button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Choose Your Use Case</h3>
              <p className="text-gray-600">Select the industry for your AI Sales Agent</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'real_estate', title: 'Real Estate', desc: 'Property leads & management' },
                { id: 'insurance', title: 'Insurance & Loans', desc: 'Policy & loan leads' },
                { id: 'edutech', title: 'EdTech', desc: 'Student enrollment' },
                { id: 'broking', title: 'Broking Franchise', desc: 'Investment leads' }
              ].map((industry) => (
                <Card 
                  key={industry.id}
                  className={`cursor-pointer transition-colors ${
                    formData.industry === industry.id ? 'border-green-500 bg-green-50' : 'hover:border-green-300'
                  }`}
                  onClick={() => handleInputChange('industry', industry.id)}
                >
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold">{industry.title}</h4>
                    <p className="text-sm text-gray-600">{industry.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-2">
              <Label>Team Size</Label>
              <div className="grid grid-cols-4 gap-2">
                {['1-5', '6-20', '21-50', '50+'].map((size) => (
                  <Button
                    key={size}
                    variant={formData.teamSize === size ? 'default' : 'outline'}
                    onClick={() => handleInputChange('teamSize', size)}
                    className="text-sm"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Create Login Credentials</h3>
              <p className="text-gray-600">Set up your account access</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">Set Password *</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">AI Agent Activation Options</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">WhatsApp Sender ID Setup</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">CRM Integration</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Lead Source Mapping</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" required />
                  <span className="text-sm">I accept the Terms & Conditions and Privacy Policy *</span>
                </label>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('landing')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <img 
            src="/lovable-uploads/e966dfcc-3fb1-4c3f-9347-c92eb3132e2a.png" 
            alt="KALASH Logo" 
            className="h-16 w-16 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-900">Business Registration</h1>
          <p className="text-gray-600">Complete your profile to activate AI Agent</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= step.id 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs mt-2 text-center">{step.title}</span>
                {index < steps.length - 1 && (
                  <div className={`absolute w-20 h-0.5 mt-5 ml-10 ${
                    currentStep > step.id ? 'bg-green-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step {currentStep}: {steps[currentStep - 1]?.title}</CardTitle>
            <CardDescription>
              Please fill in all required information
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep < 6 ? (
            <Button 
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-green-600 hover:bg-green-700"
            >
              Next Step
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700"
            >
              Complete Registration
            </Button>
          )}
        </div>

        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <Button 
            variant="link" 
            className="p-0 text-green-600"
            onClick={() => onNavigate('login')}
          >
            Sign in here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthFlow;
