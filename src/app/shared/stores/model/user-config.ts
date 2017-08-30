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
  private _jobDetailProperties: string[];
  private _resourceDetailProperties: string[];

  get jobDetailProperties(): string[] {
    return this._jobDetailProperties;
  }

  get resourceDetailProperties(): string[] {
    return this._resourceDetailProperties;
  }

  constructor() {
    this._jobDetailProperties = [];
    this._resourceDetailProperties = [];
  }

  deserialize(input: any) {
    this._jobDetailProperties = input._jobDetailProperties;
    this._resourceDetailProperties = input._resourceDetailProperties;
    return this;
  }

  addJobDetailProperty(property: string): UserConfig {
    this.jobDetailProperties.push(property);
    return this;
  }

  unsetProperty(property: string): UserConfig {
    const keyIndex = this.jobDetailProperties.indexOf(property);

    if (keyIndex >= 0) {
      this.jobDetailProperties.splice(keyIndex, 1);
    }
    return this;
  }

  addResourceDetailProperty(property: string): UserConfig {
    this._resourceDetailProperties.push(property);
    return this;
  }

  unsetResourceProperty(property: string): UserConfig {
    const keyIndex = this._resourceDetailProperties.indexOf(property);

    if (keyIndex >= 0) {
      this._resourceDetailProperties.splice(keyIndex, 1);
    }
    return this;
  }
}
