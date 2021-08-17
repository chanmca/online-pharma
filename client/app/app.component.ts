import {Component} from 'angular2/core';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contacts/contact.component';
import {HomeComponent} from './home/home.component';
import {PharmacistComponent} from './pharmacist/pharmacist.component';
import {PatientComponent} from './patient/patient.component';
import {HeaderComponent} from './header/head.component';
import {FooterComponent} from './footer/foot.component';
import {DoctorComponent} from './doctor/doctor.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
 
@Component({
    selector: 'pharma-app',
    templateUrl: 'app/app.html',
    directives: [HeaderComponent,ROUTER_DIRECTIVES,FooterComponent]
})
@RouteConfig([
    
    {path: '/', component: HomeComponent, name: 'Home' },
    {path: '/myhome', component: HomeComponent, name: 'Home' },
    {path: '/mylogin', component: LoginComponent, name: 'Login' },
    {path: '/mycontact', component: ContactComponent, name: 'Contact' },
    {path: '/mypharma/...', component: PharmacistComponent, name: 'Pharma' },
    {path: '/mypatient/...', component: PatientComponent, name: 'Patient' },
    {path: '/mydoctor/...', component: DoctorComponent, name: 'Doctor' },
])
export class AppComponent {
}

/* 
{ path: '/home', name: 'Home', component: AuthenticateComponent, useAsDefault:true },
{ path: '/login', name: 'Login', component: LoginComponent } 
*/