import { Directive } from '@angular/core';
import { CalendarComponent } from '@progress/kendo-angular-dateinputs';

@Directive({
  selector: 'kendo-calendar'
})
export class CurrentdateDirective {

  constructor(private kendoCalendar: CalendarComponent) {
    this.kendoCalendar.value = new Date();
   }

}
