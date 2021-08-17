import { Injectable } from 'angular2/core';
import { Http, Headers, RequestOptions, Response } from 'angular2/http';
import { Inventory } from '../models/inventory';

@Injectable()

export class InventoryService {
    http: Http;
    headers: Headers;
    options: RequestOptions;
    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getInventories() {
        return this.http.get('http://localhost:8000/api/inventories');
    }

    getDrugById(id) {
        return this.http.get('http://localhost:8000/api/inventories/' + id);
    }

    getDrugByName(name) {
        return this.http.get('http://localhost:8000/api/inventname/' + name);
    }

    getDrugByCat(cat) {
        return this.http.get('http://localhost:8000/api/inventcat/' + cat);
    }

    getInventCount() {
        return this.http.get('http://localhost:8000/api/inventcount');
    }
    addDrug(invent:any) {
        let drug = JSON.stringify(invent);
        return this.http.post('http://localhost:8000/api/insertdrug', drug, this.options);
    }
}