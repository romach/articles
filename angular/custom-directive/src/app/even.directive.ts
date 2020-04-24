import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEven]'
})
export class EvenDirective {
  @Input() set appEven(value: number) {
    if (value % 2 === 0) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
