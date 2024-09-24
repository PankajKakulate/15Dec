import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pankajPipe',
  standalone: true
})
export class PankajPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
