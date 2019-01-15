import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  username: string = '';
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private decodedToken;
  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('meta')) || new DecodedToken();
  }

  private saveToken(token) {
    this.decodedToken = jwt.decodeToken(token);

    localStorage.setItem('auth', token);
    localStorage.setItem('meta', JSON.stringify(this.decodedToken));

    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public register(userData: any) {
    return this.http.post(`api/v1/users/register`, userData);
  }

  public login(userData: any) {
    return this.http.post(`http://localhost:3000/api/v1/users/auth`, userData).pipe(map((token: string) => this.saveToken(token)));
  }

  public logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('meta');

    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public getAuthToken(): string {
    return localStorage.getItem('auth');
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }

  public getUserId(): string {
    return this.decodedToken.userId;
  }
}
