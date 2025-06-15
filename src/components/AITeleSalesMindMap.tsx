import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Phone, PhoneCall, BarChart3, Bot, Users, Shield, Briefcase, ChevronRight, ChevronDown, Mic, MessageSquare, Calendar, CreditCard, Database, TrendingUp, Clock, Headphones, Settings, Lock } from 'lucide-react';
const AITeleSalesMindMap: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['core']);
  const toggleSection = (section: string) => {
    setExpandedSections(prev => prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]);
  };
  const mindMapData = {
    core: {
      title: "🧠 Core AI Engine",
      icon: Brain,
      items: ["Natural Language Processing (NLP)", "Sentiment Analysis", "Voice-to-Text & Text-to-Voice", "Conversational AI (LLMs)", "Intent Recognition", "Lead Scoring & Qualification"]
    },
    inbound: {
      title: "📞 Inbound Calls",
      icon: Phone,
      items: ["IVR with AI Routing", "Query Recognition", "Language Detection", "Smart Call Transfer", "AI Chat/Voicebot Handling", "FAQs & Complaint Resolution", "Appointment Booking", "CRM Auto-Fill from Call", "Escalation to Human (Fallback Logic)", "Sentiment-Driven Prioritization"]
    },
    outbound: {
      title: "📣 Outbound Calls",
      icon: PhoneCall,
      items: ["Predictive Dialer with AI Targeting", "Warm/Cold Lead Segmentation", "Automated Product Pitch", "Personalized Follow-Up Scripts", "Survey & Feedback Collection", "Voice Drop (Pre-recorded Messages)", "Lead Status Tagging (Hot/Warm/Cold/Not Interested)"]
    },
    integration: {
      title: "🧩 Integration Modules",
      icon: Database,
      items: ["CRM (HubSpot, Zoho, Salesforce)", "WhatsApp, SMS, Email Sync", "Calendar/Booking System", "Payment Gateways (for upsell/closing)", "Ticketing System (Freshdesk, Zendesk)"]
    },
    analytics: {
      title: "📊 Analytics & Reporting",
      icon: BarChart3,
      items: ["Call Duration & Response Time", "Conversion Rate & Funnel Drop-offs", "Call Sentiment Heatmap", "Agent Performance Score", "AI Bot Accuracy Reports", "Customer Satisfaction Score (CSAT)", "First Call Resolution (FCR)"]
    },
    automation: {
      title: "🤖 Automation Features",
      icon: Bot,
      items: ["Auto-Follow-ups (Voice, SMS, WhatsApp)", "Real-time Note-taking & Summary", "Intelligent Callback Scheduling", "Smart Script Suggestions (on-call prompts)", "Data Capture from Conversations", "Multilingual Capabilities"]
    },
    users: {
      title: "👥 User Roles",
      icon: Users,
      items: ["Sales Agents: Live Support with AI Assist", "Dashboard View: Calls, Follow-ups, Tasks", "Supervisors/Managers: Real-time Monitoring", "Training via Call Insights", "AI Bot Admin: Intent Library Management", "Prompt & Script Editing", "Trigger Rules Setup"]
    },
    security: {
      title: "🔐 Security & Compliance",
      icon: Shield,
      items: ["Call Recording & Consent Capture", "Data Encryption (GDPR, HIPAA)", "Call Masking/Anonymization", "Role-based Access Control (RBAC)"]
    },
    useCases: {
      title: "💼 Use Cases",
      icon: Briefcase,
      items: ["Product Sales", "Service Renewals & Upsell", "Customer Support & Ticket Handling", "Franchise/Dealer Onboarding", "Feedback & Survey Campaigns", "Missed Call Callbacks"]
    }
  };
  const SectionCard = ({
    sectionKey,
    section
  }: {
    sectionKey: string;
    section: any;
  }) => {
    const isExpanded = expandedSections.includes(sectionKey);
    const IconComponent = section.icon;
    return <Card className="mb-4 hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection(sectionKey)}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <IconComponent className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-lg">{section.title}</span>
            </div>
            {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
          </CardTitle>
        </CardHeader>
        
        {isExpanded && <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {section.items.map((item: string, index: number) => <div key={index} className="flex items-center gap-2 p-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>)}
            </div>
          </CardContent>}
      </Card>;
  };
  return <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🌐 AI-Based Tele-Sales & Service
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          <em>(Inbound & Outbound Combined)</em>
        </p>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Comprehensive automation and efficiency-driven system for modern telecommunications and sales operations
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Feature Categories</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="text-center mb-6">
            <Button onClick={() => setExpandedSections(Object.keys(mindMapData))} variant="outline" className="mr-3">
              Expand All
            </Button>
            <Button onClick={() => setExpandedSections([])} variant="outline">
              Collapse All
            </Button>
          </div>

          {Object.entries(mindMapData).map(([key, section]) => <SectionCard key={key} sectionKey={key} section={section} />)}
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Voice Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time speech recognition</li>
                  <li>• Emotional tone analysis</li>
                  <li>• Multi-language support</li>
                  <li>• Voice quality optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Smart Conversations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Context-aware responses</li>
                  <li>• Dynamic script adaptation</li>
                  <li>• Objection handling</li>
                  <li>• Follow-up suggestions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time dashboards</li>
                  <li>• Predictive insights</li>
                  <li>• ROI calculations</li>
                  <li>• Trend analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="implementation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Roadmap</CardTitle>
              <CardDescription>Step-by-step guide to deploy AI-based tele-sales system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-100 text-blue-800">Phase 1</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">Foundation Setup</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• CRM integration and data migration</li>
                      <li>• Basic IVR and call routing setup</li>
                      <li>• Agent training and onboarding</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge className="bg-green-100 text-green-800">Phase 2</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">AI Enhancement</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Deploy conversational AI bots</li>
                      <li>• Implement sentiment analysis</li>
                      <li>• Set up automated follow-ups</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge className="bg-purple-100 text-purple-800">Phase 3</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Analytics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Advanced reporting and dashboards</li>
                      <li>• Predictive lead scoring</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Sales Process?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get started with our AI-powered tele-sales solution and experience the future of customer engagement
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Request Demo
          </Button>
          
        </div>
      </div>
    </div>;
};
export default AITeleSalesMindMap;