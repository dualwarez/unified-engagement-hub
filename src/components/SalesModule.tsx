
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
  AlertCircle
} from 'lucide-react';

interface SalesModuleProps {
  industry: string;
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
    pipeline: [
      { id: 1, client: 'ABC Corp', value: '$45,000', stage: 'Proposal', probability: 75, lastContact: '2 days ago' },
      { id: 2, client: 'XYZ Ltd', value: '$23,000', stage: 'Negotiation', probability: 60, lastContact: '1 day ago' },
      { id: 3, client: 'Tech Solutions', value: '$67,000', stage: 'Demo', probability: 40, lastContact: '3 days ago' },
      { id: 4, client: 'Global Inc', value: '$89,000', stage: 'Qualified', probability: 25, lastContact: '1 week ago' }
    ]
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Proposal': return 'bg-green-100 text-green-800';
      case 'Negotiation': return 'bg-blue-100 text-blue-800';
      case 'Demo': return 'bg-yellow-100 text-yellow-800';
      case 'Qualified': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
          <p className="text-gray-600 mt-1">
            {industry} Industry • Track your sales performance and pipeline
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
        <TabsList>
          <TabsTrigger value="pipeline">Sales Pipeline</TabsTrigger>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
          <TabsTrigger value="forecasts">Sales Forecast</TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Deals Pipeline</CardTitle>
              <CardDescription>Monitor your active sales opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.pipeline.map((deal) => (
                  <div key={deal.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{deal.client}</h3>
                        <Badge className={getStageColor(deal.stage)}>
                          {deal.stage}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Last contact: {deal.lastContact}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">{deal.value}</p>
                      <p className="text-sm text-gray-600">{deal.probability}% probability</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium">Deal closed with ABC Corp</p>
                    <p className="text-sm text-gray-600">$45,000 • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium">Demo scheduled with Tech Solutions</p>
                    <p className="text-sm text-gray-600">Tomorrow 3:00 PM • 4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="font-medium">Follow-up required with Global Inc</p>
                    <p className="text-sm text-gray-600">No contact for 1 week • 1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Forecast</CardTitle>
              <CardDescription>Projected revenue for next quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800">Best Case</h3>
                  <p className="text-3xl font-bold text-green-900 mt-2">$420,000</p>
                  <p className="text-sm text-green-600 mt-1">+35% from last quarter</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800">Most Likely</h3>
                  <p className="text-3xl font-bold text-blue-900 mt-2">$315,000</p>
                  <p className="text-sm text-blue-600 mt-1">+20% from last quarter</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800">Worst Case</h3>
                  <p className="text-3xl font-bold text-orange-900 mt-2">$210,000</p>
                  <p className="text-sm text-orange-600 mt-1">+8% from last quarter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SalesModule;
