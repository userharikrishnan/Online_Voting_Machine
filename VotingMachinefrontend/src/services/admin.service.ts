import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/candidates`); 
  }

  addCandidate(name: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/candidates`, { name });
  }

  deleteCandidate(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/candidates/${id}`);
  }

  getResults(): Observable<any[]> { 
    return this.http.get<any[]>(`${this.apiUrl}/results`);
  }
}
