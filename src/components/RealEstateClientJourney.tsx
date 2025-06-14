
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Phone, 
  MapPin, 
  FileText, 
  Calendar,
  Home,
  DollarSign,
  Key,
  Star,
  TrendingUp,
  Building,
  Handshake,
  CreditCard,
  MessageSquare,
  Mail,
  Video,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

const RealEstateClientJourney = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const journeyStages = [
    {
      id: 1,
      title: "Lead Generation",
      icon: Users,
      color: "bg-blue-500",
      sources: [
        "Digital Ads (Meta, Google)",
        "Website/Portal (99acres, Magicbricks)", 
        "Social Media",
        "Referrals",
        "Walk-ins",
        "Channel Partner/Broker Network"
      ],
      leadTypes: [
        "Direct to Developer",
        "Referred by Mandate Holder", 
        "Sourced by Broker"
      ]
    },
    {
      id: 2,
      title: "First Contact & Qualification",
      icon: Phone,
      color: "bg-green-500",
      handledBy: [
        "Developer's CRM Team",
        "Mandate Team (Inside Sales)",
        "Broker Telecaller or Owner"
      ],
      criteria: [
        "Budget Range",
        "Location Preference",
        "Property Type (1BHK, 2BHK, Commercial)",
        "Investment vs End-use",
        "Home Loan Need"
      ],
      crmUpdates: [
        "Lead Scoring",
        "Source Tagging (Developer / Mandate / Broker)"
      ]
    },
    {
      id: 3,
      title: "Site Visit Coordination",
      icon: MapPin,
      color: "bg-purple-500",
      scheduledBy: [
        "Developer (if direct)",
        "Mandate Team (with developer coordination)",
        "Broker (inform mandate/developer)"
      ],
      visitTypes: [
        "Physical Site Visit",
        "Virtual Tour / Video Call"
      ],
      documents: [
        "Floor Plan",
        "Price Sheet", 
        "Payment Plan",
        "Project Brochure"
      ]
    },
    {
      id: 4,
      title: "Client Nurturing & Follow-Up",
      icon: MessageSquare,
      color: "bg-orange-500",
      followUpBy: [
        "Developer CRM",
        "Mandate Telecaller/Sales",
        "Broker directly (with shared CRM)"
      ],
      valueAdd: [
        "Limited Period Offer",
        "Updated Availability",
        "Custom Payment Plan", 
        "Loan Pre-Approval Help"
      ],
      cadence: "Day 1, Day 3, Day 5, Day 7"
    },
    {
      id: 5,
      title: "Booking Stage",
      icon: FileText,
      color: "bg-red-500",
      process: [
        "Client pays booking amount",
        "Confirmation from developer/mgmt"
      ],
      handledBy: [
        "Developer's Sales Executive",
        "Mandate Closer (if assigned)",
        "Broker (facilitates but connects to mandate)"
      ],
      documents: [
        "Application Form",
        "Cost Sheet",
        "Booking Receipt"
      ]
    },
    {
      id: 6,
      title: "Agreement & Payment Process", 
      icon: CreditCard,
      color: "bg-indigo-500",
      activities: [
        "Agreement Drafting by Developer Legal/CRM",
        "Payment Collection through mandate/developer",
        "Home Loan Coordination by broker/mandate"
      ],
      requiredDocs: [
        "PAN, Aadhaar, Income Proof",
        "KYC Forms"
      ]
    },
    {
      id: 7,
      title: "Post-Booking Process",
      icon: Calendar,
      color: "bg-teal-500",
      handledBy: [
        "Developer CRM",
        "Mandate Customer Desk"
      ],
      includes: [
        "Welcome Email",
        "Project Timeline & Payment Milestones",
        "Buyer Login Credentials",
        "Payment Due Reminders",
        "Construction Updates"
      ]
    },
    {
      id: 8,
      title: "Possession & Handover",
      icon: Key,
      color: "bg-yellow-500",
      activities: [
        "Final Dues Clearance",
        "Site Inspection with Client",
        "Snagging/Defect Checklist",
        "Key Handover with Kit",
        "Occupancy Certificate / Completion Letter"
      ]
    },
    {
      id: 9,
      title: "Post-Sales Engagement",
      icon: Star,
      color: "bg-pink-500",
      activities: [
        "Society Formation",
        "Maintenance Team Connect",
        "Referral Scheme Activation",
        "Feedback Collection"
      ]
    },
    {
      id: 10,
      title: "Commission Settlement",
      icon: DollarSign,
      color: "bg-emerald-500",
      brokerProcess: [
        "From Mandate or Developer as per agreement",
        "TDS deducted and invoice required"
      ],
      mandateProcess: [
        "Gets full commission as per mandate agreement",
        "May share with developer & broker",
        "Handles billing & reporting"
      ]
    }
  ];

  const keyRoles = [
    {
      role: "Developer",
      responsibilities: ["Product Owner", "Inventory Manager", "CRM", "Legal", "Accounts"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      role: "Mandate",
      responsibilities: ["Inside Sales", "Closers", "Loan Desk", "MIS/Reporting"],
      color: "bg-green-100 text-green-800"
    },
    {
      role: "Broker", 
      responsibilities: ["Lead Generator", "Site Visit Coordinator", "Relationship Manager"],
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Real Estate Client Journey
        </h2>
        <p className="text-gray-600">
          Complete workflow with Developer, Mandate, and Broker coordination
        </p>
      </div>

      <Tabs defaultValue="journey" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="journey">Client Journey</TabsTrigger>
          <TabsTrigger value="roles">Key Roles</TabsTrigger>
          <TabsTrigger value="reporting">CRM & Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="journey" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Journey Stages</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {journeyStages.map((stage, index) => (
                      <div
                        key={stage.id}
                        className={`p-3 cursor-pointer transition-all border-l-4 ${
                          selectedStage === index 
                            ? 'bg-blue-50 border-blue-500' 
                            : 'border-transparent hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedStage(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${stage.color} text-white`}>
                            <stage.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{stage.title}</h4>
                            <p className="text-xs text-gray-500">Stage {stage.id}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${journeyStages[selectedStage].color} text-white`}>
                      <journeyStages[selectedStage].icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle>{journeyStages[selectedStage].title}</CardTitle>
                      <CardDescription>Stage {journeyStages[selectedStage].id} of the client journey</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedStage === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Sources
                        </h4>
                        <ul className="space-y-2">
                          {journeyStages[0].sources.map((source, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{source}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Lead Types
                        </h4>
                        <div className="space-y-2">
                          {journeyStages[0].leadTypes.map((type, idx) => (
                            <Badge key={idx} variant="outline" className="mr-2 mb-2">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedStage === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Handled By</h4>
                        <ul className="space-y-2">
                          {journeyStages[1].handledBy.map((handler, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">{handler}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Qualification Criteria</h4>
                        <ul className="space-y-2">
                          {journeyStages[1].criteria.map((criteria, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">CRM Updates</h4>
                        <ul className="space-y-2">
                          {journeyStages[1].crmUpdates.map((update, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-purple-500" />
                              <span className="text-sm">{update}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedStage === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Scheduled By</h4>
                        <ul className="space-y-2">
                          {journeyStages[2].scheduledBy.map((scheduler, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">{scheduler}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Visit Types</h4>
                        <div className="space-y-2">
                          {journeyStages[2].visitTypes.map((type, idx) => (
                            <Badge key={idx} variant="outline" className="mr-2 mb-2">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Documents Shared</h4>
                        <ul className="space-y-2">
                          {journeyStages[2].documents.map((doc, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedStage === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Follow-up By</h4>
                        <ul className="space-y-2">
                          {journeyStages[3].followUpBy.map((followUp, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">{followUp}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <h5 className="font-medium mb-2">Follow-up Cadence</h5>
                          <Badge className="bg-orange-100 text-orange-800">{journeyStages[3].cadence}</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Value Add</h4>
                        <ul className="space-y-2">
                          {journeyStages[3].valueAdd.map((value, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm">{value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedStage >= 4 && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">{journeyStages[selectedStage].title} Details</h4>
                        <p className="text-sm text-gray-600">
                          This stage involves {journeyStages[selectedStage].title.toLowerCase()} activities and coordination between all stakeholders.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyRoles.map((roleData, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge className={roleData.color}>
                      {roleData.role}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    {roleData.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>CRM Dashboard Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Developer View</p>
                      <p className="text-sm text-gray-600">Live Inventory, Bookings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Handshake className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Mandate Reporting</p>
                      <p className="text-sm text-gray-600">Broker-wise performance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Broker Access</p>
                      <p className="text-sm text-gray-600">Own Clients Only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Daily Site Visits</span>
                    <Badge variant="outline">Real-time</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Booking Pipeline</span>
                    <Badge variant="outline">Weekly</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Broker Productivity</span>
                    <Badge variant="outline">Monthly</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">Source Performance</span>
                    <Badge variant="outline">Quarterly</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RealEstateClientJourney;
