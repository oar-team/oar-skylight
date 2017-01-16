import { Pipe, PipeTransform } from '@angular/core';

/**
 * Custom pipe that return a list of key for each element.
 * 
 * __Usage :__
*     
      *ngFor="let entry of object | keys"

          {{ entry.key }}
          {{ entry.value}}

 */
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value:any, args:string[]) : any {
    let keys:any[] = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}