import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'displaying-selected-event',
  templateUrl: './displaying-selected-event.component.html',
  styleUrls: ['./displaying-selected-event.component.css']
})
export class DisplayingSelectedEventComponent implements OnInit {
  @Input('eventDetails') event: Event
  constructor() { }

  ngOnInit(): void {
  }

}
