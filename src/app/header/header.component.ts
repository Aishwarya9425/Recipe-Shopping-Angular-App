import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuth = false;
  constructor(
    private dataStorageService: DataStorageService,
    private authServ: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authServ.user.subscribe((user) => {
      //!!user
      this.isAuth = !user ? false : true;
      console.log("this.isAuth is ", this.isAuth);
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authServ.logout();
  }
}
