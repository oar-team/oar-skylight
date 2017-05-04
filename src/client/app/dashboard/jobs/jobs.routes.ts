import { Route } from '@angular/router';
import { JobsComponent, JobDetails } from './index';

// Add the AuthGuard service
import { AuthGuard } from '../../shared/auth/auth-guard.service';

export const JobsRoutes: Route[] = [

	{
		path: 'jobs/:id',
		component: JobDetails,
		canActivate: [AuthGuard]
	},
	{
		path: 'jobs',
		component: JobsComponent
	}
];
