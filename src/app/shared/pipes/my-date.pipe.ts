import { Pipe, PipeTransform } from '@angular/core';
import {isDate} from 'util';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(dateString: string): any {
    if (dateString) {
      if (!isNaN.call(null, new Date(dateString))) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pl-pl', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    }
    return '';
  }

}
