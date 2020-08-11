import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { User } from '../_models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  authState = new BehaviorSubject(false);
  userToken = new BehaviorSubject('');

  constructor(private http: HttpClient) {
    this.setAuthState();
  }

  setAuthState() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authState.next(true);
    } else {
      this.authState.next(false);
    }
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'token', model).pipe(
      map((response: any) => {
        console.log(response);
        const token = response;
        if (token) {
          localStorage.setItem('token', token);
          this.authState.next(true);
          this.userToken.next(response);
        }
      })
    );
  }

  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    console.log(this.authState.value);
    return this.authState.value;
  }

  getUserToken() {
    return this.userToken.value;
  }

}
