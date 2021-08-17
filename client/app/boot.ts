import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {bind} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router';

bootstrap(AppComponent,[ROUTER_BINDINGS, bind(APP_BASE_HREF).toValue(location.pathname)]);