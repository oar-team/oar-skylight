import { Pipe, PipeTransform } from "@angular/core";

/**
 * Convert bytes into largest possible unit.
 * 
 * Takes an precision argument that defaults to 2.
 * 
 * [Credit to JonCatmull]{@link https://gist.github.com/JonCatmull/ecdf9441aaa37336d9ae2c7f9cb7289a}
 * 
 * __Usage__:
 * @example
 *   bytes | fileSize:precision
 * @example
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
 * 
 * 
 * 
 * @export
 * @class FileSizePipe
 * @implements {PipeTransform}
 */
@Pipe({ name: "fileSize" })
export class FileSizePipe implements PipeTransform {
  private units = ["bytes", "KB", "MB", "GB", "TB", "PB"];

  transform(bytes: number = 0, precision: number = 1): string {
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return "?";

    let unit = 0;

    while (bytes >= 1024) {
      bytes /= 1024;
      unit++;
    }

    if (typeof bytes.toFixed !== "undefined") {
      return bytes.toFixed(+precision) + " " + this.units[unit];
    } else {
      return null;
    }
  }
}
