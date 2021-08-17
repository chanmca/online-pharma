System.register(['angular2/core', 'angular2/http', "../services/inventory.service"], function(exports_1, context_1) {
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
    var core_1, http_1, inventory_service_1;
    var FindInvComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (inventory_service_1_1) {
                inventory_service_1 = inventory_service_1_1;
            }],
        execute: function() {
            FindInvComponent = (function () {
                function FindInvComponent(finService) {
                    this.finService = finService;
                    this.header = [
                        'DRUG ID', 'DRUG NAME', 'CATEGORY', 'STRENGTH', 'QUANTITY', 'PER-UNIT', 'UNIT', 'COST', 'STATUS', 'DATE OF EXPIRY', 'DESCRIPTION'
                    ];
                    this.inventories = [];
                    this.drug = {};
                    this.dtext = "";
                    this.dfield = "DRUG ID";
                    this.title = "Search inventories by Drug ID or Drug Name or Category";
                    this.showDrug = false;
                    this.showInvent = false;
                }
                FindInvComponent.prototype.getDrug = function () {
                    var _this = this;
                    this.dtext = this.dtext.toUpperCase();
                    if (this.dfield == "DRUG ID") {
                        this.finService.getDrugById(this.dtext).subscribe(function (d) {
                            _this.drug = JSON.parse(d._body);
                        });
                        this.showDrug = true;
                        this.showInvent = false;
                    }
                    else if (this.dfield == "DRUG NAME") {
                        this.finService.getDrugByName(this.dtext).subscribe(function (d) {
                            _this.inventories = JSON.parse(d._body);
                        });
                        this.showDrug = false;
                        this.showInvent = true;
                    }
                    else {
                        this.finService.getDrugByCat(this.dtext).subscribe(function (d) {
                            _this.inventories = JSON.parse(d._body);
                        });
                        this.showDrug = false;
                        this.showInvent = true;
                    }
                };
                FindInvComponent = __decorate([
                    core_1.Component({
                        selector: 'app-findinv',
                        templateUrl: 'app/pharmacist/findinv.html',
                        providers: [http_1.HTTP_PROVIDERS, inventory_service_1.InventoryService],
                    }), 
                    __metadata('design:paramtypes', [inventory_service_1.InventoryService])
                ], FindInvComponent);
                return FindInvComponent;
            }());
            exports_1("FindInvComponent", FindInvComponent);
        }
    }
});
//# sourceMappingURL=findinv.component.js.map