import { Component,state,style,animate,transition, trigger, keyframes,OnInit } from '@angular/core';
import {UserService} from './user.service';
import { AuthenticationService } from '../../login/authentication.service';

import { Router, ActivatedRoute,Params } from '@angular/router';
import { Subscription }  from 'rxjs/Subscription';
import{User} from './user';
import {NotificationsComponent} from '../notifications/notifications.component'
@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    providers:[UserService,AuthenticationService],
    entryComponents :[NotificationsComponent],
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    })


    export class UserComponent implements OnInit{ 

   private sub: Subscription;
   public profile:User;
   goodNotif:boolean=false;
   badNotif:boolean=false;
   private submitted = false;

   
    model :User=new User("","","","");
  constructor(private userService:UserService,private _route: ActivatedRoute,private authService: AuthenticationService)
  {

  }


  ngOnInit() { 
  //console.log("Us is here  "+localStorage.getItem('currentUser'));
      let user = JSON.parse(localStorage.getItem('currentUser'));
      //console.log(user.username);
      if(user)
            this.userService.get(user.username).subscribe(p => this.profile = p,(err) =>console.log(err));
     else
        console.log("no user is logged or token is here");
}

 onSubmit(form:User) { 
   
   this.submitted =true;
   console.log(form.name+" "+form.email+" "+form.description+" "+
   form.tel); 
   this.userService.update(
      new User(form.name,form.description,form.email,form.tel))
      .subscribe( () =>{
          this.goodNotif =true;
        console.log("OK Updated");}
                        ,
                       error =>  {
                         this.badNotif = true;
                         
                        },
                       ()=>
                       { console.log(alert);  
                      } );
                       
 }


}