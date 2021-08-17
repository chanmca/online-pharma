System.register(['angular2/core', './sidebar.component', './inventory.component', './findinv.component', './profile.component', './order.component', './prescription.component', './adddrug.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, sidebar_component_1, inventory_component_1, findinv_component_1, profile_component_1, order_component_1, prescription_component_1, adddrug_component_1, router_1;
    var PharmacistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (inventory_component_1_1) {
                inventory_component_1 = inventory_component_1_1;
            },
            function (findinv_component_1_1) {
                findinv_component_1 = findinv_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (order_component_1_1) {
                order_component_1 = order_component_1_1;
            },
            function (prescription_component_1_1) {
                prescription_component_1 = prescription_component_1_1;
            },
            function (adddrug_component_1_1) {
                adddrug_component_1 = adddrug_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PharmacistComponent = (function () {
                function PharmacistComponent() {
                }
                PharmacistComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: profile_component_1.ProfileComponent, name: 'Profile', useAsDefault: true },
                        { path: '/profile', component: profile_component_1.ProfileComponent, name: 'Profile' },
                        { path: '/inventory', component: inventory_component_1.InventoryComponent, name: 'Invent' },
                        { path: '/findinv', component: findinv_component_1.FindInvComponent, name: 'Srchinvt' },
                        { path: '/order', component: order_component_1.OrderComponent, name: 'Orders' },
                        //{ path: '/prescrip', component: PrescriptionComponent, name: 'Prescrips' },
                        { path: '/addrug', component: adddrug_component_1.AdddrugComponent, name: 'Adddrugs' },
                    ]),
                    core_1.Component({
                        selector: 'app-pharma',
                        templateUrl: 'app/pharmacist/pharmacist.html',
                        directives: [sidebar_component_1.SidebarComponent, router_1.ROUTER_DIRECTIVES, profile_component_1.ProfileComponent, inventory_component_1.InventoryComponent, findinv_component_1.FindInvComponent, order_component_1.OrderComponent, prescription_component_1.PrescriptionComponent, adddrug_component_1.AdddrugComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PharmacistComponent);
                return PharmacistComponent;
            }());
            exports_1("PharmacistComponent", PharmacistComponent);
        }
    }
});
//# sourceMappingURL=pharmacist.component.js.map