

import {Injectable} from '@angular/core';
import { OarApiService }  from "../oar-api/oar-api.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Job} from "../oar-api/model/job";
import { Http, Response } from '@angular/http';
import {List} from 'immutable';
import {BehaviorSubject} from "rxjs/Rx";

/**
 *     more about info about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
@Injectable()
export class JobsStore {

    private _jobs: BehaviorSubject<List<Job>> = new BehaviorSubject(List ([]));
    
    constructor(private jobOarApiService: OarApiService) {
        //this.loadInitialData();
    }
    
    /**
     * load from userspace ?
     */
    loadInitialData() {
        
    }

    addJob(id:string) {
    console.log('trying to add job.id :' + id);
    
        let obs = this.jobOarApiService.getJob(id);
        
        obs.subscribe(
            json =>  this.addJobWithJob(
                new Job().deserialize(json), 
                this._jobs.getValue().toArray()
                ),
            error => console.log(error)
        );

        return true
    }
    
    /**
     * todo : return value ?
     */
    addJobWithJob(job:Job, arr :Array<Job>) {
        
        if(! this.containsJob(job.id.toString(), arr)) {
            this._jobs.next(this._jobs.getValue().push(job));
        }
        
        return this._jobs;
    }

    /**
     * Return the Job List as an Observable
     */
    get jobs() {
        return this._jobs.asObservable();
    }
    
    /**
     * Check if a job exist in the List
     */
    containsJob(id:string, arr :Array<Job>):boolean {

       console.log(arr);

       return arr.some(
           (job) => job.id.toString() === id
       )
    }


}