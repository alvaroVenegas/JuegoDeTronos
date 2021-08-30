import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg1: string): any {

    let valueFind: any = [];

    if (!arg1) {
      return value;
    } else {
      valueFind = value.filter(function (item) {
        return item.name.toLowerCase().includes(arg1.toLowerCase())
      })
      return valueFind;
    }
  }
}
