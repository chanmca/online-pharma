System.register(['angular2/core', 'angular2/http', "../services/prescription.service", "../services/user.service"], function(exports_1, context_1) {
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
    var core_1, http_1, prescription_service_1, user_service_1;
    var DocscripComponent;
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
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            DocscripComponent = (function () {
                function DocscripComponent(docscripService, us) {
                    var _this = this;
                    this.docscripService = docscripService;
                    this.us = us;
                    this.header = ['PRESCRIPTION ID', 'PATIENT ID', 'DATE'];
                    this.docscrips = [];
                    this.title = "List of Prescriptions!!!";
                    this.docid = this.us.userid;
                    this.docscripService.getPrescripDocId(this.docid).subscribe(function (pre) {
                        _this.docscrips = JSON.parse(pre._body);
                    });
                }
                DocscripComponent = __decorate([
                    core_1.Component({
                        selector: 'app-docpres',
                        templateUrl: 'app/doctor/prescription.html',
                        providers: [http_1.HTTP_PROVIDERS, prescription_service_1.PrescriptionService, user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [prescription_service_1.PrescriptionService, user_service_1.UserService])
                ], DocscripComponent);
                return DocscripComponent;
            }());
            exports_1("DocscripComponent", DocscripComponent);
        }
    }
});
//# sourceMappingURL=prescription.component.js.map