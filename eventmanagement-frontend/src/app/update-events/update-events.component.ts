import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Event} from '../event'
@Component({
  selector: 'update-events',
  templateUrl: './update-events.component.html',
  styleUrls: ['./update-events.component.css']
})
export class UpdateEventsComponent implements OnInit {

  constructor(public service:AdminService) { }
  event_id:number;
  event:Event[];
  event_new:Event;
  ngOnInit(): void {
  }

  UpdateEvent(){
console.log("Updating event data with new details");
this.service.updateEventWithNewDetails(this.event_id,this.event_new)
  }
  fetchEvent(){
    console.log("Details to be fetched for the event "+this.event_id);
//this.service.fetchDetailsforUpdate(this.event_id);
this.service.fetchDetailsforUpdate(this.event_id).subscribe( data =>{
      this.event = data.map(temp => {
       this.event_new= new Event(temp.eventId,temp.eventName,temp.eventDesc,temp.eventCategory,temp.eventVenue,temp.eventDate, temp.regisCount,temp.eventStatus,temp.organizerId);
       console.log(this.event_new);
       return this.event_new;
    });
  })

  }
  
}
