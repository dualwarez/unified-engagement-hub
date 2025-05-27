
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Filter,
  Search,
  MoreHorizontal,
  PlusCircle
} from 'lucide-react';

interface LeadModuleProps {
  industry: string;
}

const LeadModule: React.FC<LeadModuleProps> = ({ industry }) => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const leads = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      source: 'Website Form',
      status: 'new',
      score: 85,
      lastContact: '2 hours ago',
      interest: industry === 'Real Estate' ? '3BR House, Downtown' : 'Consultation',
      value: '$250,000'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 987-6543',
      source: 'Facebook Ad',
      status: 'qualified',
      score: 92,
      lastContact: '1 day ago',
      interest: industry === 'Real Estate' ? 'Luxury Condo' : 'Premium Service',
      value: '$450,000'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike.wilson@email.com',
      phone: '+1 (555) 456-7890',
      source: 'Referral',
      status: 'contacted',
      score: 78,
      lastContact: '3 days ago',
      interest: industry === 'Real Estate' ? 'Investment Property' : 'Business Consultation',
      value: '$180,000'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 321-0987',
      source: 'Google Ad',
      status: 'nurturing',
      score: 65,
      lastContact: '1 week ago',
      interest: industry === 'Real Estate' ? 'First Home' : 'Basic Package',
      value: '$320,000'
    }
  ];

  const statusColors = {
    'new': 'bg-blue-100 text-blue-800',
    'qualified': 'bg-green-100 text-green-800',
    'contacted': 'bg-yellow-100 text-yellow-800',
    'nurturing': 'bg-purple-100 text-purple-800',
    'converted': 'bg-emerald-100 text-emerald-800',
    'lost': 'bg-red-100 text-red-800'
  };

  const filteredLeads = leads.filter(lead => {
    const matchesStatus = selectedStatus === 'all' || lead.status === selectedStatus;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const pipelineStages = [
    { name: 'New Leads', count: 12, value: '$2.4M' },
    { name: 'Qualified', count: 8, value: '$1.8M' },
    { name: 'Proposal', count: 5, value: '$1.2M' },
    { name: 'Negotiation', count: 3, value: '$850K' },
    { name: 'Closed', count: 2, value: '$450K' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600 mt-1">Track and convert your {industry.toLowerCase()} leads</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Lead
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">127</p>
                <p className="text-sm text-green-600 mt-1">+12 this week</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">24.5%</p>
                <p className="text-sm text-green-600 mt-1">+3.2% from last month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Lead Score</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">78</p>
                <p className="text-sm text-green-600 mt-1">+5 points</p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">78</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pipeline Value</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">$6.7M</p>
                <p className="text-sm text-green-600 mt-1">+$1.2M this month</p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">$</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="leads" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="leads">All Leads</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="sources">Lead Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="leads" className="space-y-6">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'new', 'qualified', 'contacted', 'nurturing'].map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className="capitalize"
                >
                  {status}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <Card key={lead.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-blue-600">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        <p className="text-sm text-gray-500">{lead.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">Lead Score</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${lead.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold">{lead.score}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-600">Interest</p>
                        <p className="text-sm text-gray-900">{lead.interest}</p>
                        <p className="text-sm font-semibold text-green-600">{lead.value}</p>
                      </div>

                      <div className="text-right">
                        <Badge className={statusColors[lead.status as keyof typeof statusColors]}>
                          {lead.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">via {lead.source}</p>
                        <p className="text-xs text-gray-500">Last contact: {lead.lastContact}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pipeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Pipeline</CardTitle>
              <CardDescription>Track leads through your sales process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {pipelineStages.map((stage, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{stage.name}</h3>
                    <div className="space-y-2">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded">
                        {stage.count} leads
                      </div>
                      <div className="text-center text-sm font-medium text-gray-600">
                        {stage.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
                <CardDescription>Where your leads are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { source: 'Website Form', count: 45, percentage: 35 },
                    { source: 'Facebook Ads', count: 32, percentage: 25 },
                    { source: 'Google Ads', count: 28, percentage: 22 },
                    { source: 'Referrals', count: 15, percentage: 12 },
                    { source: 'Other', count: 7, percentage: 6 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.source}</p>
                        <p className="text-sm text-gray-600">{item.count} leads</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Source Performance</CardTitle>
                <CardDescription>Conversion rates by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { source: 'Referrals', rate: 45, quality: 'High' },
                    { source: 'Website Form', rate: 28, quality: 'High' },
                    { source: 'Google Ads', rate: 22, quality: 'Medium' },
                    { source: 'Facebook Ads', rate: 18, quality: 'Medium' },
                    { source: 'Other', rate: 12, quality: 'Low' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.source}</p>
                        <Badge variant={item.quality === 'High' ? 'default' : item.quality === 'Medium' ? 'secondary' : 'outline'}>
                          {item.quality} Quality
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{item.rate}%</p>
                        <p className="text-sm text-gray-600">conversion</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadModule;
