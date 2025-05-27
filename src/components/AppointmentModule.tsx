
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  MapPin, 
  Phone, 
  Video,
  Plus,
  Edit,
  Trash2,
  CheckCircle
} from 'lucide-react';

interface AppointmentModuleProps {
  industry: string;
}

const AppointmentModule: React.FC<AppointmentModuleProps> = ({ industry }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  const appointments = [
    {
      id: 1,
      title: industry === 'Real Estate' ? 'Property Viewing' : 'Consultation',
      client: 'John Smith',
      date: '2024-05-28',
      time: '10:00 AM',
      duration: '60 min',
      type: 'in-person',
      location: industry === 'Real Estate' ? '123 Main St, Downtown' : 'Office Building',
      status: 'confirmed',
      notes: industry === 'Real Estate' ? 'First-time buyer interested in downtown properties' : 'Initial consultation meeting'
    },
    {
      id: 2,
      title: industry === 'Real Estate' ? 'Listing Presentation' : 'Follow-up Meeting',
      client: 'Sarah Johnson',
      date: '2024-05-28',
      time: '2:00 PM',
      duration: '45 min',
      type: 'virtual',
      location: 'Zoom Meeting',
      status: 'confirmed',
      notes: 'Discussing marketing strategy and pricing'
    },
    {
      id: 3,
      title: industry === 'Real Estate' ? 'Contract Review' : 'Strategy Session',
      client: 'Mike Wilson',
      date: '2024-05-29',
      time: '11:30 AM',
      duration: '30 min',
      type: 'phone',
      location: 'Phone Call',
      status: 'pending',
      notes: 'Review offer terms and conditions'
    },
    {
      id: 4,
      title: industry === 'Real Estate' ? 'Property Inspection' : 'Project Review',
      client: 'Emily Davis',
      date: '2024-05-29',
      time: '3:00 PM',
      duration: '90 min',
      type: 'in-person',
      location: industry === 'Real Estate' ? '456 Oak Ave, Suburbs' : 'Client Location',
      status: 'completed',
      notes: 'Final walkthrough before closing'
    }
  ];

  const appointmentTypes = {
    'Real Estate': [
      'Property Viewing',
      'Listing Presentation',
      'Market Analysis',
      'Contract Review',
      'Property Inspection',
      'Client Consultation'
    ],
    'Healthcare': [
      'Initial Consultation',
      'Follow-up Appointment',
      'Procedure Consultation',
      'Health Screening',
      'Therapy Session',
      'Emergency Consultation'
    ],
    'Education': [
      'Student Consultation',
      'Parent Meeting',
      'Academic Planning',
      'Career Guidance',
      'Progress Review',
      'Enrollment Interview'
    ]
  };

  const currentTypes = appointmentTypes[industry as keyof typeof appointmentTypes] || appointmentTypes['Real Estate'];

  const stats = [
    { title: 'Today\'s Appointments', value: '8', icon: CalendarIcon, color: 'text-blue-600' },
    { title: 'This Week', value: '24', icon: Clock, color: 'text-green-600' },
    { title: 'Completion Rate', value: '94%', icon: CheckCircle, color: 'text-purple-600' },
    { title: 'No-Show Rate', value: '6%', icon: User, color: 'text-orange-600' }
  ];

  const todayAppointments = appointments.filter(apt => apt.date === '2024-05-28');
  const upcomingAppointments = appointments.filter(apt => apt.date > '2024-05-28');

  const statusColors = {
    'confirmed': 'bg-green-100 text-green-800',
    'pending': 'bg-yellow-100 text-yellow-800',
    'completed': 'bg-blue-100 text-blue-800',
    'cancelled': 'bg-red-100 text-red-800'
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointment Scheduling</h1>
          <p className="text-gray-600 mt-1">Manage your {industry.toLowerCase()} appointments and calendar</p>
        </div>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => setShowNewAppointment(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>May 28, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="font-semibold text-blue-600">{appointment.time}</p>
                      <p className="text-xs text-gray-500">{appointment.duration}</p>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{appointment.title}</h4>
                      <p className="text-sm text-gray-600">{appointment.client}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {appointment.type === 'in-person' && <MapPin className="w-4 h-4 text-gray-400" />}
                        {appointment.type === 'virtual' && <Video className="w-4 h-4 text-gray-400" />}
                        {appointment.type === 'phone' && <Phone className="w-4 h-4 text-gray-400" />}
                        <span className="text-xs text-gray-500">{appointment.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                      {appointment.status}
                    </Badge>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{appointment.title}</h4>
                    <p className="text-sm text-gray-600">{appointment.client}</p>
                    <p className="text-xs text-gray-500">{appointment.date} at {appointment.time}</p>
                  </div>
                  <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <CalendarIcon className="w-4 h-4 mr-2" />
              View Full Calendar
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Clock className="w-4 h-4 mr-2" />
              Set Availability
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <User className="w-4 h-4 mr-2" />
              Manage Clients
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Video className="w-4 h-4 mr-2" />
              Start Video Call
            </Button>
          </CardContent>
        </Card>
      </div>

      {showNewAppointment && (
        <Card className="fixed inset-4 z-50 overflow-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Schedule New Appointment</CardTitle>
              <Button variant="outline" onClick={() => setShowNewAppointment(false)}>
                Cancel
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="appointment-type">Appointment Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentTypes.map((type, index) => (
                      <SelectItem key={index} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="client-name">Client Name</Label>
                <Input id="client-name" placeholder="Enter client name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointment-date">Date</Label>
                <Input id="appointment-date" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointment-time">Time</Label>
                <Input id="appointment-time" type="time" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="90">1.5 hours</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meeting-type">Meeting Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person">In Person</SelectItem>
                    <SelectItem value="virtual">Video Call</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location/Meeting Link</Label>
              <Input id="location" placeholder="Enter location or meeting link" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Add any additional notes" />
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1">Schedule Appointment</Button>
              <Button variant="outline" onClick={() => setShowNewAppointment(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentModule;
