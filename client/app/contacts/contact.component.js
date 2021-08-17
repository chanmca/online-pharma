System.register(['angular2/core', 'angular2/http', '../services/contact.service'], function(exports_1, context_1) {
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
    var core_1, http_1, contact_service_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(cService) {
                    var _this = this;
                    this.cService = cService;
                    this.doctors = [];
                    this.pharms = [];
                    this.header = [
                        'Name', 'Specialisation', 'Phone', 'Email ID'
                    ];
                    this.title = "Contact Us";
                    this.cService.getContacts("DOCTOR").subscribe(function (doc) {
                        _this.doctors = JSON.parse(doc._body);
                    });
                    this.cService.getContacts("PHARMACIST").subscribe(function (phar) {
                        _this.pharms = JSON.parse(phar._body);
                    });
                }
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'app-contact',
                        templateUrl: 'app/contacts/contact.html',
                        providers: [http_1.HTTP_PROVIDERS, contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map