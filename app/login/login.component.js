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
const authentication_service_1 = require("./authentication.service");
const sidebar_service_1 = require("../sidebar/sidebar.service");
let LoginComponent = class LoginComponent {
    constructor(router, authenticationService, side) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.side = side;
        this.model = {};
        this.loading = false;
        this.login_failure = "";
        this.passMand = false;
        //submitted = false;
        //private user:User=null;
        this.error = '';
    }
    ngOnInit() {
        // reset login status
        this.side.hide();
        this.authenticationService.logout();
    }
    login() {
        if (this.nonValidPass()) {
            return;
        }
        this.loading = true;
        //this.submitted=true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
            if (result === true) {
                console.log(result + "& " + this.authenticationService.getToken());
                this.router.navigate(['dashboard']);
            }
            else {
                this.login_failure = "login_failure";
                this.error = 'Username/Mot de Passe incorecct';
                this.model.password = "";
                this.loading = false;
            }
        });
    }
    SignUp() {
        this.loading = false;
        //this.submitted=false;
        this.router.navigate(['register']);
    }
    nonValidPass() {
        return this.model.password == "" || this.model.password == null;
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html',
        styleUrls: ['./css/login.component.css', './css/style.css', './css/form-elements.css'],
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService, sidebar_service_1.SidebarService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map