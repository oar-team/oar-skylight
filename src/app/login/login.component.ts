import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationCancel, Event as NavigationEvent } from '@angular/router';
import { AuthenticationService } from '../shared/services/auth/authentification.service';
import { User } from '../shared/models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    // Errors shown on login form
    private msgs: Message[] = [];

    // the JSON file with whoAmI information in it
    private whoAmI: JSON;
    // Array of last events with their url
    private events: any = [];

    public loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private _auth: AuthenticationService, private _router: Router) {

        this._router.events.pairwise().subscribe((events) => {
            this.events = events;
        });

        // Message if error 403
        if (_router.url === '/403') {
            this.msgs = [];
            this.msgs.push({
                severity: 'warn',
                summary: '403 Forbidden Access',
                detail: 'You need to be logged in order to access this page.'
            });
        }


    }

    ngOnInit() {
    }


    doLogin(event: JSON) {

        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;


        const user = new User(username, password);

        console.log(user);
        this._auth.login(user);

        // Redirect after login
        let url = 'dashboard';

        // Subscribe to isUserLogged. We can't use getIsLoggedValue because of asynchronous request.
        this._auth.getIsLogged().subscribe(
            (bool) => {
                if (bool) {

                    console.log('in', bool)
                    // Check in router event if a route has been canceled.
                    // If it has, we want to redirect to this route
                    // Else we redirect to dashboard/home
                    this.events.forEach((event: any) => {
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
