import { Routes } from '@angular/router';

import {
  HomeComponent,
  LoginComponent,
} from './pages';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: DashboardClienteComponent },

  { path: 'login/admin', component: LoginAdminComponent },
  { path: 'dashboard/admin/:id', component: DashboardAdminComponent },
];
