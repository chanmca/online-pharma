import { Injectable } from 'angular2/core';
import { User } from '../models/user';
import { Http, Headers, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  login(eid: string, pswd: string) {
    return this.http.get('http://localhost:8000/api/authenticate/' + eid + '/' + pswd);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}






/*
  
  login(eid: string, pswd: string) {
    return this.http.get('http://localhost:8000/api/authenticate/' + eid + '/' + pswd)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userFound = true;
          console.log(user, this.userFound);
        }
        return true;
      });
  }
*/