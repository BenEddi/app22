import {Component} from '@angular/core';
import { Location }               from '@angular/common';
import {Instance} from './instance';
import{InstanceService} from './instance.service';
@Component({
selector:'newInstance',
template:`
<div class="container-fluid">
  <notifications-cmp [notifTosend]="goodNotif" [badNotifToSend]="badNotif"></notifications-cmp>
  <div class="main-content">
      <form #instanceForm="ngForm" (ngSubmit)="onSubmit()" class="form-inline">
        <div class="form-group">
          <label class="sr-only" for="instance">Nom de l'instance</label>
          <input type="text" class="form-control" id="descI" name="descI"
          [(ngModel)]="model.descI" placeholder="Nom de l'instance">
        </div>

        <button type="submit" class="btn btn-default">Valider</button>
      </form>
      <br/>
      <button class="btn btn-info" (click)="goBack()">Back</button>
    </div>
  </div>  `,
providers:[InstanceService]

})



export class InstanceFormComponent
{
 private model :Instance=new Instance("");
 private errorMessage: string='';
 goodNotif:boolean=false;
 badNotif:boolean=false;
 constructor(private location:Location,private instanceService:InstanceService)
 {

 }

 onSubmit() { 
    
    console.log(this.model.descI); 
    this.add(new Instance(this.model.descI));
  }

  add(instance: Instance) {
    if (!instance) { return; }
    
    this.instanceService.creat(instance)
                     .subscribe( () =>this.goodNotif =true,
                       error =>  {
                         this.badNotif =true;
                         this.errorMessage = <any>error;    
                       },
                       ()=> console.log(instance));

  }
 goBack(): void {
    this.location.back();
  }

}