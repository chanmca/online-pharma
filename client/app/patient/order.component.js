System.register(['angular2/core', 'angular2/http', "../services/order.service", "../services/user.service", "../services/details.service"], function(exports_1, context_1) {
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
    var core_1, http_1, order_service_1, user_service_1, details_service_1;
    var OrderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (details_service_1_1) {
                details_service_1 = details_service_1_1;
            }],
        execute: function() {
            OrderComponent = (function () {
                function OrderComponent(orderService, us, ds) {
                    var _this = this;
                    this.orderService = orderService;
                    this.us = us;
                    this.ds = ds;
                    this.ordHeader = [
                        'ORDER ID', 'PRESCRIPTION ID', 'TOTAL AMOUNT', 'DELIVERY STATUS'
                    ];
                    this.orddetheader = [
                        'DRUG ID', 'DOSAGE', 'DAYS', 'QUANTITY REQUIRED', 'UNIT DELIVERED', 'PER UNIT', 'COST PER UNIT', 'COST'
                    ];
                    this.orders = [];
                    this.ordDetails = [];
                    this.showOrdDetails = false;
                    this.title = "List of Orders!!!";
                    this.patid = this.us.userid;
                    this.orderService.getOrdersByPatId(this.patid).subscribe(function (pre) {
                        _this.orders = JSON.parse(pre._body);
                    });
                }
                OrderComponent.prototype.getOrdDetails = function (ordid) {
                    var _this = this;
                    this.curOrder = ordid;
                    this.ds.getOrderDetails(ordid).subscribe(function (odet) {
                        _this.ordDetails = JSON.parse(odet._body);
                    });
                    this.showOrdDetails = true;
                };
                OrderComponent = __decorate([
                    core_1.Component({
                        selector: 'app-patorder',
                        templateUrl: 'app/patient/order.html',
                        providers: [http_1.HTTP_PROVIDERS, order_service_1.OrderService, user_service_1.UserService, details_service_1.DetailsService]
                    }), 
                    __metadata('design:paramtypes', [order_service_1.OrderService, user_service_1.UserService, details_service_1.DetailsService])
                ], OrderComponent);
                return OrderComponent;
            }());
            exports_1("OrderComponent", OrderComponent);
        }
    }
});
//# sourceMappingURL=order.component.js.map