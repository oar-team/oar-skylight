import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import {DataTableModule} from "angular2-datatable/index";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule ],
    providers: [],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})

export class SearchModule {


 }

