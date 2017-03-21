import {Injectable} from '@angular/core';
import {OarApiService}  from "../oar-api/oar-api.service";
import {Job} from "../oar-api/model/job";
import {List} from 'immutable';
import {BehaviorSubject, Observable} from "rxjs/Rx";

/**
 *     more about info about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
@Injectable()
export class JobsStore {

  private _jobs: BehaviorSubject<List<Job>> = new BehaviorSubject(List([]));

  constructor(private jobOarApiService: OarApiService) {
    //this.loadInitialData();

    Observable.interval(20000)
      .mergeMap(() => this.jobOarApiService.getJobs())
      .subscribe(
        json => this.initJobList(json)
      )
  }

  /**
   * load from userspace ?
   */
  loadInitialData() {

  }

  initJobList(json: any) {
    // Update if there's anything to update
    if(json.items > 0) {

      let newJobs: List<Job> = List([]);

      json.items.forEach(function (jsonJob: any) {
        let job: Job = new Job().deserialize(jsonJob)
        newJobs.push(job)
      })

      this._jobs.next(newJobs);

    }
  }

  addJob(id: string):Observable<any> {

    let obs = this.jobOarApiService.getJob(id);

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
    }

    return this._jobs;
  }

  /**
   * Return the Job List as an Observable
   */
  get jobs() :Observable<List<Job>>{
    return this._jobs.asObservable();
  }

  /**
   * return a Job given an id
   *
   * todo : if job doesn't exist, do a request
   */
   getJob(id: string):Job {

    if(this.containsJob(id, this._jobs.getValue().toArray())) {

      return this._jobs.getValue().find(
        (job) => job.id.toString() === id
      )

    } else {
      console.log('else')

      let job :Job = new Job();
      return job
        // this.jobOarApiService.getJob(id).subscribe(
        //   jobJson => {
        //     return job.deserialize(jobJson)
        //   }
        // )
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
