import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'host-event',
  templateUrl: './host-event.component.html',
  styleUrls: ['./host-event.component.css']
})
export class HostEventComponent implements OnInit {

  eventForm: Event = new Event(0, "", "", "", "", "", 0, true, "");
  message: string = "Not successful"

  constructor(private service: AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  createEvent() {
    this.service.createEvents(this.eventForm).subscribe(response => { this.message = response; console.log(response); if(response.localeCompare('failure')){
      this.router.navigateByUrl("/userevents")
    }
      else{
        this.router.navigateByUrl("/hostevent")
     };
     });
    console.log("from add events " + this.message)

  }

}
