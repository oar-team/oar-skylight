import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/auth/authentification.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public user: User;
    public searchInput = '';

    constructor(
        private _auth: AuthenticationService,
        private router: Router
    ) {
        this._auth.getUserObservable().subscribe(
            (user) => this.user = user
        );
    }

    ngOnInit() { }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }


	/**
	 * Should always return false (else page is reloaded)
	 * @param form
	 * @returns {boolean}
	 */
    search(): boolean {
        this.router.navigate(['search', this.searchInput]);

        return false;
    }

    login() {
        this.router.navigate(['login']);
    }

    logout() {
        this._auth.logOut(['logout']);
    }
}
