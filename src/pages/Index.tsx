import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Calendar, MessageSquare, Phone, Mail, Target, DollarSign, PlusCircle, Filter, Search, Bell, Settings, LogIn, MapPin } from 'lucide-react';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/AppSidebar';
import MarketingModule from '@/components/MarketingModule';
import EnhancedLeadModule from '@/components/EnhancedLeadModule';
import CRMModule from '@/components/CRMModule';
import AppointmentModule from '@/components/AppointmentModule';
import SalesModule from '@/components/SalesModule';
import IndustrySelector from '@/components/IndustrySelector';
import B2BAuthFlow from '@/components/B2BAuthFlow';
import CountryCurrencySelector from '@/components/CountryCurrencySelector';
import { CurrencyService } from '@/services/currencyService';

const Index = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  const dashboardData = {
    leads: [{
      name: 'Jan',
      value: 45
    }, {
      name: 'Feb',
      value: 52
    }, {
      name: 'Mar',
      value: 61
    }, {
      name: 'Apr',
      value: 58
    }, {
      name: 'May',
      value: 72
    }, {
      name: 'Jun',
      value: 69
    }],
    conversion: [{
      name: 'Leads',
      value: 156,
      color: '#3b82f6'
    }, {
      name: 'Qualified',
      value: 89,
      color: '#10b981'
    }, {
      name: 'Converted',
      value: 34,
      color: '#f59e0b'
    }]
  };

  // Base revenue in USD for conversion
  const baseRevenueUSD = 45678;
  const formattedRevenue = CurrencyService.convertAndFormat(baseRevenueUSD, selectedCurrency);
  const stats = [{
    title: 'Total Leads',
    value: '1,247',
    icon: Users,
    change: '+12%',
    color: 'text-blue-600'
  }, {
    title: 'Conversion Rate',
    value: '24.5%',
    icon: TrendingUp,
    change: '+3.2%',
    color: 'text-green-600'
  }, {
    title: 'Revenue',
    value: formattedRevenue,
    icon: DollarSign,
    change: '+8.1%',
    color: 'text-purple-600'
  }, {
    title: 'Appointments',
    value: '89',
    icon: Calendar,
    change: '+15%',
    color: 'text-orange-600'
  }];

  const handleAuthComplete = (userData: any) => {
    setIsAuthenticated(true);
    setShowAuth(false);
    console.log('User authenticated:', userData);
  };

  const handleCountryCurrencySelect = (data: {
    country: string;
    currency: string;
  }) => {
    setSelectedCountry(data.country);
    setSelectedCurrency(data.currency);
    setShowCountrySelector(false);
    console.log('Country and currency selected:', data);
  };

  if (showAuth) {
    return <B2BAuthFlow onBack={() => setShowAuth(false)} onComplete={handleAuthComplete} />;
  }
  if (showCountrySelector) {
    return <CountryCurrencySelector onSubmit={handleCountryCurrencySelect} onBack={() => setShowCountrySelector(false)} defaultCountry={`${selectedCountry}|${selectedCurrency}`} defaultCurrency={selectedCurrency} />;
  }
  if (!selectedIndustry && !isAuthenticated) {
    return <IndustrySelector onSelect={setSelectedIndustry} onShowAuth={() => setShowAuth(true)} />;
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
          <p className="text-gray-600 mt-1">
            {selectedIndustry} Industry • {selectedCountry} ({selectedCurrency}) • Welcome back to your automation hub
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
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
                <Pie data={dashboardData.conversion} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={5} dataKey="value">
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          selectedCountry={selectedCountry}
          selectedCurrency={selectedCurrency}
          selectedIndustry={selectedIndustry}
          onShowCountrySelector={() => setShowCountrySelector(true)}
          onChangeIndustry={() => {
            setSelectedIndustry('');
            setIsAuthenticated(false);
          }}
          onShowAuth={() => setShowAuth(true)}
        />
        
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="mx-2 h-4 w-px bg-sidebar-border" />
            <h2 className="text-lg font-semibold capitalize">
              {activeModule === 'leads' ? 'Lead Capture' : activeModule}
            </h2>
          </header>
          
          <main className="flex-1 p-6">
            {activeModule === 'dashboard' && renderDashboard()}
            {activeModule === 'marketing' && <MarketingModule industry={selectedIndustry} currency={selectedCurrency} />}
            {activeModule === 'leads' && <EnhancedLeadModule industry={selectedIndustry} currency={selectedCurrency} />}
            {activeModule === 'sales' && <SalesModule industry={selectedIndustry} currency={selectedCurrency} />}
            {activeModule === 'crm' && <CRMModule industry={selectedIndustry} />}
            {activeModule === 'appointments' && <AppointmentModule industry={selectedIndustry} />}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
