import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private httpService: HttpService, private http: HttpClient) {}

  getDevices(limitParam?) {
    let params = new HttpParams();
    params = params.append('q=owner', '=tiisetso.c.mphuthi@gmail.com');
    if (limitParam) {
      params = params.append('limit', limitParam);
    }
    return this.httpService.getAuth('devices', params);
  }

  getDevice(id: any) {
    return this.httpService.getAuth('devices/' + id);
  }

  updateDeviceName(id: string, name: string): any {
    // return true;
    return this.http.put(environment.apiUrl + 'devices/' + id + '/name', name);
  }
}
