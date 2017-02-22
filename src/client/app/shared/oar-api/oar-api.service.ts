import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable }     from '@angular/core';
import { Job } from '../../shared/oar-api/model/job';
import { Config } from "../config/env.config";
import 'rxjs/add/operator/map';

/**
 *     Service for OAR API Access
 *     __More info about the API :__ http://oar.imag.fr/docs/latest/user/api.html
 *
 *     __TODO :__ Config global
 */
@Injectable()
export class OarApiService {

    constructor(
        private http: Http
    ){}


    private login = 'docker';
    private mdp = 'docker';
    private baseLogin = Config.API_PROTOCOLE + '://' + this.login + ':' + this.mdp + '@';

    private baseUrlOar = Config.API + 'oarapi-priv/';
    private urlResources =  this.baseLogin + this.baseUrlOar + 'resources.json';
    private urlJobs = this.baseLogin + this.baseUrlOar + 'jobs.json';
    private _urlMedia = this.baseLogin + this.baseUrlOar + 'media';

  /**
     *     Get all current jobs
     *     __return format :__ JSON
     */
    getJobs() {
        return this.http.get(
            this.urlJobs
        ).map(res => res.json());
    }

    /**
    *    Get a job by its id
    *    __return format :__ JSON
    */
    getJob(id: string) {
        return this.http.get(
            this.baseLogin + this.baseUrlOar + 'jobs/' + id + '.json'
        ).map(res => res.json());
    }

    /**
     * Get the jobs of a given username
     */
    getUserJobs(username: string) {
        return this.http.get(

            //    TODO : Parameters for states
            this.urlJobs + "?owner=" + username + "&state=Terminated,Running,Waiting"
        ).map(res => res.json());

    }


    /**
     *     Get all resources
     *     __return format :__ JSON
     */
    getResources() {
          return this.http.get(
            this.urlResources
        ).map(res => res.json());
    }


    /**
     * TEST
     */
    getMedia() {

        let urlStd = 'http://localhost:46668/oarapi-priv/media/~/OAR.Test_job.14.stderr';

         let headers = new Headers();
        headers.append('Content-Type', 'text/html');

        return this.http.get(
            urlStd, { headers: headers }
        ).map(res => res);


    }

  /**
   * Getter for urlMedia
   * @returns {string}
   */
    get urlMedia(): string {
      return this._urlMedia;
    }


}
