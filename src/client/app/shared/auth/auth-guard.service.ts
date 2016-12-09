import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Message } from 'primeng/primeng';

// Import our authentication service
import { AuthenticationService } from './authentification.service';


 /*
 *  AuthGuard : https://angular.io/docs/ts/latest/guide/router.html#!#guards   
 */

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    // If user is not logged in we'll send them to the homepage 
    if (!this.auth.getIsLoggedValue()) {
      this.router.navigate(['403']);
      return false;
    }
    return true;
  }

}