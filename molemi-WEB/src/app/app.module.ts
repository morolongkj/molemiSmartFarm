import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
import { HttpService } from './_services/http.service';
import { DeviceService } from './_services/device.service';
import { HttpClientModule } from '@angular/common/http';
import { DeviceListResolver } from './_resolvers/device-list.resolver';
import { DeviceDetailResolver } from './_resolvers/device-detail.resolver';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlertifyService,
    ErrorInterceptorProvider,
    HttpService,
    DeviceService,
    DeviceListResolver,
    DeviceDetailResolver
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
