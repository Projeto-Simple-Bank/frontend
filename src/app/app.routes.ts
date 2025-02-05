import { Routes } from '@angular/router';

import {
  HomeComponent,
  LoginComponent,
  DashboardClienteComponent,
  TransacaoComponent,
  CadastroClienteComponent,
  AreaPixComponent,
} from './pages';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { CadastroAdminComponent } from './pages/cadastro-admin/cadastro-admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'dashboard', component: DashboardClienteComponent },
  { path: 'transacoes', component: TransacaoComponent },
  { path: 'area-pix', component: AreaPixComponent },

  { path: 'admin/login', component: LoginAdminComponent },
  { path: 'admin/cadastro', component: CadastroAdminComponent },
  { path: 'admin/dashboard', component: DashboardAdminComponent },
];
