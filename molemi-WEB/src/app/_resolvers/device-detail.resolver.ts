import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DeviceService } from '../_services/device.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TodoItem } from '../_models/TodoItem';

@Injectable()

export class DeviceDetailResolver implements Resolve<any> {


    constructor(private deviceService: DeviceService, private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.deviceService.getDevice(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/devices']);
                return of(null);
            })
        );
    }
}
