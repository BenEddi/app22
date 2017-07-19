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
const router_1 = require("@angular/router");
const menu_service_1 = require("./menu.service");
let MenuComponent = class MenuComponent {
    constructor(router, menuService) {
        this.router = router;
        this.menuService = menuService;
        this.exist = false;
        this.myEvent = new core_1.EventEmitter();
        console.log("fine");
    }
    ngOnInit() {
        this.getAlerts_Cust();
    }
    getAlerts_Cust() {
        this.exist = true;
        this.menuService.getAlertsforClient()
            .subscribe(res => {
            this.alerts = res;
            console.log(this.alerts); // make sure you get data here.
        }, (err) => console.log(err), () => console.log("Done"));
    }
    onSelect(p) {
        alert(p);
        this.selectedPage = p;
        this.myEvent.emit(this.selectedPage);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "myEvent", void 0);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        templateUrl: 'app/dashboard/mentions/menu/menu.component.html',
        styles: [
            `.selected {
  background-color: #CFD8DC !important;
  color: white;
}`
        ],
        providers: [menu_service_1.MenuService]
    }),
    __metadata("design:paramtypes", [router_1.Router, menu_service_1.MenuService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map