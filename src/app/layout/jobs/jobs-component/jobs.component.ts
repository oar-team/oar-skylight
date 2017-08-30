import { User } from "./../../../shared/models/user";
import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import { OarApiService } from "../../../shared/services/oar-api/oar-api.service";
import { Job } from "../../../shared/services/oar-api/model/job";
import { List } from "immutable";
import { Router } from "@angular/router";
import { JobsStore } from "../../../shared/stores/jobs-store";
import { AuthenticationService } from "../../../shared/services/auth/authentification.service";

@Component({
  moduleId: module.id,
  selector: "jobs-page",
  templateUrl: "jobs.html",
  providers: [OarApiService]
})
export class JobsComponent {
  jobs: any;
  user: User;
  constructor(
    private apiService: OarApiService,
    private router: Router,
    private jobStore: JobsStore,
    private AuthService: AuthenticationService
  ) {
    this.jobStore.jobs.subscribe(
      jobs => (this.jobs = jobs.toArray()),
      err => console.log(err)
    );

    this.AuthService
      .getUserObservable()
      .subscribe(user => (this.user = user), err => console.log(err));
  }

  onInit() {}

  getJobs() {
    return this.jobStore.jobs.subscribe(
      jobList => (this.jobs = jobList.toArray())
    );
  }

  // Charge un ensemble de jobs
  loadJobs(data: any) {
    if (this.AuthService.getIsLogged()) {
      for (let jsonJob of data.items) {
        // let j:Job = new Job().deserialize(jsonJob);
        this.getJob(jsonJob.id);
      }
    } else {
      console.log("loadJobs not logged");
    }
  }

  /**
    *
    */
  getJob(id: string) {
    this.jobStore.addJob(id);
  }

  gotoJob(id: string) {
    this.router.navigate(["" + id]);
  }

  hideJob(job: Job) {
    this.jobStore.removeJob(job);
  }
}
