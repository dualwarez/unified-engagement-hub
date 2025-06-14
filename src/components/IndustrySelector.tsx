
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, GraduationCap, ShoppingBag, Stethoscope, Wrench, Users, Globe, ArrowRight, LogIn, CheckCircle } from 'lucide-react';
import CountryCurrencySelector from './CountryCurrencySelector';

interface IndustrySelectorProps {
  onSelect: (industry: string) => void;
  onShowAuth: () => void;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({ onSelect, onShowAuth }) => {
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  const industries = [
    { id: 'technology', name: 'Technology', icon: Building2, color: 'bg-blue-500' },
    { id: 'finance', name: 'Finance', icon: Briefcase, color: 'bg-green-500' },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, color: 'bg-red-500' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'bg-purple-500' },
    { id: 'retail', name: 'Retail', icon: ShoppingBag, color: 'bg-orange-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Wrench, color: 'bg-gray-500' },
    { id: 'services', name: 'Services', icon: Users, color: 'bg-indigo-500' },
    { id: 'other', name: 'Other', icon: Globe, color: 'bg-teal-500' }
  ];

  const coreCapabilities = [
    {
      title: 'AI Lead Qualification',
      features: [
        '24×7 qualification agent',
        'Custom prompts & intent detection',
        'Message bump‑ups to catch interest',
        'Smart lead progression triggers'
      ]
    },
    {
      title: 'Automated Follow‑Ups',
      features: [
        'Personalized multi‑step sequences',
        'Auto‑pause on lead response',
        'Response acknowledgement & alerts',
        'Strategic re‑engagement content'
      ]
    },
    {
      title: 'WhatsApp CRM',
      features: [
        'In‑WhatsApp plugin (Chrome extension)',
        'Auto‑reply, daily messages',
        'Call tracking & performance metrics',
        'Contact management & chat history',
        'Support for quick replies'
      ]
    },
    {
      title: 'Lead Management CRM',
      features: [
        'Minimal-data entry via WhatsApp',
        'Customizable sales pipelines',
        'Smart task reminders',
        'Centralized lead database',
        'Advanced analytics & reporting'
      ]
    },
    {
      title: 'Sales Consulting',
      features: [
        'Funnel analysis & optimization',
        'Sales team training & KPIs',
        'Pitch decks, case studies creation',
        'Custom workflows and strategy design'
      ]
    }
  ];

  const handleCountryCurrencySelect = (data: { country: string; currency: string }) => {
    setSelectedCountry(data.country);
    setSelectedCurrency(data.currency);
    setShowCountrySelector(false);
  };

  if (showCountrySelector) {
    return (
      <CountryCurrencySelector
        onSubmit={handleCountryCurrencySelect}
        onBack={() => setShowCountrySelector(false)}
        defaultCountry={`${selectedCountry}|${selectedCurrency}`}
        defaultCurrency={selectedCurrency}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/6bafe339-3d34-45eb-88b3-042f4a5281bf.png" 
              alt="KALASH Logo" 
              className="h-24 w-24 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to KALASH AI Sales Platform
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Automate your sales process with AI-powered lead qualification and WhatsApp CRM
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button onClick={() => setShowCountrySelector(true)} variant="outline">
              {selectedCountry} ({selectedCurrency})
            </Button>
            <Button onClick={onShowAuth} className="bg-green-600 hover:bg-green-700">
              <LogIn className="w-4 h-4 mr-2" />
              Login as B2B User
            </Button>
          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Choose Your Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Card 
                key={industry.id} 
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => onSelect(industry.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${industry.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <Button variant="outline" className="w-full">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Banner */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose KALASH?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industry Specific</h4>
              <p className="text-gray-600 text-sm">Tailored solutions for your industry needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Automation</h4>
              <p className="text-gray-600 text-sm">Never miss a lead with round-the-clock AI</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy Integration</h4>
              <p className="text-gray-600 text-sm">Seamless WhatsApp CRM integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySelector;
