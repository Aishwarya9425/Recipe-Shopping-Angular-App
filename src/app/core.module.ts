import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterServ } from "./auth/auth-interceptor.service";
import { LoggingService } from "./logging.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
  providers: [
    // LoggingService,
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterServ,
      multi: true,
    },
  ],
})
export class CoreModule {} //eager loaded
