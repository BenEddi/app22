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
const material_1 = require("@angular/material");
let DialogOverviewExample = class DialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogOverviewExampleDialog);
    }
};
DialogOverviewExample = __decorate([
    core_1.Component({
        selector: 'dialog-overview-example',
        templateUrl: 'app/dashboard/alert/tstFiles/dialog-overview-example.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialog])
], DialogOverviewExample);
exports.DialogOverviewExample = DialogOverviewExample;
let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
};
DialogOverviewExampleDialog = __decorate([
    core_1.Component({
        selector: 'dialog-overview-example-dialog',
        //templateUrl: 'dialog-overview-example-dialog.html',
        template: `
  
<h1 md-dialog-title>Twitter Help</h1>

<div md-dialog-content>
    <md-card class="example-card">
        <md-card-header>
                <md-card-title><strong>Sources Autorisées et bloquées</strong></md-card-title>
                <md-card-subtitle>Pour Twitter </md-card-subtitle>
        </md-card-header>    
        <img md-card-image src="assets/img/twitterPageName.PNG"  />
        <md-card-content>    
            <p>
            Accéder à Twitter => copier le nom de la page (sans @) comme indiqué dans la photo
            ensuite collez-le dans l' input box réservé.
            </p>
        </md-card-content>   
    </md-card>       
  
</div>

<div md-dialog-actions>
  <button md-button (click)="dialogRef.close()" color="primary">
    Okays!
  </button>
  <button md-button (click)="dialogRef.close()">
    Cancel
  </button>
</div>`,
        styles: [`
.example-card {
  width: 500px;
}`]
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], DialogOverviewExampleDialog);
exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;
//# sourceMappingURL=dialog-tst.component.js.map