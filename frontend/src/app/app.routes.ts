import { Routes } from '@angular/router';
import { LoginComponent } from './Modules/LoginModule/login-component/login-component';
import { ErrorPopupComponent } from './Shared/Modules/error-popup/error-popup';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root to /login
  { path: 'login', component: LoginComponent },          // Login route
  {
    path: '**',
    component: ErrorPopupComponent,
    data: { message: 'Invalid page URL' }
}];