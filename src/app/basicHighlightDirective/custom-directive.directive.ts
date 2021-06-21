import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  @HostBinding('style.backgroundColor') bkgrndColor = 'transparent';
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
  //  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(event: Event){
     /* this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'darkorange'); */
    this.bkgrndColor = 'darkorange';
  }

    @HostListener('mouseleave') mouseLeave(event: Event){
     this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
     this.bkgrndColor = 'transparent';
  }
}
