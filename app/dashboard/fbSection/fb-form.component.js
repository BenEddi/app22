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
const fbPage_1 = require("./fbPage");
const alert_search_service_1 = require("../alert/alert-search.service");
const fb_service_1 = require("./fb.service");
let FBFormComponent = class FBFormComponent {
    constructor(fbService, alertSearchService, router) {
        this.fbService = fbService;
        this.alertSearchService = alertSearchService;
        this.router = router;
        this.errorMessage = '';
        this.model = new fbPage_1.FBpage();
        this.submitted = false;
    }
    ngOnInit() {
        this.getInstances();
        console.log(this.instances);
    }
    getInstances() {
        this.alertSearchService.getS()
            .subscribe(res => {
            this.instances = res;
            console.log(this.instances); // make sure you get data here.
        }, (err) => console.log(err), () => console.log("Done"));
    }
    onSubmit(form) {
        this.submitted = true;
        let tst;
        console.log(form);
        this.add(form);
    }
    add(fbPage) {
        if (!fbPage) {
            return;
        }
        this.fbService.creat(fbPage)
            .subscribe(error => {
            this.errorMessage = 'sommething go wrong';
        }, () => console.log(fbPage));
    }
    openCustom() {
        this.router.navigate(['/newinstance']);
    }
};
FBFormComponent = __decorate([
    core_1.Component({
        selector: 'FB-form',
        templateUrl: 'app/dashboard/fbSection/fb-form.component.html',
        providers: [alert_search_service_1.AlertSearchService, fb_service_1.FBService]
    }),
    __metadata("design:paramtypes", [fb_service_1.FBService, alert_search_service_1.AlertSearchService, router_1.Router])
], FBFormComponent);
exports.FBFormComponent = FBFormComponent;
//# sourceMappingURL=fb-form.component.js.map