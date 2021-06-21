import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
   selector: '[appBasicHighList]'
})
export class BaiscHighLightDirective implements OnInit{

    constructor(private appBasicHighList: ElementRef){}

    ngOnInit(){
        this.appBasicHighList.nativeElement.style.background = 'green';
    }
}
