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
const common_1 = require("@angular/common");
const instance_1 = require("./instance");
const instance_service_1 = require("./instance.service");
let InstanceFormComponent = class InstanceFormComponent {
    constructor(location, instanceService) {
        this.location = location;
        this.instanceService = instanceService;
        this.model = new instance_1.Instance("");
        this.errorMessage = '';
        this.goodNotif = false;
        this.badNotif = false;
    }
    onSubmit() {
        console.log(this.model.descI);
        this.add(new instance_1.Instance(this.model.descI));
    }
    add(instance) {
        if (!instance) {
            return;
        }
        this.instanceService.creat(instance)
            .subscribe(() => this.goodNotif = true, error => {
            this.badNotif = true;
            this.errorMessage = error;
        }, () => console.log(instance));
    }
    goBack() {
        this.location.back();
    }
};
InstanceFormComponent = __decorate([
    core_1.Component({
        selector: 'newInstance',
        template: `
<div class="container-fluid">
  <notifications-cmp [notifTosend]="goodNotif" [badNotifToSend]="badNotif"></notifications-cmp>
  <div class="main-content">
      <form #instanceForm="ngForm" (ngSubmit)="onSubmit()" class="form-inline">
        <div class="form-group">
          <label class="sr-only" for="instance">Nom de l'instance</label>
          <input type="text" class="form-control" id="descI" name="descI"
          [(ngModel)]="model.descI" placeholder="Nom de l'instance">
        </div>

        <button type="submit" class="btn btn-default">Valider</button>
      </form>
      <br/>
      <button class="btn btn-info" (click)="goBack()">Back</button>
    </div>
  </div>  `,
        providers: [instance_service_1.InstanceService]
    }),
    __metadata("design:paramtypes", [common_1.Location, instance_service_1.InstanceService])
], InstanceFormComponent);
exports.InstanceFormComponent = InstanceFormComponent;
//# sourceMappingURL=instance-form.component.js.map