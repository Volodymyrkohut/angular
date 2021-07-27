import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(items: Array<any>, searchKey: string = '', searchString: string = '', ...args: unknown[]): unknown {
    if (!searchString.trim()) {
      return items
    }

    // @ts-ignore
    return items[searchKey].toLowerCase().includes(searchString.toLowerCase())

  }
}
