import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Heart, GraduationCap, Car, Home, Utensils, Briefcase, ShoppingBag, LogIn, Plane, Music, Palette, Camera, Dumbbell, Leaf, Users, Laptop, Truck, Settings, Hammer, Shield, DollarSign, Clock, Phone, MapPin, Shirt, Coffee } from 'lucide-react';

interface IndustrySelectorProps {
  onSelect: (industry: string) => void;
  onShowAuth: () => void;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({
  onSelect,
  onShowAuth
}) => {
  const industries = [
    {
      name: 'Real Estate',
      icon: Home,
      description: 'Property sales, rentals, and management',
      color: 'bg-blue-500'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Medical practices, clinics, and wellness',
      color: 'bg-red-500'
    }, {
      name: 'Education',
      icon: GraduationCap,
      description: 'Schools, tutoring, and training centers',
      color: 'bg-green-500'
    }, {
      name: 'Automotive',
      icon: Car,
      description: 'Car dealerships and service centers',
      color: 'bg-purple-500'
    }, {
      name: 'Construction',
      icon: Building2,
      description: 'Contractors and construction companies',
      color: 'bg-orange-500'
    }, {
      name: 'Restaurant',
      icon: Utensils,
      description: 'Food service and hospitality',
      color: 'bg-yellow-500'
    }, {
      name: 'Professional Services',
      icon: Briefcase,
      description: 'Legal, consulting, and business services',
      color: 'bg-indigo-500'
    }, {
      name: 'Retail',
      icon: ShoppingBag,
      description: 'Stores and e-commerce businesses',
      color: 'bg-pink-500'
    }, {
      name: 'Travel & Tourism',
      icon: Plane,
      description: 'Travel agencies and tour operators',
      color: 'bg-teal-500'
    }, {
      name: 'Entertainment',
      icon: Music,
      description: 'Media, events, and entertainment',
      color: 'bg-purple-600'
    }, {
      name: 'Creative Services',
      icon: Palette,
      description: 'Design, marketing, and creative agencies',
      color: 'bg-rose-500'
    }, {
      name: 'Photography',
      icon: Camera,
      description: 'Photography and videography services',
      color: 'bg-gray-600'
    }, {
      name: 'Fitness & Sports',
      icon: Dumbbell,
      description: 'Gyms, fitness centers, and sports',
      color: 'bg-emerald-500'
    }, {
      name: 'Beauty & Wellness',
      icon: Leaf,
      description: 'Salons, spas, and wellness centers',
      color: 'bg-lime-500'
    }, {
      name: 'Non-Profit',
      icon: Users,
      description: 'NGOs and charitable organizations',
      color: 'bg-cyan-500'
    }, {
      name: 'Technology',
      icon: Laptop,
      description: 'IT services and software companies',
      color: 'bg-blue-600'
    }, {
      name: 'Logistics',
      icon: Truck,
      description: 'Transportation and logistics services',
      color: 'bg-amber-600'
    }, {
      name: 'Manufacturing',
      icon: Settings,
      description: 'Manufacturing and industrial services',
      color: 'bg-slate-600'
    }, {
      name: 'Home Services',
      icon: Hammer,
      description: 'Repair, maintenance, and home improvement',
      color: 'bg-orange-600'
    }, {
      name: 'Insurance',
      icon: Shield,
      description: 'Insurance agencies and brokers',
      color: 'bg-blue-700'
    }, {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Banking, loans, and financial advisors',
      color: 'bg-green-600'
    }, {
      name: 'Personal Services',
      icon: Clock,
      description: 'Personal assistance and lifestyle services',
      color: 'bg-violet-500'
    }, {
      name: 'Telecommunications',
      icon: Phone,
      description: 'Telecom and communication services',
      color: 'bg-blue-800'
    }, {
      name: 'Local Services',
      icon: MapPin,
      description: 'Local community and municipal services',
      color: 'bg-red-600'
    }, {
      name: 'Fashion & Apparel',
      icon: Shirt,
      description: 'Clothing stores and fashion brands',
      color: 'bg-pink-600'
    }, {
      name: 'Cafes & Coffee Shops',
      icon: Coffee,
      description: 'Coffee shops and beverage services',
      color: 'bg-amber-700'
    }
  ];

  const renderRealEstateJourney = () => (
    <div className="max-w-6xl mx-auto mt-12 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Real Estate Client Journey</h2>
        <p className="text-gray-600">Complete workflow with Developer, Mandate, and Broker collaboration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Lead Generation */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-600 flex items-center">
              🟢 1. Lead Generation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-2">📢 Sources:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Digital Ads (Meta, Google)</li>
                <li>• Website/Portal (99acres, Magicbricks)</li>
                <li>• Social Media</li>
                <li>• Referrals</li>
                <li>• Walk-ins</li>
                <li>• Channel Partner/Broker Network</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">👤 Lead Type:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Direct to Developer</li>
                <li>• Referred by Mandate Holder</li>
                <li>• Sourced by Broker</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* First Contact & Qualification */}
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-600">
              📲 2. First Contact & Qualification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-2">🎯 Handled by:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Developer's CRM Team</li>
                <li>• Mandate Team (Inside Sales)</li>
                <li>• Broker Telecaller or Owner</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">✅ Qualification Criteria:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Budget Range</li>
                <li>• Location Preference</li>
                <li>• Property Type (1BHK, 2BHK, Commercial)</li>
                <li>• Investment vs End-use</li>
                <li>• Home Loan Need</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Site Visit Coordination */}
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-600">
              🧭 3. Site Visit Coordination
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-2">📍 Scheduled by:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Developer (if direct)</li>
                <li>• Mandate Team (with developer coordination)</li>
                <li>• Broker (inform mandate/developer)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">🚗 Visit Type:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Physical Site Visit</li>
                <li>• Virtual Tour / Video Call</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">📃 Documents Shared:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Floor Plan</li>
                <li>• Price Sheet</li>
                <li>• Payment Plan</li>
                <li>• Project Brochure</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Client Nurturing & Follow-Up */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-600">
              🧾 4. Client Nurturing & Follow-Up
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-2">🔁 Who follows up:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Developer CRM</li>
                <li>• Mandate Telecaller/Sales</li>
                <li>• Broker directly (with shared CRM)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">🎁 Value Add:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Limited Period Offer</li>
                <li>• Updated Availability</li>
                <li>• Custom Payment Plan</li>
                <li>• Loan Pre-Approval Help</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">📅 Follow-Up Cadence:</p>
              <p className="text-sm text-gray-600">Day 1, Day 3, Day 5, Day 7</p>
            </div>
          </CardContent>
        </Card>

