import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  private teamMembers = [
    { id: 1, name: 'John Doe', role: 'Developer', projectId: 1 },
    { id: 2, name: 'Jane Smith', role: 'Designer', projectId: 1 },
    { id: 3, name: 'Mike Johnson', role: 'Tester', projectId: 2 }
  ];

  getTeamMembers(projectId?: number) {
    if (projectId !== undefined) {
      return this.teamMembers.filter(member => member.projectId === projectId);
    }
    return this.teamMembers;
  }

  addTeamMember(member: { id: number; name: string; role: string; projectId: number }) {
    this.teamMembers.push(member);
  }

  updateTeamMember(memberId: number, updatedMember: { id: number; name: string; role: string; projectId: number }) {
    const index = this.teamMembers.findIndex(m => m.id === memberId);
    if (index !== -1) {
      this.teamMembers[index] = updatedMember;
    }
  }

  deleteTeamMember(memberId: number) {
    this.teamMembers = this.teamMembers.filter(m => m.id !== memberId);
  }
}
  