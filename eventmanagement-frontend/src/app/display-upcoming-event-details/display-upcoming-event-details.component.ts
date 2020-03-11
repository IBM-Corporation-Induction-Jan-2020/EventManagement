import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Event } from '../event';
@Component({
  selector: 'display-upcoming-event-details',
  templateUrl: './display-upcoming-event-details.component.html',
  styleUrls: ['./display-upcoming-event-details.component.css']
})
export class DisplayUpcomingEventDetailsComponent implements OnInit {
  events: Event[]=[];

  constructor(public service:AdminService) { }

  ngOnInit(): void {
    this.service.upcomingEvents()
    .subscribe( data =>{
      this.events = data.map(temp => {
        return new Event(temp.eventId,temp.eventName,temp.eventDesc,temp.eventCategory,temp.eventVenue,temp.eventDate, temp.regisCount,temp.eventStatus,temp.organizerId);
     
    });
  })
}

}
