import { Component } from 'angular2/core';
import {JumbotronComponent} from './jumbotron/jumbo.component';
import {LoginComponent} from '../login/login.component';
import {ThumbComponent} from './thumb/thumb.component';

@Component({
    selector: 'app-home',
    templateUrl: 'app/home/home.html',
    directives: [JumbotronComponent,LoginComponent,ThumbComponent]
})
export class HomeComponent {
    // properties
    title: string;   
    constructor() {// dependency injection
        this.title = "Welcome To Gautam Pharmacy !!";
    }
}