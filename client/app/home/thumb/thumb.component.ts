import {Component} from 'angular2/core';

@Component({
    selector: 'app-thumb',
    templateUrl: 'app/home/thumb/thumb.html'
})
export class ThumbComponent {
    //properties
    itemTexts = [
        { text: 'Who we are', image:'app/assets/images/whoweare.jfif', desc: 'Gautam Pharma is a world leader in the discovery, development, manufacturing and marketing of pharmaceutical products for the treatment of iron deficiency. The company also offers a diversified portfolio of prescription medicines as well as non-prescription medicines.'},
        { text: 'What we do', image:'app/assets/images/whatwedo.jfif', desc: 'Our job is not simply to find an effective method of drug delivery for each product, it is to find the best and most effective method possible. Our comprehensive, flexible range of services enables clients to bring products thru the various stages of clinical development; from pre-formulation work to formulation, dosage form design & optimisation.'},
        { text: 'How we do', image:'app/assets/images/howwedo.jfif', desc: 'We insist in taking the innovation as driving force of development, strong technical support as survival foundation in RGB.'},
        { text: 'Where we do', image:'app/assets/images/wherewedo.jfif', desc: 'Department of Pharmacology and Therapeutics, College of Medicine, University of RGB, Chennai'},
    ];
}