System.register(['angular2/core', '../services/authentication.service', '../models/user', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, authentication_service_1, user_1, http_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.fuser = [];
                    this.errorMsg = '';
                    this.sessionUser = Object.create(user_1.User.prototype);
                    this.authService.logout();
                }
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.authService.login(this.fuser.emailid, this.fuser.password).subscribe(function (user) {
                        _this.sessionUser = JSON.parse(user._body);
                        localStorage.setItem('currentUser', JSON.stringify(_this.sessionUser));
                        for (var _i = 0, _a = _this.sessionUser; _i < _a.length; _i++) {
                            var u = _a[_i];
                            _this.cat = u.CATEGORY;
                        }
                        if (_this.cat == "PHARMACIST") {
                            _this.router.navigate(["Pharma"]);
                        }
                        else if (_this.cat == "PATIENT") {
                            _this.router.navigate(["Patient"]);
                        }
                        else if (_this.cat == "DOCTOR") {
                            _this.router.navigate(["Doctor"]);
                        }
                        else {
                            _this.authService.logout();
                            _this.errorMsg = "User name or password is incorrect";
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: 'app/login/login.html',
                        providers: [http_1.HTTP_PROVIDERS, authentication_service_1.AuthenticationService, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
/*  if (!this.authService.login(this.fuser.emailid, this.fuser.password)) {
           this.errorMsg = 'Failed to login';

           login() {
       if (this.authService.login(this.fuser.emailid, this.fuser.password).subscribe()) {
           this.sessionUser=JSON.parse(localStorage.getItem('currentUser'));
           console.log(this.sessionUser);
           console.log(localStorage.getItem('currentUser'));
       }
       else {
           this.errorMsg = "User name or password is incorrect";
       }
   }
       }
       
  login() {
       if (this.authService.login(this.fuser.emailid, this.fuser.password).subscribe()) {
           this.sessionUser = localStorage.getItem('currentUser');
           for (let u of this.sessionUser) {
               console.log(u.CATEGORY); // "0", "1", "2",
           }
           this.router.navigate(["Pharma"]);
       }
       else {
           this.errorMsg = "User name or password is incorrect";
       }
   }
*/ 
//# sourceMappingURL=login.component.js.map