import { Routes } from '@angular/router';

import {
  HomeComponent,
  LoginComponent,
  DashboardClienteComponent,
  TransacaoComponent,
  CadastroClienteComponent,
  AreaPixComponent,
} from './pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'dashboard', component: DashboardClienteComponent },
  { path: 'transacoes', component: TransacaoComponent },
  { path: 'area-pix', component: AreaPixComponent },
];
