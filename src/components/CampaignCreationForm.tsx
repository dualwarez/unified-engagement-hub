import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, Eye, Send, Clock, CheckCircle, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { metaApiService } from '@/services/metaApiService';

interface CampaignFormData {
  campaignName: string;
  objective: string;
  targetAudience: string;
  budget: string;
  platform: string;
  productService: string;
  keyBenefits: string;
  tone: string;
}

interface GeneratedContent {
  headline: string;
  description: string;
  hashtags: string[];
  adCreativeUrl?: string;
}

const CampaignCreationForm: React.FC = () => {
  const [formData, setFormData] = useState<CampaignFormData>({
    campaignName: '',
    objective: '',
    targetAudience: '',
    budget: '',
    platform: '',
    productService: '',
    keyBenefits: '',
    tone: ''
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [campaignId, setCampaignId] = useState<string | null>(null);
  const [step, setStep] = useState<'form' | 'preview' | 'approved' | 'launched'>('form');
  const { toast } = useToast();

  const handleInputChange = (field: keyof CampaignFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const storeInFirebase = async (data: any) => {
    // Simulate Firebase storage
    console.log('Storing in Firebase:', data);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  const generateWithGPT4o = async (formData: CampaignFormData): Promise<GeneratedContent> => {
    // Simulate GPT-4o API call
    const prompt = `Generate marketing content for:
    Campaign: ${formData.campaignName}
    Objective: ${formData.objective}
    Target Audience: ${formData.targetAudience}
    Product/Service: ${formData.productService}
    Key Benefits: ${formData.keyBenefits}
    Tone: ${formData.tone}
    Platform: ${formData.platform}`;

    console.log('Calling GPT-4o with prompt:', prompt);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock generated content
    return {
      headline: `Transform Your ${formData.productService} Experience Today!`,
      description: `Discover the power of ${formData.productService} designed specifically for ${formData.targetAudience}. ${formData.keyBenefits} Don't miss out on this exclusive opportunity!`,
      hashtags: ['#innovation', '#growth', '#success', '#transformation', '#business'],
      adCreativeUrl: '/lovable-uploads/d93d77cc-c8d8-4de8-a99e-50e5437a8947.png'
    };
  };

  const generateAdCreative = async (content: GeneratedContent) => {
    // Simulate ad creative generation
    console.log('Generating ad creative for:', content.headline);
    await new Promise(resolve => setTimeout(resolve, 1500));
    return '/lovable-uploads/d93d77cc-c8d8-4de8-a99e-50e5437a8947.png';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      // Step 1: Store data in Firebase
      toast({
        title: "Storing Campaign Data",
        description: "Saving your campaign information...",
      });
      await storeInFirebase(formData);

      // Step 2: Call GPT-4o to generate content
      toast({
        title: "Generating Content",
        description: "AI is creating your campaign content...",
      });
      const content = await generateWithGPT4o(formData);

      // Step 3: Generate Ad Creative
      toast({
        title: "Creating Ad Creative",
        description: "Generating visual content for your campaign...",
      });
      const creativeUrl = await generateAdCreative(content);
      content.adCreativeUrl = creativeUrl;

      setGeneratedContent(content);
      setStep('preview');

      toast({
        title: "Campaign Preview Ready!",
        description: "Review your generated campaign content below.",
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "There was an error generating your campaign. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApprove = async () => {
    if (!generatedContent) return;
    
    setIsCreatingCampaign(true);
    
    try {
      // Call Meta API to create campaign
      toast({
        title: "Creating Campaign",
        description: "Setting up your campaign on the selected platform...",
      });

      const metaCampaignData = {
        name: formData.campaignName,
        objective: formData.objective,
        budget: parseInt(formData.budget.replace('$', '')),
        targeting: { audience: formData.targetAudience },
        creative: {
          headline: generatedContent.headline,
          description: generatedContent.description,
          image_url: generatedContent.adCreativeUrl || '',
        },
      };

      const newCampaignId = await metaApiService.createCampaign(metaCampaignData);
      setCampaignId(newCampaignId);

      // Schedule start time (immediate for demo, could be user-selected)
      const startTime = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
      await metaApiService.scheduleCampaignStart(newCampaignId, startTime);

      toast({
        title: "Campaign Submitted!",
        description: "Your campaign has been submitted for platform approval.",
      });

      setStep('approved');

      // Monitor for approval (in real implementation, this would be a webhook or scheduled check)
      setTimeout(async () => {
        const approvalStatus = await metaApiService.checkCampaignApprovalStatus(newCampaignId);
        if (approvalStatus === 'approved') {
          setStep('launched');
          toast({
            title: "Campaign Approved & Launched!",
            description: "Your campaign is now live and collecting data.",
          });
        }
      }, 3000);

    } catch (error) {
      toast({
        title: "Campaign Creation Failed",
        description: "There was an error creating your campaign. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCreatingCampaign(false);
    }
  };

  const handleEdit = () => {
    setStep('form');
    setGeneratedContent(null);
  };

  if (step === 'launched') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Campaign Live! 🚀
          </CardTitle>
          <CardDescription>Your campaign is now running and collecting performance data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Campaign "{formData.campaignName}" is Live</h3>
            <p className="text-gray-600 mb-4">Campaign ID: {campaignId}</p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-blue-800">
                ⏰ Performance data will be automatically fetched every 12 hours and updated in your dashboard.
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <Button onClick={() => setStep('form')}>Create New Campaign</Button>
              <Button variant="outline">View Analytics</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (step === 'approved') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Campaign Submitted for Approval
          </CardTitle>
          <CardDescription>Waiting for platform approval before going live</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {isCreatingCampaign ? (
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              ) : (
                <Calendar className="w-8 h-8 text-blue-600" />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">Campaign "{formData.campaignName}" Submitted</h3>
            <p className="text-gray-600 mb-4">
              {campaignId ? `Campaign ID: ${campaignId}` : 'Creating campaign...'}
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-yellow-800">
                📋 Your campaign is being reviewed by {formData.platform}. This typically takes 24-48 hours.
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <Button onClick={() => setStep('form')}>Create New Campaign</Button>
              <Button variant="outline">Monitor Status</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (step === 'preview' && generatedContent) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Campaign Preview
          </CardTitle>
          <CardDescription>Review your AI-generated campaign content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-600">Generated Headline</Label>
                <div className="p-3 bg-gray-50 rounded-lg mt-1">
                  <p className="font-semibold">{generatedContent.headline}</p>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-600">Generated Description</Label>
                <div className="p-3 bg-gray-50 rounded-lg mt-1">
                  <p>{generatedContent.description}</p>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-600">Generated Hashtags</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {generatedContent.hashtags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-600">Ad Creative</Label>
              <div className="mt-1 border rounded-lg overflow-hidden">
                <img 
                  src={generatedContent.adCreativeUrl} 
                  alt="Generated ad creative" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <Button 
              onClick={handleApprove} 
              className="bg-green-600 hover:bg-green-700"
              disabled={isCreatingCampaign}
            >
              {isCreatingCampaign ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating Campaign...
                </>
              ) : (
                'Approve & Launch Campaign'
              )}
            </Button>
            <Button variant="outline" onClick={handleEdit}>
              Edit Campaign
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Create AI-Powered Campaign
        </CardTitle>
        <CardDescription>Fill out the form below to generate your campaign content with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="campaignName">Campaign Name</Label>
              <Input 
                id="campaignName"
                value={formData.campaignName}
                onChange={(e) => handleInputChange('campaignName', e.target.value)}
                placeholder="Enter campaign name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select value={formData.platform} onValueChange={(value) => handleInputChange('platform', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="google">Google Ads</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="objective">Campaign Objective</Label>
              <Select value={formData.objective} onValueChange={(value) => handleInputChange('objective', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select objective" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lead-generation">Lead Generation</SelectItem>
                  <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                  <SelectItem value="conversions">Conversions</SelectItem>
                  <SelectItem value="traffic">Website Traffic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input 
                id="budget"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                placeholder="e.g., $1000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productService">Product/Service</Label>
            <Input 
              id="productService"
              value={formData.productService}
              onChange={(e) => handleInputChange('productService', e.target.value)}
              placeholder="What are you promoting?"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Textarea 
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              placeholder="Describe your target audience..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyBenefits">Key Benefits</Label>
            <Textarea 
              id="keyBenefits"
              value={formData.keyBenefits}
              onChange={(e) => handleInputChange('keyBenefits', e.target.value)}
              placeholder="What are the main benefits of your product/service?"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tone">Tone & Style</Label>
            <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual & Friendly</SelectItem>
                <SelectItem value="urgent">Urgent & Action-oriented</SelectItem>
                <SelectItem value="inspirational">Inspirational</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Campaign...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Campaign with AI
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CampaignCreationForm;
