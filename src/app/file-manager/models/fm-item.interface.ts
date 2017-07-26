/**
 * Interface for a remote item. This item can be a file or a directory (type property)
 * 
 * 
 * @export
 * @interface FmItem
 */
export interface FmItem {
  /**
   * Display name
   * 
   * @type {string}
   * @memberof FmItem
   */
  name: string;
  /**
   * Timestamp
   * 
   * @type {number}
   * @memberof FmItem
   */
  mtime: number;
  /**
   * Type of item : Folder or Directory
   * 
   * type value is either 'f' or 'd'
   * 
   * @type {string}
   * @memberof FmItem
   */
  type: string;

  /**
   * Unix mode
   * 
   * @type {number}
   * @memberof FmItem
   */
  mode: number;
  /**
   * octet size
   * 
   * @type {number}
   * @memberof FmItem
   */
  size?: number;
}
