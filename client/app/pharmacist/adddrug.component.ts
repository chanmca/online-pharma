import { Component } from 'angular2/core';
import { InventoryService } from '../services/inventory.service';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import { Inventory } from '../models/inventory';
import { DatePipe } from 'angular2/common';
import {DateFormatter} from 'angular2/src/facade/intl';

@Component({
    selector: 'app-addrug',
    templateUrl: 'app/pharmacist/adddrug.html',
    providers: [HTTP_PROVIDERS, InventoryService,DatePipe]
})
/* export class Constants {
    static readonly DATE_FMT = 'dd-MM-yyyy';
    static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
} */
export class AdddrugComponent {
    sid: any = [];
    invent = Object.create(Inventory.prototype);
    inventories=[];
    format:any = 'dd-mm-yyyy';
    count: number;
    id: number;
    header = [
        'DRUG ID', 'DRUG NAME', 'CATEGORY', 'STRENGTH', 'QUANTITY', 'PER-UNIT', 'UNIT', 'COST', 'STATUS', 'DATE OF EXPIRY', 'DESCRIPTION'
    ];
    constructor(private iSer: InventoryService, private dp: DatePipe) {
    }

    addDrug() {
        this.changeToUpper();
        this.invent.STATUS = "AVAILABLE";
        this.iSer.getInventCount().subscribe(
            (cou) => {
                this.count = Number(JSON.parse(cou._body));
                this.id = this.count + 1;
                if (this.count <= 9) {
                    this.invent.DRUGID = "DR0000" + this.id;
                }
                else if (this.count <= 99) {
                    this.invent.DRUGID = "DR000" + this.id;
                }
                else if (this.count <= 999) {
                    this.invent.DRUGID = "DR00" + this.id;
                }
                else if (this.count <= 9999) {
                    this.invent.DRUGID = "DR0" + this.id;
                }
                else {
                    this.invent.DRUGID = "DR" + this.id;
                }
                this.iSer.addDrug(this.invent).subscribe(
                    (result) => {
                        this.inventories.push(JSON.parse(result._body));
                    },
                    error => console.log(error)
                );
            }
        );
    }
    changeToUpper() {
        this.invent.DRUGNAME = this.invent.DRUGNAME.toUpperCase();
        this.invent.CATEGORY = this.invent.CATEGORY.toUpperCase();
        this.invent.COMPANY = this.invent.COMPANY.toUpperCase();
        this.invent.SUPPLIER = this.invent.SUPPLIER.toUpperCase();
        this.invent.STRENGTH = this.invent.STRENGTH.toUpperCase();
        this.invent.UNIT = this.invent.UNIT.toUpperCase();
        this.invent.DESCRIPTION = this.invent.DESCRIPTION.toUpperCase();
    }
}


/*

this.iSer.getInventIDs(this.invent.drugCat).subscribe(
            (dids) => {
                this.sid = JSON.parse(dids._body);
            }
        );
        console.log(this.sid.length);
id : number[] =[];
for (let i of this.sid) {
            this.id.push(Number(i.DURGID.slice(2,7)));
            console.log(i.DURGID);
        }
        this.count = this.id.length;
        console.log(this.count);
        for(let j of this.id) {
            console.log(j);
        }

        ----not working----
        this.invent.DOS = this.dp.transform(this.invent.DOS,this.format);
        this.invent.DOS = DateFormatter.format(this.invent.DOS, 'en-IN', 'dd-MM-yyyy');
        console.log(this.invent.DOS);

         formatDate(d) {
        let addZeroToLoneFigure = (n) => n.toString().length === 1 ? '0' + n : n.toString();
        let format = 'DD-MM-YYYY';
        format.replace('DD', addZeroToLoneFigure(d.getDate()));
        format.replace('MM', addZeroToLoneFigure(d.getMonth() + 1));
        format.replace('YYYY', addZeroToLoneFigure(d.getFullYear()));
        return format;
    }
*/