import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presenceState'
})
export class PresenceStatePipe implements PipeTransform {

  transform(presenceState: boolean): string {
    if (presenceState) {
      return 'Présent';
    } else {
      return 'Absent';
    }
  }

}
