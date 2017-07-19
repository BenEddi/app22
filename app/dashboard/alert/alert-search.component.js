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
const alert_search_service_1 = require("./alert-search.service");
let AlertSearchComponent = class AlertSearchComponent {
    constructor(alertSearchService) {
        this.alertSearchService = alertSearchService;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.getMentions();
        console.log(this.instances);
    }
    getMentions() {
        this.alertSearchService.getS()
            .subscribe(res => {
            this.instances = res;
            console.log(this.instances); // make sure you get data here.
        }, (err) => console.log(err), () => console.log("Done"));
    }
};
AlertSearchComponent = __decorate([
    core_1.Component({
        selector: 'alert-searchF',
        template: `
     <div id="search-component">
        <h4>Instance de l'alert</h4>
         <div> 
         <select id="descI" name="descI">
          <option *ngFor="let instance of instances" [value]="instance.descI" class="search-result">{{instance.descI}}</option>
         </select>   
         </div> 
        
</div>
    `,
        providers: [alert_search_service_1.AlertSearchService]
    }),
    __metadata("design:paramtypes", [alert_search_service_1.AlertSearchService])
], AlertSearchComponent);
exports.AlertSearchComponent = AlertSearchComponent;
//# sourceMappingURL=alert-search.component.js.map