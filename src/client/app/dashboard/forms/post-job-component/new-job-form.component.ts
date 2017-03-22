import { Component}  from '@angular/core';
import { JobFormTemplate } from './JobFormTemplate'
import { OarApiService } from '../../shared/oar-api/oar-api.service'
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'new-job-form',
  templateUrl: './new-job-form.component.html'
})


export class NewJobFormComponent {

  jobTemplate : JobFormTemplate = new JobFormTemplate();

  constructor (private oarApi :OarApiService, private router: Router) {

  }

  /**
   * Submit the job from the Form
   * We use jobTemplate .getXXX() to format our request
   */
  submitNewJobForm() {
    let resource = this.jobTemplate.getResource();
    let name = this.jobTemplate.getName();
    let command = this.jobTemplate.getCommand();
    let directory = this.jobTemplate.getDirectory();
    let property = this.jobTemplate.getProperty();
    let type = this.jobTemplate.getType();
    let reservation = this.jobTemplate.getReservation();

    this.oarApi.postNewJob(resource, name, command, directory, property, type, reservation).subscribe(
      result => this.redirect(result.json()),
      err => console.log(err)
    )
  }

  /**
   * Redirect to the job detail page
   * @param jsonResponse
   */
  redirect(jsonResponse :any) {
    console.log(jsonResponse);
    let jobId = jsonResponse.id;

    if(jobId) {
      this.router.navigate(['dashboard/jobs/' + jobId ])
    }
  }

}
