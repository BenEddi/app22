import { Component,Input,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alert }    from '../alert/alert';
import {Router} from '@angular/router';
import {Instance} from '../alert/instance';
import {FBpage} from './fbPage';
import {AlertSearchService} from '../alert/alert-search.service';
import {FBService} from './fb.service';
import { Observable }        from 'rxjs/Observable';
import {NotificationsComponent} from '../notifications/notifications.component';

@Component({
  selector: 'FB-form',
  templateUrl: 'app/dashboard/fbSection/fb-form.component.html',


  providers : [AlertSearchService,FBService]
})
export class FBFormComponent  implements OnInit{
 
  
  private instances: Instance[];
  private errorMessage: string='';
  model:FBpage = new FBpage();
 

  constructor( private fbService:FBService,private alertSearchService:AlertSearchService,private router: Router){}
    
  ngOnInit() { 
    

   
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
  onSubmit(form:FBpage) { 
    this.submitted = true;
    let tst:boolean;
    console.log(form); 
   this.add(form);
    

  }
add(fbPage: FBpage) :void 
{

    if (!fbPage) { return; }
    this.fbService.creat(fbPage)
                     .subscribe( 
                       error =>  {
                         this.errorMessage = 'sommething go wrong';
                        },
                      
                        () => console.log(fbPage)
                     );
                       
              
       
  }

  openCustom():void
  {
     this.router.navigate(['/newinstance']);
  }

  

}
