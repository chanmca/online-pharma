System.register(['angular2/core', './login/login.component', './contacts/contact.component', './home/home.component', './pharmacist/pharmacist.component', './patient/patient.component', './header/head.component', './footer/foot.component', './doctor/doctor.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, login_component_1, contact_component_1, home_component_1, pharmacist_component_1, patient_component_1, head_component_1, foot_component_1, doctor_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (pharmacist_component_1_1) {
                pharmacist_component_1 = pharmacist_component_1_1;
            },
            function (patient_component_1_1) {
                patient_component_1 = patient_component_1_1;
            },
            function (head_component_1_1) {
                head_component_1 = head_component_1_1;
            },
            function (foot_component_1_1) {
                foot_component_1 = foot_component_1_1;
            },
            function (doctor_component_1_1) {
                doctor_component_1 = doctor_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pharma-app',
                        templateUrl: 'app/app.html',
                        directives: [head_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES, foot_component_1.FooterComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_component_1.HomeComponent, name: 'Home' },
                        { path: '/myhome', component: home_component_1.HomeComponent, name: 'Home' },
                        { path: '/mylogin', component: login_component_1.LoginComponent, name: 'Login' },
                        { path: '/mycontact', component: contact_component_1.ContactComponent, name: 'Contact' },
                        { path: '/mypharma/...', component: pharmacist_component_1.PharmacistComponent, name: 'Pharma' },
                        { path: '/mypatient/...', component: patient_component_1.PatientComponent, name: 'Patient' },
                        { path: '/mydoctor/...', component: doctor_component_1.DoctorComponent, name: 'Doctor' },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
{ path: '/home', name: 'Home', component: AuthenticateComponent, useAsDefault:true },
{ path: '/login', name: 'Login', component: LoginComponent }
*/ 
//# sourceMappingURL=app.component.js.map