import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserpageComponent } from './userpage/userpage.component';




const appRoutes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'Register', component: RegistrationComponent },
    { path: 'User', component: UserpageComponent },
    { path: 'Admin', component: AdminComponent },
  
];

export const routing= RouterModule.forRoot(appRoutes);
