import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventsArray: Event[]=[]
  constructor(){}
 
  staticEvents():Event[]{
    this.eventsArray = []
    this.eventsArray.push(new Event(1,'COD','COD PvP','Games','E1 Auditorium',"2020/02/10",10,true,1 ,"https://timesofindia.indiatimes.com/thumb/msid-68671060,width-800,height-600,resizemode-4/68671060.jpg"));
    this.eventsArray.push(new Event(2,'PotPuri','movies','Fun','E2 Auditorium',"2020/02/11",20,true,2,"https://timesofindia.indiatimes.com/thumb/msid-68671060,width-800,height-600,resizemode-4/68671060.jpg"));
    this.eventsArray.push(new Event(3,'Quiz','General','Fun','E3 Auditorium',"2020/02/12",15,true,3,"https://timesofindia.indiatimes.com/thumb/msid-68671060,width-800,height-600,resizemode-4/68671060.jpg"));
    this.eventsArray.push(new Event(4,'Pubg','Pubg PvP','Games','E4 Auditorium',"2020/02/13",12,false,4,"https://timesofindia.indiatimes.com/thumb/msid-68671060,width-800,height-600,resizemode-4/68671060.jpg"));
    this.eventsArray.push(new Event(5,'DumbCharades','Entertainment','Fun','E5 Auditorium',"2020/02/14",17,true,5,"https://timesofindia.indiatimes.com/thumb/msid-68671060,width-800,height-600,resizemode-4/68671060.jpg"));
    return this.eventsArray
  }
}
