import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html'
})
export class AdminPanelComponent {
  newCandidateName = '';
  candidates: any[] = []; 

  constructor(private adminService: AdminService) {
    this.refreshCandidates();
  }

  addCandidate() {
    if (this.newCandidateName.trim()) { 
      this.adminService.addCandidate(this.newCandidateName).subscribe(() => {
        this.newCandidateName = '';
        this.refreshCandidates();
      });
    } else {
      alert('Candidate name cannot be empty!');
    }
  }

  deleteCandidate(candidateId: number) {
    this.adminService.deleteCandidate(candidateId).subscribe(() => this.refreshCandidates());
  }

  refreshCandidates() {
    this.adminService.getCandidates().subscribe(data => this.candidates = data);
  }
}
