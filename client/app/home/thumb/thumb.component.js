System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ThumbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ThumbComponent = (function () {
                function ThumbComponent() {
                    //properties
                    this.itemTexts = [
                        { text: 'Who we are', image: 'app/assets/images/whoweare.jfif', desc: 'Gautam Pharma is a world leader in the discovery, development, manufacturing and marketing of pharmaceutical products for the treatment of iron deficiency. The company also offers a diversified portfolio of prescription medicines as well as non-prescription medicines.' },
                        { text: 'What we do', image: 'app/assets/images/whatwedo.jfif', desc: 'Our job is not simply to find an effective method of drug delivery for each product, it is to find the best and most effective method possible. Our comprehensive, flexible range of services enables clients to bring products thru the various stages of clinical development; from pre-formulation work to formulation, dosage form design & optimisation.' },
                        { text: 'How we do', image: 'app/assets/images/howwedo.jfif', desc: 'We insist in taking the innovation as driving force of development, strong technical support as survival foundation in RGB.' },
                        { text: 'Where we do', image: 'app/assets/images/wherewedo.jfif', desc: 'Department of Pharmacology and Therapeutics, College of Medicine, University of RGB, Chennai' },
                    ];
                }
                ThumbComponent = __decorate([
                    core_1.Component({
                        selector: 'app-thumb',
                        templateUrl: 'app/home/thumb/thumb.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ThumbComponent);
                return ThumbComponent;
            }());
            exports_1("ThumbComponent", ThumbComponent);
        }
    }
});
//# sourceMappingURL=thumb.component.js.map