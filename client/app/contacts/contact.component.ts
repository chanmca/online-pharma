import {Component} from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import {ContactService} from '../services/contact.service';
 
@Component({
    selector: 'app-contact',
    templateUrl: 'app/contacts/contact.html',
    providers: [HTTP_PROVIDERS,ContactService]
})

export class ContactComponent {
    title: string;
    doctors=[];
    pharms=[];
    header = [
        'Name', 'Specialisation', 'Phone', 'Email ID'
    ];
    constructor(public cService:ContactService) {
        this.title = "Contact Us";

        this.cService.getContacts("DOCTOR").subscribe(
            (doc)=>{
                this.doctors=JSON.parse(doc._body);
            }
        );

        this.cService.getContacts("PHARMACIST").subscribe(
            (phar)=>{
                this.pharms=JSON.parse(phar._body);
            }
        );
    }
}