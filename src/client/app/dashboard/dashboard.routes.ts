import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';
import { JobsRoutes } from './jobs/index';
import { ResourcesRoute } from './resources/index';
import { DashboardComponent } from './index';
import { SearchRoute } from "./search/search.routes";

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ChartRoutes,
	    	...BSComponentRoutes,
        ...TableRoutes,
	    	...BlankPageRoutes,
        ...SearchRoute,
			...JobsRoutes,
			...ResourcesRoute,
        ...FormRoutes,
        ...GridRoutes,
        ...BSElementRoutes
    	]
  	}
];
