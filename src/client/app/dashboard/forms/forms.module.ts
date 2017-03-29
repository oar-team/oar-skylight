import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormComponent} from './forms.component';
import {NewJobFormComponent} from './post-job-component/new-job-form.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [FormComponent, NewJobFormComponent],
  exports: [FormComponent, NewJobFormComponent]
})

export class FormModule {
}
