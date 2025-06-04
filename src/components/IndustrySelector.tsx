
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
  LogIn,
  Plane,
  Music,
  Palette,
  Camera,
  Dumbbell,
  Leaf,
  Users,
  Laptop,
  Truck,
  Settings,
  Hammer,
  Shield,
  DollarSign,
  Clock,
  Phone,
  MapPin,
  Shirt,
  Coffee
} from 'lucide-react';

interface IndustrySelectorProps {
  onSelect: (industry: string) => void;
  onShowAuth: () => void;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({ onSelect, onShowAuth }) => {
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
    },
    {
      name: 'Travel & Tourism',
      icon: Plane,
      description: 'Travel agencies and tour operators',
      color: 'bg-teal-500'
    },
    {
      name: 'Entertainment',
      icon: Music,
      description: 'Media, events, and entertainment',
      color: 'bg-purple-600'
    },
    {
      name: 'Creative Services',
      icon: Palette,
      description: 'Design, marketing, and creative agencies',
      color: 'bg-rose-500'
    },
    {
      name: 'Photography',
      icon: Camera,
      description: 'Photography and videography services',
      color: 'bg-gray-600'
    },
    {
      name: 'Fitness & Sports',
      icon: Dumbbell,
      description: 'Gyms, fitness centers, and sports',
      color: 'bg-emerald-500'
    },
    {
      name: 'Beauty & Wellness',
      icon: Leaf,
      description: 'Salons, spas, and wellness centers',
      color: 'bg-lime-500'
    },
    {
      name: 'Non-Profit',
      icon: Users,
      description: 'NGOs and charitable organizations',
      color: 'bg-cyan-500'
    },
    {
      name: 'Technology',
      icon: Laptop,
      description: 'IT services and software companies',
      color: 'bg-blue-600'
    },
    {
      name: 'Logistics',
      icon: Truck,
      description: 'Transportation and logistics services',
      color: 'bg-amber-600'
    },
    {
      name: 'Manufacturing',
      icon: Settings,
      description: 'Manufacturing and industrial services',
      color: 'bg-slate-600'
    },
    {
      name: 'Home Services',
      icon: Hammer,
      description: 'Repair, maintenance, and home improvement',
      color: 'bg-orange-600'
    },
    {
      name: 'Insurance',
      icon: Shield,
      description: 'Insurance agencies and brokers',
      color: 'bg-blue-700'
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Banking, loans, and financial advisors',
      color: 'bg-green-600'
    },
    {
      name: 'Personal Services',
      icon: Clock,
      description: 'Personal assistance and lifestyle services',
      color: 'bg-violet-500'
    },
    {
      name: 'Telecommunications',
      icon: Phone,
      description: 'Telecom and communication services',
      color: 'bg-blue-800'
    },
    {
      name: 'Local Services',
      icon: MapPin,
      description: 'Local community and municipal services',
      color: 'bg-red-600'
    },
    {
      name: 'Fashion & Apparel',
      icon: Shirt,
      description: 'Clothing stores and fashion brands',
      color: 'bg-pink-600'
    },
    {
      name: 'Cafes & Coffee Shops',
      icon: Coffee,
      description: 'Coffee shops and beverage services',
      color: 'bg-amber-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header with Login Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b583aa5c-7bf8-4a13-b413-3f8b3437278d.png" 
              alt="KALASH Logo" 
              className="h-32 w-32"
            />
          </div>
          <div className="flex gap-3">
            <Button onClick={onShowAuth} className="text-sm">
              <LogIn className="w-4 h-4 mr-2" />
              Login as B2B User
            </Button>
            <Button onClick={onShowAuth} variant="outline" className="text-sm">
              Register Your Business
            </Button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Register your business & activate AI Agent</h1>
          <p className="text-xl text-gray-600 mb-2">Choose your industry to get started</p>
          <p className="text-gray-500">We'll customize your AI sales agent based on your business type</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-green-300"
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
            <Card className="relative border-2 hover:border-green-300 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Standard</CardTitle>
                <div className="text-4xl font-bold text-green-600 mt-2">$36/mo</div>
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
            <Card className="relative border-2 border-green-500 hover:border-green-600 transition-all duration-300 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Value</CardTitle>
                <div className="text-4xl font-bold text-green-600 mt-2">$180/mo</div>
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
            <Card className="relative border-2 hover:border-green-300 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Pro</CardTitle>
                <div className="text-4xl font-bold text-green-600 mt-2">$540/mo</div>
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
          <Button onClick={onShowAuth} className="mt-4" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustrySelector;
