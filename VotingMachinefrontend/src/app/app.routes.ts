import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VotingPanelComponent } from './voting-panel/voting-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vote', component: VotingPanelComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
