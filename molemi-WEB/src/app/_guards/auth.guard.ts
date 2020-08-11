import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate(next: ActivatedRouteSnapshot): boolean {

    if (this.authService.loggedIn()) {
      return true;
    }

    console.log('You shall not pass!!!!');
    this.router.navigate(['/home']);
  }
}
