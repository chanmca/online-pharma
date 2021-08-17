import { Component, ElementRef } from 'angular2/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from 'angular2/router';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login.html',
    providers: [HTTP_PROVIDERS, AuthenticationService, ROUTER_DIRECTIVES]
})

export class LoginComponent {
    fuser: any = [];
    errorMsg = '';
    cat:string;
    sessionUser = Object.create(User.prototype);
    constructor(private authService: AuthenticationService, private router: Router) {
        this.authService.logout();
    }
    login() {
        this.authService.login(this.fuser.emailid, this.fuser.password).subscribe(
            (user) => {
                this.sessionUser = JSON.parse(user._body);
                localStorage.setItem('currentUser', JSON.stringify(this.sessionUser));
                    for (let u of this.sessionUser) {
                        this.cat=u.CATEGORY;
                    }
                    if (this.cat == "PHARMACIST") {
                        this.router.navigate(["Pharma"]);
                    }
                    else if (this.cat == "PATIENT") {
                        this.router.navigate(["Patient"]);
                    }
                    else if (this.cat == "DOCTOR") {
                        this.router.navigate(["Doctor"]);
                    }
                    else {
                        this.authService.logout();
                        this.errorMsg = "User name or password is incorrect";
                    }
            }
        );
    }
}

 /*  if (!this.authService.login(this.fuser.emailid, this.fuser.password)) {
            this.errorMsg = 'Failed to login';

            login() {
        if (this.authService.login(this.fuser.emailid, this.fuser.password).subscribe()) {
            this.sessionUser=JSON.parse(localStorage.getItem('currentUser'));
            console.log(this.sessionUser);
            console.log(localStorage.getItem('currentUser'));
        }
        else {
            this.errorMsg = "User name or password is incorrect";
        }
    }
        } 
        
   login() {
        if (this.authService.login(this.fuser.emailid, this.fuser.password).subscribe()) {
            this.sessionUser = localStorage.getItem('currentUser');
            for (let u of this.sessionUser) {
                console.log(u.CATEGORY); // "0", "1", "2",
            }
            this.router.navigate(["Pharma"]);
        }
        else {
            this.errorMsg = "User name or password is incorrect";
        }
    }            
*/