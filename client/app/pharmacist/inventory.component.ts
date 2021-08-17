import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import {InventoryService} from "../services/inventory.service";

@Component({
    selector: 'app-invent',
    templateUrl: 'app/pharmacist/inventory.html',
    providers: [HTTP_PROVIDERS,InventoryService]
})

export class InventoryComponent {
    // properties
    title: string;
    header = [
        'DRUG ID', 'DRUG NAME', 'CATEGORY', 'STRENGTH', 'QUANTITY', 'PER-UNIT', 'UNIT', 'COST', 'STATUS', 'DATE OF EXPIRY', 'DESCRIPTION'
    ];
    inventories=[];
    durg={};
    did:number=0;

    constructor(public inventoryService:InventoryService) {// dependency injection
        this.title = "List of Inventories!!!";
        this.inventoryService.getInventories().subscribe(
            (invent)=>{
                this.inventories=JSON.parse(invent._body);
            }
        );
    }
}