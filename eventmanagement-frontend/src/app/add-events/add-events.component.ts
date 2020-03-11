import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { AdminService } from '../admin.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  eventForm: Event = new Event(0, "", "", "", "", "", 0, true, "");
  message: string = "Not successful"
  constructor(private service: AdminService,private router: Router) { }

  ngOnInit(): void {
    console.log('on init ..')
  }

  createEvent() {
    this.service.createEvents(this.eventForm).subscribe(response => { this.message = response; console.log(response); if(response.localeCompare('failure')){
      this.router.navigateByUrl("/admin")}
      else{
        this.router.navigateByUrl("/addevents")
     };
    console.log("from add events " + this.message)

  })
  }

}
