import { Routes } from '@angular/router';

import { HomeComponent, LoginComponent } from './pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
