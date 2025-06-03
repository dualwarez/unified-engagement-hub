
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { X, Plus } from 'lucide-react';

interface LeadIntakeFormProps {
  industry: string;
  onClose: () => void;
  onLeadCreated: () => void;
}

const LeadIntakeForm: React.FC<LeadIntakeFormProps> = ({ industry, onClose, onLeadCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'website' as 'website' | 'google_ads' | 'facebook' | 'whatsapp' | 'referral' | 'portal_99acres' | 'portal_magicbricks' | 'other',
    buyer_intent: 'cold' as 'hot' | 'warm' | 'cold',
    priority: 'medium' as 'high' | 'medium' | 'low',
    notes: ''
  });
  const [industryFields, setIndustryFields] = useState<{[key: string]: string}>({});
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [loading, setLoading] = useState(false);

  const sourceOptions = [
    { value: 'website' as const, label: 'Website Form' },
    { value: 'google_ads' as const, label: 'Google Ads' },
    { value: 'facebook' as const, label: 'Facebook' },
    { value: 'whatsapp' as const, label: 'WhatsApp' },
    { value: 'referral' as const, label: 'Referral' },
    { value: 'portal_99acres' as const, label: '99acres Portal' },
    { value: 'portal_magicbricks' as const, label: 'MagicBricks Portal' },
    { value: 'other' as const, label: 'Other' }
  ];

  const getIndustrySpecificFields = () => {
    const industryKey = industry.toLowerCase().replace(' ', '_');
    
    switch (industryKey) {
      case 'real_estate':
        return [
          { key: 'budget', label: 'Budget Range', type: 'text', placeholder: 'e.g., 50L - 1Cr' },
          { key: 'location_preference', label: 'Location Preference', type: 'text', placeholder: 'e.g., Downtown, Suburbs' },
          { key: 'property_type', label: 'Property Type', type: 'select', options: ['1BHK', '2BHK', '3BHK', 'Plot', 'Commercial'] },
          { key: 'timeline', label: 'Purchase Timeline', type: 'select', options: ['Immediate', '1-3 months', '3-6 months', '6+ months'] }
        ];
      case 'stock_broking':
        return [
          { key: 'trading_experience', label: 'Trading Experience', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
          { key: 'investment_amount', label: 'Investment Amount', type: 'text', placeholder: 'e.g., 1L - 5L' },
          { key: 'trading_style', label: 'Trading Style', type: 'select', options: ['Investor', 'Trader', 'Both'] },
          { key: 'risk_appetite', label: 'Risk Appetite', type: 'select', options: ['Conservative', 'Moderate', 'Aggressive'] }
        ];
      case 'insurance':
        return [
          { key: 'insurance_type', label: 'Insurance Type', type: 'select', options: ['Life', 'Health', 'General', 'Multiple'] },
          { key: 'family_size', label: 'Family Size', type: 'number', placeholder: 'Number of members' },
          { key: 'age', label: 'Age', type: 'number', placeholder: 'Your age' },
          { key: 'annual_income', label: 'Annual Income', type: 'text', placeholder: 'e.g., 5L - 10L' }
        ];
      case 'loans':
        return [
          { key: 'loan_type', label: 'Loan Type', type: 'select', options: ['Home Loan', 'Personal Loan', 'Business Loan', 'LAP'] },
          { key: 'loan_amount', label: 'Loan Amount Required', type: 'text', placeholder: 'e.g., 25L' },
          { key: 'employment_type', label: 'Employment Type', type: 'select', options: ['Salaried', 'Self-employed', 'Business'] },
          { key: 'monthly_income', label: 'Monthly Income', type: 'text', placeholder: 'e.g., 50K' }
        ];
      case 'edutech':
        return [
          { key: 'course_interest', label: 'Course Interest', type: 'text', placeholder: 'e.g., ALFF Mentorship' },
          { key: 'learning_goal', label: 'Learning Goal', type: 'select', options: ['Job', 'Business', 'Upskilling', 'Career Change'] },
          { key: 'experience_level', label: 'Experience Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
          { key: 'preferred_mode', label: 'Preferred Mode', type: 'select', options: ['Online', 'Offline', 'Hybrid'] }
        ];
      default:
        return [];
    }
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create the lead
      const industryKey = industry.toLowerCase().replace(' ', '_') as 'real_estate' | 'stock_broking' | 'broking_franchise' | 'insurance' | 'loans' | 'edutech';
      const leadData = {
        ...formData,
        industry: industryKey,
        tags: tags.length > 0 ? tags : null
      };

      const { data: lead, error: leadError } = await supabase
        .from('leads')
        .insert(leadData)
        .select()
        .single();

      if (leadError) throw leadError;

      // Add industry-specific details
      if (Object.keys(industryFields).length > 0) {
        const detailsData = Object.entries(industryFields).map(([key, value]) => ({
          lead_id: lead.id,
          field_name: key,
          field_value: String(value)
        }));

        const { error: detailsError } = await supabase
          .from('lead_details')
          .insert(detailsData);

        if (detailsError) throw detailsError;
      }

      // Create initial task for first contact
      const { error: taskError } = await supabase
        .from('tasks')
        .insert({
          lead_id: lead.id,
          assigned_to: 'current-user-id', // Will be assigned by team lead
          title: 'First Contact Call',
          description: `Make first contact with ${formData.name} - ${industry} lead from ${formData.source}`,
          status: 'pending' as const,
          due_date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString() // 2 hours from now
        });

      if (taskError) throw taskError;

      onLeadCreated();
      onClose();
      
      console.log('Lead created successfully:', lead);
    } catch (error) {
      console.error('Error creating lead:', error);
      alert('Error creating lead. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Capture New Lead</CardTitle>
              <CardDescription>{industry} Industry</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Lead Source</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.source}
                  onChange={(e) => setFormData({...formData, source: e.target.value as typeof formData.source})}
                >
                  {sourceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Lead Classification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Buyer Intent</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.buyer_intent}
                  onChange={(e) => setFormData({...formData, buyer_intent: e.target.value as typeof formData.buyer_intent})}
                >
                  <option value="hot">Hot</option>
                  <option value="warm">Warm</option>
                  <option value="cold">Cold</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Priority</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value as typeof formData.priority})}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Industry-Specific Fields */}
            {getIndustrySpecificFields().length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-4">{industry} Specific Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getIndustrySpecificFields().map(field => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium mb-2">{field.label}</label>
                      {field.type === 'select' ? (
                        <select
                          className="w-full p-2 border rounded-md"
                          value={industryFields[field.key] || ''}
                          onChange={(e) => setIndustryFields({
                            ...industryFields,
                            [field.key]: e.target.value
                          })}
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={industryFields[field.key] || ''}
                          onChange={(e) => setIndustryFields({
                            ...industryFields,
                            [field.key]: e.target.value
                          })}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium mb-2">Tags</label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Add tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                    {tag} <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">Notes</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Additional notes about this lead..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? 'Creating Lead...' : 'Create Lead'}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadIntakeForm;
