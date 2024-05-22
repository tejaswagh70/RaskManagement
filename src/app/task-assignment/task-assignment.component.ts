import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service.service';
import { TeamMemberService } from '../services/team-member.service';

@Component({
  selector: 'app-task-assignment',
  templateUrl: './task-assignment.component.html',
  styleUrls: ['./task-assignment.component.css']
})
export class TaskAssignmentComponent implements OnInit {
  teamMembers: { id: number; name: string; role: string; projectId: number }[] = [];
  tasks: { id: number; memberId: number; name: string; priority: string; dueDate: string; status: string }[] = [];
  newTask = {
    id: 0,
    memberId: 0,
    name: '',
    priority: 'Low',
    dueDate: '',
    status: 'Pending'
  };
  editingTaskId: number | null = null;

  constructor(
    private taskService: TaskService,
    private teamMemberService: TeamMemberService
  ) {}

  ngOnInit() {
    this.teamMembers = this.teamMemberService.getTeamMembers();
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.editingTaskId === null) {
      this.newTask.id = this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
      this.taskService.addTask(this.newTask);
    } else {
      this.taskService.updateTask(this.editingTaskId, this.newTask);
      this.editingTaskId = null;
    }
    this.resetTaskForm();
    this.tasks = this.taskService.getTasks();
  }

  startEditing(taskId: number) {
    this.editingTaskId = taskId;
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      this.newTask = { ...task };
    }
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  resetTaskForm() {
    this.editingTaskId = null;
    this.newTask = {
      id: 0,
      memberId: 0,
      name: '',
      priority: 'Low',
      dueDate: '',
      status: 'Pending'
    };
  }

  getTeamMemberName(memberId: number) {
    const member = this.teamMembers.find(m => m.id === memberId);
    return member ? member.name : 'Unknown';
  }
}
