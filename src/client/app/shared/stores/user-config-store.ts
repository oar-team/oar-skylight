import {Injectable} from '@angular/core';
import {OarApiService}  from "../oar-api/oar-api.service";
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { UserConfig } from './model/user-config';
import {BehaviorSubject, Observable} from "rxjs/Rx";

/**
 *     more about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
@Injectable()
export class UserConfigStore {
  private config: BehaviorSubject<UserConfig>;
  private urlMedia :string;
  constructor(private oarApiService: OarApiService,
              private http: Http) {
    this.urlMedia = this.oarApiService.urlMedia + '~/.config/oar-skylight.json';
    this.config = new BehaviorSubject(new UserConfig());
    this.loadConfig();
  }

  saveConfig(config :UserConfig):Observable<Response> {
    let blob = new Blob([JSON.stringify(config)]);

    let headers = new Headers();
    headers.append('Content-Type', 'application/octet-stream');
    let options: RequestOptions = new RequestOptions({headers: headers});

    let obs = this.http.post(
      this.urlMedia, blob, options
    );

    return obs;

  }

  /**
   * load config using the media api :
   * load ~/.config/oar-skylight.json
   */
  loadConfig() {

    let obs = this.http.get(
      this.urlMedia
    ).subscribe(
      res => this.setConfigFromString(res.text()),
      err => console.log(err)
    );

  }

  /**
   *
   * @param str
   */
  setConfigFromString(str :string) {
    if(str) {
      let config = new UserConfig().deserialize(JSON.parse(str));
      if(config) {
        this.config.next(config);
      }
    }
  }

  getConfigObs() : Observable<UserConfig> {
    return this.config.asObservable();
  }

  getUserConfig() :UserConfig {
    return this.config.getValue();
  }

  saveRequest() {


  }

  addJobDetailsProperty(property:string) {
    this.config.next(this.getUserConfig().addJobDetailProperty(property));
  }

}
