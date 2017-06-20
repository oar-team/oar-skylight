import { JobStateComponent } from './job-state.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JobStateComponent],
  exports: [JobStateComponent]
})
export class JobStateModule { }
