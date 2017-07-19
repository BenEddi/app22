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
const sidebar_routes_config_1 = require("../.././sidebar/sidebar-routes.config");
const common_1 = require("@angular/common");
const authentication_service_1 = require("../../login/authentication.service");
const app_component_1 = require("../../app.component");
let NavbarComponent = class NavbarComponent {
    /*@Input()
    private AccountToSend:string;*/
    constructor(router, location, _authService) {
        this.router = router;
        this._authService = _authService;
        this.location = location;
    }
    ngOnInit() {
        this.listTitles = sidebar_routes_config_1.ROUTES.filter(listTitle => listTitle);
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user)
            this.Account = user.username;
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    logout() {
        this._authService.logout();
        this.router.navigate(['login']);
    }
};
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navbar-cmp',
        templateUrl: 'navbar.component.html',
        entryComponents: [app_component_1.AppComponent],
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [router_1.Router, common_1.Location, authentication_service_1.AuthenticationService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map