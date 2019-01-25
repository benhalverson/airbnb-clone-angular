import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

export interface LoginData {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private username: string;
  private token: string;

  constructor(private http: HttpClient) {}

  private saveToken(token): void {
    localStorage.setItem('auth', JSON.stringify(token));
  }

  private parseJwt(token) {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');

      return JSON.parse(window.atob(base64));
    }
    return {};
  }

  private getToken(): string {
    if(this.token) {
      return this.token;
    }

    if(this.isAuthenticated()) {
      return this.token = JSON.parse(localStorage.getItem('auth')).token;
    }
    return '';
  }

  public login(loginData: LoginData): Observable<any> {
    return this.http.post('/api/v1/auth', loginData)
      .map(token => this.saveToken(token));
  }

  public logout(): Observable<any> {
    localStorage.removeItem('auth');
    this.token = '';
    this.username = '';

    return new Observable(observer => {
      if(!!localStorage.getItem('auth')) {
        observer.error(new Error('Token was not removed'));
      } else {
        observer.next();
      }
    });
  }

  public register(user: User): Observable<any> {
    return this.http.post('/api/v1/users', user);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('auth');
  }

  public getUsername(): string {
    if(this.username) {
      return this.username;
    }
    return this.username = this.parseJwt(this.getToken()).username;
  }

  public getAuthToken() {
    const auth = localStorage.getItem('auth');
    return auth ? `Bearer ${JSON.parse(auth).token}` : '';
  }
  public getUser(userId: string): Observable<any> {
    return this.http.get(`/api/v1/users/${userId}`);
  }
}
