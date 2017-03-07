import {Component}  from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'new-job-form',
  templateUrl: './new-job-form.component.html'
})
/**
 * Reactive form for New Job
 *
 * **see more**: http://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/
 */
export class NewJobFormComponent {

  formNewJob: FormGroup;
  types = new FormControl()


  constructor(fb: FormBuilder) {
    this.formNewJob = fb.group({
      "types": this.types
    });
  }

  onSubmit() {
    console.log(this.formNewJob);
  }

}
