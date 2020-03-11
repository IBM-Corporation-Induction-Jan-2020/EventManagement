import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { AdminService } from '../admin.service';
@Component({
  selector: 'display-requested-pending-events',
  templateUrl: './display-requested-pending-events.component.html',
  styleUrls: ['./display-requested-pending-events.component.css']
})
export class DisplayRequestedPendingEventsComponent implements OnInit {
  events: Event[]=[];

  constructor(public service:AdminService) { }

  ngOnInit(): void {

    
   this.service.pendingRequestedEvents()
    .subscribe( data =>{
      this.events = data.map(temp => {
        console.log(temp)
        return new Event(temp.eventId,temp.eventName,temp.eventDesc,temp.eventCategory,temp.eventVenue,temp.eventDate, temp.regisCount,temp.eventStatus,temp.organizerId);
     
    });
  })
  console.log(this.events[0]);
  }

}
