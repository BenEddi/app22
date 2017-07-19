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
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
let AuthenticationService = class AuthenticationService {
    /* private headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.getToken()
      });*/
    constructor(http) {
        this.http = http;
        this.authUrl = 'http://localhost:9000/user/login';
        this.logOutUrl = 'http://localhost:9000/user/destroy';
        //public user:User=null;
        this.token = null;
        // set token if saved in local storage
        this.getToken();
    }
    login(username, password) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.authUrl, JSON.stringify({ username: username, password: password }), options)
            .map((response) => {
            // login successful if there's a jwt token in the response
            let Us = response.json();
            //alert(JSON.stringify(Us)) ;
            console.log("here " + Us.username);
            if (Us.name != null) {
                // set token property
                this.token = Us.token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                //alert("Login failed !")
                return false;
            }
        })._catch(this.handleError);
    }
    getToken() {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);
        var token = currentUser && currentUser.token;
        return token ? token : "";
    }
    logout() {
        // clear token remove user from local storage to log user out
        const url = `${this.logOutUrl}`;
        this.http.get(url)
            .map(res => res.text && res.status).catch(this.handleError)
            .subscribe((succes) => console.log(succes));
        this.token = null;
        localStorage.removeItem('currentUser');
    }
    isLoggedIn() {
        var token = this.getToken();
        return token && token.length > 0;
    }
    handleError(error) {
        console.error('An error occurred'); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map