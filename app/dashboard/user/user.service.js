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
require("rxjs/add/operator/map");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9000/view';
        this.Url = 'http://localhost:9000/it';
        this.errorMessage = '';
    }
    getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html
        let headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    get(name) {
        let person$ = this.http
            .get(`${this.baseUrl}/profile?username=` + name, { headers: this.getHeaders() })
            .map(res => res.json());
        return person$;
    }
    create(profile) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(`${this.Url}/newcustom`, JSON.stringify(profile), options)
            .map(res => res.json().data)
            .subscribe(response => console.log("OK Created"), error => this.errorMessage = error);
    }
    update(profile) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .put(`${this.Url}/updateUser`, JSON.stringify(profile), options)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    maprofile(response) {
        // toPerson looks just like in the previous example
        return this.toUser(response.json());
    }
    toUser(r) {
        let profile = ({
            id: 1,
            description: r.description,
            email: r.email,
            name: r.name,
            tel: r.tel
        });
        console.log('Parsed person:', profile);
        return profile;
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map