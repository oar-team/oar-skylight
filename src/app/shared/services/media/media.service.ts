import { environment } from './../../../../environments/environment';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  private baseUrl = environment.API_PROTOCOLE + '://' + environment.API + 'oarapi-priv/media/';
  constructor(private http: Http) {

  }

  getMedia(path: string): Observable<Response> {

    const urlStd = this.baseUrl + '~/' + path;

    const headers = new Headers();
    headers.append('Content-Type', 'text/html');

    return this.http.get(
      urlStd, { headers: headers }
    ).map(res => res);
  }

  list(path: string) {
    const url = this.baseUrl + 'ls/' + path;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(
      url, { headers: headers }
    ).map(res => res);

  }

  deleteMedia(path: string): Observable<Response> {
    const url = this.baseUrl + path;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.delete(
      url, { headers: headers }
    ).map(res => res);

  }

  getBaseUrl() {
    return this.baseUrl;
  }
}
