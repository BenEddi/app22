import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MyOwnMaterialModule} from '../material.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginModule} from '../login/login.module';
import { MODULE_COMPONENTS, MODULE_ROUTES,LAZY_COMPONENTS } from './dashboard.routes';

import{SidebarModule} from '../sidebar/sidebar.module';
import {PipeModule} from '../pipe/pipe.module';
import * as _ from 'underscore';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import {MODULE_PIPES} from '../pipe/pipe.const';

/*  Module Services */
import {AlertCritereService} from './alert/alert-critere.service';
import {AlertSearchService} from './alert/alert-search.service';
import {InstanceService} from './alert/instance.service';
import { MentionService } from './mentions/mention.service';
import { CanActivateAuthGuard } from '../_guards/auth.guard';
import {SidebarService} from '../sidebar/sidebar.service';
import {AuthenticationService} from '../login/authentication.service';
import {PagerService} from './_services/index';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MyOwnMaterialModule,
        HttpModule,
        RouterModule.forChild(MODULE_ROUTES),
        CommonModule,LoginModule,SidebarModule,
        PipeModule,Ng2SearchPipeModule
        
    ],
    declarations: [ MODULE_COMPONENTS ],
    providers:[AlertCritereService,AlertSearchService,
              InstanceService,MentionService,CanActivateAuthGuard,
              SidebarService,AuthenticationService,PagerService],
     entryComponents :[LAZY_COMPONENTS]         
})

export class DashboardModule{}
