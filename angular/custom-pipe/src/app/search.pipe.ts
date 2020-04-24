import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(messages: string[], searchQuery: string): string[] {
    const normalize = (line: string) => line.trim().toLowerCase()
    return messages.filter(
      message => normalize(searchQuery) === "" ||
        normalize(message).includes(normalize(searchQuery))
    );
  }
}
