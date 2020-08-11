import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: any;
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  post(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data));
  }

  postAuth(serviceName: string, data: any) {
    const token = this.authService.getUserToken();
    const header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), header);
  }

  putAuth(serviceName: string, data: any) {
    const token = this.authService.getUserToken();
    const header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    const url = environment.apiUrl + serviceName;
    return this.http.put(url, JSON.stringify(data), header);
  }

  get(serviceName: string) {
    const url = environment.apiUrl + serviceName;
    return this.http.get(url).pipe(map((results) => results));
  }

  getAuth(serviceName: string, params?: any) {
    const token = this.authService.getUserToken();
    const header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      params
    };
    const url = environment.apiUrl + serviceName;
    return this.http.get(url, header).pipe(map((results) => results));
  }

}
