import { Injectable } from '@angular/core';

interface Client {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' }
  ];

  getClients(): Client[] {
    return this.clients;
  }
}
