import { Routes } from '@angular/router';

import { HomeComponent } from './pages';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

export const routes: Routes = [{ 
    path: '', component: HomeComponent,  
 },
{
    path: 'login-admin', component: LoginAdminComponent
}];
