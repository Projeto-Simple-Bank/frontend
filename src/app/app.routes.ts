import { Routes } from '@angular/router';

import {
  HomeComponent,
  LoginComponent,
} from './pages';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { TransacaoComponent } from './pages/transacao/transacao.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: DashboardClienteComponent },
  { path: 'dashboard/transacao', component: TransacaoComponent },
  { path: 'dashboard/admin/:id', component: DashboardAdminComponent },
];
