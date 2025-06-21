import { Routes } from '@angular/router';
import { LoginComponent } from './Modules/LoginModule/login-component/login-component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root to /login
  { path: 'login', component: LoginComponent },          // Login route
  { path: '**', redirectTo: 'login' }                    // Redirect unknown paths to /login
];