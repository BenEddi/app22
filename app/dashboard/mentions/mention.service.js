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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/concatMap");
let MentionService = class MentionService {
    constructor(http) {
        this.http = http;
        this.mentionsUrl = 'http://localhost:9000/view/mentions'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /*getMentions(): Promise<Mention[]> {
        return this.http.get(this.mentionsUrl)
                   .toPromise()
                   .then(response => response.json().data as Mention[])
                   .catch(this.handleError);
      }
     
      }*/
    getMentions() {
        return this.http.get(this.mentionsUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    _getMentions(page) {
        const url = `${this.mentionsUrl}/${page}`;
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }
};
MentionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MentionService);
exports.MentionService = MentionService;
//# sourceMappingURL=mention.service.js.map