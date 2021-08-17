System.register(['angular2/core', 'angular2/http', '../models/user'], function(exports_1, context_1) {
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
    var core_1, http_1, user_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.user = Object.create(user_1.User.prototype);
                    this.http = http;
                    this.user = JSON.parse(localStorage.getItem('currentUser'));
                    for (var _i = 0, _a = this.user; _i < _a.length; _i++) {
                        var u = _a[_i];
                        this.userid = u.USERID;
                        this.username = u.USERNAME;
                        this.category = u.CATEGORY;
                        this.age = u.AGE;
                        this.sex = u.SEX;
                        this.phone = u.PHONE;
                        this.emailid = u.EMAILD;
                        this.special = u.SPECIALISATION;
                        this.registereddate = u.REGISTEREDDATE;
                        this.status = u.STATUS;
                    }
                }
                UserService.prototype.getUserById = function (id) {
                    return this.http.get('http://localhost:8000/api/user/' + id);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map