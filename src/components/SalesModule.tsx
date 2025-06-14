
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Calendar,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Activity,
  Filter,
  RefreshCw
} from 'lucide-react';

interface SalesModuleProps {
  industry: string;
  currency: string;
}

const SalesModule: React.FC<SalesModuleProps> = ({ industry }) => {
  const [activeTab, setActiveTab] = useState('pipeline');

  const salesData = {
    metrics: [
      { title: 'Monthly Revenue', value: '$127,500', change: '+18%', icon: DollarSign },
      { title: 'Deals Closed', value: '23', change: '+5', icon: CheckCircle },
      { title: 'Pipeline Value', value: '$350,000', change: '+12%', icon: TrendingUp },
      { title: 'Conversion Rate', value: '32%', change: '+2.5%', icon: Target }
    ],
    pipelineStages: [
      { 
        name: 'Lead Generation', 
        count: 45, 
        value: '$125,000',
        substages: [
          { name: 'Website Forms', count: 20, value: '$60,000' },
          { name: 'Live Chat', count: 15, value: '$35,000' },
          { name: 'Cold Outreach', count: 10, value: '$30,000' }
        ]
      },
      { 
        name: 'Opportunity Management', 
        count: 28, 
        value: '$95,000',
        substages: [
          { name: 'Discovery Call', count: 12, value: '$45,000' },
          { name: 'Needs Analysis', count: 10, value: '$35,000' },
          { name: 'Solution Proposal', count: 6, value: '$15,000' }
        ]
      },
      { 
        name: 'Proposal & Negotiation', 
        count: 15, 
        value: '$75,000',
        substages: [
          { name: 'Quotation Created', count: 8, value: '$40,000' },
          { name: 'Internal Approvals', count: 4, value: '$20,000' },
          { name: 'Contract Review', count: 3, value: '$15,000' }
        ]
      },
      { 
        name: 'Closing', 
        count: 8, 
        value: '$45,000',
        substages: [
          { name: 'Deal Confirmation', count: 5, value: '$30,000' },
          { name: 'E-signature', count: 2, value: '$10,000' },
          { name: 'Handoff to Delivery', count: 1, value: '$5,000' }
        ]
      }
    ],
    followUpCadences: [
      {
        id: 1,
        lead: 'ABC Corp',
        stage: 'Day 3 Follow-up',
        nextAction: 'Email + Case Study',
        lastContact: '2 days ago',
        engagementScore: 85,
        status: 'hot'
      },
      {
        id: 2,
        lead: 'XYZ Ltd',
        stage: 'Day 7 Follow-up',
        nextAction: 'LinkedIn Message',
        lastContact: '5 days ago',
        engagementScore: 62,
        status: 'warm'
      },
      {
        id: 3,
        lead: 'Tech Solutions',
        stage: 'Day 14 Follow-up',
        nextAction: 'Value-add Content',
        lastContact: '12 days ago',
        engagementScore: 35,
        status: 'cold'
      }
    ],
    forecastData: {
      weighted: { value: '$315,000', confidence: '75%' },
      timeBased: { 
        next30: '$120,000',
        next60: '$200,000', 
        next90: '$315,000'
      },
      predictive: { value: '$298,000', aiConfidence: '82%' },
      scenarios: [
        { name: 'Best Case', value: '$420,000', probability: '90%' },
        { name: 'Most Likely', value: '$315,000', probability: '75%' },
        { name: 'Worst Case', value: '$210,000', probability: '50%' }
      ]
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Lead Generation': return 'bg-blue-100 text-blue-800';
      case 'Opportunity Management': return 'bg-yellow-100 text-yellow-800';
      case 'Proposal & Negotiation': return 'bg-orange-100 text-orange-800';
      case 'Closing': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEngagementColor = (score: number) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderPipelineView = () => (
    <div className="space-y-6">
      {/* Pipeline Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {salesData.pipelineStages.map((stage, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-sm font-medium">{stage.name}</CardTitle>
                  <p className="text-2xl font-bold mt-2">{stage.count}</p>
                  <p className="text-sm text-gray-600">{stage.value}</p>
                </div>
                <Badge className={getStageColor(stage.name)}>
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {stage.substages.map((substage, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-gray-600">{substage.name}</span>
                    <span className="font-medium">{substage.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Pipeline Flow */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Process Flow</CardTitle>
          <CardDescription>End-to-end sales pipeline with qualification criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Lead Generation Section */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-700">1. Lead Generation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-sm">Inbound Channels</h4>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• Website Forms</li>
                    <li>• Live Chat</li>
                    <li>• Referrals</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-sm">Outbound Channels</h4>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• Cold Calling/Email</li>
                    <li>• LinkedIn Outreach</li>
                    <li>• Events & Webinars</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-sm">Qualification</h4>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• BANT Framework</li>
                    <li>• Lead Scoring (AI)</li>
                    <li>• Segmentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Opportunity Management Section */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-yellow-700">2. Opportunity Management</h3>
              <div className="flex items-center space-x-4 mt-3">
                <Badge variant="outline">Discovery Call</Badge>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <Badge variant="outline">Needs Analysis</Badge>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <Badge variant="outline">Solution Proposal</Badge>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <Badge variant="outline">Objection Handling</Badge>
              </div>
            </div>

            {/* Proposal & Negotiation Section */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-orange-700">3. Proposal & Negotiation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                <Badge className="bg-orange-100 text-orange-800">Quotation Creation</Badge>
                <Badge className="bg-orange-100 text-orange-800">Internal Approvals</Badge>
                <Badge className="bg-orange-100 text-orange-800">Discounting Strategy</Badge>
                <Badge className="bg-orange-100 text-orange-800">Contract Review</Badge>
              </div>
            </div>

            {/* Closing Section */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-700">4. Closing</h3>
              <div className="flex items-center space-x-4 mt-3">
                <Badge className="bg-green-100 text-green-800">Deal Confirmation</Badge>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <Badge className="bg-green-100 text-green-800">E-signature</Badge>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <Badge className="bg-green-100 text-green-800">Handoff to Delivery</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderFollowUpView = () => (
    <div className="space-y-6">
      {/* Follow-up Strategy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Sequences</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                <p className="text-2xl font-bold">68%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hot Alerts</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Responses</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <MessageSquare className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cadence Planning */}
      <Card>
        <CardHeader>
          <CardTitle>Follow-up Cadence System</CardTitle>
          <CardDescription>Automated and personalized follow-up sequences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cadence Rules */}
            <div>
              <h4 className="font-medium mb-3">Standard Cadence Pattern</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Day 1</span>
                  </div>
                  <span className="text-sm text-gray-600">Initial Call</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">Day 3</span>
                  </div>
                  <span className="text-sm text-gray-600">Email + Case Study</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Day 7</span>
                  </div>
                  <span className="text-sm text-gray-600">LinkedIn + Value Content</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">Day 14</span>
                  </div>
                  <span className="text-sm text-gray-600">Event Invite</span>
                </div>
              </div>
            </div>

            {/* Active Follow-ups */}
            <div>
              <h4 className="font-medium mb-3">Active Follow-up Queue</h4>
              <div className="space-y-3">
                {salesData.followUpCadences.map((cadence) => (
                  <div key={cadence.id} className="p-3 border rounded">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">{cadence.lead}</h5>
                      <Badge variant={cadence.status === 'hot' ? 'destructive' : cadence.status === 'warm' ? 'default' : 'secondary'}>
                        {cadence.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{cadence.stage}</p>
                    <p className="text-sm font-medium text-blue-600 mb-2">{cadence.nextAction}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Last: {cadence.lastContact}</span>
                      <span className={`font-medium ${getEngagementColor(cadence.engagementScore)}`}>
                        {cadence.engagementScore}% engaged
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Engagement Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded">
              <h4 className="font-medium text-blue-800">Email Performance</h4>
              <p className="text-2xl font-bold text-blue-900 mt-2">72%</p>
              <p className="text-sm text-blue-600">Open Rate</p>
              <p className="text-xs text-gray-600 mt-1">45% Click Rate</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded">
              <h4 className="font-medium text-green-800">Call Success</h4>
              <p className="text-2xl font-bold text-green-900 mt-2">58%</p>
              <p className="text-sm text-green-600">Connect Rate</p>
              <p className="text-xs text-gray-600 mt-1">35% Positive Response</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded">
              <h4 className="font-medium text-purple-800">Content Engagement</h4>
              <p className="text-2xl font-bold text-purple-900 mt-2">89%</p>
              <p className="text-sm text-purple-600">View Rate</p>
              <p className="text-xs text-gray-600 mt-1">23% Downloaded</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderForecastView = () => (
    <div className="space-y-6">
      {/* Forecast Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Weighted Pipeline</p>
                <p className="text-2xl font-bold">{salesData.forecastData.weighted.value}</p>
                <p className="text-sm text-green-600">{salesData.forecastData.weighted.confidence} confidence</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">30-Day Forecast</p>
                <p className="text-2xl font-bold">{salesData.forecastData.timeBased.next30}</p>
                <p className="text-sm text-blue-600">High probability</p>
              </div>
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">AI Prediction</p>
                <p className="text-2xl font-bold">{salesData.forecastData.predictive.value}</p>
                <p className="text-sm text-purple-600">{salesData.forecastData.predictive.aiConfidence} AI confidence</p>
              </div>
              <Activity className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Quota Attainment</p>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-sm text-orange-600">On track</p>
              </div>
              <Target className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Forecast Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Forecasting Methods & Data Inputs</CardTitle>
          <CardDescription>Multiple forecasting approaches for accurate revenue prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Data Inputs */}
            <div>
              <h4 className="font-medium mb-3">Key Data Inputs</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <h5 className="font-medium text-sm">Pipeline Value by Stage</h5>
                  <p className="text-xs text-gray-600 mt-1">Real-time opportunity values across all stages</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h5 className="font-medium text-sm">Historical Conversion Rates</h5>
                  <p className="text-xs text-gray-600 mt-1">Stage-to-stage conversion patterns</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h5 className="font-medium text-sm">Sales Rep Performance</h5>
                  <p className="text-xs text-gray-600 mt-1">Quota attainment and capacity metrics</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h5 className="font-medium text-sm">Market Trends</h5>
                  <p className="text-xs text-gray-600 mt-1">Seasonality and industry factors</p>
                </div>
              </div>
            </div>

            {/* Forecast Methods */}
            <div>
              <h4 className="font-medium mb-3">Forecasting Approaches</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-sm">Weighted Pipeline</h5>
                      <p className="text-xs text-gray-600">Stage probability × Deal value</p>
                    </div>
                    <Badge variant="outline">Primary</Badge>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-sm">Time-Based Rolling</h5>
                      <p className="text-xs text-gray-600">30/60/90 day projections</p>
                    </div>
                    <Badge variant="outline">Supporting</Badge>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-sm">Opportunity Ageing</h5>
                      <p className="text-xs text-gray-600">Time-in-stage analysis</p>
                    </div>
                    <Badge variant="outline">Analytics</Badge>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-sm">AI/ML Predictive</h5>
                      <p className="text-xs text-gray-600">Machine learning models</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Advanced</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scenario Planning */}
      <Card>
        <CardHeader>
          <CardTitle>Scenario-Based Forecasting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {salesData.forecastData.scenarios.map((scenario, index) => (
              <div key={index} className={`text-center p-4 rounded ${
                scenario.name === 'Best Case' ? 'bg-green-50' :
                scenario.name === 'Most Likely' ? 'bg-blue-50' : 'bg-orange-50'
              }`}>
                <h4 className={`font-medium ${
                  scenario.name === 'Best Case' ? 'text-green-800' :
                  scenario.name === 'Most Likely' ? 'text-blue-800' : 'text-orange-800'
                }`}>{scenario.name}</h4>
                <p className={`text-3xl font-bold mt-2 ${
                  scenario.name === 'Best Case' ? 'text-green-900' :
                  scenario.name === 'Most Likely' ? 'text-blue-900' : 'text-orange-900'
                }`}>{scenario.value}</p>
                <p className={`text-sm mt-1 ${
                  scenario.name === 'Best Case' ? 'text-green-600' :
                  scenario.name === 'Most Likely' ? 'text-blue-600' : 'text-orange-600'
                }`}>{scenario.probability} probability</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Review & Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Review & Adjustment Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h5 className="font-medium flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Weekly Pipeline Reviews
              </h5>
              <p className="text-sm text-gray-600 mt-2">Regular assessment of deal progression and obstacles</p>
              <Button size="sm" variant="outline" className="mt-3">Schedule Review</Button>
            </div>
            <div className="p-4 border rounded">
              <h5 className="font-medium flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Win/Loss Analysis
              </h5>
              <p className="text-sm text-gray-600 mt-2">Deal-by-deal analysis for continuous improvement</p>
              <Button size="sm" variant="outline" className="mt-3">View Analysis</Button>
            </div>
            <div className="p-4 border rounded">
              <h5 className="font-medium flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Re-forecasting
              </h5>
              <p className="text-sm text-gray-600 mt-2">Mid-month and quarter adjustments</p>
              <Button size="sm" variant="outline" className="mt-3">Adjust Forecast</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Sales System</h1>
          <p className="text-gray-600 mt-1">
            {industry} Industry • Complete sales pipeline, follow-up automation & forecasting
          </p>
        </div>
        <div className="flex gap-3">
          <Button>
            <FileText className="w-4 h-4 mr-2" />
            New Proposal
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Demo
          </Button>
        </div>
      </div>

      {/* Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesData.metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className="text-sm text-green-600 mt-1">{metric.change} this month</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <metric.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pipeline">Sales Pipeline</TabsTrigger>
          <TabsTrigger value="followup">Follow-Up System</TabsTrigger>
          <TabsTrigger value="forecast">Sales Forecast</TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="space-y-4">
          {renderPipelineView()}
        </TabsContent>

        <TabsContent value="followup" className="space-y-4">
          {renderFollowUpView()}
        </TabsContent>

        <TabsContent value="forecast" className="space-y-4">
          {renderForecastView()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SalesModule;
