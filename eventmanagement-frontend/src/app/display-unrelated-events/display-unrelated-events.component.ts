import { Component, OnInit, Input} from '@angular/core';
import {Event} from '../event'

@Component({
  selector: 'display-unrelated-events',
  templateUrl: './display-unrelated-events.component.html',
  styleUrls: ['./display-unrelated-events.component.css']
})
export class DisplayUnrelatedEventsComponent implements OnInit {

  @Input('eventDetails') event: Event

  constructor() { }

  ngOnInit(): void {
    
  }


}
