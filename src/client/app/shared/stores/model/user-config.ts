/**
 * Created by bouguerr on 16/02/17.
 */


/**
 *  About json to object in typescript :
 *    http://stackoverflow.com/a/22886730 : option 4
 */
interface Serializable<T> {
  deserialize(input: Object): T;
}



/**
 * TODO : Description UserConfig
 */
export class UserConfig {

  private _jobDetailProperties:string[];



  get jobDetailProperties(): string[] {
    return this._jobDetailProperties;
  }


  constructor() {
    this._jobDetailProperties = [];
  }


  deserialize(input :any) {
    this._jobDetailProperties = input.jobDetailProperties;

    return this;
  }

  addJobDetailProperty(property:string):UserConfig {
    this.jobDetailProperties.push(property);
    return this;
  }
}
