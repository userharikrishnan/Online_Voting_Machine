import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userEmail: string = '';
  userPassword: string = '';
  regName: string = '';
  regEmail: string = '';
  regPassword: string = '';
  adminUsername: string = '';
  adminPassword: string = '';
  selectedCandidate: number | null = null;
  isUserLoggedIn: boolean = false; 
  isAdminLoggedIn: boolean = false; 
  candidates = [
    { id: 1, name: 'Candidate A', votes: 0 },
    { id: 2, name: 'Candidate B', votes: 0 },
    { id: 3, name: 'Candidate C', votes: 0 },
  ]; 
  
  onUserLogin() {
    
    this.isUserLoggedIn = true;
    console.log('User logged in:', this.userEmail);
  }

  
  onUserRegister() {
    
    console.log('User registered:', this.regName, this.regEmail);
   
    this.regName = '';
    this.regEmail = '';
    this.regPassword = '';
  }

  
  onAdminLogin() {
   
    this.isAdminLoggedIn = true;
    console.log('Admin logged in:', this.adminUsername);
  }

  
  submitVote() {
    if (this.selectedCandidate !== null) {
     
      const candidate = this.candidates.find(c => c.id === this.selectedCandidate);
      if (candidate) {
        candidate.votes += 1;
        console.log('Vote submitted for:', candidate.name);
      }
      
      this.selectedCandidate = null;
    } else {
      console.log('No candidate selected!');
    }
  }
}
