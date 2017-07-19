import { Injectable }    from '@angular/core';
import { Headers, Http,RequestOptions,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//import 'rxjs/add/operator/toPromise';

import {FBpage} from './fbPage';


@Injectable()
export class FBService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:9000/it/';  // URL to web api
  
  responseStatus:number;
  constructor(private http: Http) { }



    creat(fbPage: FBpage): Observable<FBpage> 
    {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl+'fbpages', JSON.stringify(fbPage), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


 _getFbPages(): Observable<FBpage[]> {
    const url = `${this.baseUrl}getfbpages`;
    return this.http.get(url)
      .map(res => <FBpage[]>res.json())
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    this.responseStatus = res.status;
    return <FBpage>body.data  || { };
  }
 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}