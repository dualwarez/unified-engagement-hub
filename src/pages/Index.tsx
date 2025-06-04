
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  MessageSquare, 
  Phone, 
  Mail, 
  Target, 
  DollarSign,
  PlusCircle,
  Filter,
  Search,
  Bell,
  Settings,
  LogIn
} from 'lucide-react';
import MarketingModule from '@/components/MarketingModule';
import EnhancedLeadModule from '@/components/EnhancedLeadModule';
import CRMModule from '@/components/CRMModule';
import AppointmentModule from '@/components/AppointmentModule';
import SalesModule from '@/components/SalesModule';
import IndustrySelector from '@/components/IndustrySelector';
import LandingPage from '@/components/LandingPage';
import AuthFlow from '@/components/AuthFlow';

const Index = () => {
  const [activeModule, setActiveModule] = useState('landing');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dashboardData = {
    leads: [
      { name: 'Jan', value: 45 },
      { name: 'Feb', value: 52 },
      { name: 'Mar', value: 61 },
      { name: 'Apr', value: 58 },
      { name: 'May', value: 72 },
      { name: 'Jun', value: 69 }
    ],
    conversion: [
      { name: 'Leads', value: 156, color: '#3b82f6' },
      { name: 'Qualified', value: 89, color: '#10b981' },
      { name: 'Converted', value: 34, color: '#f59e0b' }
    ]
  };

  const stats = [
    { title: 'Total Leads', value: '1,247', icon: Users, change: '+12%', color: 'text-blue-600' },
    { title: 'Conversion Rate', value: '24.5%', icon: TrendingUp, change: '+3.2%', color: 'text-green-600' },
    { title: 'Revenue', value: '$45,678', icon: DollarSign, change: '+8.1%', color: 'text-purple-600' },
    { title: 'Appointments', value: '89', icon: Calendar, change: '+15%', color: 'text-orange-600' }
  ];

  // Show landing page if not authenticated
  if (!isAuthenticated) {
    if (activeModule === 'landing') {
      return <LandingPage onNavigate={setActiveModule} />;
    }
    if (activeModule === 'login' || activeModule === 'register') {
      return <AuthFlow mode={activeModule} onSuccess={() => {
        setIsAuthenticated(true);
        setActiveModule('industry-selector');
      }} onNavigate={setActiveModule} />;
    }
  }

  // Industry selection flow
  if (!selectedIndustry) {
    return <IndustrySelector onSelect={setSelectedIndustry} />;
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
          <p className="text-gray-600 mt-1">
            {selectedIndustry} Industry • Welcome back to your automation hub
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-100`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Generation Trends</CardTitle>
            <CardDescription>Monthly lead acquisition over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData.leads}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>Lead conversion breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dashboardData.conversion}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dashboardData.conversion.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium">New lead from website form</p>
                  <p className="text-sm text-gray-600">john.doe@example.com • 2 minutes ago</p>
                </div>
                <Badge>New</Badge>
              </div>
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium">Appointment scheduled</p>
                  <p className="text-sm text-gray-600">Meeting with Sarah Johnson • Tomorrow 2:00 PM</p>
                </div>
                <Badge variant="secondary">Scheduled</Badge>
              </div>
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <div className="flex-1">
                  <p className="font-medium">WhatsApp message sent</p>
                  <p className="text-sm text-gray-600">Follow-up with Mike Wilson • 1 hour ago</p>
                </div>
                <Badge variant="outline">Sent</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add New Lead
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Appointment
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send WhatsApp
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Target className="w-4 h-4 mr-2" />
              Create Campaign
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e966dfcc-3fb1-4c3f-9347-c92eb3132e2a.png" 
                alt="KALASH Logo" 
                className="h-10 w-10 rounded-full"
              />
              <h1 className="text-xl font-bold text-green-700">KALASH</h1>
            </div>
            <div className="flex space-x-1">
              <Button
                variant={activeModule === 'dashboard' ? 'default' : 'ghost'}
                onClick={() => setActiveModule('dashboard')}
                className="text-sm"
              >
                Dashboard
              </Button>
              <Button
                variant={activeModule === 'marketing' ? 'default' : 'ghost'}
                onClick={() => setActiveModule('marketing')}
                className="text-sm"
              >
                Marketing
              </Button>
              <Button
                variant={activeModule === 'leads' ? 'default' : 'ghost'}
                onClick={() => setActiveModule('leads')}
                className="text-sm"
              >
                Lead Capture
              </Button>
              <Button
                variant={activeModule === 'sales' ? 'default' : 'ghost'}
                onClick={() => setActiveModule('sales')}
                className="text-sm"
              >
                Sales
              </Button>
              <Button
                variant={activeModule === 'crm' ? 'default' : 'ghost'}
                onClick={() => setActiveModule('crm')}
                className="text-sm"
              >
                CRM
              </Button>
              <Button
                variant={activeModule === 'appointments' ? 'default' : 'ghost'}
                onClick={() => setActiveModule('appointments')}
                className="text-sm"
              >
                Appointments
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setSelectedIndustry('')}
              className="text-sm"
            >
              Change Industry
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                setIsAuthenticated(false);
                setActiveModule('landing');
              }}
              className="text-sm"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="p-6">
        {activeModule === 'dashboard' && renderDashboard()}
        {activeModule === 'marketing' && <MarketingModule industry={selectedIndustry} />}
        {activeModule === 'leads' && <EnhancedLeadModule industry={selectedIndustry} />}
        {activeModule === 'sales' && <SalesModule industry={selectedIndustry} />}
        {activeModule === 'crm' && <CRMModule industry={selectedIndustry} />}
        {activeModule === 'appointments' && <AppointmentModule industry={selectedIndustry} />}
      </main>
    </div>
  );
};

export default Index;
