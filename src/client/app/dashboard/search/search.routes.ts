import { Route } from '@angular/router';
import { SearchComponent } from './index';

export const SearchRoute: Route[] = [
	{
		path: 'search/:strSearch',
		component: SearchComponent
	}
];
