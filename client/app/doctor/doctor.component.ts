import { Component } from 'angular2/core';
import {SidebarComponent} from './sidebar.component';
import {ProfileComponent} from './profile.component';
import {DocscripComponent} from './prescription.component';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@RouteConfig([
    { path: '/', component: ProfileComponent, name: 'Docprofile', useAsDefault: true },
    { path: '/profile', component: ProfileComponent, name: 'Docprofile' },
    { path: '/docscrip', component: DocscripComponent, name: 'Docprescrip' }
])

@Component({
    selector: 'app-doc',
    templateUrl: 'app/doctor/doctor.html',
    directives: [SidebarComponent,ROUTER_DIRECTIVES,ProfileComponent,DocscripComponent]
})

export class DoctorComponent {
    //properties
    title:string;
    constructor() {
        this.title = "Gautam Pharmacy - RGB Hospitals!!!"
    }
}