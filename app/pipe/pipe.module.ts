import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {MODULE_PIPES} from './pipe.const';

 @NgModule({
     imports:        [CommonModule],
     declarations:   [MODULE_PIPES],
     exports:        [MODULE_PIPES],
     providers :[MODULE_PIPES]
 })

 export class PipeModule {

 } 