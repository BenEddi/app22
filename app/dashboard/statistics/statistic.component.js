"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const statistic_service_1 = require("./statistic.service");
const initNotify = require("../../../assets/js/notify.js");
const sidebar_service_1 = require("../../sidebar/sidebar.service");
let StaticsComponent = class StaticsComponent {
    constructor(_statServ, side) {
        this._statServ = _statServ;
        this.side = side;
    }
    ngOnInit() {
        initNotify();
        this.side.show();
        this.getTotalInstances();
        this.getTotalAlerts();
        this.getTotalMentions();
    }
    getTotalInstances() {
        this._statServ.totalInsts().subscribe(rs => this.totalInsts = rs, (error) => console.error(error));
    }
    getTotalAlerts() {
        this._statServ.totalAlerts().subscribe(rs => this.totalAlerts = rs, (error) => console.error(error));
    }
    getTotalMentions() {
        this._statServ.totalMts().subscribe(rs => this.totalMts = rs, (error) => console.error(error));
    }
};
StaticsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'statics-cmp',
        templateUrl: 'statistic.component.html',
        styleUrls: ['statistic.component.less'],
        providers: [statistic_service_1.StatService]
    }),
    __metadata("design:paramtypes", [statistic_service_1.StatService, sidebar_service_1.SidebarService])
], StaticsComponent);
exports.StaticsComponent = StaticsComponent;
//# sourceMappingURL=statistic.component.js.map