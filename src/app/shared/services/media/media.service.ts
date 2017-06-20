import { AuthenticationService } from './../auth/authentification.service';
import { environment } from './../../../../environments/environment';
import { Http, Headers, Response } from '@angular/http';
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
    } else {
      headers.append('Content-Type', 'application/json');
    }


    return headers;
  }


}
