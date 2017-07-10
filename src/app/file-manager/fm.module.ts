import { FileSizePipe } from './../shared/pipes/file-size.pipe';
import { SharedPipesModule } from './../shared/pipes/shared-pipes.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataFilterPipe } from './data-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable/index';
import { MediaService } from './../shared/services/media/media.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'primeng/primeng';
import { FmComponent } from './fm/fm.component';
import { FmBreadcrumbComponent } from './fm-breadcrumb/fm-breadcrumb.component';
import { UploadComponent } from './upload/upload.component';
import { NewFolderComponent } from './new-folder/new-folder.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FileUploadModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [FmComponent, FmBreadcrumbComponent],
  declarations: [FmComponent, FmBreadcrumbComponent, DataFilterPipe, UploadComponent, NewFolderComponent, FileSizePipe],
   providers: [MediaService, NgbActiveModal]
})
export class FmModule { }
