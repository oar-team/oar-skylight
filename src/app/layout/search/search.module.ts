import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule} from 'angular2-datatable';
import { SearchRoutingModule } from './';
import { SearchService } from '../../shared/services/';

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, SearchRoutingModule],
    providers: [SearchService],
    declarations: [SearchComponent],
    exports: [SearchComponent, CommonModule]
})

export class SearchModule {


}

