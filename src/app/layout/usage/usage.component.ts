import { NotificationsService } from "angular2-notifications";
import { Job } from "./../../shared/services/oar-api/model/job";
import { JobsStore } from "./../../shared/stores/jobs-store";
import { Router } from "@angular/router";
import { Resource } from "./../../shared/services/oar-api/model/resource";
import { OarApiService } from "./../../shared/services/oar-api/oar-api.service";
import { Component, OnInit } from "@angular/core";

/**
 * 
 * Display the current state of usage of resources
 * 
 * @export
 * @class UsageComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-usage",
  templateUrl: "./usage.component.html",
  styleUrls: ["./usage.component.scss"]
})
export class UsageComponent implements OnInit {
  // job ids that have been handled by fetchJobResources. We are trying to avoid too many requests
  public handledJobs = [];
  public handledRequests = 0;
  public resources = {};
  public map = {};

  public totalJobs: number = 1; // for progressbar

  constructor(
    private api: OarApiService,
    private router: Router,
    private jobs: JobsStore,
    private notifications: NotificationsService
  ) {}

  ngOnInit() {
    this.notifications.info("Requesting", "This could take some time", {
      timeOut: 1000,
      maxLength: 100,
      showProgressBar: true
    });

    /**
     * Group by network_adresse into an object.
     */
    this.api.getResources().subscribe((data: any) => {
      this.resources = data.items.reduce(function(result, current) {
        result[current.network_address] = result[current.network_address] || [];
        result[current.network_address].push(current);
        return result;
      }, {});

      this.jobs.jobs.subscribe(jobsList => {
        const jobs = jobsList
          .toArray()
          .filter(job => job.state === "Running")
          .map(job => job.id);

        this.totalJobs = jobs.length;

        // fetch each jobs resource (lots of requests)
        this.fetchBatchJobResources(jobs);
      });
    });
  }

  /**
   * Recursive & async. 
   * Fetch the first job resource of ids array and then call itself.
   *  
   * @param ids 
   */
  async fetchBatchJobResources(ids: Array<number>) {
    if (ids.length > 0) {
      const id = ids[0];
      if (!isNaN(id) && this.handledJobs.indexOf(id) < 0) {
        this.jobs.getJobResources(id).subscribe((json: any) => {
          json.items.forEach(element => {
            this.map[element.id] = id;
          });

          // For the loader
          this.handledRequests++;
        });

        // Add id to handledJobs
        this.handledJobs.push(id);
      }

      // remove first element
      ids.shift();

      // Needed to stop computer from bugging.
      await this.delay(10);
      // Boucle
      this.fetchBatchJobResources(ids);
    }
  }

  /**
   * Delay function in ms
   * 
   * @param {number} ms 
   * @returns 
   * @memberof UsageComponent
   */
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
