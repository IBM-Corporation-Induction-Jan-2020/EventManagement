export class Event {
    constructor(public eventId:number,public eventName:string, public eventDesc:string,public eventCategory:string,
        public eventVenue:string,public eventDate:string, public regisCount:number, public eventStatus:boolean, 
        public organizerId:String)
        {
            
        }
}
