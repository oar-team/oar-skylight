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
 * Config to store properties.
 * This class should be serializable
 */
export class UserConfig {
  // stored Job properties
  private _jobDetailProperties: string[];

  // stored resource properties
  private _resourceDetailProperties: string[];
  
  /**
   * Getter for stored job properties
   * 
   * @readonly
   * @type {string[]}
   * @memberof UserConfig
   */
  get jobDetailProperties(): string[] {
    return this._jobDetailProperties;
  }
  
  /**
   * Getter for stored resource properties
   * 
   * @readonly
   * @type {string[]}
   * @memberof UserConfig
   */
  get resourceDetailProperties(): string[] {
    return this._resourceDetailProperties;
  }

  constructor() {
    this._jobDetailProperties = [];
    this._resourceDetailProperties = [];
  }
  
  /**
   * When retrieve from the server
   * 
   * @param {*} input 
   * @returns 
   * @memberof UserConfig
   */
  deserialize(input: any) {
    this._jobDetailProperties = input._jobDetailProperties;
    this._resourceDetailProperties = input._resourceDetailProperties;
    return this;
  }
  
  /**
   * Add key to properties
   * 
   * @param {string} property 
   * @returns {UserConfig} 
   * @memberof UserConfig
   */
  addJobDetailProperty(property: string): UserConfig {
    this.jobDetailProperties.push(property);
    return this;
  }
  
  /**
   * Unset job key from job stored properties
   * 
   * @param {string} property 
   * @returns {UserConfig} 
   * @memberof UserConfig
   */
  unsetProperty(property: string): UserConfig {
    const keyIndex = this.jobDetailProperties.indexOf(property);

    if (keyIndex >= 0) {
      this.jobDetailProperties.splice(keyIndex, 1);
    }
    return this;
  }
  
  /**
   * Add property to stored resource properties
   * 
   * @param {string} property 
   * @returns {UserConfig} 
   * @memberof UserConfig
   */
  addResourceDetailProperty(property: string): UserConfig {
    this._resourceDetailProperties.push(property);
    return this;
  }
  
  /**
   * Unset property to stored resource properties
   * 
   * @param {string} property 
   * @returns {UserConfig} 
   * @memberof UserConfig
   */
  unsetResourceProperty(property: string): UserConfig {
    const keyIndex = this._resourceDetailProperties.indexOf(property);

    if (keyIndex >= 0) {
      this._resourceDetailProperties.splice(keyIndex, 1);
    }
    return this;
  }
}
