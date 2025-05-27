
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Car, 
  Home, 
  Utensils, 
  Briefcase, 
  ShoppingBag,
  LogIn 
} from 'lucide-react';

interface IndustrySelectorProps {
  onSelect: (industry: string) => void;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({ onSelect }) => {
  const industries = [
    {
      name: 'Real Estate',
      icon: Home,
      description: 'Property sales, rentals, and management',
      color: 'bg-blue-500'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Medical practices, clinics, and wellness',
      color: 'bg-red-500'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Schools, tutoring, and training centers',
      color: 'bg-green-500'
    },
    {
      name: 'Automotive',
      icon: Car,
      description: 'Car dealerships and service centers',
      color: 'bg-purple-500'
    },
    {
      name: 'Construction',
      icon: Building2,
      description: 'Contractors and construction companies',
      color: 'bg-orange-500'
    },
    {
      name: 'Restaurant',
      icon: Utensils,
      description: 'Food service and hospitality',
      color: 'bg-yellow-500'
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      description: 'Legal, consulting, and business services',
      color: 'bg-indigo-500'
    },
    {
      name: 'Retail',
      icon: ShoppingBag,
      description: 'Stores and e-commerce businesses',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Header with Login Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/652b541b-790b-47ac-a157-d2fefd4e719d.png" 
              alt="Business Pro Logo" 
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold text-blue-600">Business Pro</h1>
          </div>
          <Button className="text-sm">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Business Pro</h1>
          <p className="text-xl text-gray-600 mb-2">Choose your industry to get started</p>
          <p className="text-gray-500">We'll customize your experience based on your business type</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-300"
              onClick={() => onSelect(industry.name)}
            >
              <CardHeader className="text-center pb-2">
                <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-sm">{industry.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscription Plans Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600">Select the perfect plan for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard Plan */}
            <Card className="relative border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Standard</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-2">$29/mo</div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Up to 500 leads per month
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Basic CRM features
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Email marketing
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Basic analytics
                  </div>
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Value Plan */}
            <Card className="relative border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Value</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-2">$79/mo</div>
                <CardDescription>Best value for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Up to 2,000 leads per month
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Advanced CRM features
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Email + SMS marketing
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Advanced analytics
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    WhatsApp integration
                  </div>
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Pro</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-2">$149/mo</div>
                <CardDescription>For enterprise-level businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Unlimited leads
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Full CRM suite
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Omnichannel marketing
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Custom analytics & reports
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    API access & integrations
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Priority support
                  </div>
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Don't see your industry? You can customize settings later in the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrySelector;
