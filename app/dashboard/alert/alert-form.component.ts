import { Component,Input,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alert }    from './alert';
import {FormControl,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Instance} from './instance';
import {AlertCritereService} from './alert-critere.service';
import {AlertSearchService} from './alert-search.service';
import {FBService} from '../fbSection/fb.service';
import {FBpage} from '../fbSection/fbPage';

import { Observable }        from 'rxjs/Observable';
import {NotificationsComponent} from '../notifications/notifications.component';
import {DialogOverviewExample} from './tstFiles/dialog-tst.component';

@Component({
  selector: 'alert-form',
  templateUrl: 'app/dashboard/alert/alert-form.component.html',
  styleUrls: ['app/dashboard/alert/alert-form.component.css'],
  entryComponents:[NotificationsComponent,DialogOverviewExample],
  
  providers : [AlertCritereService,AlertSearchService,FBService]
})
export class AlertFormComponent  implements OnInit{
 
  
  private instances: Instance[];
  private errorMessage: string='';
  alert:FormGroup = new FormGroup({});
  goodNotif:boolean=false;
  badNotif:boolean=false;
  isLoading = false;
  private username:any;
  pages:FBpage[]=[];
  pagesNames:string[]=[] ;
  nameOfPage:string = "";
  fbPagesNames:string[] =[];
  filtredPages:string;
  filteredList:string[] = ["BBC"] ;
  i:any ;
  constructor( private alertCritereService: AlertCritereService,private alertSearchService:AlertSearchService,
  private router: Router,private _fbService:FBService)
  {   
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.username = user.username;
    
  }
  
    

  ngOnInit() { 
     
    //alert(this.nameOfPage) ;
      console.log("hyyyyyyy  "+this.username);
     this.alert = new FormGroup({
      descA: new FormControl(''),
      descI: new FormControl(''),
      optKeywords: new FormControl(''),
      forbidenKeywords: new FormControl(''),
      srcAutorises: new FormControl(''),
      srcBloques: new FormControl(''),
      langue: new FormControl(''),
      srcAutorisesTw:new FormControl(''), 
      srcBloquesTw:new FormControl(''),
       
      fbPage : new FormControl(["CNN"])
      
    });
     this.fbPagesNames = this.alert.value.fbPage ;
     this.alert.value.fbPage.pop("CNN") ;
     this.filteredList.pop() ; 
      this.getPages();
       
   
     
  //console.log(this.pagesNames[0]) ;
     


    

      this.getInstances();
      console.log(this.instances);
}
 
  
    getInstances() {
        this.alertSearchService.getS()
           .subscribe(res=>{
            this.instances=res;
            console.log(this.instances); // make sure you get data here.
         },
         (err)=>console.log(err),
         ()=>console.log("Done")
         );
 }   

  submitted = false;
  onSubmit() { 
    this.submitted = true;
    let tst:boolean;
    console.log(this.alert.value,this.alert.value.fbPage); 
  // this.alert.value.fbPage = ["CNN"];
   this.add(this.alert.value);
    

  }
add(alert: Alert) :void 
{

    if (!alert) { return; }
    this.isLoading =true;
    this.alertCritereService.creat(alert)
                     .subscribe( () =>{this.isLoading=false;this.goodNotif =true;},
                       error =>  {
                         this.badNotif = true;
                        },
                       ()=>
                       { this.isLoading=false;console.log(alert);  
                      } );

  }

  getPages() {
        this._fbService._getFbPages()
           .subscribe(res=>{
            this.pages=res;
            console.log(this.pages); // make sure you get data here.
            this.getPagesNames() ;
         },
         (err)=>console.log(err),
         ()=>console.log("Done")
         );


 } 

  openCustom():void
  {
     this.router.navigate(['/newinstance']);
  }

  
 get  registerData()
  {
    return null;
     // return JSON.stringify(this.model);
  }
  
 onEvent(event) {
   event.stopPropagation();
}

doIt() {

if(this.nameOfPage !="") this.alert.value.fbPage.push(this.nameOfPage) ;
this.fbPagesNames = this.alert.value.fbPage ;
//alert(this.fbPagesNames)
this.nameOfPage="" ;

}

doItOption(str) {

if(this.nameOfPage !="") this.alert.value.fbPage.push(this.nameOfPage) ;
this.fbPagesNames = this.alert.value.fbPage ;
//alert(this.fbPagesNames)
this.nameOfPage="" ;

}
/*
autoCompleteMe() {
this.filtredPages = this.filterPages(this.nameOfPage) ;


}
*/
filter() {
  // console.log(this.pagesNames[0]) ;
   this.filteredList = [] ;
// this.filteredList = this.pagesNames.filter(this.checkAdult) ;
for (this.i = 0; this.i < this.pagesNames.length; this.i++) {
  if(this.pagesNames[this.i].toLowerCase().indexOf(this.nameOfPage.toLowerCase()) > -1) {
     this.filteredList.push(this.pagesNames[this.i]) ;
    }
}

}

getPagesNames() {
     this.pagesNames = [] ;
          for (this.i = 0; this.i < this.pages.length; this.i++) { 
    this.pagesNames.push(this.pages[this.i].pageName) ;
    //alert("here") ;
    console.log(this.pagesNames[this.i]) ;

}
}

deletePage(index) {
this.alert.value.fbPage.splice(index,1) ;

}


}
