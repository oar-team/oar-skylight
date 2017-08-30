import { NotificationsService } from "angular2-notifications";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/primeng";
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup
} from "@angular/forms";
import {
  Router,
  NavigationCancel,
  Event as NavigationEvent
} from "@angular/router";
import { AuthenticationService } from "../shared/services/auth/authentification.service";
import { User } from "../shared/models/user";

/**
 * Login page
 * 
 * TODO : redirect to last visited page
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  // Errors shown on login form
  private msgs: Message[] = [];

  // the JSON file with whoAmI information in it
  private whoAmI: JSON;
  // Array of last events with their url
  private events: any = [];
  
  // Login form with both username and password required
  public loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private _auth: AuthenticationService,
    private _router: Router,
    private notifications: NotificationsService
  ) {
    this._router.events.pairwise().subscribe(events => {
      this.events = events;
    });

    // Message if error 403
    if (_router.url === "/403") {
      this.msgs = [];
      this.msgs.push({
        severity: "warn",
        summary: "403 Forbidden Access",
        detail: "You need to be logged in order to access this page."
      });
    }
  }


  /**
   * 
   * Event on login click
   * 
   * @param {JSON} event 
   * @memberof LoginComponent
   */
  doLogin(event: JSON) {
    // We retrive login information
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const user = new User(username, password);
    // for redirect after login. This url can change
    let url = "dashboard";
    const req = this._auth.login(user);

    req.catch(error => {
      console.log("notify");
      this.notifications.error("Something Went Wrong", error);
      return Observable.throw(error);
    })
    .subscribe(data => console.log(data));

    // Subscribe to isUserLogged. We can't use getIsLoggedValue because of asynchronous request.
    this._auth.getIsLogged().subscribe(bool => {
      if (bool) {
        // Check in router event if a route has been canceled.
        // If it has, we want to redirect to this route
        // Else we redirect to dashboard/home
        this.events.forEach((event: any) => {
          if (event instanceof NavigationCancel) {
            url = event.url;
          }
        });

        this._router.navigate([url]);
      } else {
        this.msgs = [];
        this.msgs.push({
          severity: "error",
          summary: "Wrong login",
          detail: "Authentification failed"
        });
      }
    });
  }
}
