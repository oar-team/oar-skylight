import { NgModule } from '@angular/core';

import { ResourcesComponent } from './resources.component';
import { BrowserModule } from '@angular/platform-browser';
import {DataTableModule} from "angular2-datatable/index";

@NgModule({
    imports: [BrowserModule, DataTableModule],
    providers: [],
    declarations: [ResourcesComponent],
    exports: [ResourcesComponent]
})

export class ResourcesModule {


 }

