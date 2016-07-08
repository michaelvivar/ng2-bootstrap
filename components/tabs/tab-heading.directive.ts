import {Directive, TemplateRef} from '@angular/core';
import {TabDirective} from './tab.directive';

@Directive({selector: '[tab-heading]'})
export class TabHeadingDirective {
  public templateRef:TemplateRef<any>;
  public constructor(templateRef:TemplateRef<any>, tab:TabDirective) {
    tab.headingRef = templateRef;
  }
}
