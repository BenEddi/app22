import { Injectable } from '@angular/core';
import { Http, Headers, Response ,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../dashboard/user/user';

@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:9000/user/login';
    private logOutUrl = 'http://localhost:9000/user/destroy';
    //public user:User=null;
    public token:any=null;
   /* private headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer '+this.getToken()
     });*/
  
    constructor(private http: Http) {
       // set token if saved in local storage
       this.getToken();
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.authUrl, JSON.stringify({ username: username, password: password }),options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                
                let Us = <User>response.json();
                //alert(JSON.stringify(Us)) ;
                console.log("here "+Us.username);
                if (Us.name!= null) {
                    // set token property
                    this.token = Us.token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    //alert("Login failed !")
                    return false;
                }
            })._catch(this.handleError);
    }

   

    getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(currentUser)
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }

    logout(): void {
        // clear token remove user from local storage to log user out
     const url = `${this.logOutUrl}`;
     this.http.get(url)
      .map(res => res.text && res.status).catch(this.handleError)
      .subscribe(
                (succes) => console.log(succes)
      )
      
        this.token =null;
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
    var token: String = this.getToken();
    return token && token.length > 0;
    }
   
    private handleError(error: any): Promise<any> {
    console.error('An error occurred'); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
