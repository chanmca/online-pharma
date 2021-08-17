System.register(['angular2/core', 'angular2/http', "../services/prescription.service"], function(exports_1, context_1) {
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
    var core_1, http_1, prescription_service_1;
    var PrescriptionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (prescription_service_1_1) {
                prescription_service_1 = prescription_service_1_1;
            }],
        execute: function() {
            PrescriptionComponent = (function () {
                function PrescriptionComponent(prescripService) {
                    var _this = this;
                    this.prescripService = prescripService;
                    this.header = [
                        'PRESCRIPTION ID', 'PATIENT ID', 'DOCTOR ID', 'DATE'
                    ];
                    this.prescriptions = [];
                    this.did = 0;
                    this.title = "List of Prescriptions!!!";
                    this.prescripService.getPrescriptions().subscribe(function (pre) {
                        _this.prescriptions = JSON.parse(pre._body);
                    });
                }
                PrescriptionComponent = __decorate([
                    core_1.Component({
                        selector: 'app-prescrip',
                        templateUrl: 'app/pharmacist/prescription.html',
                        providers: [http_1.HTTP_PROVIDERS, prescription_service_1.PrescriptionService]
                    }), 
                    __metadata('design:paramtypes', [prescription_service_1.PrescriptionService])
                ], PrescriptionComponent);
                return PrescriptionComponent;
            }());
            exports_1("PrescriptionComponent", PrescriptionComponent);
        }
    }
});
//# sourceMappingURL=prescription.component.js.map