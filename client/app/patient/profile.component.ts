import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-patprof',
    templateUrl: 'app/patient/profile.html',
    providers: [HTTP_PROVIDERS,UserService]
})

export class ProfileComponent {

    title: string; uname: string; cat: string; age: number; sex: string; mob: Number;
    eid: string; rdate: Date; stat: string; uid: string;

    constructor(private us: UserService) {// dependency injection
        this.title = "My Profile";
        this.uid = this.us.userid;
        this.uname = this.us.username;
        this.cat = this.us.category;
        this.age = this.us.age;
        this.sex = this.us.sex;
        this.mob = this.us.phone;
        this.eid = this.us.emailid;
        this.rdate = this.us.registereddate;
        this.stat = this.us.status;
    }
}