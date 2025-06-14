import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  TrendingUp, 
  Eye, 
  MousePointer, 
  DollarSign, 
  Play, 
  Pause, 
  Edit, 
  PlusCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Sparkles,
  Activity,
  Bot,
  Target
} from 'lucide-react';
import CampaignCreationForm from './CampaignCreationForm';
import PerformanceMonitor from './PerformanceMonitor';
import AutomatedMarketingSystem from './AutomatedMarketingSystem';

interface MarketingModuleProps {
  industry: string;
  currency: string;
}

const MarketingModule: React.FC<MarketingModuleProps> = ({ industry }) => {
  const [activeTab, setActiveTab] = useState('campaigns');

  const campaignData = [
    { name: 'Facebook Ads', impressions: 15420, clicks: 234, conversions: 12, spend: 450 },
    { name: 'Google Ads', impressions: 8930, clicks: 156, conversions: 8, spend: 320 },
    { name: 'Instagram', impressions: 12340, clicks: 189, conversions: 15, spend: 280 },
    { name: 'LinkedIn', impressions: 5670, clicks: 98, conversions: 6, spend: 180 }
  ];

  const performanceData = [
    { month: 'Jan', spend: 1200, leads: 45, revenue: 4500 },
    { month: 'Feb', spend: 1450, leads: 52, revenue: 5200 },
    { month: 'Mar', spend: 1680, leads: 61, revenue: 6100 },
    { month: 'Apr', spend: 1520, leads: 58, revenue: 5800 },
    { month: 'May', spend: 1890, leads: 72, revenue: 7200 },
    { month: 'Jun', spend: 1760, leads: 69, revenue: 6900 }
  ];

  const templates = {
    'Real Estate': [
      'Property Showcase Campaign',
      'First-Time Buyer Guide',
      'Market Update Newsletter',
      'Virtual Tour Promotion'
    ],
    'Healthcare': [
      'Health Awareness Campaign',
      'Appointment Reminder System',
      'Patient Education Series',
      'Wellness Newsletter'
    ],
    'Education': [
      'Course Enrollment Drive',
      'Student Success Stories',
      'Parent Information Campaign',
      'Alumni Engagement'
    ]
  };

  const currentTemplates = templates[industry as keyof typeof templates] || templates['Real Estate'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Digital Marketing</h1>
          <p className="text-gray-600 mt-1">Manage your {industry.toLowerCase()} marketing campaigns</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Impressions</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">42.3K</p>
                <p className="text-sm text-green-600 mt-1">+15% from last week</p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Click-through Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">3.2%</p>
                <p className="text-sm text-green-600 mt-1">+0.5% from last week</p>
              </div>
              <MousePointer className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">8.7%</p>
                <p className="text-sm text-green-600 mt-1">+2.1% from last week</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spend</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">$1,230</p>
                <p className="text-sm text-red-600 mt-1">+$120 from last week</p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="campaigns">Active Campaigns</TabsTrigger>
          <TabsTrigger value="automated">
            <Bot className="w-4 h-4 mr-1" />
            Automated Marketing
          </TabsTrigger>
          <TabsTrigger value="create">
            <Sparkles className="w-4 h-4 mr-1" />
            AI Campaign Creator
          </TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="monitoring">
            <Activity className="w-4 h-4 mr-1" />
            Performance Monitor
          </TabsTrigger>
        </TabsList>

        <TabsContent value="automated" className="space-y-6">
          <AutomatedMarketingSystem />
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <CampaignCreationForm />
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <PerformanceMonitor />
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-4">
            {campaignData.map((campaign, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {campaign.name.includes('Facebook') && <Facebook className="w-6 h-6 text-blue-600" />}
                      {campaign.name.includes('Google') && <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-red-600 rounded-full" />}
                      {campaign.name.includes('Instagram') && <Instagram className="w-6 h-6 text-pink-600" />}
                      {campaign.name.includes('LinkedIn') && <Linkedin className="w-6 h-6 text-blue-700" />}
                      <div>
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-600">Active since March 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{campaign.impressions.toLocaleString()}</p>
                        <p className="text-gray-600">Impressions</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{campaign.clicks}</p>
                        <p className="text-gray-600">Clicks</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{campaign.conversions}</p>
                        <p className="text-gray-600">Conversions</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">${campaign.spend}</p>
                        <p className="text-gray-600">Spend</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Pause className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Industry Templates</CardTitle>
                <CardDescription>Pre-built campaigns for {industry.toLowerCase()} businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentTemplates.map((template, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{template}</span>
                    <Button size="sm">Use Template</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Create Custom Campaign</CardTitle>
                <CardDescription>Build a campaign from scratch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="Enter campaign name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-objective">Objective</Label>
                  <Input id="campaign-objective" placeholder="Lead generation, brand awareness, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-audience">Target Audience</Label>
                  <Textarea id="target-audience" placeholder="Describe your target audience" />
                </div>
                <Button className="w-full">Create Campaign</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Performance</CardTitle>
              <CardDescription>Track your marketing ROI over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="spend" fill="#ef4444" name="Spend ($)" />
                  <Bar dataKey="leads" fill="#3b82f6" name="Leads" />
                  <Bar dataKey="revenue" fill="#10b981" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Automation</CardTitle>
                <CardDescription>Set up automated email sequences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Welcome Series</h4>
                    <p className="text-sm text-gray-600 mt-1">5-email sequence for new leads</p>
                    <Badge className="mt-2">Active</Badge>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Follow-up Sequence</h4>
                    <p className="text-sm text-gray-600 mt-1">3-email nurture campaign</p>
                    <Badge variant="secondary" className="mt-2">Draft</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Media Scheduling</CardTitle>
                <CardDescription>Automate your social media posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Daily Property Features</h4>
                    <p className="text-sm text-gray-600 mt-1">Auto-post new listings</p>
                    <Badge className="mt-2">Active</Badge>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Market Updates</h4>
                    <p className="text-sm text-gray-600 mt-1">Weekly market reports</p>
                    <Badge className="mt-2">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingModule;
