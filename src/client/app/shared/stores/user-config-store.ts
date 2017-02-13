import {Injectable} from '@angular/core';
import { OarApiService }  from "../oar-api/oar-api.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import { Http, Response, Headers } from '@angular/http';
import {List} from 'immutable';
import {BehaviorSubject} from "rxjs/Rx";
import { Job } from '../oar-api/model/job'

/**
 *     more about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
@Injectable()
export class UserConfigStore {

    private config:any;
    
    constructor(
        private oarApiService: OarApiService,
        private http: Http
        ) {
       
    }
    
    saveConfig() {
        let config = new Job();
        console.log(config);

        let urlStd = 'http://localhost:46668/oarapi-priv/media/~/config2.json';
        
         let headers = new Headers();         
        headers.append('Content-Type', 'application/octet-stream');
        
        let obs = this.http.post(
            urlStd, config
        ).subscribe(
            res => console.log(res),
            err => console.log(err)
        );

    }

    saveRequest() { 

        
    }

}