
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Phone, 
  Calendar, 
  Video, 
  MapPin, 
  FileText, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Target,
  MessageSquare,
  Mail,
  UserCheck,
  Building,
  Settings,
  BarChart3,
  Eye
} from 'lucide-react';

const FollowUpMeetingMindMap: React.FC = () => {
  const [activeSection, setActiveSection] = useState('leadStage');

  const leadStages = [
    { name: 'New Lead', color: 'bg-blue-100 text-blue-800', icon: Users },
    { name: 'Cold Lead', color: 'bg-gray-100 text-gray-800', icon: Users },
    { name: 'Warm Lead', color: 'bg-yellow-100 text-yellow-800', icon: Users },
    { name: 'Hot Lead', color: 'bg-red-100 text-red-800', icon: Users },
    { name: 'Existing Client', color: 'bg-green-100 text-green-800', icon: UserCheck },
    { name: 'Referral Client', color: 'bg-purple-100 text-purple-800', icon: Target }
  ];

  const followUpTimeline = [
    { day: 'Day 1', action: 'First contact', icon: Phone, color: 'border-blue-500' },
    { day: 'Day 3', action: 'Reminder message', icon: MessageSquare, color: 'border-yellow-500' },
    { day: 'Day 5', action: 'Call & offer value (PDF/demo)', icon: FileText, color: 'border-orange-500' },
    { day: 'Day 7', action: 'Booking a meeting', icon: Calendar, color: 'border-green-500' },
    { day: 'Day 10+', action: 'Soft exit or last nudge', icon: AlertTriangle, color: 'border-red-500' }
  ];

  const meetingTypes = [
    {
      type: 'Online Meeting',
      icon: Video,
      features: [
        'Google Meet / Zoom / MS Teams',
        'Automated Calendly / Zoho Bookings',
        'Email + WhatsApp Confirmation',
        'Auto-Send Agenda'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Offline Meeting',
      icon: MapPin,
      features: [
        'Share Location (Map + Landmark)',
        'Confirm Slot & Time',
        'Print Collateral or Demo Material',
        'Appointment Card (Digital/Paper)'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const postMeetingActions = [
    { action: 'Share MOM (Minutes of Meeting)', icon: FileText, urgency: 'high' },
    { action: 'Send Quotation / Proposal', icon: Mail, urgency: 'high' },
    { action: 'Schedule Next Follow-Up', icon: Calendar, urgency: 'medium' },
    { action: 'Add to CRM with Tags', icon: Settings, urgency: 'medium' },
    { action: 'Assign Task if Needed', icon: CheckCircle, urgency: 'low' }
  ];

  const roles = [
    {
      role: 'SDR (Sales Development Rep)',
      responsibilities: ['Cold Calls', 'Scheduling', 'Initial Qualification'],
      icon: Phone,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      role: 'Sales Executive',
      responsibilities: ['Meeting Execution', 'Closure', 'Negotiation'],
      icon: TrendingUp,
      color: 'bg-green-50 border-green-200'
    },
    {
      role: 'Support/CSM',
      responsibilities: ['After-Sales Service', 'Account Management'],
      icon: UserCheck,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      role: 'Manager',
      responsibilities: ['Oversight', 'Review', 'Strategy'],
      icon: Building,
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Follow-Up & Meeting Process Mind Map
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Complete workflow for managing offline and online meetings with systematic follow-up processes
        </p>
      </div>

      <Tabs value={activeSection} onValueChange={setActiveSection}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="leadStage">Lead Stages</TabsTrigger>
          <TabsTrigger value="followUp">Follow-Up Process</TabsTrigger>
          <TabsTrigger value="meetings">Meeting Management</TabsTrigger>
          <TabsTrigger value="tracking">Tracking & Roles</TabsTrigger>
        </TabsList>

        <TabsContent value="leadStage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Lead Stage Identification
              </CardTitle>
              <CardDescription>
                Categorize prospects based on their engagement level and relationship status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {leadStages.map((stage, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <stage.icon className="w-8 h-8 text-gray-600" />
                    <Badge className={stage.color}>{stage.name}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="followUp" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Follow-Up Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {followUpTimeline.map((item, index) => (
                    <div key={index} className={`flex items-center gap-4 p-4 border-l-4 ${item.color} bg-gray-50 rounded-r-lg`}>
                      <item.icon className="w-6 h-6 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{item.day}</div>
                        <div className="text-sm text-gray-600">{item.action}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  Follow-Up Tools & Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Call', 'WhatsApp', 'Email', 'SMS', 'CRM Notifications', 'AI/VA Reminders'].map((tool) => (
                        <Badge key={tool} variant="outline">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strategy Elements:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Value-Driven Messaging</li>
                      <li>• Ask for Convenience (Time/Mode)</li>
                      <li>• Auto-Reminders (Calendar, WhatsApp)</li>
                      <li>• Emotion-Driven Hooks (Urgency/Scarcity)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {meetingTypes.map((meeting, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${meeting.color} text-white`}>
                      <meeting.icon className="w-6 h-6" />
                    </div>
                    {meeting.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {meeting.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Post-Meeting Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {postMeetingActions.map((action, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${
                    action.urgency === 'high' ? 'border-red-200 bg-red-50' :
                    action.urgency === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                    'border-green-200 bg-green-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <action.icon className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-sm">{action.action}</div>
                        <Badge className={`text-xs ${
                          action.urgency === 'high' ? 'bg-red-100 text-red-800' :
                          action.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {action.urgency} priority
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  Tracking & Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">CRM Functions:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Log every follow-up</li>
                      <li>• Auto-reminder setup</li>
                      <li>• Track call history & meeting outcomes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dashboard View:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {['Upcoming Meetings', 'Missed Follow-Ups', 'Pipeline Stage'].map((item) => (
                        <div key={item} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <Eye className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                  Roles & Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roles.map((role, index) => (
                    <div key={index} className={`p-4 border rounded-lg ${role.color}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <role.icon className="w-5 h-5 text-gray-600" />
                        <h4 className="font-semibold">{role.role}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {role.responsibilities.map((resp, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {resp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Follow-Up Automation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Transform your meeting and follow-up process with systematic automation, 
              ensuring no lead falls through the cracks and every interaction is tracked.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FollowUpMeetingMindMap;
