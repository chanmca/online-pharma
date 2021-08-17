import { Injectable} from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()

export class OrderService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    getOrders() {
        return this.http.get('http://localhost:8000/api/orders');
    }
    
    getOrdersByPatId(id) {
        return this.http.get('http://localhost:8000/api/custorders/'+id);
    }
}