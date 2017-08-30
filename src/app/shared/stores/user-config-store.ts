import { AuthenticationService } from './../services/auth/authentification.service';
import { Injectable, HostListener } from '@angular/core';
import { OarApiService } from '../services/oar-api';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserConfig } from './model/user-config';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

/**
 *   This store handle config states.
 * 
 *   more about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
@Injectable()
export class UserConfigStore {

  // Subject that notify component of Config changes
  private config: BehaviorSubject<UserConfig>;

  // Media url
  private urlMedia: string;

  // url Config
  private urlConfig: string;
  constructor(private oarApiService: OarApiService,
    private auth: AuthenticationService,
    private http: Http) {
    this.urlConfig = '/~/.oar-skylight/config.json';
    this.urlMedia = this.oarApiService.urlMedia + this.urlConfig;
    this.config = new BehaviorSubject(new UserConfig());

    this.loadConfig();

    this.config.subscribe(
      change => this.saveConfig(change)
    )


  }

  /**
   * Save config on every changes happening
   * 
   * @param {UserConfig} config 
   * @returns {Observable<Response>} 
   * @memberof UserConfigStore
   */
  saveConfig(config: UserConfig): Observable<Response> {

    console.log(config);
    let blob = new Blob([JSON.stringify(config)]);
    console.log(blob);
    // Ajout de 'force' pour enregistré le fichier
    let urlMediaForce = this.oarApiService.urlMedia + '/force' + this.urlConfig;

    let headers = new Headers();
    headers.append('Content-Type', 'application/octet-stream');
    headers.append('Authorization', 'Basic ' + btoa(this.auth.getUser().getUsername() + ':' + this.auth.getUser().getPassword()));


    let options: RequestOptions = new RequestOptions({ headers: headers });

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
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.auth.getUser().getUsername() + ':' + this.auth.getUser().getPassword()));

    let obs = this.http.get(
      this.urlMedia, {headers: headers}
    ).subscribe(
      res => this.setConfigFromString(res.text()),
      err => this.saveConfig(new UserConfig()) // Create cofig file if not found
      );
    return obs;
  }

  /**
   *
   * @param str
   */
  setConfigFromString(str: string) {
    if (str) {
      let config = new UserConfig().deserialize(JSON.parse(str));
      if (config) {
        this.config.next(config);
      }
    }
  }

  
  /**
   * Getter for Config Observable
   * 
   * @returns {Observable<UserConfig>} 
   * @memberof UserConfigStore
   */
  getConfigObs(): Observable<UserConfig> {
    return this.config.asObservable();
  }
  
  /**
   * Get current config state
   * 
   * @returns {UserConfig} 
   * @memberof UserConfigStore
   */
  getUserConfig(): UserConfig {
    return this.config.getValue();
  }
  
  // Change config
  addJobDetailsProperty(property: string) {
    this.config.next(this.getUserConfig().addJobDetailProperty(property));
  }

  // Change config
  unsetJobDetailsProperty(property: string) {
    const config =  this.getUserConfig();
    this.config.next(config.unsetProperty(property));
  }


  // Change config
  addResourceDetailsProperty(property: string) {
    this.config.next(this.getUserConfig().addResourceDetailProperty(property));
  }

  // Change config
  unsetResourceDetailsProperty(property: string) {
    const config =  this.getUserConfig();
    this.config.next(config.unsetResourceProperty(property));
  }



}
