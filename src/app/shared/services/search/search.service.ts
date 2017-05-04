import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../../environments/environment';
/**
 * For the research, we use the select_all?query functionnality (NOT STABLE). 
 * The return format is the database format, therefore we cannot use the job model.
 */
@Injectable()
export class SearchService {


    private baseUrlSearch = environment.API_PROTOCOLE + '://' + environment.API + 'oarapi-priv/select_all.json';

    constructor(
        private http: Http
    ) { }

    /**
     * Build the URL base on a given query
     * if limit isn't defined, we set it to 1000
     */
    buildUrl(query: string, limit?: number): string {

        // TODO : Add limit to App config
        if (!limit) { limit = 1000; }

        return this.baseUrlSearch + '?limit=' + limit + '&query=' + encodeURI(query);
    }

    /**
     * Execute the search request
     */
    request(url: string): Observable<Response> {

        let headers = new Headers();
        headers.append('Content-Type', 'text/html');
        console.log('req function');

        return this.http.get(url, { headers: headers })
            .map(res => res.json());

    }

    searchByName(name: string): Observable<Response> {
        name = name.toLowerCase();
        // GROUPE BY because of count(*) request being also execute
        //let req = `FROM jobs WHERE job_user='docker' GROUP BY job_id ORDER BY job_id DESC`;
        let query = `FROM jobs WHERE lower(job_name) LIKE '%${name}%' GROUP BY job_id ORDER BY job_id DESC`;
        let url = this.buildUrl(query);
        return this.request(url);
    }
}