

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
export class TodoStore {
    private _jobs: BehaviorSubject<List<Job>> = new BehaviorSubject(List ([]));
    
    constructor(private jobOarApiService: OarApiService) {
        this.loadInitialData();
    }
    
    /**
     * load from userspace ?
     */
    loadInitialData() {
        
    }

    addJob(id:string):Observable<Response> {

        let obs = this.jobOarApiService.getJob(id);

        obs.subscribe(
            json =>  this._jobs.next(
                this._jobs.getValue().push(
                    new Job().deserialize(json)
                )
            ),
            error => console.log(error)
        );

        return obs
    }

}