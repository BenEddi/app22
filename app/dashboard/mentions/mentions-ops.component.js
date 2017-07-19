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
const mention_1 = require("./mention");
const mentions_ops_service_1 = require("./mentions-ops.service");
const mention_service_1 = require("./mention.service");
let MentionOps = class MentionOps {
    constructor(mtOpService, mentionService) {
        this.mtOpService = mtOpService;
        this.mentionService = mentionService;
        this.hideBtns = false;
        /*setInterval(() => {
              
              // the following is required, otherwise the view will not be updated
              this.ref.markForCheck();
            }, 1000);*/
    }
    ngOnInit() {
        //console.log("alert ::::  "+this.alerTosend);
        //console.log(this.mentionTosend);
    }
    LikeMention(avis) {
        //console.log(avis);
        this.mentionTosend.avis = avis;
        this.hideBtns = true;
        this.mtOpService.update(this.mentionTosend, this.alerTosend);
    }
    disLikeMention(avis) {
        //console.log(avis);
        this.mentionTosend.avis = avis;
        this.hideBtns = true;
        this.mtOpService.update(this.mentionTosend, this.alerTosend);
    }
    deleteMention() {
        var resp = window.confirm("Etes vous sûrs de vouloir supprimer cette mention");
        if (resp) {
            console.log("Id à supp " + this.mentionTosend.ids);
            this.mtOpService.delete(this.mentionTosend.ids, this.alerTosend);
            //this.refreshMentionList();
            //location.reload();
        }
        else {
            window.close();
            return;
        }
    }
    refreshMentionList() {
        this.mentionService._getMentions(this.alerTosend)
            .subscribe(ms => {
            this.pagedItems = ms;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", mention_1.Mention)
], MentionOps.prototype, "mentionTosend", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MentionOps.prototype, "alerTosend", void 0);
MentionOps = __decorate([
    core_1.Component({
        selector: 'ops',
        template: `
<div [hidden]="hideBtns" class="form-inline">
<button type="button" #avisup    value="positive" (click)="LikeMention(avisup.value)" class="btn btn-primary  btn-sm"><i class="fa fa-thumbs-o-up fa-fw" aria-hidden="true"></i></button>
<button type="button" #avisdown  value="negative" (click)="disLikeMention(avisdown.value)" class="btn btn-secondary btn-sm"><i class="fa fa-thumbs-o-down fa-fw" aria-hidden="true"></i></button>
<button type="button" (click)="deleteMention()" class="btn btn-danger btn-sm"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button>
</div>
`,
        providers: [mentions_ops_service_1.MentionOpService, mention_service_1.MentionService],
    }),
    __metadata("design:paramtypes", [mentions_ops_service_1.MentionOpService, mention_service_1.MentionService])
], MentionOps);
exports.MentionOps = MentionOps;
//# sourceMappingURL=mentions-ops.component.js.map