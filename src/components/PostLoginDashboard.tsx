
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  AlertCircle, 
  Upload, 
  Settings, 
  Users, 
  Bot,
  Key,
  Activity,
  TrendingUp,
  MessageSquare,
  Calendar,
  Target,
  Zap,
  Shield,
  BookOpen
} from 'lucide-react';

interface PostLoginDashboardProps {
  userData: any;
  onContinue: () => void;
}

const PostLoginDashboard: React.FC<PostLoginDashboardProps> = ({ userData, onContinue }) => {
  const [profileCompletion] = useState(75);
  const [agentStatus, setAgentStatus] = useState<'inactive' | 'setup' | 'live'>('setup');

  const setupSteps = [
    { id: 'profile', title: 'Complete Company Profile', completed: true, icon: CheckCircle },
    { id: 'logo', title: 'Upload Business Logo', completed: false, icon: Upload },
    { id: 'whatsapp', title: 'WhatsApp Sender ID Setup', completed: false, icon: MessageSquare },
    { id: 'crm', title: 'CRM Integration (Optional)', completed: false, icon: Settings },
    { id: 'leads', title: 'Lead Source Mapping', completed: false, icon: Target },
    { id: 'goals', title: 'Set AI Agent Goals', completed: true, icon: Bot }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'inactive': return 'bg-gray-500';
      case 'setup': return 'bg-yellow-500';
      case 'live': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'inactive': return 'Inactive';
      case 'setup': return 'Setting Up';
      case 'live': return 'Live & Active';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome to KALASH!</h1>
              <p className="text-gray-600 mt-1">Complete your setup to activate your AI sales agent</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={`${getStatusColor(agentStatus)} text-white`}>
                AI Agent: {getStatusText(agentStatus)}
              </Badge>
              <Button onClick={onContinue}>
                Continue to Dashboard
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Completion */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Company Profile Setup
              </CardTitle>
              <CardDescription>
                Complete your profile to unlock all features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Profile Completion</span>
                  <span className="text-sm text-gray-600">{profileCompletion}%</span>
                </div>
                <Progress value={profileCompletion} className="h-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {setupSteps.map((step) => (
                  <div key={step.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <step.icon className={`h-5 w-5 ${step.completed ? 'text-green-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${step.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                        {step.title}
                      </p>
                    </div>
                    {step.completed && <CheckCircle className="h-4 w-4 text-green-600" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload Business Logo
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Key className="w-4 h-4 mr-2" />
                Setup API Keys
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Configure WhatsApp
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                CRM Integration
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                View Onboarding Guide
              </Button>
            </CardContent>
          </Card>

          {/* AI Agent Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Agent Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">WhatsApp Integration</span>
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Lead Source Mapping</span>
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Agent Goals</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-1">Selected Goals:</h4>
                <div className="space-y-1">
                  {userData?.agentGoals?.map((goal: string) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-blue-600" />
                      <span className="text-xs text-blue-800 capitalize">
                        {goal.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team & Roles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team & Roles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{userData?.ownerName}</p>
                    <p className="text-xs text-gray-600">{userData?.designation}</p>
                  </div>
                  <Badge variant="outline">Admin</Badge>
                </div>
              </div>

              <Button className="w-full" variant="outline" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Add Team Members
              </Button>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Available Roles:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Admin (Full Access)</li>
                  <li>• Sales Executive (Lead Management)</li>
                  <li>• Support (View Only)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Integration Options */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Automation Integration Options
              </CardTitle>
              <CardDescription>
                Connect your existing tools and workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">CRM Integration</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Google Sheets Auto Sync
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Salesforce Connect
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      HubSpot Integration
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Communication</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      WhatsApp Business API
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Email Automation
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      SMS Gateway
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Analytics & API</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Lead Push API
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Appointment Logs
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Performance Analytics
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostLoginDashboard;
