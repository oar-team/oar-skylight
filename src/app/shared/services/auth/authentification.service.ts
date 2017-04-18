import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { User } from '../../models/user';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  private user: BehaviorSubject<User>;
  private isLogged: BehaviorSubject<boolean>;

  // TODO : use config params
  private urlProtocole = 'http' + '://';
  private urlWhoAmI: string = "localhost:46668/oarapi-priv/";

  constructor(private _router: Router,
    private http: Http,
  ) {
    this.user = new BehaviorSubject<User>(new User('', ''));
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
   * Action of clicking in the login button
   */
  login(user: User) {

    this.setUser(user);
    this.requestWhoAmI();

  }

  /**
   * Get WhoAmI data and call isUserLogged
   */
  requestWhoAmI() {
    let user = this.getUser();

    this.doRequestWhoAmI().subscribe(
      data => this.isUserLogged(data),
      error => console.log(error)
    );
  }

  /**
   *  From WhoAmI Response, set isLogged
   *  If a user is responded, isLogged = true
   */

  isUserLogged(data: any) {

    console.log('isUserLogged');
    if (data.authenticated_user == this.getUser().getUsername()) {
      this.setIsLogged(true);
    } else {
      this.setIsLogged(false);
    }
  }

  setIsLogged(value: boolean) {
    this.isLogged.next(value);
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
    this.requestWhoAmI();

    return this.isLogged;
  }

  //  Getter for isLogged value
  getIsLoggedValue(): boolean {
    return this.isLogged.getValue();
  }

  /** Request WhoAmI to the API.
  * if not logged the authenticated user is an empty string ('')
  * Level of access: private
  * API doc: http://oar.imag.fr/docs/latest/user/api.html#get-whoami
  */
  doRequestWhoAmI() {
    let headers = new Headers();
    let user = this.user.getValue();

    // headers.append("Authorization", "Basic " + btoa(user.getUsername() + ":" + user.getPassword()));
    headers.append('Content-Type', 'application/json');

    // We use login:password@url to avoid the browser response of 401 (Auth form)
    return this.http.get(this.urlProtocole +
      user.getUsername() + ':' + user.getPassword() + '@' + this.urlWhoAmI + "whoami.json", {
        headers: headers
      }
    ).map(res => res.json());
  }


  logOut(error: any) {
    console.log(error);
    console.log('Log out');

    this.isLogged.next(false);
    this.user.next(new User('', ''));

  }


}
