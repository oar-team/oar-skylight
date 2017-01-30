import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationCancel, Event as NavigationEvent } from '@angular/router';
import { Message, MessagesModule } from 'primeng/primeng';
import { AuthenticationService } from '../shared/auth/authentification.service';
import { User } from '../shared/classes/user';
import { JobEvent } from '../shared/oar-api/model/job';

/**
*	This class represents the lazy loaded LoginComponent.
* 	
*	More info : http://learnangular2.com/forms/
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html'
})

export class LoginComponent {


	//Errors shown on login form
	private msgs: Message[] = [];

	//the JSON file with whoAmI information in it
	private whoAmI: JSON;
	// Array of last events with their url
	private events: any = [];

	// Controls and validations for the login form
	public loginForm = this._formBuilder.group({
		'username': ['', Validators.required],
		'password': ['', Validators.required]
	});

	constructor(private _formBuilder: FormBuilder, private _auth: AuthenticationService, private _router: Router) {

		this._router.events.pairwise().subscribe((events) => {
            this.events= events;
        });

		if (_router.url == "/403") {
			this.msgs = [];
			this.msgs.push({ severity: 'warn', summary: '403 Forbidden Access', detail: 'You need to be logged in order to access this page.' });
		}


	}

	doLogin(event: JSON) {

		let username = this.loginForm.value.username;
		let password = this.loginForm.value.password;


		let user = new User(username, password);
		this._auth.login(user);

		// Redirect after login
		let url = 'dashboard/home';

		// Subscribe to isUserLogged. We can't use getIsLoggedValue because of asynchronous request.
		this._auth.getIsLogged().subscribe((bool) => {
			if (bool) {
				// Check in router event if a route has been canceled. 
				// If it has, we want to redirect to this route
				// Else we redirect to dashboard/home
				this.events.forEach((event:any) => {
					if (event instanceof NavigationCancel) {
						console.log();
						url = event.url;
					}
				});

				this._router.navigate([url]);
			} else {
				this.msgs = [];
				this.msgs.push({ severity: 'error', summary: 'Wrong login', detail: 'Authentification failed' });
			}
		}
		);


	}

}
