import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Job, OarApiService } from '../services/oar-api';
import { List } from 'immutable';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

/**
 *     more about info about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
@Injectable()
export class JobsStore {

  private _jobs: BehaviorSubject<List<Job>> = new BehaviorSubject(List([]));

  constructor(private oarApiService: OarApiService) {
    // this.loadInitialData();

    Observable.interval(environment.POLLING)
      .mergeMap(() => this.oarApiService.getJobs())
      .subscribe( json => {
        this.initNewJobs(json);
        this.updateJobs();
      });

  }

  /**
   * update jobs that are not terminated
   */
  updateJobs(): void {

    let jobIds: number[] =
      this._jobs.getValue()
        .filter(job => job.state != "Terminated" && job.state != "Error")
        .map((job) => job.id).toArray();

    if (jobIds.length > 0) {

      this.oarApiService.getJobsById(jobIds).subscribe(
        (json: any) => {

          if (json.items.length > 0) {

            json.items.forEach((jsonJob: any) => {
              let jobsInStore = this._jobs.getValue();

              if (jobsInStore.find(job => job.id == +jsonJob.id).state != jsonJob.state) {
                this.updateJob(jsonJob.id);
              }

              // let updatedJob: Job = new Job().deserialize(jsonJob);
              // this.addJobWithJob(updatedJob, jobsInStore.toArray());
            })
          }


        }
      )

    }

  }


  updateJob(id: string) {

    this.oarApiService.getJob(id).subscribe(
      jsonJob => {
        let job: Job = new Job().deserialize(jsonJob);
        this.addJobWithJob(job, this._jobs.getValue().toArray());
      }
    )
  }

  initNewJobs(json: any) {
    // Update if there's something to update
    if (json.items.length > 0) {

      json.items.forEach((jsonJob: any) => {
        let job: Job = new Job().deserialize(jsonJob)
        if (!this.containsJob(job.id.toString(), this._jobs.getValue().toArray())) {

          this.addJobWithJob(job, this._jobs.getValue().toArray())

        }
      })

    }
  }

  addJob(id: string): Observable<any> {

    let obs = this.oarApiService.getJob(id);

    obs.subscribe(
      json => this.addJobWithJob(
        new Job().deserialize(json),
        this._jobs.getValue().toArray()
      ),
      error => console.log(error)
    );

    return obs
  }

  /**
   * todo : return value ?
   */
  addJobWithJob(job: Job, arr: Array<Job>) {

    if (!this.containsJob(job.id.toString(), arr)) {
      this._jobs.next(this._jobs.getValue().push(job));
    } else {
      console.log('updating job-' + job.id + ' | state :' + job.state)
      arr[arr.findIndex(jobArr => jobArr.id == job.id)] = job;

      this._jobs.next(List(arr));
    }

    return this._jobs;
  }

  /**
   * Return the Job List as an Observable
   */
  get jobs(): Observable<List<Job>> {
    return this._jobs.asObservable();
  }

  /**
   * return a Job given an id
   *
   * todo : if job doesn't exist, do a request
   */
  private getJob(id: string): Job {

    if (this.containsJob(id, this._jobs.getValue().toArray())) {

      return this._jobs.getValue().find(
        (job) => job.id.toString() === id
      )

    } else {
      console.log('else')

      let job: Job = new Job();
      return job;
    }

  }


  /**
   * Check if a job exist in the List
   */
  containsJob(id: string, jobs: Array<Job>): boolean {
    return jobs.some(
      (job) => job.id.toString() === id
    )
  }


}
