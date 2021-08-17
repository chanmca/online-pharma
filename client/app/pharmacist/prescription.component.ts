import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import {PrescriptionService} from "../services/prescription.service";

@Component({
    selector: 'app-prescrip',
    templateUrl: 'app/pharmacist/prescription.html',
    providers: [HTTP_PROVIDERS,PrescriptionService]
})

export class PrescriptionComponent {
    // properties
    title: string;
    header = [
        'PRESCRIPTION ID', 'PATIENT ID', 'DOCTOR ID', 'DATE'
    ];
    prescriptions=[];
    did:number=0;

    constructor(public prescripService:PrescriptionService) {// dependency injection
        this.title = "List of Prescriptions!!!";
        this.prescripService.getPrescriptions().subscribe(
            (pre)=>{
                this.prescriptions=JSON.parse(pre._body);
            }
        );
    }
}