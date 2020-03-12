import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { DisplayCurrentEventDetailsComponent } from './display-current-event-details/display-current-event-details.component';
import { EventsComponent } from './events/events.component';
import { UpdateEventsComponent } from './update-events/update-events.component';
import { DisplayRequestedPendingEventsComponent } from './display-requested-pending-events/display-requested-pending-events.component';
import { DeleteEventsComponent } from './delete-events/delete-events.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { DisplayUpcomingEventDetailsComponent } from './display-upcoming-event-details/display-upcoming-event-details.component';
import { DisplayCompletedEventDetailsComponent } from './display-completed-event-details/display-completed-event-details.component';
import { AdminContactusComponent } from './admin-contactus/admin-contactus.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DisplayUnrelatedEventsComponent } from './display-unrelated-events/display-unrelated-events.component';
import { HostEventComponent } from './host-event/host-event.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DisplayCurrentEventDetailsComponent,
    DisplayRequestedPendingEventsComponent,
    AddEventsComponent,
    UpdateEventsComponent,
    DeleteEventsComponent,
    EventsComponent,
    DisplayUpcomingEventDetailsComponent,
    DisplayCompletedEventDetailsComponent,
    AdminContactusComponent,
    EventDisplayComponent,
    LoginDetailsComponent,
    EmployeeRegisterComponent,
    EventDetailsComponent,
    DisplayUnrelatedEventsComponent,
    HostEventComponent,
    ContactComponent,
    AboutComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
