import { MediaService } from "./../../../shared/services/media/media.service";
import { Component, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { JobsStore } from "../../../shared/stores/jobs-store";
import { Job, OarApiService, Link } from "../../../shared/services/oar-api";
import { UserConfigStore } from "../../../shared/stores/user-config-store";
import { Observable } from "rxjs";
import { Location } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: "job-details",
  templateUrl: "job-details.html",
  providers: [OarApiService],
  styleUrls: ["job-details.component.scss"]
})
export class JobDetails implements AfterViewInit {
  @ViewChild("jobDetailsTable") jobDetailsTable: any;
  id: number;
  job: Job;
  buttonState: Number;
  messageButton = "Display details";
  jobParametersToDisplay: string[];
  displayStd: string = "";

  // Use to display sorted key values
  jobKeys: String[];
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

  ngAfterViewInit() {
    //
  }

  showStdOut() {
    this.media.getMedia(this.job.stdoutFile).subscribe(
      (res: any) => {
        this.displayStd = res._body;
      },
      err => console.log(err)
    );
  }

  showStdErr() {
    this.media.getMedia(this.job.stderrFile).subscribe(
      (res: any) => {
        this.displayStd = res._body;
      },
      err => console.log(err)
    );
  }

  hideStd() {
    this.displayStd = undefined;
  }

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

  onClickLink(link: Link) {
    console.log("route : " + link.href);
  }

  addPropertyToPref(property: string) {
    this.userConfig.addJobDetailsProperty(property);
  }

  goBack(): void {
    this.location.back();
  }

  unsetPropertyToPref(property: string) {
    this.userConfig.unsetJobDetailsProperty(property);
  }
}
