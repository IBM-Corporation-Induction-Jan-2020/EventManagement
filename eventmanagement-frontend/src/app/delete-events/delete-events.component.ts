import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Event} from '../event'
@Component({
  selector: 'delete-events',
  templateUrl: './delete-events.component.html',
  styleUrls: ['./delete-events.component.css']
})
export class DeleteEventsComponent implements OnInit {

  constructor(public service:AdminService) { }
  event_id:number;
  ngOnInit(): void {
  }
  deleteEvent(){
    console.log(this.event_id)
  return this.service.deleteEvent(this.event_id)
}
}