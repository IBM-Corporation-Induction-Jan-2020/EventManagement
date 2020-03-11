import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { DisplayRequestedPendingEventsComponent } from '../display-requested-pending-events/display-requested-pending-events.component';
import { EventsComponent } from '../events/events.component';
import { AddEventsComponent } from '../add-events/add-events.component';
import { UpdateEventsComponent } from '../update-events/update-events.component';
import { DeleteEventsComponent } from '../delete-events/delete-events.component';
import { DisplayUpcomingEventDetailsComponent } from '../display-upcoming-event-details/display-upcoming-event-details.component';
import { DisplayCompletedEventDetailsComponent } from '../display-completed-event-details/display-completed-event-details.component';
import { AdminContactusComponent } from '../admin-contactus/admin-contactus.component';
import { EventDisplayComponent } from '../event-display/event-display.component';
import { LoginDetailsComponent } from '../login-details/login-details.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { EmployeeRegisterComponent } from '../employee-register/employee-register.component';
import { HostEventComponent } from '../host-event/host-event.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
// import { AddEventsComponent } from '../add-events/add-events.component';
// import { UpdateEventsComponent } from '../update-events/update-events.component';
// import { DeleteEventsComponent } from '../delete-events/delete-events.component';
// import { DisplayRequestedPendingEventsComponent } from '../display-requested-pending-events/display-requested-pending-events.component';
// import { EventsComponent } from '../events/events.component';


const adminRoutes: Routes=[

  {path:"admin",component:AdminComponent},
  {path:"events",component: EventsComponent},
  {path:"upcomingevents",component:DisplayUpcomingEventDetailsComponent},
  {path:"completedevents",component:DisplayCompletedEventDetailsComponent},
   {path:"pendingevents",component:  DisplayRequestedPendingEventsComponent},
  {path:"addevents",component:  AddEventsComponent},
  {path:"updateevents",component:  UpdateEventsComponent},
  {path:"deleteevents",component:  DeleteEventsComponent},

  {path:"admincontactus",component:AdminContactusComponent},
  {path:"userevents", component:EventDisplayComponent},
  {path:"Login", component:LoginDetailsComponent },
  {path:"Details/:evId", component:EventDetailsComponent},
  {path:"Register", component: EmployeeRegisterComponent},
  {path:"hostevent",component: HostEventComponent},
  {path:"contact", component: ContactComponent},
  {path:"about", component: AboutComponent},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"", redirectTo:"userevents",pathMatch:"full"},
 // {path:"",redirectTo:"events", pathMatch:'full'}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoutes)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
