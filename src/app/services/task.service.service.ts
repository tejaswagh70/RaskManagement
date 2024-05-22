import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, memberId: 1, name: 'Task 1', priority: 'High', dueDate: '2024-06-01', status: 'Pending' },
    { id: 2, memberId: 2, name: 'Task 2', priority: 'Medium', dueDate: '2024-06-05', status: 'In Progress' },
    { id: 3, memberId: 3, name: 'Task 3', priority: 'Low', dueDate: '2024-06-10', status: 'Completed' }
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(task: { id: number; memberId: number; name: string; priority: string; dueDate: string; status: string }) {
    this.tasks.push(task);
  }

  updateTask(taskId: number, updatedTask: { id: number; memberId: number; name: string; priority: string; dueDate: string; status: string }) {
    const index = this.tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
}
