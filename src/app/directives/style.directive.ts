import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector:'[appStyle]',
})

export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    // el.nativeElement.style.background = 'gray'

    this.r.setStyle(this.el.nativeElement, 'background', 'gray')
  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log("event", event);
  }
  @HostListener('mouseenter',['$event']) onEnter(event: Event){
    this.r.setStyle(this.el.nativeElement, 'background', 'white')
  }

  @HostListener('mouseout',['$event']) onOut(event: Event){
    this.r.setStyle(this.el.nativeElement, 'background', 'grey')
  }
}
