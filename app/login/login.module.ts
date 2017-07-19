import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{SidebarModule} from '../sidebar/sidebar.module';

import { MODULE_COMPONENTS, MODULES_ROUTES } from './login.routes';
import {LoginComponent} from './login.component';

import {AuthenticationService} from './authentication.service';
import {SidebarService} from '../sidebar/sidebar.service';
import {UserService} from '../dashboard/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forChild(MODULES_ROUTES),
    FormsModule,
    SidebarModule
  ],
  
  declarations: [
   MODULE_COMPONENTS
  ],
  providers:[
    AuthenticationService,SidebarService,UserService
  ]
})
export class LoginModule { }
