import {Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MenuService} from './menu.service';
import { Alert }  from '../../alert/alert';
@Component
({
selector:'menu',
templateUrl:'app/dashboard/mentions/menu/menu.component.html',
styles :[
 `.selected {
  background-color: #CFD8DC !important;
  color: white;
}`],
providers:[MenuService]

})

export class MenuComponent implements OnInit
{


selectedPage: string;
private alerts:Alert[];
private exist:boolean=false;

constructor(private router: Router,private menuService:MenuService){
console.log("fine");
}
 ngOnInit() { 
this.getAlerts_Cust();

 }
 getAlerts_Cust() {
        this.exist =true;
        this.menuService.getAlertsforClient()
           .subscribe(res=>{
            this.alerts=res;
            console.log(this.alerts); // make sure you get data here.
         },
         (err)=>console.log(err),
         ()=>console.log("Done")
         );
 }   

 @Output() 
 myEvent = new EventEmitter();
 

  onSelect(p: string){
    alert(p);
    this.selectedPage = p;
    this.myEvent.emit(this.selectedPage);
  }



}