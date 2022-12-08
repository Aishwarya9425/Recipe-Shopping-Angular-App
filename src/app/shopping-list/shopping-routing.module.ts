import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const shoppingRoutes: Routes = [
  { path: "", component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
