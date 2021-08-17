System.register(['angular2/core', 'angular2/http', "../services/user.service"], function(exports_1, context_1) {
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
    var core_1, http_1, user_service_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(us) {
                    this.us = us;
                    this.title = "My Profile";
                    this.uid = this.us.userid;
                    this.uname = this.us.username;
                    this.cat = this.us.category;
                    this.age = this.us.age;
                    this.sex = this.us.sex;
                    this.mob = this.us.phone;
                    this.eid = this.us.emailid;
                    this.rdate = this.us.registereddate;
                    this.stat = this.us.status;
                }
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'app-patprof',
                        templateUrl: 'app/patient/profile.html',
                        providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map