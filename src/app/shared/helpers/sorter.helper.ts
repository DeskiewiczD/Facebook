import {map} from 'rxjs/operators';

type ArrayItem<T extends Array<any>> = T[0];

export function sortBy<T extends Array<any>>(collection: T, mapTo: (item: ArrayItem<T>) => any) {
  return collection.sort((item1, item2) => {
    const date1 = mapTo(item1);
    const date2 = mapTo(item2);
    if (date1 < date2) {
      return 1;
    } else if (date1 > date2) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function sortByOperator<T extends Array<any>>(key) {
  return map((list: T) => {
    return sortBy<T>(list, (item: ArrayItem<T>) => {
      return new Date(item[key]);
    });
  });
}
