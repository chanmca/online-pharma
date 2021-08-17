import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import { User } from '../models/user';

@Injectable()

export class UserService {
    http: Http;
    user = Object.create(User.prototype);
    userid: string;username: string;category: string;age: number;sex: string;phone: Number;emailid: string;
    registereddate: Date;status: string;special: string;

    constructor(http: Http) {
        this.http = http;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        for (let u of this.user) {
            this.userid = u.USERID;
            this.username = u.USERNAME;
            this.category = u.CATEGORY;
            this.age = u.AGE;
            this.sex = u.SEX;
            this.phone = u.PHONE;
            this.emailid = u.EMAILD;
            this.special = u.SPECIALISATION;
            this.registereddate = u.REGISTEREDDATE;
            this.status= u.STATUS;
        }
    }
    
    getUserById(id) {
        return this.http.get('http://localhost:8000/api/user/' + id);
    }
}