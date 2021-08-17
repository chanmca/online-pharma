import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@Component({
    selector: 'app-patside',
    templateUrl: 'app/patient/sidebar.html',
    directives:[ROUTER_DIRECTIVES]
})
export class SidebarComponent {
    sidebaritems = [
        { hyperlink:'Patprofile', text: ' My Profile ' },
        { hyperlink:'Patorders', text: ' My Orders ' },
        { hyperlink:'Patprescrips', text: ' My Prescriptions ' },
        { hyperlink:'Login', text: ' Logout ' }
    ];
}