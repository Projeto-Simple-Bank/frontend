import { Routes } from '@angular/router';

import {
  HomeComponent,
  LoginComponent,
  CadastroClienteComponent,
} from './pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
];
