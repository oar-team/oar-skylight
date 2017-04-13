import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';

@NgModule({
    imports: [BrowserModule, FormsModule, DataTableModule],
    providers: [],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})

export class SearchModule {


}

