
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Car, 
  Home, 
  Utensils, 
  Briefcase, 
  ShoppingBag 
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to BusinessPro</h1>
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
