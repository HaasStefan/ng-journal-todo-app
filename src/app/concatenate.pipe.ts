import { Pipe, PipeTransform } from '@angular/core';
import { concatenate } from 'ng-journal-todo-utils';

@Pipe({
  name: 'concatenate',
  standalone: true,
})
export class ConcatenatePipe implements PipeTransform {
  transform(value1: string, value2: string): string {
    return concatenate(value1, value2);
  }
}
