import { LoggingService } from "./logging.service";
import { sharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //feature modules
    // RecipesModule, -- lazy loading so dont add here
    // ShoppingModule,-- lazy loading so dont add here
    sharedModule,
    CoreModule,
    //AuthModule,-- lazy loading so dont add here
  ],
  providers: [LoggingService],
  // just declaring here same inst, if diff instance add this serv in shopping module
  //not recommended to have multiple instances of serv, try to use @Inje or only in app module
  bootstrap: [AppComponent],
})
export class AppModule {}
