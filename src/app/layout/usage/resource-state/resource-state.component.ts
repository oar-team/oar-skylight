import { JobsStore } from "./../../../shared/stores/jobs-store";
import { Job } from "./../../../shared/services/oar-api/model/job";
import { Resource } from "./../../../shared/services/oar-api/model/resource";
import { Router } from "@angular/router";
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

/**
 * Component that display the state of a resource core.
 * There can be a lot of core (> 600 on luke). Be carefull of performances
 * 
 * @export
 * @class ResourceStateComponent
 * @implements {OnChanges}
 * @implements {OnInit}
 */
@Component({
  selector: "ResourceState",
  templateUrl: "./resource-state.component.html",
  styleUrls: ["./resource-state.component.scss"]
})
export class ResourceStateComponent implements OnChanges, OnInit {
  // json 
  @Input() resource: any;
  // id given
  @Input() jobId: number;
  public job: Job;

  // Used to determined the display state of the component
  public toDisplay: String = ".";
  public colorHex: String = "#4e9a06";

  constructor(private router: Router, private jobs: JobsStore) {
    this.job = new Job();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    /**  When there's a change, we first fetch the job in the store
    *    then set display informations
    */
    if (this.jobId) {
      this.job = this.jobs.getJob(this.jobId.toString());
    }

    // display informations
    if (this.resource.state === "Suspected") {
      this.toDisplay = "S";
      this.colorHex = "red";
    }

    if (this.jobId) {
      this.toDisplay = "J";
      this.colorHex = "#d3d7cf";
    }

    if (this.job.queue === "besteffort") {
      this.toDisplay = "B";
      this.colorHex = "#4e9a06";
    }
  }
  /**
   * Navigate to the resource-details component
   * 
   * @param {string} id 
   * @memberof ResourceStateComponent
   */
  goTo(id: string) {
    this.router.navigate(["./resources/" + id]);
  }
}
