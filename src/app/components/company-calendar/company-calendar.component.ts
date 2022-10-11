import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-calendar',
  templateUrl: './company-calendar.component.html',
  styleUrls: ['./company-calendar.component.css']
})
export class CompanyCalendarComponent  {

  @Input() currentDate: Date = new Date();
  @Input() showNavigation = false;
}
