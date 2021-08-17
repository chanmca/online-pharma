import {Component} from 'angular2/core';

@Component({
    selector: 'app-jumbo',
    templateUrl: 'app/home/jumbotron/jumbo.html'
})

export class JumbotronComponent {
    //properties
    title: string;
    msg: string;
    constructor() {//dependency injection
        this.title = "Gautam Pharmacy is a part of RGB Hospitals - Asia's largest healthcare group. It is India's first and largest branded pharmacy network, with over 800 plus outlets in key Locations.";
        this.msg = "A promise beyond prescriptions";
    }
}