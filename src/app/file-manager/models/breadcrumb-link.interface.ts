/**
 * Represente a link.
 * 
 * @export
 * @interface BreadcrumbLink
 */
export interface BreadcrumbLink {
  /**
   *  display name 
   * 
   * @type {string}
   * @memberof BreadcrumbLink
   */
  name: string;

  /**
   * URI link
   * 
   * @example 
   * /myfolder/
   * @type {string}
   * @memberof BreadcrumbLink
   */
  link: string;
}
