import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  results: any[] = []; 

  constructor(private adminService: AdminService) {
    this.refreshResults();
  }

  refreshResults() {
    this.adminService.getResults().subscribe(data => this.results = data);
  }
}
