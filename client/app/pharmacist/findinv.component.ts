import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import {InventoryService} from "../services/inventory.service";

@Component({
    selector: 'app-findinv',
    templateUrl: 'app/pharmacist/findinv.html',
    providers: [HTTP_PROVIDERS,InventoryService],
})

export class FindInvComponent {
    // properties
    title: string;
    header = [
        'DRUG ID', 'DRUG NAME', 'CATEGORY', 'STRENGTH', 'QUANTITY', 'PER-UNIT', 'UNIT', 'COST', 'STATUS', 'DATE OF EXPIRY', 'DESCRIPTION'
    ];
    showDrug:boolean;showInvent:boolean;
    inventories=[];drug={};
    dtext:string="";
    dfield:string="DRUG ID";

    constructor(public finService:InventoryService) {
        this.title = "Search inventories by Drug ID or Drug Name or Category";
        this.showDrug = false;
        this.showInvent = false;
    }

    getDrug() {
        this.dtext = this.dtext.toUpperCase();
        if (this.dfield == "DRUG ID")
        {
            this.finService.getDrugById(this.dtext).subscribe(
                (d)=>{
                    this.drug=JSON.parse(d._body);
                }
            );
            this.showDrug = true;
            this.showInvent = false;
        }
        else if (this.dfield == "DRUG NAME")
        {
            this.finService.getDrugByName(this.dtext).subscribe(
                (d)=>{
                    this.inventories=JSON.parse(d._body);
                }
            );
            this.showDrug = false;
            this.showInvent = true;
        }
        else
        {
            this.finService.getDrugByCat(this.dtext).subscribe(
                (d)=>{
                    this.inventories=JSON.parse(d._body);
                }
            );
            this.showDrug = false;
            this.showInvent = true;
        }
    }
}