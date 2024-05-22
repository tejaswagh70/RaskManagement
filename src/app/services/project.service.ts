import { Injectable } from '@angular/core';

interface Project {
  id: number;
  clientId: number;
  name: string;
  startDate: string;
  dueDate: string;
  actualEffort: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    { id: 1, clientId: 1, name: 'Project 1', startDate: '2023-01-01', dueDate: '2023-12-31', actualEffort: 100 },
    { id: 2, clientId: 2, name: 'Project 2', startDate: '2023-02-01', dueDate: '2023-11-30', actualEffort: 150 }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project) {
    project.id = this.projects.length + 1;
    this.projects.push(project);
  }

  updateProject(projectId: number, projectData: Omit<Project, 'id'>) {
    const projectIndex = this.projects.findIndex(p => p.id === projectId);
    if (projectIndex > -1) {
      this.projects[projectIndex] = { id: projectId, ...projectData };
    }
  }

  deleteProject(projectId: number) {
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}
