import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';
import { DeviceCreateComponent } from './devices/device-create/device-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { DeviceListResolver } from './_resolvers/device-list.resolver';
import { DeviceDetailResolver } from './_resolvers/device-detail.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'projects', component: ProjectsListComponent },
      { path: 'project/edit', component: ProjectEditComponent },
      { path: 'project/create', component: ProjectCreateComponent },
      { path: 'devices', component: DevicesListComponent, resolve: { devices: DeviceListResolver } },
      { path: 'device/edit/:id', component: DeviceEditComponent, resolve: { device: DeviceDetailResolver }  },
      { path: 'device/create', component: DeviceCreateComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
