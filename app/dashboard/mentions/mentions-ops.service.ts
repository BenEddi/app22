import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Mention } from './mention';

@Injectable()
export class MentionOpService
{
     private Url: string = 'http://localhost:9000/it';
     private errorMessage: string='';
    constructor(private http : Http){}

    update(mention:Mention,descA:string): void {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http
        .put(`${this.Url}/updateMention?descA=`+descA,JSON.stringify(mention),options)
        .map(res => <Mention>res.json().data)
        .subscribe(
                  response => console.log("OK Updated"),
                  error =>  this.errorMessage = <any>error
                  );
        
    }

    delete(ids:string,descA:string): void {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http
        .delete(`${this.Url}/deleteMention?ids=`+ids+`&descA=`+descA,options)
        .map(res => res.json().data)
        .subscribe(
                  response => console.log("OK Deleted"),
                  error =>  this.errorMessage = <any>error
                  );
        
    }

    
}



