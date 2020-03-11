import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  bookevent(employee_id: string, login_event_id: number) {
    console.log("calling service to book event");
    return this.http.post<String>(`http://localhost:8080/bookEvent/${employee_id}/${login_event_id}`,{responseType:'text' as 'json'});


  }

  getEvent(eventId: number) {
    console.log("In get Event");
    return this.http.post<Event>(`http://localhost:8080/fetchEventofIdPassed/${eventId}`,{responseType:'text' as 'json'});

  }
  updateEventWithNewDetails(event_id: number, event_new: Event) {
      console.log("Updating with new values")
      console.log("Service is calling")
    return this.http.post<Event>(`http://localhost:8080/updateWithNewDetails/${event_id}`,event_new,{responseType:'text' as 'json'}).subscribe(response =>{ console.log(typeof(response))});

  }
 
  deleteEvent(event_id: number) {
    return this.http.post(`http://localhost:8080/deleteEvents/${event_id}`, null).subscribe(response => console.log(response));
 
    }
    fetchDetailsforUpdate(event_id:number)//:Observable<Event[]>
    {  console.log("Service is called");
      console.log(this.http.get<Event[]>(`http://localhost:8080/fetchEventDetailsForUpdate/${event_id}`));
   return this.http.get<Event[]>(`http://localhost:8080/fetchEventDetailsForUpdate/${event_id}`);
    }
  pendingRequestedEvents() {
    console.log("...Requsted pending Events....")

    return this.http.get<Event[]>('http://localhost:8080/fetchRequestedPendingEvents');
 
  }
  completedEvents() {
    console.log("...completed events....")

    return this.http.get<Event[]>('http://localhost:8080/fetchCompletedEvents');
  
  }
 events() {
    console.log("...completed events....")

    return this.http.get<Event[]>('http://localhost:8080/fetchEvents');
  
  }
  message:string="Event is not not inserted";
  constructor(private http: HttpClient) { }

  upcomingEvents() : Observable<Event[]>
  {
    console.log("...upcoming events....")

    return this.http.get<Event[]>('http://localhost:8080/fetchUpcomingEvents');
  }

  public createEvents(eventForm : Event):Observable<string>
  { 
    // let responseMsg: string;
    return  this.http.post<string>('http://localhost:8080/addEvents/',eventForm,{responseType:'text' as 'json'});
    //  return responseMsg;
  }

}
