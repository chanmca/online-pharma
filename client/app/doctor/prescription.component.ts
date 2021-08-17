import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import {PrescriptionService} from "../services/prescription.service";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-docpres',
    templateUrl: 'app/doctor/prescription.html',
    providers: [HTTP_PROVIDERS,PrescriptionService,UserService]
})

export class DocscripComponent {
    // properties
    title: string;
    header = ['PRESCRIPTION ID', 'PATIENT ID', 'DATE'];
    docscrips=[];
    docid:string;

    constructor(public docscripService:PrescriptionService, public us:UserService) {// dependency injection
        this.title = "List of Prescriptions!!!";
        this.docid = this.us.userid;
        this.docscripService.getPrescripDocId(this.docid).subscribe(
            (pre)=>{
                this.docscrips=JSON.parse(pre._body);
            }
        );
    }
}