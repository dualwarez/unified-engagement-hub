
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Bot, 
  Target, 
  Calendar, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Edit3, 
  BarChart3, 
  Zap, 
  Shield, 
  Download,
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  Image,
  Video,
  MessageSquare,
  Hash,
  Globe,
  Smartphone,
  Monitor,
  Camera,
  Play,
  FileText,
  Link,
  Settings,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

const AutomatedMarketingSystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState('planning');
  const [campaignData, setCampaignData] = useState({
    title: '',
    description: '',
    budget: '',
    objective: '',
    audience: '',
    duration: ''
  });

  const platforms = [
    { name: 'Meta (Facebook/Instagram)', icon: '📘', enabled: true },
    { name: 'Google Ads', icon: '🔍', enabled: true },
    { name: 'LinkedIn', icon: '💼', enabled: false },
    { name: 'Twitter/X', icon: '🐦', enabled: false },
    { name: 'WhatsApp Business', icon: '💬', enabled: true }
  ];

  const campaignObjectives = [
    'Brand Awareness',
    'Lead Generation',
    'Website Traffic',
    'Conversions',
    'Sales',
    'App Installs',
    'Engagement'
  ];

  const aiGeneratedContent = [
    {
      type: 'Headline',
      content: 'Transform Your Business with Smart Solutions',
      platform: 'Meta',
      status: 'approved'
    },
    {
      type: 'Body Copy',
      content: 'Discover how our AI-powered platform can increase your leads by 300% in just 30 days.',
      platform: 'Google',
      status: 'pending'
    },
    {
      type: 'CTA',
      content: 'Get Started Free Today',
      platform: 'All',
      status: 'approved'
    },
    {
      type: 'Hashtags',
      content: '#AI #MarketingAutomation #LeadGeneration #BusinessGrowth',
      platform: 'Meta',
      status: 'review'
    }
  ];

  const campaignPerformance = {
    impressions: 45670,
    clicks: 1234,
    ctr: 2.7,
    conversions: 89,
    cost: 456,
    roi: 340
  };

  const approvalWorkflow = [
    { step: 'Content Generation', status: 'completed', approver: 'AI System' },
    { step: 'Creative Review', status: 'pending', approver: 'Marketing Manager' },
    { step: 'Compliance Check', status: 'waiting', approver: 'Legal Team' },
    { step: 'Final Approval', status: 'waiting', approver: 'Client' },
    { step: 'Go Live', status: 'waiting', approver: 'Auto-Scheduler' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Automated Digital Marketing with Approval System
        </h2>
        <p className="text-gray-600">
          AI-powered campaign creation, approval workflows, and automated publishing
        </p>
      </div>

      <Tabs value={activeStep} onValueChange={setActiveStep}>
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="planning">
            <Target className="w-4 h-4 mr-1" />
            Planning
          </TabsTrigger>
          <TabsTrigger value="generation">
            <Bot className="w-4 h-4 mr-1" />
            AI Content
          </TabsTrigger>
          <TabsTrigger value="approval">
            <Eye className="w-4 h-4 mr-1" />
            Approval
          </TabsTrigger>
          <TabsTrigger value="scheduling">
            <Calendar className="w-4 h-4 mr-1" />
            Scheduling
          </TabsTrigger>
          <TabsTrigger value="tracking">
            <BarChart3 className="w-4 h-4 mr-1" />
            Tracking
          </TabsTrigger>
          <TabsTrigger value="optimization">
            <Zap className="w-4 h-4 mr-1" />
            Optimization
          </TabsTrigger>
          <TabsTrigger value="control">
            <Shield className="w-4 h-4 mr-1" />
            Control
          </TabsTrigger>
        </TabsList>

        <TabsContent value="planning" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Campaign Planning & Input
                </CardTitle>
                <CardDescription>Set up your campaign details and objectives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Product/Service Title</Label>
                  <Input 
                    placeholder="Enter product or service name"
                    value={campaignData.title}
                    onChange={(e) => setCampaignData({...campaignData, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea 
                    placeholder="Describe your product/service and unique value proposition"
                    value={campaignData.description}
                    onChange={(e) => setCampaignData({...campaignData, description: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Budget Allocation</Label>
                    <Input 
                      type="number" 
                      placeholder="$1000"
                      value={campaignData.budget}
                      onChange={(e) => setCampaignData({...campaignData, budget: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Campaign Duration</Label>
                    <Input 
                      placeholder="30 days"
                      value={campaignData.duration}
                      onChange={(e) => setCampaignData({...campaignData, duration: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Campaign Objective</Label>
                  <Select value={campaignData.objective} onValueChange={(value) => setCampaignData({...campaignData, objective: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select objective" />
                    </SelectTrigger>
                    <SelectContent>
                      {campaignObjectives.map((objective) => (
                        <SelectItem key={objective} value={objective}>{objective}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Target Audience</Label>
                  <Textarea 
                    placeholder="Demographics, interests, behaviors, location..."
                    value={campaignData.audience}
                    onChange={(e) => setCampaignData({...campaignData, audience: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Selection</CardTitle>
                <CardDescription>Choose where to run your campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{platform.icon}</span>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <Badge variant={platform.enabled ? "default" : "secondary"}>
                        {platform.enabled ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4">
                  <Bot className="w-4 h-4 mr-2" />
                  Generate Campaign with AI
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="generation" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  AI-Generated Content
                </CardTitle>
                <CardDescription>Review and edit AI-generated campaign materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiGeneratedContent.map((content, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{content.type}</Badge>
                          <Badge variant="secondary">{content.platform}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          {content.status === 'approved' && <CheckCircle className="w-4 h-4 text-green-600" />}
                          {content.status === 'pending' && <Clock className="w-4 h-4 text-yellow-600" />}
                          {content.status === 'review' && <AlertTriangle className="w-4 h-4 text-orange-600" />}
                          <Button size="sm" variant="outline">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-700">{content.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Types</CardTitle>
                <CardDescription>AI can generate various content formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Ad Copy & Headlines</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                  <Image className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Visual Creatives</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-purple-50 rounded-lg">
                  <Video className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Video Content</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                  <Hash className="w-4 h-4 text-orange-600" />
                  <span className="text-sm">Hashtags & Keywords</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-pink-50 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-pink-600" />
                  <span className="text-sm">CTAs & Captions</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate Content
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="approval" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Review & Approval Workflow
                </CardTitle>
                <CardDescription>Track approval progress and manage reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {approvalWorkflow.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="flex-shrink-0">
                        {item.status === 'completed' && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {item.status === 'pending' && <Clock className="w-5 h-5 text-yellow-600" />}
                        {item.status === 'waiting' && <XCircle className="w-5 h-5 text-gray-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.step}</p>
                        <p className="text-sm text-gray-600">{item.approver}</p>
                      </div>
                      <Badge variant={item.status === 'completed' ? 'default' : item.status === 'pending' ? 'secondary' : 'outline'}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Preview</CardTitle>
                <CardDescription>Final review before approval</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Campaign Visual Preview</p>
                  <p className="text-sm text-gray-500">Combined mockup will appear here</p>
                </div>
                <div className="space-y-2">
                  <Label>Internal Comments</Label>
                  <Textarea placeholder="Add review comments or suggestions..." />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline">
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                  <Button className="flex-1">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduling" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Automated Scheduling & Publishing
                </CardTitle>
                <CardDescription>AI-optimized scheduling based on audience behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium mb-2">AI Recommendations</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Best posting time: 9:00 AM - 11:00 AM</p>
                    <p>• Peak audience activity: Tuesday & Thursday</p>
                    <p>• Optimal frequency: 3 posts per week</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Meta Ads Manager</span>
                    <Badge>Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Google Ads Console</span>
                    <Badge>Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>LinkedIn Campaign Manager</span>
                    <Badge variant="outline">Setup Required</Badge>
                  </div>
                </div>
                <Button className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Schedule Campaign
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>A/B Testing Setup</CardTitle>
                <CardDescription>Automatically test different variants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">Variant A</h4>
                    <p className="text-sm text-gray-600">Original headline and creative</p>
                    <Badge className="mt-2">50% Traffic</Badge>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">Variant B</h4>
                    <p className="text-sm text-gray-600">Alternative headline</p>
                    <Badge className="mt-2">50% Traffic</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Test Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">1 week</SelectItem>
                      <SelectItem value="14">2 weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure A/B Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Impressions</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignPerformance.impressions.toLocaleString()}</p>
                    <p className="text-sm text-green-600">+15% vs target</p>
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
                    <p className="text-2xl font-bold text-gray-900">{campaignPerformance.ctr}%</p>
                    <p className="text-sm text-green-600">Above industry avg</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">ROI</p>
                    <p className="text-2xl font-bold text-gray-900">{campaignPerformance.roi}%</p>
                    <p className="text-sm text-green-600">Excellent performance</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Real-Time Performance Tracking
              </CardTitle>
              <CardDescription>Monitor campaign performance across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Performance Alerts</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>CTR above 3% threshold</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Budget 70% consumed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Ad fatigue detected on Creative #2</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Optimization Suggestions</h4>
                    <div className="space-y-2 text-sm">
                      <p>• Increase budget for high-performing ad set</p>
                      <p>• Refresh creative for declining CTR</p>
                      <p>• Expand to lookalike audiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Continuous Optimization Loop
              </CardTitle>
              <CardDescription>AI-powered campaign optimization and recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Auto-Optimization Rules</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="text-sm">Auto-pause low CTR ads (&lt;1%)</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="text-sm">Boost high converting posts (+25%)</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="text-sm">Budget reallocation (daily)</span>
                      <Badge>Active</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Weekly Optimization Report</h4>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">This Week's Wins</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 23% increase in conversion rate</li>
                      <li>• $150 cost savings from optimization</li>
                      <li>• 2 new high-performing audiences found</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-dashed rounded-lg">
                <h4 className="font-medium mb-2">AI Recommendations for Next Week</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-blue-800">Creative Refresh</h5>
                    <p className="text-sm text-blue-700">Generate new video variations</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-purple-800">Budget Shift</h5>
                    <p className="text-sm text-purple-700">Move 30% to Meta platform</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h5 className="font-medium text-orange-800">Retargeting</h5>
                    <p className="text-sm text-orange-700">Set up cart abandoners campaign</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="control" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Permissions & Access Control
                </CardTitle>
                <CardDescription>Manage user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Client</p>
                      <p className="text-sm text-gray-600">View & Approve only</p>
                    </div>
                    <Badge variant="secondary">Read Only</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Marketing Manager</p>
                      <p className="text-sm text-gray-600">Edit & Submit campaigns</p>
                    </div>
                    <Badge>Editor</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Admin</p>
                      <p className="text-sm text-gray-600">Override & Publish</p>
                    </div>
                    <Badge variant="destructive">Full Access</Badge>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Team Access
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Final Output Control</CardTitle>
                <CardDescription>Download and archive campaign materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Campaign Kit (PDF + Assets)
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Link className="w-4 h-4 mr-2" />
                    Generate Shareable Preview Link
                  </Button>
                  <Button className="w-full" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Export Performance Report
                  </Button>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Activity Log</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• Campaign approved by John Doe - 2h ago</p>
                    <p>• Creative updated by AI system - 4h ago</p>
                    <p>• Budget adjusted to $1200 - 1d ago</p>
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

export default AutomatedMarketingSystem;
