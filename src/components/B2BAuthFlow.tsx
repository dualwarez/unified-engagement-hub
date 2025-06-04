
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Eye, 
  EyeOff, 
  Upload, 
  Building2, 
  User, 
  MapPin, 
  FileText, 
  Shield, 
  CheckCircle,
  Users,
  Settings,
  Target,
  MessageSquare,
  Calendar,
  TrendingUp
} from 'lucide-react';

interface B2BAuthFlowProps {
  onBack: () => void;
  onComplete: (data: any) => void;
}

const B2BAuthFlow: React.FC<B2BAuthFlowProps> = ({ onBack, onComplete }) => {
  const [currentStep, setCurrentStep] = useState('login'); // 'login', 'register', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'complete'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Login data
    email: '',
    password: '',
    mobile: '',
    rememberMe: false,
    
    // Registration data
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
    useCase: '',
    industry: '',
    teamSize: '',
    agentGoals: []
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderLogin = () => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <img 
          src="/lovable-uploads/b583aa5c-7bf8-4a13-b413-3f8b3437278d.png" 
          alt="KALASH Logo" 
          className="h-20 w-20 mx-auto mb-4"
        />
        <CardTitle className="text-2xl">Login to Your Account</CardTitle>
        <CardDescription>Access your AI sales agent dashboard</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                type="email" 
                placeholder="your@company.com"
                className="pl-10"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3 h-4 w-4 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
              />
              Remember me
            </label>
            <button className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>
        </div>

        <Button className="w-full" onClick={() => onComplete(formData)}>
          Login
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">Or login with</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Button variant="outline" className="text-sm">
              Google
            </Button>
            <Button variant="outline" className="text-sm">
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              className="text-blue-600 hover:underline"
              onClick={() => setCurrentStep('register')}
            >
              Register Your Business
            </button>
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">Or use Mobile OTP (India)</p>
          <div className="flex gap-2 mt-2">
            <Input 
              placeholder="+91 Mobile Number"
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
            />
            <Button variant="outline">Send OTP</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
              onChange={(e) => handleInputChange('companyName', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Company Type *</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.companyType}
              onChange={(e) => handleInputChange('companyType', e.target.value)}
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
              onChange={(e) => handleInputChange('gstNumber', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">PAN Number</label>
            <Input 
              placeholder="PAN Number"
              value={formData.panNumber}
              onChange={(e) => handleInputChange('panNumber', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => setCurrentStep('step2')}>
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
              onChange={(e) => handleInputChange('ownerName', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Designation *</label>
            <Input 
              placeholder="CEO, Director, Manager"
              value={formData.designation}
              onChange={(e) => handleInputChange('designation', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Official Email *</label>
            <Input 
              type="email"
              placeholder="business@company.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Mobile Number *</label>
            <Input 
              placeholder="+91 Mobile Number"
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Website (Optional)</label>
            <Input 
              placeholder="https://yourcompany.com"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep('step1')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => setCurrentStep('step3')}>
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
            onChange={(e) => handleInputChange('officeAddress', e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">City *</label>
            <Input 
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">State *</label>
            <Input 
              placeholder="State"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">PIN Code *</label>
            <Input 
              placeholder="PIN Code"
              value={formData.pinCode}
              onChange={(e) => handleInputChange('pinCode', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep('step2')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => setCurrentStep('step4')}>
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
          <FileText className="h-5 w-5" />
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
          <Button variant="outline" onClick={() => setCurrentStep('step3')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => setCurrentStep('step5')}>
            Next: Use Case
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep5 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Step 5: Choose Your Use Case
        </CardTitle>
        <CardDescription>How will you use your AI sales agent?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className={`cursor-pointer border-2 ${formData.useCase === 'real-estate' ? 'border-green-500' : 'border-gray-200'}`}
                onClick={() => handleInputChange('useCase', 'real-estate')}>
            <CardContent className="p-4 text-center">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h3 className="font-medium">Real Estate</h3>
              <p className="text-sm text-gray-600">Property sales & rentals</p>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer border-2 ${formData.useCase === 'broking' ? 'border-green-500' : 'border-gray-200'}`}
                onClick={() => handleInputChange('useCase', 'broking')}>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <h3 className="font-medium">Broking Franchise</h3>
              <p className="text-sm text-gray-600">Investment & trading</p>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer border-2 ${formData.useCase === 'insurance' ? 'border-green-500' : 'border-gray-200'}`}
                onClick={() => handleInputChange('useCase', 'insurance')}>
            <CardContent className="p-4 text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <h3 className="font-medium">Insurance & Loans</h3>
              <p className="text-sm text-gray-600">Financial services</p>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer border-2 ${formData.useCase === 'edtech' ? 'border-green-500' : 'border-gray-200'}`}
                onClick={() => handleInputChange('useCase', 'edtech')}>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <h3 className="font-medium">EdTech Leads</h3>
              <p className="text-sm text-gray-600">Education & training</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Team Size</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.teamSize}
              onChange={(e) => handleInputChange('teamSize', e.target.value)}
            >
              <option value="">Select Team Size</option>
              <option value="1-5">1-5 members</option>
              <option value="6-20">6-20 members</option>
              <option value="21-50">21-50 members</option>
              <option value="50+">50+ members</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Primary Industry</label>
            <Input 
              placeholder="e.g., Real Estate, Healthcare"
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep('step4')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => setCurrentStep('step6')}>
            Next: Credentials
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep6 = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Step 6: Create Login Credentials
        </CardTitle>
        <CardDescription>Set up your account security</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Password *</label>
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 h-4 w-4 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">AI Agent Goals (Select multiple):</h4>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: 'qualification', label: 'Lead Qualification', icon: CheckCircle },
              { id: 'booking', label: 'Appointment Booking', icon: Calendar },
              { id: 'nurturing', label: 'Follow-up Nurturing', icon: MessageSquare }
            ].map((goal) => (
              <label key={goal.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input 
                  type="checkbox" 
                  className="mr-3"
                  checked={formData.agentGoals.includes(goal.id)}
                  onChange={(e) => {
                    const goals = formData.agentGoals;
                    if (e.target.checked) {
                      handleInputChange('agentGoals', [...goals, goal.id]);
                    } else {
                      handleInputChange('agentGoals', goals.filter(g => g !== goal.id));
                    }
                  }}
                />
                <goal.icon className="h-4 w-4 mr-2 text-green-500" />
                <span>{goal.label}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-start text-sm">
            <input type="checkbox" className="mr-2 mt-1" required />
            <span>I accept the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></span>
          </label>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep('step5')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={() => setCurrentStep('complete')}>
            Complete Registration
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderComplete = () => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
        <CardTitle className="text-2xl text-green-600">Registration Complete!</CardTitle>
        <CardDescription>Your AI sales agent is being set up</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="bg-green-100 text-green-800">Account Created</Badge>
          <p className="text-sm text-gray-600">
            Welcome to KALASH! Your business profile has been created successfully.
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">Next Steps:</h4>
          <ul className="text-sm text-gray-600 space-y-1 text-left">
            <li>✓ Email verification sent</li>
            <li>• WhatsApp Sender ID setup</li>
            <li>• CRM integration (optional)</li>
            <li>• AI Agent configuration</li>
          </ul>
        </div>
        
        <Button className="w-full" onClick={() => onComplete(formData)}>
          Access Dashboard
        </Button>
      </CardContent>
    </Card>
  );

  const renderRegisterStart = () => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <img 
          src="/lovable-uploads/b583aa5c-7bf8-4a13-b413-3f8b3437278d.png" 
          alt="KALASH Logo" 
          className="h-20 w-20 mx-auto mb-4"
        />
        <CardTitle className="text-2xl">Register Your Business</CardTitle>
        <CardDescription>Start your AI sales agent journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">Complete the 6-step registration process</p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="w-8 h-2 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <Button className="w-full" onClick={() => setCurrentStep('step1')}>
          Start Registration
        </Button>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button 
              className="text-blue-600 hover:underline"
              onClick={() => setCurrentStep('login')}
            >
              Login here
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full">
        {currentStep === 'login' && renderLogin()}
        {currentStep === 'register' && renderRegisterStart()}
        {currentStep === 'step1' && renderStep1()}
        {currentStep === 'step2' && renderStep2()}
        {currentStep === 'step3' && renderStep3()}
        {currentStep === 'step4' && renderStep4()}
        {currentStep === 'step5' && renderStep5()}
        {currentStep === 'step6' && renderStep6()}
        {currentStep === 'complete' && renderComplete()}
      </div>
    </div>
  );
};

export default B2BAuthFlow;
