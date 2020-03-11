import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Event } from '../event';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[]=[]
  constructor(private service: AdminService) { }

  ngOnInit(): void {

    this.service.events()
    .subscribe( data =>{
      this.events = data.map(temp => {
        return new Event(temp.eventId,temp.eventName,temp.eventDesc,temp.eventCategory,temp.eventVenue,temp.eventDate, temp.regisCount,temp.eventStatus,temp.organizerId);
      })
    });
  }

}
