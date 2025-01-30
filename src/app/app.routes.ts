import { Routes } from '@angular/router';

import { HomeComponent } from './pages';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { TransacaoComponent } from './pages/transacao/transacao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deshboard', component: DashboardClienteComponent },
  { path: 'transacao', component: TransacaoComponent },
];
