"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_component_1 = require("./login.component");
const register_component_1 = require("./register.component");
exports.MODULES_ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    /*{ path: '**', redirectTo: 'login', pathMatch: 'full'},*/
    { path: 'login', pathMatch: 'full', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
];
exports.MODULE_COMPONENTS = [
    login_component_1.LoginComponent, register_component_1.RegisterComponent
];
//# sourceMappingURL=login.routes.js.map