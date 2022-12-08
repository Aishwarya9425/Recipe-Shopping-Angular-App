import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { LoggingService } from "./logging.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private authSer: AuthService, private logServ: LoggingService) {}

  ngOnInit() {
    this.authSer.autoLogin();
    this.logServ.printLog("LoggingService -- Hello from App component !!");
  }
}
