import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OarApiService } from '../../../shared/oar-api/oar-api.service';
import { JobsStore } from '../../../shared/stores/jobs-store';
import { Job } from '../../../shared/oar-api/model/job';
import { UserConfigStore } from '../../../shared/stores/user-config-store';
import { Link } from '../../../shared/oar-api/model/link';
import { Observable } from "rxjs";
import { Location } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'job-details',
  templateUrl: 'job-details.html',
  providers: [OarApiService],
})

export class JobDetails implements AfterViewInit {

  @ViewChild('jobDetailsTable') jobDetailsTable: any;
  id: number;
  job: Job;
  buttonState: Number;
  messageButton = "Display details";
  jobParametersToDisplay: string[];
  displayStd: string = "";
  // Use to display sorted key values
  jobKeys: String[];
  @ViewChild('code') codeElement: ElementRef;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiService: OarApiService,
    private jobStore: JobsStore,
    private userConfig: UserConfigStore,
    private location: Location) {
    this.job = new Job();
    this.buttonState = 1;
    this.jobKeys = [];
    this.jobParametersToDisplay = [];

    this.userConfig.getConfigObs().subscribe(
      config => this.jobParametersToDisplay = config.jobDetailProperties,
      err => console.log(err)
    );

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];// (+) converts string 'id' to a number
      this.id = id;

      this.jobStore.jobs.subscribe(
        list => {
          if (list.find(job => job.id == id)) {

            this.job = list.find(job => job.id == id)

            this.jobKeys = Object.keys(this.job.json);
            this.jobKeys.sort();
          } else {
            this.jobStore.addJob(id.toString());
          }
        }
      );

    });

  }

  ngAfterViewInit() {
    //
  }

  showStdOut() {

    this.apiService.getMedia(this.job.stdoutFile).subscribe(
      (res: any) =>  { 
  
        this.displayStd = res._body
      },
      err => console.log(err)
    )

  }

  showStdErr() {

    this.apiService.getMedia(this.job.stderrFile).subscribe(
      (res: any) =>  { 
  
        this.displayStd = res._body
      },
      err => console.log(err)
    )

  }

  hideStd(){
    this.displayStd = undefined;
  }

  /**
   *    Get the json of a given job id
  //  */
  // getJob(id: string): Observable<any> {
  //   let jsonJob: any;

  //   let obs = this.apiService.getJob(id)

  //   obs.subscribe(
  //     data => this.setJob(data),
  //     error => console.log(error)
  //   )

  //   return obs
  // }

  /**
   *  Populate job with json
   */
  // setJob(json: any) {
  //   console.log(json);
  //   this.job = new Job().deserialize(json);
  //   console.log(this.job);
  // }

  getDetails() {

    if (this.buttonState == 0) {
      this.buttonState = 1;
      this.messageButton = "Display Details";
      this.jobDetailsTable.nativeElement.style = "display:none;"
    } else {
      this.buttonState = 0;
      this.messageButton = "Hide Details";
      this.jobDetailsTable.nativeElement.style = "display:block;"
    }
  }

  onClickLink(link: Link) {
    console.log('route : ' + link.href);
  }

  addPropertyToPref(property: string) {
    this.userConfig.addJobDetailsProperty(property);
  }

  goBack(): void {
    this.location.back();
  }

}
