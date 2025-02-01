import { Routes } from '@angular/router';

import {
  HomeComponent,
  LoginComponent,
  DashboardClienteComponent,
  TransacaoComponent,
} from './pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard/:id', component: DashboardClienteComponent },
  { path: 'transacao', component: TransacaoComponent },
  { path: 'login', component: LoginComponent },
];
