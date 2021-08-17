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
    var InventoryComponent;
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
            InventoryComponent = (function () {
                function InventoryComponent(inventoryService) {
                    var _this = this;
                    this.inventoryService = inventoryService;
                    this.header = [
                        'DRUG ID', 'DRUG NAME', 'CATEGORY', 'STRENGTH', 'QUANTITY', 'PER-UNIT', 'UNIT', 'COST', 'STATUS', 'DATE OF EXPIRY', 'DESCRIPTION'
                    ];
                    this.inventories = [];
                    this.durg = {};
                    this.did = 0;
                    this.title = "List of Inventories!!!";
                    this.inventoryService.getInventories().subscribe(function (invent) {
                        _this.inventories = JSON.parse(invent._body);
                    });
                }
                InventoryComponent = __decorate([
                    core_1.Component({
                        selector: 'app-invent',
                        templateUrl: 'app/pharmacist/inventory.html',
                        providers: [http_1.HTTP_PROVIDERS, inventory_service_1.InventoryService]
                    }), 
                    __metadata('design:paramtypes', [inventory_service_1.InventoryService])
                ], InventoryComponent);
                return InventoryComponent;
            }());
            exports_1("InventoryComponent", InventoryComponent);
        }
    }
});
//# sourceMappingURL=inventory.component.js.map