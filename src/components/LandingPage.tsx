
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  Building2, 
  Phone, 
  Mail, 
  TrendingUp, 
  Users, 
  Shield,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <nav className="bg-white/90 backdrop-blur-sm border-b border-green-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e966dfcc-3fb1-4c3f-9347-c92eb3132e2a.png" 
              alt="KALASH Logo" 
              className="h-16 w-16 rounded-full"
            />
            <h1 className="text-2xl font-bold text-green-700">KALASH</h1>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('login')}
              className="text-green-700 hover:text-green-800"
            >
              Login
            </Button>
            <Button 
              onClick={() => onNavigate('register')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Register Your Business
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Register Your Business &<br />
            <span className="text-green-600">Activate AI Agent</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with our intelligent AI agent that captures leads, 
            schedules appointments, and nurtures prospects automatically.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Button 
              size="lg" 
              onClick={() => onNavigate('login')}
              variant="outline"
              className="px-8 py-4 text-lg border-green-600 text-green-600 hover:bg-green-50"
            >
              Login as B2B User
            </Button>
            <Button 
              size="lg" 
              onClick={() => onNavigate('register')}
              className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white"
            >
              Register Your Business
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="px-8 py-4 text-lg text-green-600 hover:text-green-700"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Bot className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">AI Sales Agent</h3>
              <p className="text-gray-600 text-sm">Intelligent automation for lead qualification and nurturing</p>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Building2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Industry</h3>
              <p className="text-gray-600 text-sm">Solutions for all service industries and business types</p>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Growth Analytics</h3>
              <p className="text-gray-600 text-sm">Real-time insights and performance tracking</p>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security and data protection</p>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl p-8 mb-16 border border-green-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Choose Your Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Real Estate', desc: 'Property leads & client management', icon: Building2 },
              { title: 'Insurance & Loans', desc: 'Policy leads & customer nurturing', icon: Shield },
              { title: 'EdTech', desc: 'Student enrollment & course promotion', icon: Users },
              { title: 'Broking Franchise', desc: 'Investment leads & portfolio management', icon: TrendingUp }
            ].map((industry, index) => (
              <Card key={index} className="border-gray-200 hover:border-green-300 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <industry.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of businesses already using KALASH AI Agent
          </p>
          <Button 
            size="lg" 
            onClick={() => onNavigate('register')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            Get Started Now - It's Free!
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
