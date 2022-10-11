import { Directive } from '@angular/core';
import { CalendarComponent } from '@progress/kendo-angular-dateinputs';

@Directive({
  selector: 'kendo-calendar[as-company-calendar]'
})
export class AscompanycalendarDirective {

  constructor(private kendoCalendar: CalendarComponent) {
    this.kendoCalendar.value = new Date();
    this.kendoCalendar.navigation = false;
   }

}
