"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_component_1 = require("./home/home.component");
const statistic_component_1 = require("./statistics/statistic.component");
const user_component_1 = require("./user/user.component");
const alert_form_component_1 = require("./alert/alert-form.component");
const instance_form_component_1 = require("./alert/instance-form.component");
const mention_component_1 = require("./mentions/mention.component");
const defaultImage_directive_1 = require("./mentions/defaultImage.directive");
const menu_component_1 = require("./mentions/menu/menu.component");
const auth_guard_1 = require("../_guards/auth.guard");
const mentions_ops_component_1 = require("./mentions/mentions-ops.component");
const notifications_component_1 = require("./notifications/notifications.component");
const fb_form_component_1 = require("./fbSection/fb-form.component");
//Tst components
const twitterFB_autocomplete_component_1 = require("./alert/tstFiles/twitterFB-autocomplete.component");
const dialog_tst_component_1 = require("./alert/tstFiles/dialog-tst.component");
exports.MODULE_ROUTES = [
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
    //{ path: 'dashboard', component: HomeComponent },
    { path: 'dashboard', component: statistic_component_1.StaticsComponent },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_guard_1.CanActivateAuthGuard] },
    { path: 'data', component: alert_form_component_1.AlertFormComponent, canActivate: [auth_guard_1.CanActivateAuthGuard] },
    { path: 'newinstance', component: instance_form_component_1.InstanceFormComponent, canActivate: [auth_guard_1.CanActivateAuthGuard] },
    { path: 'mentions', component: mention_component_1.MentionComponent, canActivate: [auth_guard_1.CanActivateAuthGuard] },
    { path: 'alert/:page', component: mention_component_1.MentionComponent, canActivate: [auth_guard_1.CanActivateAuthGuard] },
    { path: 'fbSettings', component: fb_form_component_1.FBFormComponent, canActivate: [auth_guard_1.CanActivateAuthGuard] },
    { path: 'twFB', component: twitterFB_autocomplete_component_1.AutocompleteTWFB },
    { path: 'dialog', component: dialog_tst_component_1.DialogOverviewExample }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    statistic_component_1.StaticsComponent,
    user_component_1.UserComponent,
    alert_form_component_1.AlertFormComponent,
    instance_form_component_1.InstanceFormComponent,
    mention_component_1.MentionComponent,
    defaultImage_directive_1.DefaultImageDirective,
    menu_component_1.MenuComponent,
    mentions_ops_component_1.MentionOps,
    notifications_component_1.NotificationsComponent,
    fb_form_component_1.FBFormComponent,
    //for tst
    twitterFB_autocomplete_component_1.AutocompleteTWFB,
    dialog_tst_component_1.DialogOverviewExample,
    dialog_tst_component_1.DialogOverviewExampleDialog
];
exports.LAZY_COMPONENTS = [
    dialog_tst_component_1.DialogOverviewExampleDialog
];
//# sourceMappingURL=dashboard.routes.js.map