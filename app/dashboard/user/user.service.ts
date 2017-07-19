import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService{
  private baseUrl: string = 'http://localhost:9000/view';
  private Url: string = 'http://localhost:9000/it';
  private errorMessage: string='';

  constructor(private http : Http){}

private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(name: string): Observable<User> {
    let person$ = this.http
      .get(`${this.baseUrl}/profile?username=`+name, {headers: this.getHeaders()})
      .map(res => <User>res.json());
      return person$;
  }
 create(profile:User):any
 {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     

      return this.http
        .post(`${this.Url}/newcustom`,JSON.stringify(profile),options)
        .map(res => <User>res.json().data)
        .subscribe(
                  response =>  console.log("OK Created"),
                  error =>  this.errorMessage = <any>error
                  );
                  
 }

  update(profile:User): Observable<User> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http
        .put(`${this.Url}/updateUser`,JSON.stringify(profile),options)
        .map(res => <User>res.json().data)
        .catch(this.handleError);
        
        
    }

  


  maprofile(response:Response): User{
   // toPerson looks just like in the previous example
   return this.toUser(response.json());
}
 toUser(r:any): User{
  let profile = <User>({
    id:1,
    description:r.description,
    email:r.email,
    name: r.name,
    tel:r.tel
    
  });
  console.log('Parsed person:', profile);
  return profile;
}

 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}