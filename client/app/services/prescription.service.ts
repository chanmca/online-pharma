import { Injectable} from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()

export class PrescriptionService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    getPrescriptions() {
        return this.http.get('http://localhost:8000/api/prescriptions');
    }

    getPrescripByPatId(id) {
        return this.http.get('http://localhost:8000/api/prescriptions/'+id);
    }

    getPrescripDocId(id) {
        return this.http.get('http://localhost:8000/api/docprescrip/'+id);
    }
}