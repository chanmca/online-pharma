import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@Component({
    selector: 'app-docside',
    templateUrl: 'app/doctor/sidebar.html',
    directives:[ROUTER_DIRECTIVES]
})
export class SidebarComponent {
    sidebaritems = [
        { hyperlink:'Docprofile', text: ' My Profile ' },
        { hyperlink:'Docprescrip', text: ' Prescriptions ' },
        { hyperlink:'Login', text: ' Logout ' }
    ];
}