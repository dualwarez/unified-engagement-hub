import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Calendar, MessageSquare, Phone, Mail, Target, DollarSign, PlusCircle, Filter, Search, Bell, Settings, LogIn, MapPin } from 'lucide-react';
import MarketingModule from '@/components/MarketingModule';
import EnhancedLeadModule from '@/components/EnhancedLeadModule';
import CRMModule from '@/components/CRMModule';
import AppointmentModule from '@/components/AppointmentModule';
import SalesModule from '@/components/SalesModule';
import IndustrySelector from '@/components/IndustrySelector';
import B2BAuthFlow from '@/components/B2BAuthFlow';
import CountryCurrencySelector from '@/components/CountryCurrencySelector';
import AITeleSalesMindMap from '@/components/AITeleSalesMindMap';
import FollowUpMeetingMindMap from '@/components/FollowUpMeetingMindMap';
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
    setSelectedIndustry('Stock Broking'); // Auto-select after login
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

  // Show auth flow
  if (showAuth) {
    return <B2BAuthFlow onBack={() => setShowAuth(false)} onComplete={handleAuthComplete} />;
  }

  // Show country selector
  if (showCountrySelector) {
    return <CountryCurrencySelector onSubmit={handleCountryCurrencySelect} onBack={() => setShowCountrySelector(false)} defaultCountry={`${selectedCountry}|${selectedCurrency}`} defaultCurrency={selectedCurrency} />;
  }

  // Show industry selector if not authenticated and no industry selected
  if (!selectedIndustry && !isAuthenticated) {
    return <IndustrySelector onSelect={setSelectedIndustry} onShowAuth={() => setShowAuth(true)} />;
  }

  // Main authenticated application view
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-center space-y-1">
              <img 
                alt="KALASH PLATFORM Logo" 
                className="w-[200px] h-auto object-contain scale-25" 
                src="/lovable-uploads/040cc84c-6abc-422b-82cf-4d087a5ad0f9.png"
                style={{ width: '200px', transform: 'scale(0.25)' }}
              />
              <p className="text-xs text-green-600 font-semibold tracking-wide">
                ELIMINATE | AUTOMATE | DELEGATE
              </p>
            </div>
            
            {/* Main Navigation Tabs matching the uploaded image */}
            <div className="flex space-x-1">
              <Button 
                variant={activeModule === 'select-industry' ? 'default' : 'ghost'} 
                onClick={() => setActiveModule('select-industry')} 
                className="text-sm"
              >
                Select Industry
              </Button>
              <Button 
                variant={activeModule === 'core-capabilities' ? 'default' : 'ghost'} 
                onClick={() => setActiveModule('core-capabilities')} 
                className="text-sm"
              >
                Core Capabilities
              </Button>
              <Button 
                variant={activeModule === 'ai-tele-sales' ? 'default' : 'ghost'} 
                onClick={() => setActiveModule('ai-tele-sales')} 
                className="text-sm"
              >
                AI Tele-Sales Map
              </Button>
              <Button 
                variant={activeModule === 'follow-up' ? 'default' : 'ghost'} 
                onClick={() => setActiveModule('follow-up')} 
                className="text-sm"
              >
                Follow-Up Process
              </Button>
              <Button 
                variant={activeModule === 'stock-products' ? 'default' : 'ghost'} 
                onClick={() => setActiveModule('stock-products')} 
                className="text-sm"
              >
                Stock Products
              </Button>
              <Button 
                variant={activeModule === 'client-journey' ? 'default' : 'ghost'} 
                onClick={() => setActiveModule('client-journey')} 
                className="text-sm"
              >
                Client Journey
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => setShowCountrySelector(true)}>
              <MapPin className="w-4 h-4 mr-2" />
              {selectedCountry} ({selectedCurrency})
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" onClick={() => {
              setSelectedIndustry('');
              setIsAuthenticated(false);
            }} className="text-sm">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="p-6">
        {activeModule === 'select-industry' && (
          <IndustrySelector onSelect={setSelectedIndustry} onShowAuth={() => setShowAuth(true)} />
        )}
        
        {activeModule === 'core-capabilities' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
              <p className="text-gray-600">Comprehensive AI-powered features for your business growth</p>
            </div>
            <MarketingModule industry={selectedIndustry || 'Stock Broking'} currency={selectedCurrency} />
          </div>
        )}
        
        {activeModule === 'ai-tele-sales' && <AITeleSalesMindMap />}
        
        {activeModule === 'follow-up' && <FollowUpMeetingMindMap />}
        
        {activeModule === 'stock-products' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stock Products</h2>
              <p className="text-gray-600">Comprehensive equity-based financial products</p>
            </div>
            <SalesModule industry={selectedIndustry || 'Stock Broking'} currency={selectedCurrency} />
          </div>
        )}
        
        {activeModule === 'client-journey' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Journey</h2>
              <p className="text-gray-600">Complete client lifecycle management</p>
            </div>
            <CRMModule industry={selectedIndustry || 'Stock Broking'} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
