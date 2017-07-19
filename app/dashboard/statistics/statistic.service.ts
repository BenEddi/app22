import { Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';


@Injectable()
export class StatService 
{
  private statisticUrl = 'http://localhost:9000/statics/';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  
  
 totalInsts(): Observable<string> {
        return this.http.get(this.statisticUrl+'totalInsts')
            .map(res => res.text())
            .catch(this.handleError);
    }

 totalAlerts(): Observable<string> {
        return this.http.get(this.statisticUrl+'totalAlerts')
            .map(res => res.text())
            .catch(this.handleError);
    }
     totalMts(): Observable<string> {
        return this.http.get(this.statisticUrl+'totalMts')
            .map(res => res.text())
            .catch(this.handleError);
    }
    
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
 


}
