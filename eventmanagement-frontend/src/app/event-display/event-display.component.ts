import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Event} from '../event'

@Component({
  selector: 'event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  allEvents: Event[]=[]
  constructor(private eventService: AdminService) { }


  ngOnInit(): void {
    //this.allEvents= this.eventService.events().subscribe
    this.eventService.events()
    .subscribe( data =>{
      this.allEvents = data.map(temp => {
        return new Event(temp.eventId,temp.eventName,temp.eventDesc,temp.eventCategory,temp.eventVenue,temp.eventDate, temp.regisCount,temp.eventStatus,temp.organizerId);
      })
    });
    console.log(this.allEvents)
  }
}
