import {Component, OnInit} from '@angular/core';
import {StatService} from './statistic.service';
import initNotify = require('../../../assets/js/notify.js');
import {SidebarService} from '../../sidebar/sidebar.service';

@Component({
    moduleId: module.id,
    selector: 'statics-cmp',
    templateUrl: 'statistic.component.html',
    styleUrls :['statistic.component.less'],
    providers :[StatService]


})

export class StaticsComponent implements OnInit{

    private totalInsts:string;
    private totalAlerts:string;
    private totalMts:string;
    constructor(private _statServ:StatService,private side:SidebarService)
    {}

    ngOnInit() {
        initNotify();
        this.side.show();
        this.getTotalInstances();
        this.getTotalAlerts();
        this.getTotalMentions();
        
    }

getTotalInstances():void
{
    this._statServ.totalInsts().subscribe(rs => this.totalInsts = rs,(error) =>console.error(error))

}

getTotalAlerts():void
{
    this._statServ.totalAlerts().subscribe(rs => this.totalAlerts = rs,(error) =>console.error(error))

}
getTotalMentions():void
{
    this._statServ.totalMts().subscribe(rs => this.totalMts = rs,(error) =>console.error(error))

}

}
