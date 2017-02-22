import {Injectable, HostListener} from '@angular/core';
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
  private urlConfig :string;
  constructor(private oarApiService: OarApiService,
              private http: Http) {
    this.urlConfig = '/~/.oar-skylight/config.json';
    this.urlMedia = this.oarApiService.urlMedia + this.urlConfig ;
    this.config = new BehaviorSubject(new UserConfig());

    this.loadConfig();


  }

  // TODO : Save Config on window close
  saveConfig(config :UserConfig):Observable<Response> {

    console.log(config);
    let blob = new Blob([JSON.stringify(config)]);
    console.log(blob);
    // Ajout de 'force' pour enregistré le fichier
    let urlMediaForce = this.oarApiService.urlMedia + '/force' + this.urlConfig ;

    let headers = new Headers();
    headers.append('Content-Type', 'application/octet-stream');
    let options: RequestOptions = new RequestOptions({headers: headers});

    let obs = this.http.post(
      urlMediaForce, blob, options
    );

    obs.subscribe(
      (val) => console.log(val),
      (err) => console.log(err)
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
    return obs;
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

  addJobDetailsProperty(property:string) {
    this.config.next(this.getUserConfig().addJobDetailProperty(property));
  }

}
