import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';


@Component({
  selector: 'display-current-event-details',
  templateUrl: './display-current-event-details.component.html',
  styleUrls: ['./display-current-event-details.component.css']
})
export class DisplayCurrentEventDetailsComponent implements OnInit {

  @Input('eventDetails') event: Event
  constructor() {
   }

  ngOnInit(): void {
  }

}
