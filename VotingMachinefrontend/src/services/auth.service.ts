import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient, public router: Router) { } 

  login(credentials: { email: string; password: string }, isAdmin: boolean): Observable<any> {
    const loginUrl = isAdmin ? `${this.apiUrl}/admin/login` : `${this.apiUrl}/login`;
    return this.http.post(loginUrl, credentials);
  }

  register(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  logout(isAdmin: boolean): void {
    const logoutUrl = isAdmin ? `${this.apiUrl}/admin/logout` : `${this.apiUrl}/logout`;
    this.http.post(logoutUrl, {}).subscribe(() => this.router.navigate(['/login']));
  }
}
