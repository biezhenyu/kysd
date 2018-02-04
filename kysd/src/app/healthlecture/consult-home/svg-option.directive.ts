import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[my-svg]'
})

export class SvgOptionDirective implements OnInit {
  @Input('iconName') iconName: any;
  constructor(private el: ElementRef) {}
  public ngOnInit(): void {
    this.el.nativeElement.innerHTML = `<use xlink:href="${this.iconName}"></use>`
  }
}
