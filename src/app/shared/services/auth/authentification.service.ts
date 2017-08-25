import { environment } from "./../../../../environments/environment";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { BehaviorSubject, Observable } from "rxjs/Rx";

@Injectable()
export class AuthenticationService {
  private user: BehaviorSubject<User>;
  private isLogged: BehaviorSubject<boolean>;

  private urlProtocole = environment.API_PROTOCOLE + "://";
  private urlWhoAmI: string = this.urlProtocole +
    environment.API +
    "oarapi-priv/" +
    "whoami.json";

  constructor(private _router: Router, private http: Http) {
    this.user = new BehaviorSubject<User>(new User("", ""));
    this.isLogged = new BehaviorSubject<boolean>(false);
  }

  /**
   *  Getter for user
   */

  getUser(): User {
    return this.user.getValue();
  }

  getUserObservable(): Observable<User> {
    return this.user;
  }

  /**
   * Setter for user
   */
  setUser(user: User) {
    this.user.next(user);
  }

  /**
   * Login action
   */
  login(user: User): Observable<Response> {
    this.setUser(user);

    const req = this.doRequestWhoAmI();
    req.subscribe(data => {
      console.log(data);
      this.isUserLogged(data.json());
    });

    return req;
  }

  /**
   *  From WhoAmI Response, set isLogged
   *  If a user is responded, isLogged = true
   */
  isUserLogged(data: any) {
    console.log(data);
    if (data.authenticated_user === this.getUser().getUsername()) {
      this.setIsLogged(true);
    } else {
      this.setIsLogged(false);
    }
  }

  setIsLogged(value: boolean) {
    this.isLogged.next(value);
    sessionStorage.setItem("isLogged", "" + value);
  }

  //  Getter for isLogged
  getIsLogged(): BehaviorSubject<boolean> {
    return this.isLogged;
  }

  /*
   *    Request the Api if the user is logged.
   *    Return isLogged. Subscribe to get the value
   */
  getIsLoggedWhoAmI(): BehaviorSubject<boolean> {
    return this.isLogged;
  }

  //  Getter for isLogged value
  getIsLoggedValue(): boolean {
    const isLogged = false;

    return this.isLogged.getValue();
  }

  /** Request WhoAmI to the API. We check if we are correctly logged In
  * if not logged the authenticated user is an empty string ('')
  * Level of access: private
  * API doc: http://oar.imag.fr/docs/latest/user/api.html#get-whoami
  */
  doRequestWhoAmI(): Observable<Response> {
    const headers = new Headers();
    const user = this.user.getValue();

    headers.append(
      "Authorization",
      "Basic " + btoa(user.getUsername() + ":" + user.getPassword())
    );
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    return this.http.get(this.urlWhoAmI, { headers: headers }).share();
  }

  /**
   * Unset the user. Interface is then notify of the absence of logged user
   * 
   * @param {*} error 
   * @memberof AuthenticationService
   */
  logOut(error: any) {
    this.isLogged.next(false);
    this.user.next(new User("", ""));
  }
}
