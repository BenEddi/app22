import { Component,state,style,animate,transition, trigger, keyframes,OnInit } from '@angular/core';
import {UserService} from '../dashboard/user/user.service';

import { Router, ActivatedRoute,Params } from '@angular/router';
import { Subscription }  from 'rxjs/Subscription';
import{User} from '../dashboard/user/user';
@Component({
    moduleId: module.id,
    selector: 'register-cmp',
    templateUrl: 'register.component.html',
    providers:[UserService],
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

    export class RegisterComponent implements OnInit{ 

   private sub: Subscription;
   public profile:User;
 
   private submitted = false;

   
    model :User=new User("","","","");
  constructor(private userService:UserService,private _route: Router)
  {

  }


  ngOnInit() { 
  
}

 onSubmit(form:User) { 
   
   this.submitted =true;
   console.log(form.name+" "+form.email+" "+form.description+" "+
   form.tel+" "+form.username+" "+form.password); 
   var us:User= new User(form.name,form.description,form.email,form.tel);
   us.username=form.username;
   us.password = form.password;
   console.log(this.userService.create(us));
   this._route.navigate(['login']);
                       
 }


}