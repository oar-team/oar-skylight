import {Route} from '@angular/router';

import { NewJobFormComponent, FormComponent } from './index';

export const FormRoutes: Route[] = [
  {
    path: 'forms',
    component: FormComponent
  },
  {
    path: 'jobs/form/new',
    component: NewJobFormComponent
  },
];
