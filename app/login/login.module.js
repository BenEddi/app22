"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const sidebar_module_1 = require("../sidebar/sidebar.module");
const login_routes_1 = require("./login.routes");
const authentication_service_1 = require("./authentication.service");
const sidebar_service_1 = require("../sidebar/sidebar.service");
const user_service_1 = require("../dashboard/user/user.service");
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forChild(login_routes_1.MODULES_ROUTES),
            forms_1.FormsModule,
            sidebar_module_1.SidebarModule
        ],
        declarations: [
            login_routes_1.MODULE_COMPONENTS
        ],
        providers: [
            authentication_service_1.AuthenticationService, sidebar_service_1.SidebarService, user_service_1.UserService
        ]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map