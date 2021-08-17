import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import { PrescriptionService } from "../services/prescription.service";
import { UserService } from "../services/user.service";
import { DetailsService } from "../services/details.service";

@Component({
    selector: 'app-patpres',
    templateUrl: 'app/patient/prescription.html',
    providers: [HTTP_PROVIDERS, PrescriptionService, UserService, DetailsService]
})

export class PrescriptionComponent {
    // properties
    title: string;
    header = ['PRESCRIPTION ID', 'DOCTOR ID', 'DATE'];
    preheader = [
        'DRUG ID', 'DRUG NAME', 'DOSAGE', 'DAYS'
    ]; 
    patprescrips = [];
    patid: string;
    doctor = [];
    preDetails = [];curPresc:string;
    showDocDetails: boolean = false;
    showPresDetails: boolean = false;
    constructor(private prescripService: PrescriptionService, private us: UserService, private ds: DetailsService) {// dependency injection
        this.title = "List of Prescriptions!!!";
        this.patid = this.us.userid;
        this.prescripService.getPrescripByPatId(this.patid).subscribe(
            (pre) => {
                this.patprescrips = JSON.parse(pre._body);
            }
        );
    }
    getDocDetails(docid) {
        this.ds.getUserById(docid).subscribe(
            (docdet) => {
                this.doctor = JSON.parse(docdet._body);
            }
        );
        this.showDocDetails = true;
    }
    getPrecDetails(preid) {
        this.curPresc = preid;
        this.ds.getPrecDetails(preid).subscribe(
            (predet) => {
                this.preDetails = JSON.parse(predet._body);
            }
        );
        this.showPresDetails = true;
    }
}