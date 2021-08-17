import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()

export class ContactService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    getContacts(cat) {
        return this.http.get('http://localhost:8000/api/contacts/' + cat);
    }
}