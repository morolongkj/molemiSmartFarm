import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { DeviceCreateComponent } from './devices/device-create/device-create.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    ProjectsListComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    DevicesListComponent,
    DeviceCreateComponent,
    DeviceEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['https://api.waziup.io/api/v2/'],
        disallowedRoutes: ['https://api.waziup.io/api/v2/auth/'],
      },
    }),
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlertifyService,
    ErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
