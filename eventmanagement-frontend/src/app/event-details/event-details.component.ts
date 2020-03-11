import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../employee-service';
import {Event} from '../event'
import { AdminService } from '../admin.service';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventId: number;
events:Event;
employee_id:string;
  login_event_id: number;
  message: String;
  success: String;
   constructor(private router:Router,private route:ActivatedRoute, private eventService:AdminService, private empService:EmployeeService) {

   this.route.params.subscribe(params => {
     this.eventId = params.evId;
   });
   console.log(this.eventId+"From here calling the service");
       this.eventService.getEvent(this.eventId)
      .subscribe( data =>{
        this.events = data;
      });
      //console.log(this.events.organizerId);
    
     //this.employees=this.empService.getEvent(this.eventId);
    }
    bookEvent()
    { console.log("msbc"+this.eventId) 
    console.log()
    this.employee_id="sushmatn@gmail.com";
    this.login_event_id=this.events.eventId;
    this.eventService.bookevent(this.employee_id,this.login_event_id).subscribe(response => {   this.message=response;
      console.log(response);
           this.router.navigateByUrl("/userevents")
        this.success="Registered successfullyy!!"
       // this.login_emp_id=this.employee.employee_id;
        //console.log("After navigating"+this.login_emp_id)
      } );
         console.log("Booking Eventt")
    }
   ngOnInit(): void {
  //  this.event=this.details[this.eventId-1]
  //    this.emp=this.employees[this.event.organizerId -1]
  }


}
