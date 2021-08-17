import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import {OrderService} from "../services/order.service";
import {DetailsService} from "../services/details.service";

@Component({
    selector: 'app-order',
    templateUrl: 'app/pharmacist/order.html',
    providers: [HTTP_PROVIDERS,OrderService,DetailsService]
})

export class OrderComponent {
    // properties
    title: string;
    header = [
        'ORDER ID', 'PRESCRIPTION ID', 'PATIENT ID', 'TOTAL AMOUNT', 'DELIVERY STATUS'
    ];
    ordheader = [
        'DRUG ID', 'DOSAGE', 'DAYS', 'QUANTITY REQUIRED', 'UNIT DELIVERED', 'PER UNIT', 'COST PER UNIT', 'COST'
    ]; 
    preheader = [
        'DRUG ID', 'DRUG NAME', 'DOSAGE', 'DAYS'
    ]; 
    orders=[];
    did:number=0;
    curOrder:string;curPresc:string;
    ordDetails=[];
    preDetails=[];
    patient=[];
    showPresDetails:boolean =false;
    showOrdDetails:boolean =false;
    showPatDetails:boolean =false;
    constructor(private orderService:OrderService, private dService:DetailsService) {// dependency injection
        this.title = "List of Orders!!!";
        this.orderService.getOrders().subscribe(
            (ord)=>{
                this.orders=JSON.parse(ord._body);
            }
        );
    }
    getOrdDetails(ordid) {
        this.curOrder = ordid;
        this.dService.getOrderDetails(ordid).subscribe(
            (odet)=> {
                this.ordDetails = JSON.parse(odet._body);
            }
        );
        this.showOrdDetails = true;
    }
    getPatDetails(patid) {
        this.dService.getUserById(patid).subscribe(
            (pdet)=> {
                this.patient = JSON.parse(pdet._body);
            }
        );
        this.showPatDetails = true;
    }
    getPrecDetails(preid) {
        this.curPresc = preid;
        this.dService.getPrecDetails(preid).subscribe(
            (predet)=> {
                this.preDetails = JSON.parse(predet._body);
            }
        );
        this.showPresDetails = true;
    }
}