import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'molemi-WEB';

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    // this.authService.authState.subscribe(state => {
    //   if (state) {
    //     this.router.navigate(['dashboard']);
    //   } else {
    //     this.router.navigate(['home']);
    //   }
    // });
  }
}
