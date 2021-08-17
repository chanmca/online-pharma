
import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@Component({
    selector: 'app-head',
    templateUrl: 'app/header/head.html',
    directives:[ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    //properties
    menus = [
        { hyperlink:'Home', text: ' Home ', icon: 'glyphicon glyphicon-home'},
        { hyperlink:'Login', text: ' Login ', icon: 'glyphicon glyphicon-user'},
        { hyperlink:'Contact', text: ' Contact Us ', icon: 'glyphicon glyphicon-earphone'}
    ];
}