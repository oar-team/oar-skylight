import { Observable } from "rxjs/Rx";
import { NotificationsService } from "angular2-notifications";
import { AuthenticationService } from "./../auth/authentification.service";
import { environment } from "./../../../../environments/environment";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MediaService {
  private baseUrl = environment.API_PROTOCOLE +
    "://" +
    environment.API +
    "oarapi-priv/media/";
  constructor(
    private http: Http,
    private auth: AuthenticationService,
    private notifications: NotificationsService
  ) {}

  getMedia(path: string): Observable<Response> {
    const urlStd = this.baseUrl + "~/" + path;

    const headers = this.generateHeaders("html");

    return this.http.get(urlStd, { headers: headers }).map(res => res);
  }

  list(path: string) {
    const url = this.baseUrl + "ls/" + path;

    const headers = this.generateHeaders("json");

    return this.http.get(url, { headers: headers }).map(res => res);
  }

  deleteMedia(path: string): Observable<Response> {
    console.log("deleteMedia");
    const url = this.baseUrl + path;
    console.log(url);
    const headers = this.generateHeaders("json");

    const req = this.http
      .delete(url, { headers: headers })
      .map(res => res.json());

    return req;
  }

  /**
   * Upload a File given a path
   * @param path
   * @param file
   */
  uploadMedia(path: string, file: File): Observable<Response> {
    // We need to put the name and extension in the url
    const url = encodeURI(this.baseUrl + path + "/" + file.name);

    // We cast the file into a blob
    const blob = file as Blob;

    // API expect an 'application/octet-stream'
    const headers = this.generateHeaders("stream");
    const options = new RequestOptions({ headers: headers });

    const req = this.http.post(url, blob, options);
    req
      .catch(error => Observable.throw(error))
      .subscribe(
        data =>
          this.notifications.success(
            "File uploaded !",
            file.name + " was successfully uploaded"
          ),
        error => this.notifications.error("Something went wrong !", error)
      );

    return req;
  }

  /**
   * Create a folder. Since the API doesn't allow the create of folder, we will create a file in a given folder and then delete the file
   * @param path
   */
  createFolder(path: String) {
    // We need to put the name and extension in the url
    const randomId = Math.random().toString(36).substring(2);
    const url = this.baseUrl + path + "/" + randomId;

    // API expect an 'application/octet-stream'
    const headers = this.generateHeaders("stream");
    const options = new RequestOptions({ headers: headers });

    // To be able to do multiple subscribe on this Observable, we use the share function
    // Share() change the observable from 'cold' to 'hot'
    const req = this.http.post(url, new Blob(), options).share();

    req.catch(error => Observable.throw(error)).subscribe(
      // TODO : Finish
      (data: any) => {
        console.log(data.status);
        if (data.status >= 200 && data.status < 300) {
          this.deleteMedia(path + "/" + randomId).subscribe(
            res => this.notifications.success("Folder created !", ""),
            err => console.log(err)
          );
        }
      },
      error => console.log(error)
    );

    return req;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  /**
   * Generate Headers with User credentials and given content type
   * @param type string (json, html)
   */
  private generateHeaders(type: string) {
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

    if (type === "json") {
      headers.append("Content-Type", "application/json");
    } else if (type === "html") {
      headers.append("Content-Type", "text/html");
    } else if (type === "stream") {
      headers.append("Content-Type", "application/octet-stream");
    } else if (type === "form-data") {
      headers.append("Content-Type", "multipart/form-data");
    } else {
    }

    return headers;
  }
}
