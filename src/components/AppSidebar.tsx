
import React from 'react';
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Megaphone, 
  Users, 
  DollarSign, 
  UserCheck, 
  Calendar,
  MapPin,
  LogIn,
  Settings,
  HeadphonesIcon,
  BarChart3
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  selectedCountry: string;
  selectedCurrency: string;
  selectedIndustry: string;
  onShowCountrySelector: () => void;
  onChangeIndustry: () => void;
  onShowAuth: () => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'leads', label: 'Lead Capture', icon: Users },
  { id: 'crm', label: 'CRM', icon: UserCheck },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'sales', label: 'Sales', icon: DollarSign },
  { id: 'post-sales', label: 'Post Sales', icon: HeadphonesIcon },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

export function AppSidebar({
  activeModule,
  setActiveModule,
  selectedCountry,
  selectedCurrency,
  selectedIndustry,
  onShowCountrySelector,
  onChangeIndustry,
  onShowAuth
}: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center space-x-3">
          <img 
            alt="DHWAJ AI Logo" 
            className="h-10 w-10 flex-shrink-0 rounded-full object-cover" 
            src="/dhwaj-ai-logo.jpg" 
          />
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-primary">DHWAJ AI</h1>
              <p className="text-xs text-muted-foreground">{selectedIndustry}</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveModule(item.id)}
                    isActive={activeModule === item.id}
                    className="w-full justify-start"
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.label}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4 space-y-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onShowCountrySelector}
          className="w-full justify-start"
        >
          <MapPin className="h-4 w-4" />
          {!collapsed && <span>{selectedCountry} ({selectedCurrency})</span>}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onChangeIndustry}
          className="w-full justify-start"
        >
          <Settings className="h-4 w-4" />
          {!collapsed && <span>Change Industry</span>}
        </Button>
        
        <Button
          size="sm"
          onClick={onShowAuth}
          className="w-full justify-start"
        >
          <LogIn className="h-4 w-4" />
          {!collapsed && <span>Login</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
