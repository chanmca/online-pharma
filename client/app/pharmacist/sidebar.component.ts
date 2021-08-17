import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'app/pharmacist/sidebar.html',
    directives:[ROUTER_DIRECTIVES]
})
export class SidebarComponent {
    sidebaritems = [
        { hyperlink:'Profile', text: ' My Profile ' },
        { hyperlink:'Invent', text: ' Durg Inventory ' },
        { hyperlink:'Srchinvt', text: ' Search Inventory ' },
        { hyperlink:'Adddrugs', text: ' Add Drug ' },
        // { hyperlink:'Invent', text: ' Delete Drug ' },
        { hyperlink:'Orders', text: ' Order Details ' },
        //{ hyperlink:'Prescrips', text: ' Prescription Details ' },
        { hyperlink:'Login', text: ' Logout ' }
    ];
}