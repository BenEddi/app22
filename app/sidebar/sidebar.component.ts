import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import {SidebarService} from './sidebar.service';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor( public side: SidebarService ) {}
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
