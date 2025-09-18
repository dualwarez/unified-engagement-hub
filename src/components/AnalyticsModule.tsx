import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Target, 
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  Eye,
  MousePointer,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';

interface AnalyticsModuleProps {
  industry: string;
}

const AnalyticsModule: React.FC<AnalyticsModuleProps> = ({ industry }) => {
  const [dateRange, setDateRange] = useState('7days');
  const [activeTab, setActiveTab] = useState('overview');

  // Sample analytics data
  const overviewMetrics = [
    { title: 'Total Leads', value: '1,247', change: '+12%', trend: 'up', icon: Users, color: 'text-blue-600' },
    { title: 'Conversion Rate', value: '24.5%', change: '+3.2%', trend: 'up', icon: Target, color: 'text-green-600' },
    { title: 'Revenue Generated', value: '$45,678', change: '+8.1%', trend: 'up', icon: DollarSign, color: 'text-purple-600' },
    { title: 'Active Campaigns', value: '12', change: '-2', trend: 'down', icon: MessageSquare, color: 'text-orange-600' }
  ];

  const leadSourceData = [
    { name: 'Website', value: 35, color: '#3b82f6' },
    { name: 'Social Media', value: 28, color: '#10b981' },
    { name: 'Referrals', value: 20, color: '#f59e0b' },
    { name: 'Email', value: 12, color: '#ef4444' },
    { name: 'Others', value: 5, color: '#8b5cf6' }
  ];

  const performanceData = [
    { name: 'Mon', leads: 45, conversions: 12, revenue: 2400 },
    { name: 'Tue', leads: 52, conversions: 15, revenue: 3200 },
    { name: 'Wed', leads: 61, conversions: 18, revenue: 4100 },
    { name: 'Thu', leads: 58, conversions: 14, revenue: 3800 },
    { name: 'Fri', leads: 72, conversions: 22, revenue: 5200 },
    { name: 'Sat', leads: 69, conversions: 19, revenue: 4500 },
    { name: 'Sun', leads: 65, conversions: 16, revenue: 3900 }
  ];

  const bantAnalytics = {
    distribution: [
      { category: 'Hot Leads (70-100)', count: 89, percentage: 28, color: '#10b981' },
      { category: 'Warm Leads (50-69)', count: 156, percentage: 49, color: '#f59e0b' },
      { category: 'Cold Leads (0-49)', count: 73, percentage: 23, color: '#ef4444' }
    ],
    scores: [
      { range: '90-100', count: 23, label: 'Excellent' },
      { range: '80-89', count: 45, label: 'Very Good' },
      { range: '70-79', count: 67, label: 'Good' },
      { range: '60-69', count: 89, label: 'Fair' },
      { range: '50-59', count: 67, label: 'Poor' },
      { range: '0-49', count: 73, label: 'Very Poor' }
    ]
  };

  const campaignPerformance = [
    { campaign: 'Summer Property Sale', leads: 234, conversions: 56, ctr: '12.4%', roas: '420%', status: 'Active' },
    { campaign: 'Luxury Villa Launch', leads: 189, conversions: 43, ctr: '9.8%', roas: '380%', status: 'Active' },
    { campaign: 'First Time Buyer', leads: 167, conversions: 32, ctr: '8.2%', roas: '290%', status: 'Paused' },
    { campaign: 'Investment Properties', leads: 145, conversions: 38, ctr: '11.1%', roas: '350%', status: 'Active' }
  ];

  const communicationStats = [
    { channel: 'WhatsApp', sent: 1234, delivered: 1198, opened: 987, responded: 432, rate: '35.0%' },
    { channel: 'Email', sent: 2456, delivered: 2398, opened: 1456, responded: 289, rate: '19.8%' },
    { channel: 'SMS', sent: 987, delivered: 976, opened: 823, responded: 156, rate: '18.9%' },
    { channel: 'Phone', sent: 234, delivered: 234, opened: 198, responded: 167, rate: '84.3%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive business intelligence and performance metrics</p>
        </div>
        <div className="flex gap-3">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="leads">Lead Analytics</TabsTrigger>
          <TabsTrigger value="bant">BANT Analysis</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                      <div className="flex items-center mt-1">
                        {metric.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <p className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.change}
                        </p>
                      </div>
                    </div>
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Daily leads and conversions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="leads" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="conversions" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
                <CardDescription>Distribution of lead generation channels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={leadSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {leadSourceData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {leadSourceData.map((source, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                      <span className="text-sm text-gray-600">{source.name}: {source.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bant" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>BANT Score Distribution</CardTitle>
              <CardDescription>Lead qualification analysis using BANT framework</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Lead Categories</h4>
                  {bantAnalytics.distribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                        <div>
                          <p className="font-medium">{item.category}</p>
                          <p className="text-sm text-gray-600">{item.count} leads</p>
                        </div>
                      </div>
                      <Badge variant="outline">{item.percentage}%</Badge>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium mb-4">Score Range Distribution</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={bantAnalytics.scores}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Track the performance of your marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Campaign</th>
                      <th className="text-left p-3">Leads</th>
                      <th className="text-left p-3">Conversions</th>
                      <th className="text-left p-3">CTR</th>
                      <th className="text-left p-3">ROAS</th>
                      <th className="text-left p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaignPerformance.map((campaign, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{campaign.campaign}</td>
                        <td className="p-3">{campaign.leads}</td>
                        <td className="p-3">{campaign.conversions}</td>
                        <td className="p-3">{campaign.ctr}</td>
                        <td className="p-3 text-green-600 font-medium">{campaign.roas}</td>
                        <td className="p-3">
                          <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Communication Channel Performance</CardTitle>
              <CardDescription>Track engagement across different communication channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communicationStats.map((channel, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {channel.channel === 'WhatsApp' && <MessageSquare className="w-5 h-5 text-green-600" />}
                        {channel.channel === 'Email' && <Mail className="w-5 h-5 text-blue-600" />}
                        {channel.channel === 'SMS' && <MessageSquare className="w-5 h-5 text-purple-600" />}
                        {channel.channel === 'Phone' && <Phone className="w-5 h-5 text-orange-600" />}
                        <h4 className="font-medium">{channel.channel}</h4>
                      </div>
                      <Badge variant="outline" className="font-medium">
                        {channel.rate} response rate
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Sent</p>
                        <p className="font-medium">{channel.sent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Delivered</p>
                        <p className="font-medium">{channel.delivered.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Opened</p>
                        <p className="font-medium">{channel.opened.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Responded</p>
                        <p className="font-medium text-green-600">{channel.responded.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-3 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: channel.rate }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsModule;