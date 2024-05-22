import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInformationComponent } from './client-information/client-information.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { TaskAssignmentComponent } from './task-assignment/task-assignment.component';

const routes: Routes = [
  { path: 'client-information', component: ClientInformationComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  
  { path: 'task-assignment', component: TaskAssignmentComponent },
  { path: '', redirectTo: '/client-information', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
