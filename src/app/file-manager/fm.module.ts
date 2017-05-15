import { DataTableModule } from 'angular2-datatable/index';
import { MediaService } from './../shared/services/media/media.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmComponent } from './fm/fm.component';
import { FmBreadcrumbComponent } from './fm-breadcrumb/fm-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [FmComponent, FmBreadcrumbComponent],
   providers: [MediaService]
})
export class FmModule { }
