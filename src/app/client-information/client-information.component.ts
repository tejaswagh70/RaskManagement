import { Component, OnInit } from '@angular/core';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  projects: string[];
}

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css']
})
export class ClientInformationComponent implements OnInit {
  clients: Client[] = [
    { id: 1, name: 'Client A', email: 'clientA@example.com', phone: '1234567890', projects: ['Project 1', 'Project 2'] },
    { id: 2, name: 'Client B', email: 'clientB@example.com', phone: '9876543210', projects: ['Project 3'] },
    { id: 3, name: 'Client C', email: 'clientC@example.com', phone: '5555555555', projects: ['Project 4', 'Project 5', 'Project 6'] }
  ];

  newClient: Client = { id: 0, name: '', email: '', phone: '', projects: [] };
  isAdding: boolean = false;
  isEditing: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addClient(): void {
    this.clients.push({ ...this.newClient });
    this.newClient = { id: 0, name: '', email: '', phone: '', projects: [] };
    this.isAdding = false;
  }

  startEditing(id: number): void {
    this.isEditing = id;
  }

  cancelEditing(): void {
    this.isEditing = 0;
  }

  saveChanges(client: Client): void {
    const index = this.clients.findIndex(c => c.id === client.id);
    if (index !== -1) {
      this.clients[index] = { ...client };
      this.isEditing = 0;
    }
  }

  deleteClient(id: number): void {
    const index = this.clients.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clients.splice(index, 1);
    }
  }
}
