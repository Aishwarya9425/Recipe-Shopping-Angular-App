import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { AuthService, AuthResponseData } from "./auth.service";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;
  private closeSub: Subscription;

  constructor(
    private authSer: AuthService,
    private router: Router,
    private compFactoryRe: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onHandleAlert() {
    this.error = null;
  }

  private showErrorAlert(msg: string) {
    const alertCF = this.compFactoryRe.resolveComponentFactory(AlertComponent);
    const hostViewContRef = this.alertHost.viewContainerRef;
    hostViewContRef.clear();
    const compRef = hostViewContRef.createComponent(alertCF);
    compRef.instance.message = msg;
    this.closeSub = compRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContRef.clear();
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(form);
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authSer.login(email, password);
    } else {
      //signup
      console.log("User has signed up");
      authObs = this.authSer.signUp(email, password);
    }

    //sub to auth Observable

    //after u signup/logins, navigate to recipes
    authObs.subscribe(
      (resData) => {
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(["/recipes"]);
      },
      (errorMsg) => {
        this.isLoading = false;
        console.log(errorMsg);
        this.error = errorMsg;
        this.showErrorAlert(errorMsg);
      }
    );

    form.reset();
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
