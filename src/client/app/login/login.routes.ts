import { Route } from '@angular/router';
import { LoginComponent } from './index';

export const LoginRoutes: Route[] = [
  	{
    	path: '',
    	component: LoginComponent
  	},
	{
    	path: '403',
    	component: LoginComponent
  	}
];
