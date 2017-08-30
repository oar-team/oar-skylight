import { Route } from '@angular/router';
import { JobsComponent, JobDetails } from './index';
import { AuthGuard } from '../../shared/services/auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewJobFormComponent } from './post-job-component/new-job-form.component';


const routes: Routes = [
    { path: '', component: JobsComponent},
    { path: 'new', component: NewJobFormComponent, canActivate: [AuthGuard] },
    { path: ':id', component: JobDetails, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
