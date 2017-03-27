import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/authentification.service';
import { User } from '../classes/user';
import {UserConfigStore} from "../stores/user-config-store";
import {NgForm} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})
/**
 * Declared on dashboard.module
 */
export class TopNavComponent {
	public username = "";
	public searchInput = "";

	constructor(private _auth:AuthenticationService, private userConfig: UserConfigStore) {
		this.username = this._auth.getUser().getUsername();
	}

	changeTheme(color: string): void {
		var link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  {
		var sidebar: any = $('#sidebar');
		var mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}

  /**
   * Should always return false (else page is reloaded)
   * @param ss
   * @returns {boolean}
   */
	search(form :NgForm ) {
    console.log(form)
    console.log(this.searchInput)

    return false
  }
}
