import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AuthenticationService} from '../../login/authentication.service';
import {AppComponent} from '../../app.component';
@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    entryComponents :[AppComponent],
    providers:[AuthenticationService]
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private Account:string;
    /*@Input()
    private AccountToSend:string;*/

    constructor(private router: Router,location:Location,private _authService:AuthenticationService) {
        this.location = location;
         
    }
    ngOnInit(){

        this.listTitles = ROUTES.filter(listTitle => listTitle);
        let user = JSON.parse(localStorage.getItem('currentUser'));
         if(user)
            this.Account = user.username;
    }
    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

logout():void
{
    this._authService.logout();
    
    this.router.navigate(['login']);
    
}

}
