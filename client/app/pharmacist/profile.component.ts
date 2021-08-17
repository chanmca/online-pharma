import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-profile',
    templateUrl: 'app/pharmacist/profile.html',
    providers: [HTTP_PROVIDERS,UserService]
})

export class ProfileComponent {

    title: string;
    uname: string; uid: string; cat: string; eid: string; stat: string;

    constructor(private us: UserService) {// dependency injection
        this.title = 'Pharmacist Details';
        this.uid = this.us.userid;
        this.uname = this.us.username;
        this.cat = this.us.category;
        this.eid = this.us.emailid;
        this.stat = this.us.status;
    }
}