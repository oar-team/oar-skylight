/**
 * Interface for a remote item. This item can be a file or a directory (type property)
 * type value is either 'f' or 'd'
 * 
 * @export
 * @interface FmItem
 */
export interface FmItem {
  name: string;
  mtime: number;
  type: string;
  mode: number;
  size?: number;
}
