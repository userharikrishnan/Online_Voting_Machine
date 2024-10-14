import { Component } from '@angular/core';
import { VotingService } from '../../services/voting.service';

@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html'
})
export class VotingPanelComponent {
  candidates: any[] = [];

  constructor(private votingService: VotingService) {
    this.refreshCandidates();
  }

  refreshCandidates() {
    this.votingService.getCandidates().subscribe(data => this.candidates = data);
  }

  vote(candidateId: number) {
    this.votingService.vote(candidateId).subscribe(response => {
      alert(response.message);
      this.refreshCandidates(); 
    });
  }
}
