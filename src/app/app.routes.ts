import { Routes } from '@angular/router';

import {
  CadastroClienteComponent,
  HomeComponent,
  LoginComponent,
} from './pages';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'dashboard/:id', component: DashboardClienteComponent },

  { path: 'admin/login', component: LoginAdminComponent },
  { path: 'admin/dashboard/:id', component: DashboardAdminComponent },
];
