import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()

export class DetailsService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    getOrderDetails(ordid) {
        return this.http.get('http://localhost:8000/api/getorderdetails/' + ordid);
    }
    getUserById(id) {
        return this.http.get('http://localhost:8000/api/user/' + id);
    }
    getPrecDetails(preid) {
        return this.http.get('http://localhost:8000/api/getpredetails/' + preid);
    }
}