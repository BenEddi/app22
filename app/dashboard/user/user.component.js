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
const user_service_1 = require("./user.service");
const authentication_service_1 = require("../../login/authentication.service");
const router_1 = require("@angular/router");
const user_1 = require("./user");
const notifications_component_1 = require("../notifications/notifications.component");
let UserComponent = class UserComponent {
    constructor(userService, _route, authService) {
        this.userService = userService;
        this._route = _route;
        this.authService = authService;
        this.goodNotif = false;
        this.badNotif = false;
        this.submitted = false;
        this.model = new user_1.User("", "", "", "");
    }
    ngOnInit() {
        //console.log("Us is here  "+localStorage.getItem('currentUser'));
        let user = JSON.parse(localStorage.getItem('currentUser'));
        //console.log(user.username);
        if (user)
            this.userService.get(user.username).subscribe(p => this.profile = p, (err) => console.log(err));
        else
            console.log("no user is logged or token is here");
    }
    onSubmit(form) {
        this.submitted = true;
        console.log(form.name + " " + form.email + " " + form.description + " " +
            form.tel);
        this.userService.update(new user_1.User(form.name, form.description, form.email, form.tel))
            .subscribe(() => {
            this.goodNotif = true;
            console.log("OK Updated");
        }, error => {
            this.badNotif = true;
        }, () => {
            console.log(alert);
        });
    }
};
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-cmp',
        templateUrl: 'user.component.html',
        providers: [user_service_1.UserService, authentication_service_1.AuthenticationService],
        entryComponents: [notifications_component_1.NotificationsComponent],
        animations: [
            core_1.trigger('carduserprofile', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0s ease-out'),
                ])
            ]),
            core_1.trigger('cardprofile', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute, authentication_service_1.AuthenticationService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map