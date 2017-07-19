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
const mention_service_1 = require("./mention.service");
const router_1 = require("@angular/router");
const defaultImage_directive_1 = require("./defaultImage.directive");
const pipe_const_1 = require("../../pipe/pipe.const");
const index_1 = require("../_services/index");
const mentions_ops_component_1 = require("./mentions-ops.component");
let MentionComponent = class MentionComponent {
    constructor(pagerService, mentionService, route) {
        this.pagerService = pagerService;
        this.mentionService = mentionService;
        this.route = route;
        this.title = 'Les Mentions';
        this.selectedAlert = false;
        this.iSource = false;
        this.isDate = false;
        // pager object
        this.pager = {};
    }
    ngOnInit() {
        this.onChange("facebook.com");
    }
    getMts() {
        location.reload();
    }
    anotherfunct(p) {
        //this.route.navigate(['/mentions']);
        this.mentions = null;
        var page = p.trim();
        this.alertIn = page;
        if (page.startsWith('#'))
            this.alertIn = page.replace('#', '%23');
        if (page.startsWith('@'))
            this.alertIn = page.replace('@', '%40');
        console.log("page" + this.alertIn);
        this.selectedAlert = true;
        this.mentionService._getMentions(this.alertIn)
            .subscribe(ms => {
            this.mentions = ms;
            // initialize to page 1
            this.setPage(1);
        });
    }
    rankByDate() {
        this.isDate = true;
    }
    disableDateBtn() {
        if (this.iSource == true)
            return true;
        else
            return false;
    }
    changeSrc(src) {
        //alert(src); 
        this.iSource = true;
        //this.getMts();
        let mentions = this.mentions;
        function filterItems(query) {
            return mentions.filter(function (el) {
                return el.link.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
        }
        this.srcMentions = filterItems(src);
    }
    onChange(src) {
        this.choice = 'Likes';
        this.choice = src;
        console.log('choix:' + this.choice);
    }
    /*
    Setting paging for mentions
    */
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.mentions.length, page);
        // get current page of items
        this.pagedItems = this.mentions.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
};
MentionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mentions',
        templateUrl: 'mentions.component.html',
        styleUrls: ['mentions.component.css'],
        providers: [defaultImage_directive_1.DefaultImageDirective],
        viewProviders: [pipe_const_1.MODULE_PIPES, mentions_ops_component_1.MentionOps],
    }),
    __metadata("design:paramtypes", [index_1.PagerService, mention_service_1.MentionService, router_1.Router])
], MentionComponent);
exports.MentionComponent = MentionComponent;
//# sourceMappingURL=mention.component.js.map