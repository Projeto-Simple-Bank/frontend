import { Routes } from '@angular/router';

import {
  CadastroClienteComponent,
  HomeComponent,
  LoginComponent,
  DashboardClienteComponent,
  TransacaoComponent,
} from './pages';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { CadastroAdminComponent } from './pages/cadastro-admin/cadastro-admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardClienteComponent },
  { path: 'transacao', component: TransacaoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'dashboard', component: DashboardClienteComponent },
  { path: 'admin/login', component: LoginAdminComponent },
  { path: 'admin/cadastro', component: CadastroAdminComponent },
  { path: 'admin/dashboard/:id', component: DashboardAdminComponent },
];
