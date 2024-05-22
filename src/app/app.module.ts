import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientInformationComponent } from './client-information/client-information.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { TaskAssignmentComponent } from './task-assignment/task-assignment.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientInformationComponent,
    ProjectDetailsComponent,
    
    TaskAssignmentComponent,
          NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
