import { Injectable } from "@angular/core";
//@Injectable({ providedIn: "root" }) -- same instance for both shopping and app
export class LoggingService {
  lastLog: string;

  printLog(message: string) {
    console.log("Inside printLog LoggingService");
    console.log("message", message);
    console.log("this.lastLog", this.lastLog);
    this.lastLog = message;
  }
}
