import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Event } from '../event';

@Component({
  selector: 'display-completed-event-details',
  templateUrl: './display-completed-event-details.component.html',
  styleUrls: ['./display-completed-event-details.component.css']
})
export class DisplayCompletedEventDetailsComponent implements OnInit {
  events: any;

  constructor(public service:AdminService) { }

  ngOnInit(): void {
    this.service.completedEvents()
    .subscribe( data =>{
      this.events = data.map(temp => {
        return new Event(temp.eventId,temp.eventName,temp.eventDesc,temp.eventCategory,temp.eventVenue,temp.eventDate, temp.regisCount,temp.eventStatus,temp.organizerId);
       })
    });
  }

}
