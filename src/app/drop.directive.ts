import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    //this.renderer.setStyle(this.elementRef.nativeElement, "padding", "5px 5px 5px 5px");
    this.renderer.setStyle(this.elementRef.nativeElement, "display", "block");
    this.renderer.setStyle(this.elementRef.nativeElement, "border-radius", "0.4rem");
    this.renderer.setStyle(this.elementRef.nativeElement, "padding", "6px 6px 6px 6px");
    this.renderer.setStyle(this.elementRef.nativeElement, "margin-top", "-1px");
    this.renderer.setStyle(this.elementRef.nativeElement, "margin-left", "-1px");
    this.renderer.setStyle(this.elementRef.nativeElement, "margin-bottom", "-1px");
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "#1B317A");
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "transparent");
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
  }

}
