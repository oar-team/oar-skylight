import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.component';
import {DataTableModule} from "angular2-datatable/index";
import { ResourcesRoutingModule } from './';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, DataTableModule, ResourcesRoutingModule],
    providers: [],
    declarations: [ResourcesComponent],
    exports: [ResourcesComponent]
})

export class ResourcesModule {


 }

