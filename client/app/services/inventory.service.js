System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var InventoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            InventoryService = (function () {
                function InventoryService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                }
                InventoryService.prototype.getInventories = function () {
                    return this.http.get('http://localhost:8000/api/inventories');
                };
                InventoryService.prototype.getDrugById = function (id) {
                    return this.http.get('http://localhost:8000/api/inventories/' + id);
                };
                InventoryService.prototype.getDrugByName = function (name) {
                    return this.http.get('http://localhost:8000/api/inventname/' + name);
                };
                InventoryService.prototype.getDrugByCat = function (cat) {
                    return this.http.get('http://localhost:8000/api/inventcat/' + cat);
                };
                InventoryService.prototype.getInventCount = function () {
                    return this.http.get('http://localhost:8000/api/inventcount');
                };
                InventoryService.prototype.addDrug = function (invent) {
                    var drug = JSON.stringify(invent);
                    return this.http.post('http://localhost:8000/api/insertdrug', drug, this.options);
                };
                InventoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], InventoryService);
                return InventoryService;
            }());
            exports_1("InventoryService", InventoryService);
        }
    }
});
//# sourceMappingURL=inventory.service.js.map