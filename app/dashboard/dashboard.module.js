"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const forms_2 = require("@angular/forms");
const material_module_1 = require("../material.module");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const login_module_1 = require("../login/login.module");
const dashboard_routes_1 = require("./dashboard.routes");
const sidebar_module_1 = require("../sidebar/sidebar.module");
const pipe_module_1 = require("../pipe/pipe.module");
const ng2_search_filter_1 = require("ng2-search-filter");
//import {MODULE_PIPES} from '../pipe/pipe.const';
/*  Module Services */
const alert_critere_service_1 = require("./alert/alert-critere.service");
const alert_search_service_1 = require("./alert/alert-search.service");
const instance_service_1 = require("./alert/instance.service");
const mention_service_1 = require("./mentions/mention.service");
const auth_guard_1 = require("../_guards/auth.guard");
const sidebar_service_1 = require("../sidebar/sidebar.service");
const authentication_service_1 = require("../login/authentication.service");
const index_1 = require("./_services/index");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            material_module_1.MyOwnMaterialModule,
            http_1.HttpModule,
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
            common_1.CommonModule, login_module_1.LoginModule, sidebar_module_1.SidebarModule,
            pipe_module_1.PipeModule, ng2_search_filter_1.Ng2SearchPipeModule
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS],
        providers: [alert_critere_service_1.AlertCritereService, alert_search_service_1.AlertSearchService,
            instance_service_1.InstanceService, mention_service_1.MentionService, auth_guard_1.CanActivateAuthGuard,
            sidebar_service_1.SidebarService, authentication_service_1.AuthenticationService, index_1.PagerService],
        entryComponents: [dashboard_routes_1.LAZY_COMPONENTS]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map