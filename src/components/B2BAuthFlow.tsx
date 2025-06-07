import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, LogIn, UserPlus, Phone, CheckCircle } from 'lucide-react';
import RegistrationSteps from './RegistrationSteps';

interface LoginData {
  email: string;
  password: string;
  mobile: string;
  otp: string;
  rememberMe: boolean;
  companyName: string;
  companyType: string;
  gstNumber: string;
  panNumber: string;
  aadhaarNumber: string;
  ownerName: string;
  designation: string;
  website: string;
  officeAddress: string;
  city: string;
  state: string;
  pinCode: string;
  useCase: string;
  industry: string;
  teamSize: string;
}

interface B2BAuthFlowProps {
  onBack: () => void;
  onComplete: (userData: LoginData) => void;
}

const B2BAuthFlow: React.FC<B2BAuthFlowProps> = ({ onBack, onComplete }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('email');
  const [showOTP, setShowOTP] = useState(false);
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
    mobile: '',
    otp: '',
    rememberMe: false,
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
    teamSize: ''
  });

  const handleInputChange = (field: keyof LoginData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = () => {
    console.log('Login data:', formData);
    onComplete(formData);
  };

  const handleSendOTP = () => {
    setShowOTP(true);
    console.log('OTP sent to:', formData.mobile);
  };

  const handleVerifyOTP = () => {
    console.log('OTP verified');
    onComplete(formData);
  };

  if (showRegistration) {
    return (
      <RegistrationSteps 
        onComplete={(data) => {
          console.log('Registration completed:', data);
          onComplete({
            ...formData,
            email: data.email,
            mobile: data.mobile,
            companyName: data.companyName,
            companyType: data.companyType,
            gstNumber: data.gstNumber,
            panNumber: data.panNumber,
            aadhaarNumber: data.aadhaarNumber,
            ownerName: data.ownerName,
            designation: data.designation,
            website: data.website,
            officeAddress: data.address,
            city: data.city,
            state: data.state,
            pinCode: data.pinCode,
            useCase: data.useCase,
            industry: data.industry,
            teamSize: data.teamSize
          });
        }}
        onBack={() => setShowRegistration(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industry Selection
          </Button>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center space-y-4 pb-6">
            <img 
              src="/lovable-uploads/6bafe339-3d34-45eb-88b3-042f4a5281bf.png" 
              alt="KALASH PLATFORM Logo" 
              className="object-contain mx-auto"
              style={{ width: '100px', height: '100px' }}
            />
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
              <CardDescription className="text-gray-600">Sign in to your B2B account</CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <Tabs defaultValue={loginMethod} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email" onClick={() => setLoginMethod('email')}>Email</TabsTrigger>
                <TabsTrigger value="mobile" onClick={() => setLoginMethod('mobile')}>Mobile</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) => handleInputChange('rememberMe', checked)}
                      />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                  </div>
                  
                  <Button className="w-full" onClick={handleLogin}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login with Email
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="mobile">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                  </div>
                  
                  {showOTP ? (
                    <div>
                      <Label htmlFor="otp">OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter OTP"
                        value={formData.otp}
                        onChange={(e) => handleInputChange('otp', e.target.value)}
                      />
                      <Button className="w-full mt-4" onClick={handleVerifyOTP}>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Verify OTP
                      </Button>
                    </div>
                  ) : (
                    <Button className="w-full" onClick={handleSendOTP}>
                      <Phone className="w-4 h-4 mr-2" />
                      Send OTP
                    </Button>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-4">
              <Button variant="link" onClick={() => setShowRegistration(true)}>
                <UserPlus className="w-4 h-4 mr-2" />
                Create a B2B Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default B2BAuthFlow;
