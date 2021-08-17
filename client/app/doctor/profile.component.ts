import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-docprof',
    templateUrl: 'app/doctor/profile.html',
    providers: [HTTP_PROVIDERS,UserService]
})

export class ProfileComponent {

    title: string; uname: string; cat: string; mob: Number;eid: string; 
    special:string;stat: string; uid: string;

    constructor(private us: UserService) {// dependency injection
        this.title = "My Profile";
        this.uid = this.us.userid;
        this.uname = this.us.username;
        this.cat = this.us.category;
        this.mob = this.us.phone;
        this.eid = this.us.emailid;
        this.special = this.us.special;
        this.stat = this.us.status;
    }
}