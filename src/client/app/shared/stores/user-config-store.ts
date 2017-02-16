import {Injectable} from '@angular/core';
import {OarApiService}  from "../oar-api/oar-api.service";
import {Http, Headers, RequestOptions} from '@angular/http';

/**
 *     more about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
@Injectable()
export class UserConfigStore {
  private config: any;

  constructor(private oarApiService: OarApiService,
              private http: Http) {

  }

  saveConfig() {
    let config = {title: "hello", test: "blob"};
    console.log(config);
    let blob = new Blob([JSON.stringify(config)]);

    let urlMedia = this.oarApiService.urlMedia + 'force/' + '~/.config/oar-skylight.json';

    let headers = new Headers();
    headers.append('Content-Type', 'application/octet-stream');
    let options: RequestOptions = new RequestOptions({headers: headers});

    let obs = this.http.post(
      urlMedia, blob, options
    ).subscribe(
      res => console.log(res),
      err => console.log(err)
    );


  }

  saveRequest() {


  }

}
