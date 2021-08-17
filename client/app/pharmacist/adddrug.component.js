System.register(['angular2/core', '../services/inventory.service', 'angular2/http', '../models/inventory', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, inventory_service_1, http_1, inventory_1, common_1;
    var AdddrugComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (inventory_service_1_1) {
                inventory_service_1 = inventory_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (inventory_1_1) {
                inventory_1 = inventory_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AdddrugComponent = (function () {
                function AdddrugComponent(iSer, dp) {
                    this.iSer = iSer;
                    this.dp = dp;
                    this.sid = [];
                    this.invent = Object.create(inventory_1.Inventory.prototype);
                    this.inventories = [];
                    this.format = 'dd-mm-yyyy';
                    this.header = [
                        'DRUG ID', 'DRUG NAME', 'CATEGORY', 'STRENGTH', 'QUANTITY', 'PER-UNIT', 'UNIT', 'COST', 'STATUS', 'DATE OF EXPIRY', 'DESCRIPTION'
                    ];
                }
                AdddrugComponent.prototype.addDrug = function () {
                    var _this = this;
                    this.changeToUpper();
                    this.invent.STATUS = "AVAILABLE";
                    this.iSer.getInventCount().subscribe(function (cou) {
                        _this.count = Number(JSON.parse(cou._body));
                        _this.id = _this.count + 1;
                        if (_this.count <= 9) {
                            _this.invent.DRUGID = "DR0000" + _this.id;
                        }
                        else if (_this.count <= 99) {
                            _this.invent.DRUGID = "DR000" + _this.id;
                        }
                        else if (_this.count <= 999) {
                            _this.invent.DRUGID = "DR00" + _this.id;
                        }
                        else if (_this.count <= 9999) {
                            _this.invent.DRUGID = "DR0" + _this.id;
                        }
                        else {
                            _this.invent.DRUGID = "DR" + _this.id;
                        }
                        _this.iSer.addDrug(_this.invent).subscribe(function (result) {
                            _this.inventories.push(JSON.parse(result._body));
                        }, function (error) { return console.log(error); });
                    });
                };
                AdddrugComponent.prototype.changeToUpper = function () {
                    this.invent.DRUGNAME = this.invent.DRUGNAME.toUpperCase();
                    this.invent.CATEGORY = this.invent.CATEGORY.toUpperCase();
                    this.invent.COMPANY = this.invent.COMPANY.toUpperCase();
                    this.invent.SUPPLIER = this.invent.SUPPLIER.toUpperCase();
                    this.invent.STRENGTH = this.invent.STRENGTH.toUpperCase();
                    this.invent.UNIT = this.invent.UNIT.toUpperCase();
                    this.invent.DESCRIPTION = this.invent.DESCRIPTION.toUpperCase();
                };
                AdddrugComponent = __decorate([
                    core_1.Component({
                        selector: 'app-addrug',
                        templateUrl: 'app/pharmacist/adddrug.html',
                        providers: [http_1.HTTP_PROVIDERS, inventory_service_1.InventoryService, common_1.DatePipe]
                    }), 
                    __metadata('design:paramtypes', [inventory_service_1.InventoryService, common_1.DatePipe])
                ], AdddrugComponent);
                return AdddrugComponent;
            }());
            exports_1("AdddrugComponent", AdddrugComponent);
        }
    }
});
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
//# sourceMappingURL=adddrug.component.js.map