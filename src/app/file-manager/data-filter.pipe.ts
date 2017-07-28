import * as _ from "lodash";
import { Pipe, PipeTransform } from "@angular/core";

/**
 * Filter based on a name property. Used by FmComponent to filter a DataTable
 * 
 * @export
 * @class DataFilterPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => row.name.indexOf(query) > -1);
    }
    return array;
  }
}
