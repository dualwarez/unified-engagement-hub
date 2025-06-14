import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, TrendingUp, GraduationCap, Shield, DollarSign, Home, CheckCircle, Sparkles, ArrowRight, Phone, MessageSquare, Brain, BarChart3, Users, Bot, Calendar, Target, FileText, Settings, AlertCircle, PieChart, TrendingDown } from 'lucide-react';
import AITeleSalesMindMap from './AITeleSalesMindMap';
import FollowUpMeetingMindMap from './FollowUpMeetingMindMap';

interface IndustrySelectorProps {
  onSelect: (industry: string) => void;
  onShowAuth?: () => void;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({
  onSelect,
  onShowAuth
}) => {
  const [selectedTab, setSelectedTab] = useState('industries');
  const [selectedStockCategory, setSelectedStockCategory] = useState(0);

  const industries = [{
    name: 'Real Estate',
    icon: Home,
    description: 'Property sales, rentals, and real estate management',
    benefits: ['Lead qualification', 'Property showcasing', 'Client follow-ups'],
    color: 'from-blue-500 to-blue-600'
  }, {
    name: 'Stock Broking',
    icon: TrendingUp,
    description: 'Investment advisory and stock trading services',
    benefits: ['Market insights', 'Portfolio management', 'Risk assessment'],
    color: 'from-green-500 to-green-600'
  }, {
    name: 'Broking Franchise',
    icon: Building2,
    description: 'Franchise opportunities and business expansion',
    benefits: ['Franchise matching', 'Business planning', 'Growth strategies'],
    color: 'from-purple-500 to-purple-600'
  }, {
    name: 'Insurance',
    icon: Shield,
    description: 'Life, health, and general insurance products',
    benefits: ['Policy recommendations', 'Claims processing', 'Risk evaluation'],
    color: 'from-red-500 to-red-600'
  }, {
    name: 'Loans',
    icon: DollarSign,
    description: 'Personal, business, and mortgage lending',
    benefits: ['Loan eligibility', 'Quick approvals', 'Competitive rates'],
    color: 'from-yellow-500 to-yellow-600'
  }, {
    name: 'Edutech',
    icon: GraduationCap,
    description: 'Educational technology and online learning',
    benefits: ['Course recommendations', 'Learning analytics', 'Progress tracking'],
    color: 'from-indigo-500 to-indigo-600'
  }];

  // Stock Broking Financial Products
  const stockBrokingProducts = [
    {
      category: "Direct Equity",
      icon: TrendingUp,
      color: "bg-blue-500",
      products: [
        "Listed Shares (NSE/BSE)",
        "SME Shares",
        "Pre-IPO Stocks (Unlisted)",
        "Global Equity (via LRS/IFSC/ETF route)"
      ]
    },
    {
      category: "Mutual Funds (Equity-Oriented)",
      icon: PieChart,
      color: "bg-green-500",
      products: [
        "Large Cap, Mid Cap, Small Cap",
        "ELSS (Tax-saving)",
        "Index Funds (Nifty 50, Sensex, etc.)",
        "Sectoral/Thematic Funds",
        "Multi-Asset Funds with Equity Tilt"
      ]
    },
    {
      category: "ETFs (Exchange Traded Funds)",
      icon: BarChart3,
      color: "bg-purple-500",
      products: [
        "Index ETFs (Nifty, Sensex, Nasdaq)",
        "Sector ETFs (Banking, IT)",
        "International ETFs (S&P500, Nasdaq100)"
      ]
    },
    {
      category: "PMS (Portfolio Management Services)",
      icon: Target,
      color: "bg-orange-500",
      products: [
        "Discretionary PMS",
        "Non-Discretionary PMS",
        "Thematic/Concentrated Portfolio PMS"
      ]
    },
    {
      category: "AIF (Alternate Investment Funds - Category III)",
      icon: TrendingDown,
      color: "bg-red-500",
      products: [
        "Hedge Funds",
        "Long-Short Strategies",
        "High Net-Worth Targeted Equity Funds"
      ]
    },
    {
      category: "REITs & InvITs",
      icon: Building2,
      color: "bg-indigo-500",
      products: [
        "Publicly Listed REITs",
        "Infrastructure Investment Trusts"
      ]
    },
    {
      category: "Employee Equity",
      icon: Users,
      color: "bg-teal-500",
      products: [
        "ESOPs / RSUs / Sweat Equity",
        "Employee Stock Purchase Plans (ESPP)"
      ]
    }
  ];

  // Client Lifecycle Journey
  const clientLifecycleStages = [
    {
      id: 1,
      title: "Client Discovery & Onboarding",
      icon: Users,
      color: "bg-blue-500",
      activities: [
        "Investor Profiling (Age, Goals, Income)",
        "KYC & Risk Appetite Assessment",
        "Mode Selection: Direct / Assisted / Robo-Advisory",
        "Platform/App Registration",
        "Brokerage or RIA Selection"
      ]
    },
    {
      id: 2,
      title: "Goal Identification",
      icon: Target,
      color: "bg-green-500",
      activities: [
        "Short-Term (1–3 yrs): Capital Appreciation",
        "Mid-Term (3–5 yrs): House, Wedding, Car",
        "Long-Term (5+ yrs): Retirement, Child Education",
        "Wealth Creation (High Risk, High Return)"
      ]
    },
    {
      id: 3,
      title: "Asset Allocation Planning",
      icon: PieChart,
      color: "bg-purple-500",
      activities: [
        "Conservative (0–30%)",
        "Moderate (30–60%)",
        "Aggressive (60–100%)",
        "Domestic vs Global Equity",
        "Sectors vs Index vs Active vs Passive"
      ]
    },
    {
      id: 4,
      title: "Product Recommendation",
      icon: Brain,
      color: "bg-orange-500",
      activities: [
        "Risk Score Analysis",
        "Tax Bracket Consideration",
        "Goals & Tenure Matching",
        "Portfolio Builder Tools",
        "Fund & Stock Screener"
      ]
    },
    {
      id: 5,
      title: "Execution",
      icon: Settings,
      color: "bg-red-500",
      activities: [
        "Order Placement (Equity / MF / ETF / PMS)",
        "Lumpsum / SIP/STP/SWP",
        "Payment Gateway Integration",
        "Confirmation via Email/SMS/App"
      ]
    },
    {
      id: 6,
      title: "Monitoring & Reporting",
      icon: BarChart3,
      color: "bg-indigo-500",
      activities: [
        "Daily Portfolio Valuation",
        "Profit/Loss Tracking",
        "Benchmark Comparison",
        "XIRR & CAGR Reports",
        "Quarterly Review Call / Report"
      ]
    },
    {
      id: 7,
      title: "Review & Rebalancing",
      icon: AlertCircle,
      color: "bg-yellow-500",
      activities: [
        "Overexposure Alerts",
        "Sector Risk Monitoring",
        "Portfolio Drift Analysis",
        "Rebalancing Advice (Manual/Auto)",
        "Switch / Redeem / Top-Up Recommendations"
      ]
    },
    {
      id: 8,
      title: "Exit & Redemption",
      icon: DollarSign,
      color: "bg-pink-500",
      activities: [
        "Partial / Full Redemption",
        "Exit Load Consideration",
        "Taxation Implication (STCG, LTCG)",
        "Goal Achievement Alert",
        "Switching to Safer Assets"
      ]
    },
    {
      id: 9,
      title: "Post-Exit Service",
      icon: FileText,
      color: "bg-teal-500",
      activities: [
        "Capital Gains Report",
        "Advisory for Reinvestment",
        "Family Planning Services",
        "Portfolio for Children",
        "Referral / Loyalty Benefits"
      ]
    },
    {
      id: 10,
      title: "Client Segmentation",
      icon: TrendingUp,
      color: "bg-emerald-500",
      activities: [
        "New Investor (<1 yr)",
        "Growing Portfolio (₹5–25 Lakh)",
        "HNI (₹25L–2 Cr)",
        "UHNI (₹2 Cr+)",
        "Advisory Shift: DIY → Hybrid → Dedicated"
      ]
    }
  ];

  const coreCapabilities = [{
    category: "AI Lead Qualification",
    icon: Brain,
    features: ["24×7 qualification agent", "Custom prompts & intent detection", "Message bump‑ups to catch interest", "Smart lead progression triggers"]
  }, {
    category: "Automated Follow‑Ups",
    icon: MessageSquare,
    features: ["Personalized multi‑step sequences", "Auto‑pause on lead response", "Response acknowledgement & alerts", "Strategic re‑engagement content"]
  }, {
    category: "WhatsApp CRM",
    icon: Phone,
    features: ["In‑WhatsApp plugin (Chrome extension)", "Auto‑reply, daily messages", "Call tracking & performance metrics", "Contact management & chat history", "Support for quick replies"]
  }, {
    category: "Lead Management CRM",
    icon: Users,
    features: ["Minimal-data entry via WhatsApp", "Customizable sales pipelines", "Smart task reminders", "Centralized lead database", "Advanced analytics & reporting"]
  }, {
    category: "Sales Consulting",
    icon: BarChart3,
    features: ["Funnel analysis & optimization", "Sales team training & KPIs", "Pitch decks, case studies creation", "Custom workflows and strategy design"]
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img alt="KALASH PLATFORM Logo" className="w-[200px] h-auto object-contain scale-50" style={{
            width: '200px',
            transform: 'scale(0.5)'
          }} src="/lovable-uploads/50787e3d-90b3-4882-950e-1da83e68307f.png" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-green-700">KALASH PLATFORM</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="text-green-600 font-semibold">ELIMINATE | AUTOMATE | DELEGATE</span> - AI-powered lead generation and customer relationship management platform
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="industries">Select Industry</TabsTrigger>
            <TabsTrigger value="capabilities">Core Capabilities</TabsTrigger>
            <TabsTrigger value="mindmap">AI Tele-Sales Map</TabsTrigger>
            <TabsTrigger value="followup">Follow-Up Process</TabsTrigger>
            <TabsTrigger value="stockbroking">Stock Broking</TabsTrigger>
          </TabsList>

          <TabsContent value="industries" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Industry</h2>
              <p className="text-gray-600">Select your business sector to get started with customized solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map(industry => {
                const IconComponent = industry.icon;
                return (
                  <Card key={industry.name} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200" onClick={() => onSelect(industry.name)}>
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {industry.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {industry.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full group-hover:bg-blue-600 transition-colors">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="capabilities" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
              <p className="text-gray-600">Comprehensive AI-powered features for your business growth</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreCapabilities.map((capability, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <capability.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      {capability.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI-powered platform to accelerate their growth and streamline operations.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => setSelectedTab('industries')}>
                Choose Your Industry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="mindmap" className="space-y-8">
            <AITeleSalesMindMap />
          </TabsContent>

          <TabsContent value="followup" className="space-y-8">
            <FollowUpMeetingMindMap />
          </TabsContent>

          <TabsContent value="stockbroking" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stock Broking Solutions
              </h2>
              <p className="text-gray-600">Comprehensive investment products and client journey management</p>
            </div>

            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="products">Financial Products</TabsTrigger>
                <TabsTrigger value="journey">Client Journey</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Equity-Based Financial Product Categories
                  </h3>
                  <p className="text-gray-600">Comprehensive range of investment products for stock broking</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Product Categories</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-1">
                          {stockBrokingProducts.map((category, index) => {
                            const IconComponent = category.icon;
                            return (
                              <div
                                key={index}
                                className={`p-3 cursor-pointer transition-all border-l-4 ${
                                  selectedStockCategory === index 
                                    ? 'bg-blue-50 border-blue-500' 
                                    : 'border-transparent hover:bg-gray-50'
                                }`}
                                onClick={() => setSelectedStockCategory(index)}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm">{category.category}</h4>
                                    <p className="text-xs text-gray-500">{category.products.length} products</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="lg:col-span-3">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-lg ${stockBrokingProducts[selectedStockCategory].color} text-white`}>
                            {React.createElement(stockBrokingProducts[selectedStockCategory].icon, { className: "w-6 h-6" })}
                          </div>
                          <div>
                            <CardTitle>{stockBrokingProducts[selectedStockCategory].category}</CardTitle>
                            <CardDescription>Investment products and services</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {stockBrokingProducts[selectedStockCategory].products.map((product, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="font-medium">{product}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="journey" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Client Full Lifecycle Journey
                  </h3>
                  <p className="text-gray-600">Complete workflow from discovery to long-term relationship management</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {clientLifecycleStages.map((stage, index) => {
                    const IconComponent = stage.icon;
                    return (
                      <Card key={stage.id} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${stage.color} text-white`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <Badge variant="outline">Stage {stage.id}</Badge>
                          </div>
                          <CardTitle className="text-lg">{stage.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {stage.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Add-Ons to Lifecycle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Financial Literacy Programs</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Goal-Progress Dashboard</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <Bot className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">Robo-Recommendations</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <Phone className="w-5 h-5 text-orange-600" />
                        <span className="font-medium">RM Support & Alerts</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndustrySelector;
