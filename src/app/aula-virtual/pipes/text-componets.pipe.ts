import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textComponets',
})
export class TextComponetsPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace('/cuv/', '/');
  }
}
