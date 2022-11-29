import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serch'
})
export class SerchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
