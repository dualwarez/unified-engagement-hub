
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Lock, User, Building2 } from 'lucide-react';
import RegistrationSteps from './RegistrationSteps';

interface B2BAuthFlowProps {
  onBack: () => void;
  onComplete: (userData: any) => void;
}

const B2BAuthFlow: React.FC<B2BAuthFlowProps> = ({ onBack, onComplete }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Simulate login success
    onComplete({
      email: loginData.email,
      type: 'login'
    });
  };

  const handleRegistrationComplete = (data: any) => {
    console.log('Registration completed:', data);
    onComplete({
      ...data,
      type: 'registration'
    });
  };

  if (showRegistration) {
    return (
      <RegistrationSteps 
        onComplete={handleRegistrationComplete}
        onBack={() => setShowRegistration(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Button variant="outline" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industry Selection
          </Button>
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/6bafe339-3d34-45eb-88b3-042f4a5281bf.png" 
              alt="KALASH Logo" 
              className="h-16 w-16 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            B2B Access Portal
          </h1>
          <p className="text-gray-600">
            Login or register your business account
          </p>
        </div>

        <Card>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Login to Your Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-sm">
                      Forgot your password?
                    </Button>
                  </div>
                </form>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="register">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Register Your Business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Get started with our comprehensive business registration process. 
                    We'll guide you through setting up your account step by step.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">What you'll need:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Business information & documents</li>
                      <li>• Contact details</li>
                      <li>• Industry & use case selection</li>
                      <li>• Secure login credentials</li>
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={() => setShowRegistration(true)}
                    className="w-full"
                  >
                    Start Registration Process
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By registering, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default B2BAuthFlow;
