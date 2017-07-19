"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const material_2 = require("@angular/material");
const animations_1 = require("@angular/platform-browser/animations");
let MyOwnMaterialModule = class MyOwnMaterialModule {
};
MyOwnMaterialModule = __decorate([
    core_1.NgModule({
        imports: [material_2.MdTabsModule, material_2.MdAutocompleteModule, material_2.MdInputModule, material_2.MdTooltipModule,
            material_2.MdDialogModule, animations_1.BrowserAnimationsModule, material_1.MaterialModule, material_2.MdCardModule, material_2.MdButtonModule,
            material_2.MdProgressBarModule],
        exports: [material_2.MdTabsModule, material_2.MdAutocompleteModule, material_2.MdInputModule, material_2.MdTooltipModule,
            material_2.MdDialogModule, animations_1.BrowserAnimationsModule, material_1.MaterialModule, material_2.MdCardModule, material_2.MdButtonModule,
            material_2.MdProgressBarModule]
    })
], MyOwnMaterialModule);
exports.MyOwnMaterialModule = MyOwnMaterialModule;
//# sourceMappingURL=material.module.js.map