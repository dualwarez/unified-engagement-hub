
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Building2, 
  Phone, 
  Calendar,
  Target,
  CheckCircle,
  ArrowRight,
  Bot,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
  onRegister: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b583aa5c-7bf8-4a13-b413-3f8b3437278d.png" 
                alt="KALASH Logo" 
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-2xl font-bold text-green-600">KALASH</h1>
                <p className="text-xs text-gray-600">AI Sales Agent Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={onLogin}>
                Login as B2B User
              </Button>
              <Button onClick={onRegister} className="bg-green-600 hover:bg-green-700">
                Register Your Business
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b583aa5c-7bf8-4a13-b413-3f8b3437278d.png" 
              alt="KALASH Logo" 
              className="h-32 w-32 mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Register your business & 
              <span className="text-green-600"> activate AI Agent</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your sales process with our intelligent AI agent that qualifies leads, 
              books appointments, and nurtures prospects 24/7.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={onLogin}
              className="text-lg px-8 py-4"
              variant="outline"
            >
              <Users className="w-5 h-5 mr-2" />
              Login as B2B User
            </Button>
            <Button 
              size="lg" 
              onClick={onRegister}
              className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Register Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* AI Agent Preview */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Bot className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your AI Sales Agent is Ready</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageSquare className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold">WhatsApp Integration</h4>
                <p className="text-sm text-gray-600">Instant lead response via WhatsApp</p>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold">Smart Booking</h4>
                <p className="text-sm text-gray-600">Automated appointment scheduling</p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-semibold">Lead Qualification</h4>
                <p className="text-sm text-gray-600">AI-powered lead scoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete B2B Sales Automation Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lead capture to conversion, manage your entire sales pipeline with AI-powered automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-green-500 transition-colors">
              <CardHeader>
                <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Real Estate</CardTitle>
                <CardDescription>Property sales & rental automation</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Broking Franchise</CardTitle>
                <CardDescription>Investment & trading lead management</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Insurance & Loans</CardTitle>
                <CardDescription>Financial services automation</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>EdTech Leads</CardTitle>
                <CardDescription>Education & training enrollment</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 6-Step Registration Process
            </h2>
            <p className="text-xl text-gray-600">Get your AI agent up and running in minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Company Info", desc: "Basic business details & GST" },
              { step: 2, title: "Contact Details", desc: "Owner info & official email" },
              { step: 3, title: "Business Address", desc: "Office location & PIN code" },
              { step: 4, title: "Upload Documents", desc: "PAN, business cards & logo" },
              { step: 5, title: "Choose Use Case", desc: "Select industry & team size" },
              { step: 6, title: "Create Credentials", desc: "Set password & accept T&C" }
            ].map((item) => (
              <Card key={item.step} className="relative">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="pt-4">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using AI to automate their sales pipeline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onRegister}
              className="text-lg px-8 py-4 bg-white text-green-600 hover:bg-gray-100"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Registration
            </Button>
            <Button 
              size="lg" 
              onClick={onLogin}
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-green-600"
            >
              Login to Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b583aa5c-7bf8-4a13-b413-3f8b3437278d.png" 
                alt="KALASH Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-lg font-bold text-green-400">KALASH</h3>
                <p className="text-xs text-gray-400">AI Sales Agent Platform</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">© 2024 KALASH. All rights reserved.</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-xs text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-xs text-gray-400 hover:text-white">Terms & Conditions</a>
                <a href="#" className="text-xs text-gray-400 hover:text-white">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
