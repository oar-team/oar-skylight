import { AuthenticationService } from './../auth/authentification.service';
import { environment } from './../../../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  private baseUrl = environment.API_PROTOCOLE + '://' + environment.API + 'oarapi-priv/media/';
  constructor(private http: Http, private auth: AuthenticationService) {

  }

  getMedia(path: string): Observable<Response> {

    const urlStd = this.baseUrl + '~/' + path;

    const headers = this.generateHeaders('html');

    return this.http.get(
      urlStd, { headers: headers }
    ).map(res => res);
  }

  list(path: string) {
    const url = this.baseUrl + 'ls/' + path;

    const headers = this.generateHeaders('json');

    return this.http.get(
      url, { headers: headers }
    ).map(res => res);

  }

  deleteMedia(path: string): Observable<Response> {

    const url = this.baseUrl + path;

    const headers = this.generateHeaders('json');

    return this.http.delete(
      url, { headers: headers }
    ).map(res => res);

  }


  /**
   * Upload a File given a path
   * @param path
   * @param file
   */
  uploadMedia(path: string, file: File) {

    // We need to put the name and extension in the url
    const url = this.baseUrl + path + '/' + file.name;
    
    // We cast the file into a blob
    const blob = file as Blob;

    // API expect an 'application/octet-stream'
    const headers = this.generateHeaders('stream');
    const options = new RequestOptions({ headers: headers });

    this.http.post(url, blob, options)
        .catch(error => Observable.throw(error))
        .subscribe(
            data => console.log('success'),
            error => console.log(error)
        );
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
    headers.append('Authorization', 'Basic ' + btoa(this.auth.getUser().getUsername() + ':' + this.auth.getUser().getPassword()));

    if (type === 'json') {
      headers.append('Content-Type', 'application/json');
    } else if (type === 'html') {
      headers.append('Content-Type', 'text/html');
    } else if (type === 'stream') {
      headers.append('Content-Type', 'application/octet-stream');
    } else if (type === 'form-data') {
        headers.append('Content-Type', 'multipart/form-data');
    }  else {
    }


    return headers;
  }


}