        {/* Booking Stage */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">
              📝 5. Booking Stage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-2">🖊️ Token Booking:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Client pays booking amount</li>
                <li>• Confirmation from developer/mgmt</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">📄 Handled by:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Developer's Sales Executive</li>
                <li>• Mandate Closer (if assigned)</li>
                <li>• Broker (facilitates but connects to mandate)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">🧾 Documents Issued:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Application Form</li>
                <li>• Cost Sheet</li>
                <li>• Booking Receipt</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Agreement & Payment Process */}
        <Card className="border-indigo-200">
          <CardHeader>
            <CardTitle className="text-indigo-600">
              🏛️ 6. Agreement & Payment Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-2">🧑‍⚖️ Agreement Drafting:</p>
              <p className="text-sm text-gray-600">By Developer Legal/CRM Team</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">📥 Payment Collection:</p>
              <p className="text-sm text-gray-600">Through mandate account or developer's system</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">💼 Home Loan Coordination:</p>
              <p className="text-sm text-gray-600">Done by broker or mandate's loan desk</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">📄 Documents Required:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• PAN, Aadhaar, Income Proof</li>
                <li>• KYC Forms</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Post-Booking Process */}
        <Card className="border-teal-200">
          <CardHeader>
            <CardTitle className="text-teal-600">
              📦 7. Post-Booking Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-2">🔄 Handled by:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Developer CRM</li>
                <li>• Mandate Customer Desk</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">📬 Includes:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Welcome Email</li>
                <li>• Project Timeline & Payment Milestones</li>
                <li>• Buyer Login Credentials (if portal)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">📈 Milestone Follow-Up:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Payment Due Reminders</li>
                <li>• Construction Updates</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Possession & Handover */}
        <Card className="border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-600">
              🛠️ 8. Possession & Handover
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>🧾 Final Dues Clearance</li>
              <li>🏢 Site Inspection with Client</li>
              <li>🧰 Snagging/Defect Checklist</li>
              <li>🗝️ Key Handover with Kit</li>
              <li>📜 Occupancy Certificate / Completion Letter</li>
            </ul>
          </CardContent>
        </Card>

        {/* Post-Sales Engagement */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-pink-600">
              💬 9. Post-Sales Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>🏘️ Society Formation</li>
              <li>🛎️ Maintenance Team Connect</li>
              <li>🙋 Referral Scheme Activation</li>
              <li>⭐ Feedback Collection</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Key Roles and Commission Settlement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="border-emerald-200">
          <CardHeader>
            <CardTitle className="text-emerald-600">
              💸 10. Commission Settlement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-sm mb-2">Broker:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• From Mandate or Developer as per agreement</li>
                <li>• TDS deducted and invoice required</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">Mandate Holder:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Gets full commission as per mandate agreement</li>
                <li>• May share with developer & broker</li>
                <li>• Handles billing & reporting</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-600">
              👥 Key Roles Involved
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-sm mb-2">Developer:</p>
              <p className="text-sm text-gray-600">Product Owner, Inventory Manager, CRM, Legal, Accounts</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">Mandate:</p>
              <p className="text-sm text-gray-600">Inside Sales, Closers, Loan Desk, MIS/Reporting</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">Broker:</p>
              <p className="text-sm text-gray-600">Lead Generator, Site Visit Coordinator, Relationship Manager</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CRM & Reporting */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-600">
            🧾 11. CRM & Reporting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-semibold text-sm mb-2">🖥️ Shared CRM Dashboard:</p>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Developer View (Live Inventory, Bookings)</li>
              <li>• Mandate Reporting (Broker-wise performance)</li>
              <li>• Broker Access (Own Clients Only)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-2">📊 Reports:</p>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Daily Site Visits</li>
              <li>• Booking Pipeline</li>
              <li>• Broker Productivity</li>
              <li>• Source Performance</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header with Login Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img alt="KALASH Logo" className="h-32 w-32" src="/lovable-uploads/b18e37f6-7a2f-4b13-8160-5bccd16410f0.png" />
          </div>
          <div className="flex gap-3">
            <Button onClick={onShowAuth} className="text-sm">
              <LogIn className="w-4 h-4 mr-2" />
              Login as B2B User
            </Button>
            <Button onClick={onShowAuth} variant="outline" className="text-sm">
              Register Your Business
            </Button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Register your business & activate AI Agent</h1>
          <p className="text-xl text-gray-600 mb-2">Choose your industry to get started</p>
          <p className="text-gray-500">We'll customize your AI sales agent based on your business type</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-green-300" onClick={() => onSelect(industry.name)}>
              <CardHeader className="text-center pb-2">
                <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-sm">{industry.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real Estate Client Journey */}
        {renderRealEstateJourney()}

        {/* Subscription Plans Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600">Select the perfect plan for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard Plan */}
            <Card className="relative border-2 hover:border-green-300 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Standard</CardTitle>
                <div className="text-4xl font-bold text-green-600 mt-2">$36/mo</div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Up to 500 leads per month
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Basic CRM features
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Email marketing
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Basic analytics
                  </div>
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Value Plan */}
            <Card className="relative border-2 border-green-500 hover:border-green-600 transition-all duration-300 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Value</CardTitle>
                <div className="text-4xl font-bold text-green-600 mt-2">$180/mo</div>
                <CardDescription>Best value for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Up to 2,000 leads per month
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Advanced CRM features
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Email + SMS marketing
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Advanced analytics
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    WhatsApp integration
                  </div>
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-2 hover:border-green-300 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Pro</CardTitle>
                <div className="text-4xl font-bold text-green-600 mt-2">$540/mo</div>
                <CardDescription>For enterprise-level businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Unlimited leads
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Full CRM suite
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Omnichannel marketing
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Custom analytics & reports
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    API access & integrations
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Priority support
                  </div>
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Don't see your industry? You can customize settings later in the dashboard.
          </p>
          <Button onClick={onShowAuth} className="mt-4" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustrySelector;
