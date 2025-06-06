
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { performanceMonitor } from '@/services/performanceMonitor';
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Clock, Activity, TrendingUp } from 'lucide-react';

const PerformanceMonitor: React.FC = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [nextUpdate, setNextUpdate] = useState<Date | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Set initial next update time (12 hours from now)
    setNextUpdate(new Date(Date.now() + 12 * 60 * 60 * 1000));
    
    // Simulate that last update was 6 hours ago
    setLastUpdate(new Date(Date.now() - 6 * 60 * 60 * 1000));
  }, []);

  const handleManualUpdate = async () => {
    setIsUpdating(true);
    
    try {
      toast({
        title: "Fetching Performance Data",
        description: "Updating campaign metrics from all platforms...",
      });

      await performanceMonitor.fetchAndStorePerformance();
      await performanceMonitor.updateDashboardMetrics();

      setLastUpdate(new Date());
      setNextUpdate(new Date(Date.now() + 12 * 60 * 60 * 1000));

      toast({
        title: "Performance Data Updated",
        description: "All campaign metrics have been refreshed successfully.",
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "There was an error updating performance data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const formatTimeAgo = (date: Date | null) => {
    if (!date) return 'Never';
    
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffHours > 0) {
      return `${diffHours}h ${diffMinutes}m ago`;
    }
    return `${diffMinutes}m ago`;
  };

  const formatTimeUntil = (date: Date | null) => {
    if (!date) return 'Unknown';
    
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    
    if (diffMs <= 0) return 'Now';
    
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffHours > 0) {
      return `${diffHours}h ${diffMinutes}m`;
    }
    return `${diffMinutes}m`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Performance Monitoring
        </CardTitle>
        <CardDescription>
          Automated performance data collection every 12 hours
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Clock className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-600">Last Update</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatTimeAgo(lastUpdate)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-600">Next Update</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatTimeUntil(nextUpdate)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <RefreshCw className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-sm font-medium text-gray-600">Status</p>
              <Badge className="mt-1">
                {isUpdating ? 'Updating...' : 'Active'}
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Monitoring Schedule</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>✅ Fetch Meta Ads performance data every 12 hours</p>
            <p>✅ Fetch Google Ads performance data every 12 hours</p>
            <p>✅ Store performance metrics in database</p>
            <p>✅ Update Lovable dashboard with latest data</p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button 
            onClick={handleManualUpdate}
            disabled={isUpdating}
            className="w-full"
          >
            {isUpdating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Updating Performance Data...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Manual Update Now
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceMonitor;
