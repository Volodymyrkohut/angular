import {Directive, HostBinding, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]',
})

export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight: string = '600';

  @HostBinding('style') elStyle: any = null;

  constructor(private el: ElementRef, private r: Renderer2) {
    // el.nativeElement.style.background = 'gray'

    this.r.setStyle(this.el.nativeElement, 'background', 'gray')
  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log("event", event);
  }

  @HostListener('mouseenter', ['$event']) onEnter(event: Event) {

    // через рендерер
    this.r.setStyle(this.el.nativeElement, 'background', this.color)
    this.r.setStyle(this.el.nativeElement, 'font-weight', this.fontWeight)

    // через декоратор HostBinding
    this.elStyle = {
      border: '1px solid green'
    }
  }

  @HostListener('mouseout', ['$event']) onOut(event: Event) {
    this.r.setStyle(this.el.nativeElement, 'background', 'grey')
    this.r.setStyle(this.el.nativeElement, 'font-weight', 400)

    this.elStyle = {
      border: '1px solid black'
    }
  }
}
