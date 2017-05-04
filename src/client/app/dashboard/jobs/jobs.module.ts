import { NgModule } from '@angular/core';

import { JobsComponent } from './jobs-component/jobs.component';
import { JobDetails } from './job-details-component/job-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from "angular2-datatable/index";
import { KeysPipe } from "./keys-pipe";
// Add the AuthGuard service
import { AuthGuard } from '../../shared/auth/auth-guard.service';

import { DropdownModule } from 'ng2-bootstrap';

 

@NgModule({
    imports: [BrowserModule, DataTableModule, DropdownModule],
    providers: [AuthGuard],
    declarations: [JobsComponent, JobDetails, KeysPipe ],
    exports: [JobsComponent, JobDetails]
})

export class JobsModule {

}

