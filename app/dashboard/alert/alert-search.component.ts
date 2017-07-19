import { Component,Input,OnInit} from '@angular/core';
import { Alert }    from './alert';
import {AlertSearchService} from './alert-search.service';
import { Observable }        from 'rxjs/Observable';
import { Instance }           from './instance';

@Component({
    selector: 'alert-searchF',
    template: `
     <div id="search-component">
        <h4>Instance de l'alert</h4>
         <div> 
         <select id="descI" name="descI">
          <option *ngFor="let instance of instances" [value]="instance.descI" class="search-result">{{instance.descI}}</option>
         </select>   
         </div> 
        
</div>
    `,
    providers: [AlertSearchService]

})




export class AlertSearchComponent implements OnInit
{
public instances: Instance[];
private errorMessage: string='';
constructor(private alertSearchService:AlertSearchService)
{}

ngOnInit() { 
      this.getMentions();
      console.log(this.instances);
}
 
  
    getMentions() {
        this.alertSearchService.getS()
           .subscribe(res=>{
            this.instances=res;
            console.log(this.instances); // make sure you get data here.
         },
         (err)=>console.log(err),
         ()=>console.log("Done")
         );
 }  

 

}