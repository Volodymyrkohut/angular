import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multy',
  // pure: false, виключить оптимізацію пайпу. (в випадку з фільтрацією )
})
export class MultyPipe implements PipeTransform {

  transform(value: number, pow: number = 1, ...args: unknown[]): unknown {
    return value * pow;
  }

}
