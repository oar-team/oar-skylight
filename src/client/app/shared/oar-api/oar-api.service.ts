import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable }     from '@angular/core';
import { Job } from '../../shared/oar-api/model/job';
import 'rxjs/add/operator/map';

@Injectable()
export class OarApiService {
    constructor(
        private http: Http
    ){}

    private login = 'docker';
    private mdp = 'docker';
    private baseLogin = 'http://' + this.login + ':' + this.mdp + '@';

    private baseUrlOar = 'localhost:46668/oarapi-priv/';
    private urlResources =  this.baseLogin + this.baseUrlOar + 'resources.json';
    private urlJobs = this.baseLogin + this.baseUrlOar + 'jobs.json';
    
     /*
    *    TODO : Parameters, Description      
    */ 
    getJobs() {        
        return this.http.get(
            this.urlJobs
        ).map(res => res.json());
    }
    
    /*
    *    TODO : Parameters, Description      
    */ 
    getJob(id: string) {
        return this.http.get(
            this.baseLogin + this.baseUrlOar + 'jobs/' + id + '.json'
        ).map(res => res.json());
    }

    getResources() {
          return this.http.get(
            this.urlResources
        ).map(res => res.json());
    }


}
