import {Route,Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

export const MODULES_ROUTES :Routes =
[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    /*{ path: '**', redirectTo: 'login', pathMatch: 'full'},*/
    { path: 'login', pathMatch: 'full',component :LoginComponent },
    { path: 'register',component : RegisterComponent },
 
]

export const MODULE_COMPONENTS = 
[
    LoginComponent,RegisterComponent
]

