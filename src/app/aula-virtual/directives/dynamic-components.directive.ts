import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicHost]'
})
export class DynamicComponentsDirective {

  constructor(private viewContainerRef: ViewContainerRef) { }

}
