import { Injectable } from '@angular/core';
import { Http,Response }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Alert }  from '../../alert/alert';


@Injectable()
export class MenuService {
  constructor(private http: Http) {}
  private viewUrl = 'http://localhost:9000/view/';
  
//not workin with it right now
private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

 getAlertsforClient ()  {
    return this.http.get(this.viewUrl+'alertsCustomer')
                    .map(res =><Alert[]>res.json());
                    
       }

        

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}