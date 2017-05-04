import { Component } from '@angular/core';
import { JobFormTemplate } from './JobFormTemplate';
import { OarApiService } from '../../../shared/services/oar-api/oar-api.service';
import { Router } from '@angular/router';
import { JobsStore } from '../../../shared/stores/jobs-store';

@Component({
  moduleId: module.id,
  selector: 'new-job-form',
  templateUrl: 'new-job-form.component.html'
})


export class NewJobFormComponent {

  jobTemplate: JobFormTemplate = new JobFormTemplate();

  constructor(private oarApi: OarApiService, private router: Router, private jobStore: JobsStore) {

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
      result => {
        let jobId = result.json().id
        if (jobId) {
          this.jobStore.addJob(result.json().id).subscribe(
            () => this.redirect(result.json()),
            err => console.log(err),
          )
        }
      },
      err => console.log(err)
    )
  }

  /**
   * Redirect to the job detail page
   * @param jsonResponse
   */
  redirect(jsonResponse: any) {
    console.log(jsonResponse);
    let jobId = jsonResponse.id;

    if (jobId) {
      this.router.navigate(['jobs/' + jobId])
    }
  }

  demo(): void {
    let jobsToPost: JobFormTemplate[] = [];


    let jobT = new JobFormTemplate();
    jobT.script = `/bin/sleep 5; 
        echo 'Hello World \n Job took 5s';
        `;
    jobsToPost.push(jobT);

    for (let i = 0; i < 32; i++) {
      let jobT = new JobFormTemplate();
      let randomTime = Math.floor(Math.random() * (150 - 5)) + 5;
      jobT.name = 'Demo job ' + i;
      jobT.script = '/bin/sleep ' + randomTime;
      jobsToPost.push(jobT);
    }

    jobsToPost.forEach(
      job => {
        this.jobTemplate = job;
        this.submitNewJobFormDemo();
      }
    );

    this.router.navigate(['dashboard/jobs']);

  }

  submitNewJobFormDemo() {
    let resource = this.jobTemplate.getResource();
    let name = this.jobTemplate.getName();
    let command = this.jobTemplate.getCommand();
    let directory = this.jobTemplate.getDirectory();
    let property = this.jobTemplate.getProperty();
    let type = this.jobTemplate.getType();
    let reservation = this.jobTemplate.getReservation();

    this.oarApi.postNewJob(resource, name, command, directory, property, type, reservation).subscribe(
      result => {
        let jobId = result.json().id
        if (jobId) {
          this.jobStore.addJob(result.json().id).subscribe(
            //() => this.redirect(result.json()),
            err => console.log(err),
          )
        }
      },
      err => console.log(err)
    )
  }


}
