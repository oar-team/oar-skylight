import { MediaService } from "./../../../shared/services/media/media.service";
import { Component, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { JobsStore } from "../../../shared/stores/jobs-store";
import { Job, OarApiService, Link } from "../../../shared/services/oar-api";
import { UserConfigStore } from "../../../shared/stores/user-config-store";
import { Observable } from "rxjs";
import { Location } from "@angular/common";

/**
 * Display details of a job
 * 
 * @export
 * @class JobDetails
 * @implements {AfterViewInit}
 */
@Component({
  moduleId: module.id,
  selector: "job-details",
  templateUrl: "job-details.html",
  providers: [OarApiService],
  styleUrls: ["job-details.component.scss"]
})
export class JobDetails implements AfterViewInit {
  /**
   * Details entry
   * 
   * @type {*}
   * @memberof JobDetails
   */
  @ViewChild("jobDetailsTable") jobDetailsTable: any;
  // Job id from url parameters
  id: number;
  // Fetched job
  job: Job;
  // Show or hide details
  buttonState: Number;
  // Changing message of button (Display / hide)
  messageButton = "Display details";

  // Parameters to display from UserConfig
  jobParametersToDisplay: string[];
  displayStd: string = "";

  // Use to display sorted key values
  jobKeys: String[];

  // Code div to display stdout
  @ViewChild("code") codeElement: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: OarApiService,
    private media: MediaService,
    private jobStore: JobsStore,
    private userConfig: UserConfigStore,
    private location: Location
  ) {
    this.job = new Job();
    this.buttonState = 1;
    this.jobKeys = [];
    this.jobParametersToDisplay = [];

    this.userConfig.getConfigObs().subscribe(
      config => {
        this.jobParametersToDisplay = config.jobDetailProperties;
        console.log(this.jobParametersToDisplay);
      },
      err => console.log(err)
    );
  }
  /**
   * We first load our job with the given id from the API 
   * Second, we handle json parameters to display
   * 
   * @memberof JobDetails
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params["id"]; // (+) converts string 'id' to a number
      this.id = id;

      this.jobStore.jobs.subscribe(list => {
        if (list.find(job => job.id === id)) {
          this.job = list.find(job => job.id === id);

          this.jobKeys = Object.keys(this.job.json);
          this.jobKeys.sort();
        } else {
          this.jobStore.addJob(id.toString());
        }
      });
    });
  }

  /**
   * 
   * 
   * @memberof JobDetails
   */
  ngAfterViewInit() {
    //
  }

  /**
   * Show stdout
   * 
   * @memberof JobDetails
   */
  showStdOut() {
    this.media.getMedia(this.job.stdoutFile).subscribe(
      (res: any) => {
        this.displayStd = res._body;
      },
      err => console.log(err)
    );
  }

  /**
   * Show stdErr
   * 
   * @memberof JobDetails
   */
  showStdErr() {
    this.media.getMedia(this.job.stderrFile).subscribe(
      (res: any) => {
        this.displayStd = res._body;
      },
      err => console.log(err)
    );
  }

  /**
   * Hide std
   * 
   * @memberof JobDetails
   */
  hideStd() {
    this.displayStd = undefined;
  }

  /**
   * Display details
   * 
   * @memberof JobDetails
   */
  getDetails() {
    if (this.buttonState == 0) {
      this.buttonState = 1;
      this.messageButton = "Display Details";
      this.jobDetailsTable.nativeElement.style = "display:none;";
    } else {
      this.buttonState = 0;
      this.messageButton = "Hide Details";
      this.jobDetailsTable.nativeElement.style = "display:table;";
    }
  }

  /**
   * Dummy get Link
   * 
   * @param {Link} link 
   * @memberof JobDetails
   */
  onClickLink(link: Link) {
    console.log("route : " + link.href);
  }

  /**
   * Add json property to favorite in ConfigStore
   * 
   * @param {string} property 
   * @memberof JobDetails
   */
  addPropertyToPref(property: string) {
    this.userConfig.addJobDetailsProperty(property);
  }

  /**
   * Go to last 'Page'
   * 
   * @memberof JobDetails
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Unset property from favorite in ConfigStore
   * 
   * @param {string} property 
   * @memberof JobDetails
   */
  unsetPropertyToPref(property: string) {
    this.userConfig.unsetJobDetailsProperty(property);
  }
}
