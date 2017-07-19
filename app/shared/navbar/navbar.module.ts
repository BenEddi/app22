import { NgModule } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {LoginModule} from '../../login/login.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
    imports: [CommonModule,BrowserModule,LoginModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
