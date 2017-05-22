import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataFilterPipe } from './data-filter.pipe';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable/index';
import { MediaService } from './../shared/services/media/media.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'primeng/primeng';
import { FmComponent } from './fm/fm.component';
import { FmBreadcrumbComponent } from './fm-breadcrumb/fm-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FileUploadModule,
    FormsModule
  ],
  exports: [FmComponent, FmBreadcrumbComponent],
  declarations: [FmComponent, FmBreadcrumbComponent, DataFilterPipe],
   providers: [MediaService, NgbActiveModal]
})
export class FmModule { }
