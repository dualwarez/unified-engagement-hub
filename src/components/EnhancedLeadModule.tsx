
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
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
  PlusCircle,
  Clock,
  Target,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import LeadIntakeForm from './LeadIntakeForm';
import TaskManagement from './TaskManagement';
import CallManagement from './CallManagement';

interface EnhancedLeadModuleProps {
  industry: string;
  currency: string;
}

const EnhancedLeadModule: React.FC<EnhancedLeadModuleProps> = ({ industry }) => {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [leads, setLeads] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const statusColors = {
    'new': 'bg-blue-100 text-blue-800',
    'contacted': 'bg-yellow-100 text-yellow-800',
    'qualified': 'bg-green-100 text-green-800',
    'demo_scheduled': 'bg-purple-100 text-purple-800',
    'proposal_sent': 'bg-orange-100 text-orange-800',
    'converted': 'bg-emerald-100 text-emerald-800',
    'not_interested': 'bg-red-100 text-red-800',
    'invalid': 'bg-gray-100 text-gray-800',
    'nurturing': 'bg-indigo-100 text-indigo-800'
  };

  const priorityColors = {
    'high': 'bg-red-500',
    'medium': 'bg-yellow-500',
    'low': 'bg-green-500'
  };

  const intentColors = {
    'hot': 'bg-red-100 text-red-800',
    'warm': 'bg-yellow-100 text-yellow-800',
    'cold': 'bg-blue-100 text-blue-800'
  };

  useEffect(() => {
    fetchLeads();
    fetchTasks();
  }, [industry]);

  const fetchLeads = async () => {
    try {
      const industryKey = industry.toLowerCase().replace(' ', '_') as 'real_estate' | 'stock_broking' | 'broking_franchise' | 'insurance' | 'loans' | 'edutech';
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('industry', industryKey)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select(`
          *,
          leads(name, phone, email)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const leadStats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    qualified: leads.filter(l => l.status === 'qualified').length,
    converted: leads.filter(l => l.status === 'converted').length,
    hot: leads.filter(l => l.buyer_intent === 'hot').length,
    warm: leads.filter(l => l.buyer_intent === 'warm').length,
    cold: leads.filter(l => l.buyer_intent === 'cold').length
  };

  const pipelineStages = [
    { name: 'New Leads', count: leadStats.new, status: 'new' },
    { name: 'Contacted', count: leadStats.contacted, status: 'contacted' },
    { name: 'Qualified', count: leadStats.qualified, status: 'qualified' },
    { name: 'Demo Scheduled', count: leads.filter(l => l.status === 'demo_scheduled').length, status: 'demo_scheduled' },
    { name: 'Converted', count: leadStats.converted, status: 'converted' }
  ];

  const renderPipelineView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {pipelineStages.map((stage, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{stage.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stage.count}</div>
              <div className="mt-4 space-y-2">
                {leads
                  .filter(lead => lead.status === stage.status)
                  .slice(0, 3)
                  .map((lead, idx) => (
                    <div key={idx} className="p-2 bg-gray-50 rounded text-xs">
                      <div className="font-medium truncate">{lead.name}</div>
                      <div className="text-gray-500 truncate">{lead.phone}</div>
                      <Badge className={intentColors[lead.buyer_intent]}>
                        {lead.buyer_intent}
                      </Badge>
                    </div>
                  ))}
                {leads.filter(lead => lead.status === stage.status).length > 3 && (
                  <div className="text-xs text-gray-500 text-center">
                    +{leads.filter(lead => lead.status === stage.status).length - 3} more
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderLeadsView = () => (
    <div className="space-y-4">
      {leads.map((lead) => (
        <Card key={lead.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${priorityColors[lead.priority]}`}></div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                  <p className="text-sm text-gray-600">{lead.email}</p>
                  <p className="text-sm text-gray-500">{lead.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">Source</p>
                  <Badge variant="outline">{lead.source.replace('_', ' ')}</Badge>
                </div>

                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">Intent</p>
                  <Badge className={intentColors[lead.buyer_intent]}>
                    {lead.buyer_intent}
                  </Badge>
                </div>

                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">Status</p>
                  <Badge className={statusColors[lead.status]}>
                    {lead.status.replace('_', ' ')}
                  </Badge>
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

            {lead.tags && lead.tags.length > 0 && (
              <div className="mt-4 flex gap-2">
                {lead.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">{tag}</Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  if (loading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Digital Lead Capture</h1>
          <p className="text-gray-600 mt-1">
            Advanced lead management for {industry} • {leadStats.total} total leads
          </p>
        </div>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => setShowLeadForm(true)}
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Capture Lead
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{leadStats.total}</p>
                <p className="text-sm text-green-600 mt-1">+{leadStats.new} new today</p>
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
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {leadStats.total ? Math.round((leadStats.converted / leadStats.total) * 100) : 0}%
                </p>
                <p className="text-sm text-green-600 mt-1">{leadStats.converted} converted</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hot Leads</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{leadStats.hot}</p>
                <p className="text-sm text-orange-600 mt-1">{leadStats.warm} warm, {leadStats.cold} cold</p>
              </div>
              <Target className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Tasks</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {tasks.filter(t => t.status === 'pending').length}
                </p>
                <p className="text-sm text-red-600 mt-1">
                  {tasks.filter(t => t.status === 'overdue').length} overdue
                </p>
              </div>
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pipeline">Pipeline View</TabsTrigger>
          <TabsTrigger value="leads">All Leads</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="calls">Call Center</TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="space-y-6">
          {renderPipelineView()}
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          {renderLeadsView()}
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <TaskManagement 
            tasks={tasks} 
            onTaskUpdate={fetchTasks}
            industry={industry}
          />
        </TabsContent>

        <TabsContent value="calls" className="space-y-6">
          <CallManagement 
            leads={leads} 
            onLeadUpdate={fetchLeads}
            industry={industry}
          />
        </TabsContent>
      </Tabs>

      {showLeadForm && (
        <LeadIntakeForm
          industry={industry}
          onClose={() => setShowLeadForm(false)}
          onLeadCreated={fetchLeads}
        />
      )}
    </div>
  );
};

export default EnhancedLeadModule;
