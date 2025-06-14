import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  TrendingUp, 
  GraduationCap, 
  Shield, 
  DollarSign, 
  Home,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  Brain,
  BarChart3,
  Users,
  Bot,
  Calendar
} from 'lucide-react';
import AITeleSalesMindMap from './AITeleSalesMindMap';
import FollowUpMeetingMindMap from './FollowUpMeetingMindMap';

interface IndustrySelectorProps {
  onSelect: (industry: string) => void;
  onShowAuth?: () => void;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({ onSelect, onShowAuth }) => {
  const [selectedTab, setSelectedTab] = useState('industries');

  const industries = [
    {
      name: 'Real Estate',
      icon: Home,
      description: 'Property sales, rentals, and real estate management',
      benefits: ['Lead qualification', 'Property showcasing', 'Client follow-ups'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Stock Broking',
      icon: TrendingUp,
      description: 'Investment advisory and stock trading services',
      benefits: ['Market insights', 'Portfolio management', 'Risk assessment'],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Broking Franchise',
      icon: Building2,
      description: 'Franchise opportunities and business expansion',
      benefits: ['Franchise matching', 'Business planning', 'Growth strategies'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Insurance',
      icon: Shield,
      description: 'Life, health, and general insurance products',
      benefits: ['Policy recommendations', 'Claims processing', 'Risk evaluation'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Loans',
      icon: DollarSign,
      description: 'Personal, business, and mortgage lending',
      benefits: ['Loan eligibility', 'Quick approvals', 'Competitive rates'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Edutech',
      icon: GraduationCap,
      description: 'Educational technology and online learning',
      benefits: ['Course recommendations', 'Learning analytics', 'Progress tracking'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const coreCapabilities = [
    {
      category: "AI Lead Qualification",
      icon: Brain,
      features: [
        "24×7 qualification agent",
        "Custom prompts & intent detection", 
        "Message bump‑ups to catch interest",
        "Smart lead progression triggers"
      ]
    },
    {
      category: "Automated Follow‑Ups",
      icon: MessageSquare,
      features: [
        "Personalized multi‑step sequences",
        "Auto‑pause on lead response",
        "Response acknowledgement & alerts", 
        "Strategic re‑engagement content"
      ]
    },
    {
      category: "WhatsApp CRM",
      icon: Phone,
      features: [
        "In‑WhatsApp plugin (Chrome extension)",
        "Auto‑reply, daily messages",
        "Call tracking & performance metrics",
        "Contact management & chat history",
        "Support for quick replies"
      ]
    },
    {
      category: "Lead Management CRM",
      icon: Users,
      features: [
        "Minimal-data entry via WhatsApp",
        "Customizable sales pipelines",
        "Smart task reminders",
        "Centralized lead database",
        "Advanced analytics & reporting"
      ]
    },
    {
      category: "Sales Consulting",
      icon: BarChart3,
      features: [
        "Funnel analysis & optimization",
        "Sales team training & KPIs",
        "Pitch decks, case studies creation",
        "Custom workflows and strategy design"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/6bafe339-3d34-45eb-88b3-042f4a5281bf.png" 
              alt="KALASH Logo" 
              className="h-20 w-20 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">KALASH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered lead generation and customer relationship management platform
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="industries">Select Industry</TabsTrigger>
            <TabsTrigger value="capabilities">Core Capabilities</TabsTrigger>
            <TabsTrigger value="mindmap">AI Tele-Sales Map</TabsTrigger>
            <TabsTrigger value="followup">Follow-Up Process</TabsTrigger>
          </TabsList>

          <TabsContent value="industries" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Industry</h2>
              <p className="text-gray-600">Select your business sector to get started with customized solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card 
                  key={industry.name} 
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200"
                  onClick={() => onSelect(industry.name)}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {industry.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full group-hover:bg-blue-600 transition-colors">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="capabilities" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
              <p className="text-gray-600">Comprehensive AI-powered features for your business growth</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreCapabilities.map((capability, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <capability.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      {capability.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI-powered platform to accelerate their growth and streamline operations.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setSelectedTab('industries')}
              >
                Choose Your Industry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="mindmap" className="space-y-8">
            <AITeleSalesMindMap />
          </TabsContent>

          <TabsContent value="followup" className="space-y-8">
            <FollowUpMeetingMindMap />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndustrySelector;
