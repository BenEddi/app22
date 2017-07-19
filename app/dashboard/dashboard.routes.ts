import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { StaticsComponent } from './statistics/statistic.component';
import { UserComponent } from './user/user.component';
import { AlertFormComponent } from './alert/alert-form.component';
import {InstanceFormComponent} from './alert/instance-form.component';
import {MentionComponent} from './mentions/mention.component';
import {DefaultImageDirective} from './mentions/defaultImage.directive';
import {MenuComponent} from './mentions/menu/menu.component';
import {CanActivateAuthGuard} from '../_guards/auth.guard';
import {MentionOps} from './mentions/mentions-ops.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {FBFormComponent} from './fbSection/fb-form.component';

//Tst components
import {AutocompleteTWFB} from './alert/tstFiles/twitterFB-autocomplete.component';
import {DialogOverviewExample,DialogOverviewExampleDialog} from './alert/tstFiles/dialog-tst.component';



export const MODULE_ROUTES: Route[] =[
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
    //{ path: 'dashboard', component: HomeComponent },
    { path: 'dashboard', component: StaticsComponent },
    { path: 'user', component: UserComponent ,canActivate: [CanActivateAuthGuard]},
    { path: 'data',  component: AlertFormComponent ,canActivate: [CanActivateAuthGuard]},
    { path: 'newinstance',  component: InstanceFormComponent, canActivate: [CanActivateAuthGuard]},
    { path: 'mentions', component: MentionComponent,canActivate: [CanActivateAuthGuard]},
    { path: 'alert/:page', component: MentionComponent,canActivate: [CanActivateAuthGuard]},
    { path: 'fbSettings', component: FBFormComponent,canActivate: [CanActivateAuthGuard]},
    
    { path: 'twFB', component: AutocompleteTWFB},
    { path: 'dialog', component: DialogOverviewExample}    

] 

export const MODULE_COMPONENTS = [
    HomeComponent,
    StaticsComponent,
    UserComponent,
    AlertFormComponent,
    InstanceFormComponent,
    MentionComponent,
    DefaultImageDirective,
    MenuComponent,
    MentionOps,
    NotificationsComponent,
    FBFormComponent,
    
   //for tst
    AutocompleteTWFB,
    DialogOverviewExample,
    DialogOverviewExampleDialog

]

export const LAZY_COMPONENTS =
[
    DialogOverviewExampleDialog
]