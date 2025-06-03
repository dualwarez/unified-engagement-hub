
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { 
  Clock, 
  User, 
  Phone, 
  Calendar, 
  CheckCircle, 
  AlertCircle,
  Plus,
  MoreHorizontal
} from 'lucide-react';

interface TaskManagementProps {
  tasks: any[];
  onTaskUpdate: () => void;
  industry: string;
}

const TaskManagement: React.FC<TaskManagementProps> = ({ tasks, onTaskUpdate, industry }) => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statusColors = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'in_progress': 'bg-blue-100 text-blue-800',
    'completed': 'bg-green-100 text-green-800',
    'overdue': 'bg-red-100 text-red-800'
  };

  const updateTaskStatus = async (taskId: string, status: string) => {
    try {
      const updateData = { 
        status,
        updated_at: new Date().toISOString()
      };
      
      if (status === 'completed') {
        updateData.completed_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('tasks')
        .update(updateData)
        .eq('id', taskId);

      if (error) throw error;
      onTaskUpdate();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && dueDate;
  };

  const getTaskStatus = (task: any) => {
    if (task.status === 'completed') return 'completed';
    if (task.due_date && isOverdue(task.due_date)) return 'overdue';
    return task.status;
  };

  const filteredTasks = tasks.filter(task => {
    if (selectedStatus === 'all') return true;
    return getTaskStatus(task) === selectedStatus;
  });

  const taskStats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
    overdue: tasks.filter(t => isOverdue(t.due_date) && t.status !== 'completed').length
  };

  return (
    <div className="space-y-6">
      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold">{taskStats.total}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{taskStats.pending}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{taskStats.completed}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue</p>
                <p className="text-2xl font-bold text-red-600">{taskStats.overdue}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task Filters */}
      <div className="flex gap-2">
        {[
          { key: 'all', label: 'All Tasks', count: taskStats.total },
          { key: 'pending', label: 'Pending', count: taskStats.pending },
          { key: 'in_progress', label: 'In Progress', count: taskStats.inProgress },
          { key: 'completed', label: 'Completed', count: taskStats.completed },
          { key: 'overdue', label: 'Overdue', count: taskStats.overdue }
        ].map(filter => (
          <Button
            key={filter.key}
            variant={selectedStatus === filter.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedStatus(filter.key)}
          >
            {filter.label} ({filter.count})
          </Button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => {
          const taskStatus = getTaskStatus(task);
          
          return (
            <Card key={task.id} className={`hover:shadow-md transition-shadow ${
              taskStatus === 'overdue' ? 'border-red-200 bg-red-50' : ''
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      
                      {task.leads && (
                        <div className="flex items-center gap-2 mt-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {task.leads.name} • {task.leads.phone}
                          </span>
                        </div>
                      )}
                      
                      {task.due_date && (
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className={`text-sm ${
                            taskStatus === 'overdue' ? 'text-red-600 font-medium' : 'text-gray-600'
                          }`}>
                            Due: {new Date(task.due_date).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Badge className={statusColors[taskStatus]}>
                      {taskStatus.replace('_', ' ')}
                    </Badge>

                    <div className="flex gap-2">
                      {task.status !== 'completed' && (
                        <>
                          {task.status === 'pending' && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateTaskStatus(task.id, 'in_progress')}
                            >
                              Start
                            </Button>
                          )}
                          
                          <Button 
                            size="sm" 
                            variant="default"
                            onClick={() => updateTaskStatus(task.id, 'completed')}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Complete
                          </Button>
                        </>
                      )}
                      
                      {task.leads && (
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4" />
                        </Button>
                      )}
                      
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        
        {filteredTasks.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No tasks found for the selected filter.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TaskManagement;
