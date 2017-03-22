import {Component, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {OarApiService} from '../../shared/oar-api/oar-api.service';
import {JobsStore} from '../../shared/stores/jobs-store';
import {Job} from '../../shared/oar-api/model/job';
import {UserConfigStore} from '../../shared/stores/user-config-store';
import {Link} from '../../shared/oar-api/model/link';
import {Observable} from "rxjs";
import {Location} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'job-details',
  templateUrl: './job-details.html',
  providers: [OarApiService]
})

export class JobDetails {

  @ViewChild('jobDetailsTable') jobDetailsTable: any;
  id: number;
  stdout: string = "Hello";
  job: Job;
  buttonState: Number;
  messageButton = "Display details";
  jobParametersToDisplay: string[];

  // Use to display sorted values
  jobKeys: String[];

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
      this.job = this.jobStore.getJob(this.id.toString());

      /**
       * Hack for the case of new job not yet available
       */
      if (!this.job.json) {

        this.getJob(id.toString()).subscribe(
          () => {

            // Sort on json keys (for clarity)
            this.jobKeys = Object.keys(this.job.json);
            this.jobKeys.sort();

          }
        )

      } else {


        // Sort on json keys (for clarity)
        this.jobKeys = Object.keys(this.job.json);
        this.jobKeys.sort();


      }

    });

  }


  /**
   *    Get the json of a given job id
   */
  getJob(id: string): Observable<any> {
    let jsonJob: any;

    let obs = this.apiService.getJob(id)

    obs.subscribe(
      data => this.setJob(data),
      error => console.log(error)
    )

    return obs
  }

  /**
   *  Populate job with json
   */
  setJob(json: any) {
    console.log(json);
    this.job = new Job().deserialize(json);
    console.log(this.job);
  }

  getDetails() {

    if (this.buttonState == 0) {
      this.buttonState = 1;
      this.messageButton = "Display Details";
      this.jobDetailsTable.nativeElement.style = "display:none;"
      this.getJob(this.id.toString());
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
