import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyCalendarComponent } from './components/company-calendar/company-calendar.component';
import { CurrentdateDirective } from './directives/currentdate.directive';
import { AscompanycalendarDirective } from './directives/ascompanycalendar.directive';
import { AscompanycalendarWithNavigationDirective } from './directives/ascompanycalendar-with-navigation.directive';



@NgModule({
  declarations: [
    AppComponent,
    CompanyCalendarComponent,
    CurrentdateDirective,
    AscompanycalendarDirective,
    AscompanycalendarWithNavigationDirective
  ],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
