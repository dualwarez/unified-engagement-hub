
import { metaApiService } from './metaApiService';
import { googleAdsService } from './googleAdsService';
import { supabase } from '@/integrations/supabase/client';

interface CampaignPerformance {
  campaign_id: string;
  platform: 'meta' | 'google';
  impressions: number;
  clicks: number;
  spend: number;
  conversions: number;
  ctr: number;
  cpc: number;
  date_start: string;
  date_end: string;
  updated_at: string;
}

export class PerformanceMonitor {
  async fetchAndStorePerformance(): Promise<void> {
    console.log('Starting performance monitoring cycle...');
    
    try {
      // Get active campaigns from database (simulated for now)
      const activeCampaigns = await this.getActiveCampaigns();
      
      const dateRange = {
        start: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString().split('T')[0], // 12 hours ago
        end: new Date().toISOString().split('T')[0], // today
      };

      for (const campaign of activeCampaigns) {
        try {
          let performanceData;
          
          if (campaign.platform === 'meta') {
            performanceData = await metaApiService.getPerformanceData(campaign.id, dateRange);
          } else if (campaign.platform === 'google') {
            performanceData = await googleAdsService.getPerformanceData(campaign.id, dateRange);
          }

          if (performanceData) {
            await this.storePerformanceData({
              campaign_id: campaign.id,
              platform: campaign.platform,
              impressions: performanceData.impressions,
              clicks: performanceData.clicks,
              spend: performanceData.spend,
              conversions: performanceData.conversions,
              ctr: performanceData.ctr,
              cpc: performanceData.cpc,
              date_start: dateRange.start,
              date_end: dateRange.end,
              updated_at: new Date().toISOString(),
            });
          }
        } catch (error) {
          console.error(`Error fetching performance for campaign ${campaign.id}:`, error);
        }
      }

      console.log('Performance monitoring cycle completed');
    } catch (error) {
      console.error('Error in performance monitoring cycle:', error);
    }
  }

  private async getActiveCampaigns(): Promise<Array<{ id: string; platform: 'meta' | 'google' }>> {
    // Simulate getting active campaigns from database
    return [
      { id: 'meta_campaign_1', platform: 'meta' },
      { id: 'google_campaign_1', platform: 'google' },
      { id: 'meta_campaign_2', platform: 'meta' },
    ];
  }

  private async storePerformanceData(data: CampaignPerformance): Promise<void> {
    console.log('Storing performance data:', data);
    
    // In a real implementation, this would store to Supabase
    // For now, we'll simulate the storage
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log(`Performance data stored for campaign ${data.campaign_id}`);
  }

  // Method to manually trigger performance update
  async updateDashboardMetrics(): Promise<void> {
    console.log('Updating dashboard metrics...');
    
    // Simulate updating dashboard with latest performance data
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Dashboard metrics updated');
  }
}

export const performanceMonitor = new PerformanceMonitor();
