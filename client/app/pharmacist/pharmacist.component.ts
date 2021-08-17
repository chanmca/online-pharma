import { Component } from 'angular2/core';
import {SidebarComponent} from './sidebar.component';
import {InventoryComponent} from './inventory.component';
import {FindInvComponent} from './findinv.component';
import {ProfileComponent} from './profile.component';
import {OrderComponent} from './order.component';
import {PrescriptionComponent} from './prescription.component';
import {AdddrugComponent} from './adddrug.component';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@RouteConfig([
    { path: '/', component: ProfileComponent, name: 'Profile', useAsDefault: true },
    { path: '/profile', component: ProfileComponent, name: 'Profile' },
    { path: '/inventory', component: InventoryComponent, name: 'Invent' },
    { path: '/findinv', component: FindInvComponent, name: 'Srchinvt' },
    { path: '/order', component: OrderComponent, name: 'Orders' },
    //{ path: '/prescrip', component: PrescriptionComponent, name: 'Prescrips' },
    { path: '/addrug', component: AdddrugComponent, name: 'Adddrugs' },
])

@Component({
    selector: 'app-pharma',
    templateUrl: 'app/pharmacist/pharmacist.html',
    directives: [SidebarComponent,ROUTER_DIRECTIVES,ProfileComponent,InventoryComponent,FindInvComponent,OrderComponent,PrescriptionComponent,AdddrugComponent]
})

export class PharmacistComponent {
    //properties
    title:string;
}