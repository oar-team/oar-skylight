import { JobStateModule } from './../../shared/components/job-state/job-state.module';
import { JobStateComponent } from './../../shared/components/job-state/job-state.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';
import { JobsComponent } from './jobs-component/jobs.component';
import { JobDetails } from './job-details-component/job-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from 'angular2-datatable/index';
import { KeysPipe } from '../../shared/pipes/keys-pipe';
// Add the AuthGuard service
import { AuthGuard } from '../../shared/services/auth/auth-guard.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { JobsRoutingModule } from './jobs.routes';
import { PageHeaderModule } from '../../shared';
import {NewJobFormComponent } from './';

@NgModule({
    imports: [CommonModule, DataTableModule, NgbDropdownModule, JobsRoutingModule, PageHeaderModule, FormsModule, JobStateModule],
    providers: [AuthGuard],
    declarations: [JobsComponent, NewJobFormComponent, JobDetails, KeysPipe],
    exports: [JobsComponent, JobDetails, NewJobFormComponent]
})

export class JobsModule {

}

