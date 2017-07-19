import { Injectable }    from '@angular/core';
import { Headers, Http,RequestOptions,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//import 'rxjs/add/operator/toPromise';

import { Alert } from './alert';
import {Instance} from './instance';

@Injectable()
export class AlertCritereService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:9000/it/';  // URL to web api
  delayMs = 500;
  responseStatus:number;
  constructor(private http: Http) { }



    creat(alert: Alert): Observable<Alert> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl+'critereAlt', JSON.stringify(alert), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    this.responseStatus = res.status;
   
    return <Alert>body.data  || { };
  }
  
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

