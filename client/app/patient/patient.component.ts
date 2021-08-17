import { Component } from 'angular2/core';
import {SidebarComponent} from './sidebar.component';
import {ProfileComponent} from './profile.component';
import {PrescriptionComponent} from './prescription.component';
import {OrderComponent} from './order.component';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@RouteConfig([
    { path: '/', component: ProfileComponent, name: 'Patprofile', useAsDefault: true },
    { path: '/profile', component: ProfileComponent, name: 'Patprofile' },
    { path: '/myorders', component: OrderComponent, name: 'Patorders' },
    { path: '/myprescrips', component: PrescriptionComponent, name: 'Patprescrips' },
])

@Component({
    selector: 'app-patient',
    templateUrl: 'app/patient/patient.html',
    directives: [SidebarComponent,ROUTER_DIRECTIVES,ProfileComponent,PrescriptionComponent,OrderComponent]
})

export class PatientComponent {
    //properties
    title:string;
}