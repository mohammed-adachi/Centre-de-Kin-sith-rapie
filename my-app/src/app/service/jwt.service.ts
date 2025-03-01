import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private isAuthenticated = false;
  private userIdSource = new BehaviorSubject<number | null>(null);
  userId$ = this.userIdSource.asObservable();

  constructor(private http: HttpClient) {}

  register(signRequest: any, httpOptions: any): Observable<any> {
    console.log(signRequest);
    return this.http.post("http://localhost:8082/acount/register", signRequest, httpOptions);
  }

  login(signRequest: any, httpOptions: any): Observable<any> {
    console.log(signRequest);
    return this.http.post("http://localhost:8082/acount/login", signRequest, httpOptions);
  }

  private handleError(error: any) {
    console.error('Erreur détectée :', error);
    return throwError(error);
  }

  saveToken(token: string): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  public clear(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('isAdmin');
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  public setRoles(roles: any[]): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('roles', JSON.stringify(roles));
    }
  }

  public getRoles(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const roles = localStorage.getItem('roles');
      return roles ? JSON.parse(roles) : [];
    }
    return null;
  }

  setUserId(id: number) {
    localStorage.setItem('userId', id.toString()); // 🔥 Stocke l'ID dans localStorage
    this.userIdSource.next(id);
  }
  getUserId() {
    return this.userIdSource.value;
  }
}
