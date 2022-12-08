import { Directive, ViewContainerRef } from "@angular/core";

//attach custom behavior to elements in the DOM
@Directive({
  selector: "[appPlaceHolder]",
})
export class PlaceHolderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
