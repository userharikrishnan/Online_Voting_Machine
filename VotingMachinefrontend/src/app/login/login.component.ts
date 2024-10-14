import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  isAdmin = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }, this.isAdmin)
      .subscribe(response => {
        if (this.isAdmin) {
          this.authService.router.navigate(['/admin']);
        } else {
          this.authService.router.navigate(['/vote']);
        }
      }, error => {
        alert('Login failed! Please check your credentials.');
      });
  }
}
