import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormComponent} from './forms.component';
import {NewJobFormComponent} from './new-job-form.component';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent, NewJobFormComponent],
  exports: [FormComponent, NewJobFormComponent]
})

export class FormModule {

}
