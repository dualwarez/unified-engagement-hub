
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { 
  Phone, 
  Clock, 
  User, 
  MessageSquare, 
  Calendar,
  PhoneCall,
  Mic,
  MicOff,
  Play,
  Plus
} from 'lucide-react';

interface CallManagementProps {
  leads: any[];
  onLeadUpdate: () => void;
  industry: string;
}

const CallManagement: React.FC<CallManagementProps> = ({ leads, onLeadUpdate, industry }) => {
  const [callLogs, setCallLogs] = useState([]);
  const [callScripts, setCallScripts] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [activeCall, setActiveCall] = useState(null);
  const [callNotes, setCallNotes] = useState('');
  const [callOutcome, setCallOutcome] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCallLogs();
    fetchCallScripts();
  }, [industry]);

  const fetchCallLogs = async () => {
    try {
      const { data, error } = await supabase
        .from('call_logs')
        .select(`
          *,
          leads(name, phone, email)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCallLogs(data || []);
    } catch (error) {
      console.error('Error fetching call logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCallScripts = async () => {
    try {
      const industryKey = industry.toLowerCase().replace(' ', '_');
      const { data, error } = await supabase
        .from('call_scripts')
        .select('*')
        .eq('industry', industryKey)
        .eq('is_active', true);

      if (error) throw error;
      setCallScripts(data || []);
    } catch (error) {
      console.error('Error fetching call scripts:', error);
    }
  };

  const startCall = (lead) => {
    setSelectedLead(lead);
    setActiveCall({
      lead_id: lead.id,
      start_time: new Date(),
      duration: 0
    });
    setCallNotes('');
    setCallOutcome('');
  };

  const endCall = async () => {
    if (!activeCall || !selectedLead) return;

    try {
      const duration = Math.floor((new Date() - activeCall.start_time) / 1000);
      
      const { error } = await supabase
        .from('call_logs')
        .insert([{
          lead_id: selectedLead.id,
          user_id: 'current-user-id', // This should be the actual user ID
          call_duration: duration,
          outcome: callOutcome,
          notes: callNotes,
          scheduled_follow_up: null // Can be set based on outcome
        }]);

      if (error) throw error;

      // Update lead status based on call outcome
      if (callOutcome && selectedLead.status === 'new') {
        const newStatus = callOutcome === 'interested' ? 'qualified' : 
                         callOutcome === 'demo_scheduled' ? 'demo_scheduled' : 'contacted';
        
        await supabase
          .from('leads')
          .update({ 
            status: newStatus,
            last_contact_at: new Date().toISOString(),
            first_contact_at: selectedLead.first_contact_at || new Date().toISOString()
          })
          .eq('id', selectedLead.id);
      }

      setActiveCall(null);
      setSelectedLead(null);
      fetchCallLogs();
      onLeadUpdate();
    } catch (error) {
      console.error('Error logging call:', error);
    }
  };

  const outcomeOptions = [
    { value: 'interested', label: 'Interested', color: 'bg-green-100 text-green-800' },
    { value: 'not_interested', label: 'Not Interested', color: 'bg-red-100 text-red-800' },
    { value: 'follow_up_required', label: 'Follow-up Required', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'demo_scheduled', label: 'Demo Scheduled', color: 'bg-blue-100 text-blue-800' },
    { value: 'invalid_lead', label: 'Invalid Lead', color: 'bg-gray-100 text-gray-800' }
  ];

  const leadsToCall = leads.filter(lead => 
    lead.status === 'new' || lead.status === 'contacted' || lead.status === 'nurturing'
  );

  if (loading) {
    return <div className="flex justify-center p-8">Loading call center...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Active Call Panel */}
      {activeCall && selectedLead && (
        <Card className="border-blue-500 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-blue-600" />
              Active Call - {selectedLead.name}
            </CardTitle>
            <CardDescription>
              {selectedLead.phone} • {selectedLead.email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Call Script */}
            {callScripts.length > 0 && (
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-2">Call Script:</h4>
                <p className="text-sm text-gray-700">
                  {callScripts[0]?.content.replace('[Name]', selectedLead.name)
                    .replace('[Agent]', 'Agent')
                    .replace('[Company]', 'Business Pro')}
                </p>
              </div>
            )}

            {/* Call Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">Call Notes</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Take notes during the call..."
                value={callNotes}
                onChange={(e) => setCallNotes(e.target.value)}
              />
            </div>

            {/* Call Outcome */}
            <div>
              <label className="block text-sm font-medium mb-2">Call Outcome</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {outcomeOptions.map(option => (
                  <Button
                    key={option.value}
                    variant={callOutcome === option.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCallOutcome(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={endCall} className="flex-1">
                End Call & Log
              </Button>
              <Button variant="outline">
                <Mic className="w-4 h-4 mr-2" />
                Mute
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads to Call */}
        <Card>
          <CardHeader>
            <CardTitle>Leads to Call ({leadsToCall.length})</CardTitle>
            <CardDescription>Priority leads waiting for contact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leadsToCall.slice(0, 10).map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{lead.name}</h4>
                    <p className="text-sm text-gray-600">{lead.phone}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {lead.source.replace('_', ' ')}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {lead.buyer_intent}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => startCall(lead)}
                    disabled={activeCall !== null}
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                </div>
              ))}
              
              {leadsToCall.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No leads pending for calls
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Call Logs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Call Logs</CardTitle>
            <CardDescription>Latest call activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {callLogs.slice(0, 10).map((log) => (
                <div key={log.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{log.leads?.name}</h4>
                    <p className="text-sm text-gray-600">
                      Duration: {Math.floor(log.call_duration / 60)}m {log.call_duration % 60}s
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(log.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    {log.outcome && (
                      <Badge className={outcomeOptions.find(o => o.value === log.outcome)?.color}>
                        {outcomeOptions.find(o => o.value === log.outcome)?.label}
                      </Badge>
                    )}
                    {log.recording_url && (
                      <Button size="sm" variant="outline" className="mt-1">
                        <Play className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              
              {callLogs.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No call logs yet
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call Scripts */}
      {callScripts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Call Scripts for {industry}</CardTitle>
            <CardDescription>Predefined scripts to help with calls</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {callScripts.map((script) => (
                <div key={script.id} className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{script.title}</h4>
                  <p className="text-sm text-gray-700">{script.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CallManagement;
