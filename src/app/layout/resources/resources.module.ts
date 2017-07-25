import { SharedPipesModule } from './../../shared/pipes/shared-pipes.module';
import { KeysPipe } from './../../shared/pipes/keys-pipe';
import { JobStateModule } from './../../shared/components/job-state/job-state.module';
import { JobStateComponent } from './../../shared/components/job-state/job-state.component';
import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.component';
import {DataTableModule} from 'angular2-datatable/index';
import { ResourcesRoutingModule } from './';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, DataTableModule, ResourcesRoutingModule, JobStateModule, SharedPipesModule],
    providers: [],
    declarations: [ResourcesComponent],
    exports: [ResourcesComponent]
})

export class ResourcesModule {


 }

