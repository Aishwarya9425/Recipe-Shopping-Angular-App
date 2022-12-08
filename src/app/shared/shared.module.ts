import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule,
  ],
  entryComponents: [AlertComponent],
})
export class sharedModule {}
