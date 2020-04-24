import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({ selector: "[appHovered]" })
export class HoveredDirective implements OnInit {
  defaultInitialColor: string = "transparent"
  defaultHoverColor: string = "yellow"
  @HostBinding("") backgroundColor: string;
  @Input() hoverColor: string;
  @Input('appHovered') initialColor: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.initialColor || this.defaultInitialColor
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "yellow")
    this.backgroundColor = this.hoverColor || this.defaultHoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent")
    this.backgroundColor = this.initialColor || this.defaultInitialColor
  }
}