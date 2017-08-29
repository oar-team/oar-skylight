import { AuthenticationService } from "./../auth/authentification.service";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Job } from "./model/job";
import "rxjs/add/operator/map";
import { environment } from "../../../../environments/environment";

/**
 *     Service for OAR API Access
 *     __More info about the API :__ http://oar.imag.fr/docs/latest/user/api.html
 *     You can change the protocole and API entry point in the enrivonment config file.
 *
 */
@Injectable()
export class OarApiService {
  
  private baseUrlOar = environment.API_PROTOCOLE +
    "://" +
    environment.API +
    "oarapi-priv/";
  private urlResources = environment.API_PROTOCOLE +
    "://" +
    environment.API +
    "oarapi-priv/" +
    "resources.json";

  private urlResourceDetails = environment.API_PROTOCOLE +
    "://" +
    environment.API +
    "oarapi-priv/" +
    "resources/";
  private urlJobs = environment.API_PROTOCOLE +
    "://" +
    environment.API +
    "oarapi/" +
    "jobs.json";
  private _urlMedia = this.baseUrlOar + "media";

  constructor(private http: Http, private auth: AuthenticationService) {}

  /**
       *     Get all current jobs
       *     __return format :__ JSON
       */
  getJobs(): Observable<Response> {
    const headers = this.generateHeaders();
    const url = this.baseUrlOar + "jobs.json";
    return this.http.get(url, { headers: headers }).map(res => res.json());
  }

  getJobResources(id: string) {
    const headers = this.generateHeaders();

    return this.http
      .get(this.baseUrlOar + "jobs/" + id + "/resources.json", {
        headers: headers
      })
      .map(res => res.json())
      .catch((error: any) => {
        return this.handleError(error);
      });
  }

  /**
     * Return a JSON of given job by id
     */
  getJobsById(ids: number[]): Observable<Response> {
    if (this.auth.getIsLoggedValue()) {
      const headers = this.generateHeaders();

      return this.http
        .get(this.baseUrlOar + "jobs.json?ids=" + ids.toString(), {
          headers: headers
        })
        .map(res => {
          if (res.status < 200 || res.status >= 300) {
            console.log("res err");
            throw new Error("This request has failed " + res.status);
          }
          return res.json();
        });
    } else {
      console.log("Could not execute this request");
    }
  }

  /**
    *    Get a job by its id
    *    __return format :__ JSON
    */
  getJob(id: string): Observable<Response> {
    const headers = this.generateHeaders();

    return this.http
      .get(this.baseUrlOar + "jobs/" + id + ".json", { headers: headers })
      .map(res => res.json());
  }

  /**
     * Get the jobs of a given username
     */
  getUserJobs(username: string): Observable<Response> {
    const headers = this.generateHeaders();

    return this.http
      .get(
        //    TODO : Parameters for states
        this.urlJobs +
          "?owner=" +
          username +
          "&state=Terminated,Running,Waiting",
        { headers: headers }
      )
      .map(res => res.json());
  }

  /**
     *     Get all resources
     *     __return format :__ JSON
     */
  getResources(): Observable<Response> {
    const headers = this.generateHeaders();

    return this.http
      .get(this.urlResources, { headers: headers })
      .map(res => res.json())
      .catch((error: any) => {
        return this.handleError(error);
      });
  }

  getResource(id: string) {
    const headers = this.generateHeaders();

    return this.http
      .get(this.urlResourceDetails + id + ".json", { headers: headers })
      .map(res => res.json())
      .catch((error: any) => {
        return this.handleError(error);
      });
  }

  /**
     * Getter for urlMedia
     * @returns {string}
     */
  get urlMedia(): string {
    return this._urlMedia;
  }

  postNewJob(
    resource: string,
    name: string,
    command: string,
    directory: string,
    property: string,
    type: string,
    reservation: string
  ): Observable<Response> {
    const job = {
      resource: resource,
      name: name,
      command: command,
      directory: directory,
      property: property,
      type: type,
      reservation: reservation
    };

    const headers = this.generateHeaders();

    return this.http.post(this.baseUrlOar + "jobs", JSON.stringify(job), {
      headers: headers
    });
  }

  /**
     * Generate JSON headers with Basic Auth
     */
  private generateHeaders() {
    const headers: Headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " +
        btoa(
          this.auth.getUser().getUsername() +
            ":" +
            this.auth.getUser().getPassword()
        )
    );

    headers.append("Content-Type", "application/json");
    return headers;
  }

  handleError(error: any): Observable<any> {
    return Observable.throw(new Error(error.status));
  }
}
