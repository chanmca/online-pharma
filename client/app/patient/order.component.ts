import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import { OrderService } from "../services/order.service";
import { UserService } from "../services/user.service";
import { DetailsService } from "../services/details.service";

@Component({
    selector: 'app-patorder',
    templateUrl: 'app/patient/order.html',
    providers: [HTTP_PROVIDERS, OrderService, UserService, DetailsService]
})

export class OrderComponent {
    // properties
    title: string;
    ordHeader = [
        'ORDER ID', 'PRESCRIPTION ID', 'TOTAL AMOUNT', 'DELIVERY STATUS'
    ];
    orddetheader = [
        'DRUG ID', 'DOSAGE', 'DAYS', 'QUANTITY REQUIRED', 'UNIT DELIVERED', 'PER UNIT', 'COST PER UNIT', 'COST'
    ];
    orders = []; ordDetails = [];
    patid: string; curOrder: string;
    showOrdDetails: boolean = false;
    constructor(private orderService: OrderService, private us: UserService, private ds: DetailsService) {// dependency injection
        this.title = "List of Orders!!!";
        this.patid = this.us.userid;
        this.orderService.getOrdersByPatId(this.patid).subscribe(
            (pre) => {
                this.orders = JSON.parse(pre._body);
            }
        );
    }
    getOrdDetails(ordid) {
        this.curOrder = ordid;
        this.ds.getOrderDetails(ordid).subscribe(
            (odet) => {
                this.ordDetails = JSON.parse(odet._body);
            }
        );
        this.showOrdDetails = true;
    }
}