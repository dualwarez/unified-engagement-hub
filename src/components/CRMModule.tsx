
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Video, 
  Clock, 
  User, 
  Send,
  Plus,
  Search,
  Filter
} from 'lucide-react';

interface CRMModuleProps {
  industry: string;
}

const CRMModule: React.FC<CRMModuleProps> = ({ industry }) => {
  const [selectedContact, setSelectedContact] = useState(0);
  const [messageText, setMessageText] = useState('');
  const [showBantFilter, setShowBantFilter] = useState(false);
  const [bantFilters, setBantFilters] = useState({
    budget: '',
    authority: '',
    needs: '',
    timeline: ''
  });

  const contacts = [
    {
      id: 1,
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      status: 'active',
      lastContact: '2 hours ago',
      priority: 'high',
      tags: ['Hot Lead', 'First Time Buyer'],
      notes: 'Interested in downtown properties. Budget: $250k-300k',
      bantScore: 85,
      bantData: {
        budget: 'High ($250k-300k)',
        authority: 'Decision Maker',
        needs: 'Urgent - Relocating',
        timeline: '2-3 months'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      phone: '+1 (555) 987-6543',
      email: 'sarah.j@email.com',
      status: 'active',
      lastContact: '1 day ago',
      priority: 'medium',
      tags: ['Luxury', 'Investor'],
      notes: 'Looking for investment properties. Cash buyer.',
      bantScore: 78,
      bantData: {
        budget: 'Very High ($500k+)',
        authority: 'Influencer',
        needs: 'Investment Portfolio',
        timeline: '6-12 months'
      }
    },
    {
      id: 3,
      name: 'Mike Wilson',
      phone: '+1 (555) 456-7890',
      email: 'mike.wilson@email.com',
      status: 'nurturing',
      lastContact: '3 days ago',
      priority: 'low',
      tags: ['Referral'],
      notes: 'Referred by existing client. Timeline flexible.',
      bantScore: 45,
      bantData: {
        budget: 'Medium ($150k-200k)',
        authority: 'User',
        needs: 'Future Planning',
        timeline: '12+ months'
      }
    }
  ];

  const conversations = [
    {
      id: 1,
      contactId: 1,
      messages: [
        { type: 'received', content: 'Hi, I saw your listing for the downtown condo. Is it still available?', time: '10:30 AM', platform: 'whatsapp' },
        { type: 'sent', content: 'Yes, it is! Would you like to schedule a viewing?', time: '10:35 AM', platform: 'whatsapp' },
        { type: 'received', content: 'That would be great. What times are available this week?', time: '10:40 AM', platform: 'whatsapp' }
      ]
    },
    {
      id: 2,
      contactId: 2,
      messages: [
        { type: 'sent', content: 'Thanks for your interest in our investment properties. I have several options that match your criteria.', time: 'Yesterday 3:15 PM', platform: 'email' },
        { type: 'received', content: 'Excellent! Could you send me the details?', time: 'Yesterday 4:20 PM', platform: 'email' }
      ]
    }
  ];

  const currentConversation = conversations.find(conv => conv.contactId === contacts[selectedContact]?.id);

  const communicationStats = [
    { platform: 'WhatsApp', count: 234, response: '95%', color: 'text-green-600' },
    { platform: 'Phone Calls', count: 89, response: '87%', color: 'text-blue-600' },
    { platform: 'Email', count: 156, response: '73%', color: 'text-purple-600' },
    { platform: 'Video Calls', count: 45, response: '98%', color: 'text-orange-600' }
  ];

  const templates = {
    'Real Estate': [
      'Property Inquiry Response',
      'Viewing Confirmation',
      'Market Update',
      'Price Negotiation',
      'Closing Reminder'
    ],
    'Healthcare': [
      'Appointment Confirmation',
      'Test Results Available',
      'Follow-up Reminder',
      'Insurance Verification',
      'Prescription Ready'
    ],
    'Education': [
      'Enrollment Information',
      'Class Schedule Update',
      'Payment Reminder',
      'Progress Report',
      'Event Invitation'
    ]
  };

  const currentTemplates = templates[industry as keyof typeof templates] || templates['Real Estate'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CRM & Communications</h1>
          <p className="text-gray-600 mt-1">Manage customer relationships and communications</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send WhatsApp
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {communicationStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.platform}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.count}</p>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.response} response rate</p>
                </div>
                {stat.platform === 'WhatsApp' && <MessageSquare className={`w-8 h-8 ${stat.color}`} />}
                {stat.platform === 'Phone Calls' && <Phone className={`w-8 h-8 ${stat.color}`} />}
                {stat.platform === 'Email' && <Mail className={`w-8 h-8 ${stat.color}`} />}
                {stat.platform === 'Video Calls' && <Video className={`w-8 h-8 ${stat.color}`} />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Contacts
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Search className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant={showBantFilter ? "default" : "outline"}
                  onClick={() => setShowBantFilter(!showBantFilter)}
                >
                  <Filter className="w-4 h-4" />
                  BANT Filter
                </Button>
              </div>
            </CardTitle>
            {showBantFilter && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
                <h4 className="font-medium text-sm">BANT Lead Qualification Filter</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-gray-600">Budget</label>
                    <select 
                      className="w-full text-xs p-1 border rounded"
                      value={bantFilters.budget}
                      onChange={(e) => setBantFilters({...bantFilters, budget: e.target.value})}
                    >
                      <option value="">All Budgets</option>
                      <option value="low">Low (&lt;$150k)</option>
                      <option value="medium">Medium ($150k-300k)</option>
                      <option value="high">High ($300k-500k)</option>
                      <option value="very-high">Very High ($500k+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600">Authority</label>
                    <select 
                      className="w-full text-xs p-1 border rounded"
                      value={bantFilters.authority}
                      onChange={(e) => setBantFilters({...bantFilters, authority: e.target.value})}
                    >
                      <option value="">All Authority Levels</option>
                      <option value="decision-maker">Decision Maker</option>
                      <option value="influencer">Influencer</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600">Needs</label>
                    <select 
                      className="w-full text-xs p-1 border rounded"
                      value={bantFilters.needs}
                      onChange={(e) => setBantFilters({...bantFilters, needs: e.target.value})}
                    >
                      <option value="">All Needs</option>
                      <option value="urgent">Urgent</option>
                      <option value="investment">Investment</option>
                      <option value="future">Future Planning</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600">Timeline</label>
                    <select 
                      className="w-full text-xs p-1 border rounded"
                      value={bantFilters.timeline}
                      onChange={(e) => setBantFilters({...bantFilters, timeline: e.target.value})}
                    >
                      <option value="">All Timelines</option>
                      <option value="immediate">0-3 months</option>
                      <option value="short">3-6 months</option>
                      <option value="medium">6-12 months</option>
                      <option value="long">12+ months</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-xs">
                    BANT Score Range: 0-100
                  </Badge>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setBantFilters({budget: '', authority: '', needs: '', timeline: ''})}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {contacts.map((contact, index) => (
                <div
                  key={contact.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 ${
                    selectedContact === index ? 'bg-blue-50 border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedContact(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{contact.name}</h4>
                      <p className="text-sm text-gray-600">{contact.phone}</p>
                      <p className="text-xs text-gray-500">Last contact: {contact.lastContact}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex flex-col gap-1">
                        <Badge variant={contact.priority === 'high' ? 'destructive' : contact.priority === 'medium' ? 'default' : 'secondary'}>
                          {contact.priority}
                        </Badge>
                        <Badge 
                          variant={contact.bantScore >= 70 ? 'default' : contact.bantScore >= 50 ? 'secondary' : 'outline'}
                          className={`text-xs ${
                            contact.bantScore >= 70 ? 'bg-green-100 text-green-800' : 
                            contact.bantScore >= 50 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          BANT: {contact.bantScore}
                        </Badge>
                      </div>
                      <div className="flex gap-1 mt-1">
                        {contact.tags.slice(0, 1).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <Tabs defaultValue="conversation">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{contacts[selectedContact]?.name || 'Select a contact'}</CardTitle>
                  <CardDescription>{contacts[selectedContact]?.email}</CardDescription>
                </div>
                <TabsList>
                  <TabsTrigger value="conversation">Conversation</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>

            <TabsContent value="conversation">
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {currentConversation?.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'sent' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className={`text-xs ${message.type === 'sent' ? 'text-blue-100' : 'text-gray-500'}`}>
                            {message.time}
                          </p>
                          {message.platform === 'whatsapp' && (
                            <MessageSquare className="w-3 h-3 text-green-500" />
                          )}
                          {message.platform === 'email' && (
                            <Mail className="w-3 h-3 text-purple-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-3">
                    <Textarea
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="flex-1 min-h-[60px]"
                    />
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="details">
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Phone</label>
                      <p className="text-gray-900">{contacts[selectedContact]?.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-900">{contacts[selectedContact]?.email}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Tags</h4>
                  <div className="flex gap-2 flex-wrap">
                    {contacts[selectedContact]?.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">BANT Qualification</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <label className="text-sm font-medium text-red-700">Budget</label>
                      <p className="text-sm text-gray-900">{contacts[selectedContact]?.bantData?.budget}</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <label className="text-sm font-medium text-yellow-700">Authority</label>
                      <p className="text-sm text-gray-900">{contacts[selectedContact]?.bantData?.authority}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <label className="text-sm font-medium text-blue-700">Needs</label>
                      <p className="text-sm text-gray-900">{contacts[selectedContact]?.bantData?.needs}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <label className="text-sm font-medium text-green-700">Timeline</label>
                      <p className="text-sm text-gray-900">{contacts[selectedContact]?.bantData?.timeline}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge 
                      variant="outline" 
                      className={`text-lg px-4 py-2 ${
                        (contacts[selectedContact]?.bantScore || 0) >= 70 ? 'bg-green-100 text-green-800 border-green-300' : 
                        (contacts[selectedContact]?.bantScore || 0) >= 50 ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 
                        'bg-red-100 text-red-800 border-red-300'
                      }`}
                    >
                      BANT Score: {contacts[selectedContact]?.bantScore}/100
                      {(contacts[selectedContact]?.bantScore || 0) >= 70 ? ' (Hot Lead)' : 
                       (contacts[selectedContact]?.bantScore || 0) >= 50 ? ' (Warm Lead)' : 
                       ' (Cold Lead)'}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Notes</h4>
                  <Textarea
                    placeholder="Add notes about this contact..."
                    value={contacts[selectedContact]?.notes || ''}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Activity Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">WhatsApp message sent</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">Phone call completed</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="templates">
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Message Templates</h4>
                  <div className="space-y-3">
                    {currentTemplates.map((template, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                        <span className="font-medium">{template}</span>
                        <Button size="sm" variant="outline">Use Template</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default CRMModule;
