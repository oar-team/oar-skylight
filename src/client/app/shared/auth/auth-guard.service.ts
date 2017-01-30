import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Message } from 'primeng/primeng';
import {Observable} from 'rxjs/Rx';

// Import our authentication service
import { AuthenticationService } from './authentification.service';


/**
 *   Authguard for logged user
 * 
 *   __more info :__ https://angular.io/docs/ts/latest/guide/router.html#!#guards
 */

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
    // If user is not logged in we'll send them to the homepage 
    let bool:boolean = this.auth.getIsLoggedValue();
    if (!bool) {
      this.router.navigate(['403']);
    }

    return bool ;
  }

}