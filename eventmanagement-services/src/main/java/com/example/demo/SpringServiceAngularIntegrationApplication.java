package com.example.demo;

import java.io.IOException;
import java.sql.Date;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;



@SpringBootApplication
@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class SpringServiceAngularIntegrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringServiceAngularIntegrationApplication.class, args);
	}


	@RequestMapping("/fetchEvents")
	List<Event> listEvents() throws ParseException
	{
		System.out.println("Called our Event service......");
		AccessSqlDatabase sql=new AccessSqlDatabase();
		
		return sql.fetchEvents();
		
		}
	@PostMapping("/login")
	public String logincheck(@RequestBody Employee employee)
	{
		System.out.println(employee);
		return new AccessSqlDatabase().userlogin(employee);
	}
	@PostMapping("/addEvents")
    public String addEvent(@RequestBody Event event){
          System.out.println(event);
    //        SimpleDateFormat dateformat=new SimpleDateFormat("yyyy-mm-dd");
//        Date date=dateformat.parse(event.eventDate); 
     return new AccessSqlDatabase().insertEvent(event);
 }
	@PostMapping("/addemployee")
	   public String addEmployee(@RequestBody Employee employee){
        System.out.println(employee);
  //        SimpleDateFormat dateformat=new SimpleDateFormat("yyyy-mm-dd");
//      Date date=dateformat.parse(event.eventDate); 
   return new AccessSqlDatabase().insertEmployee(employee);
}
	@RequestMapping("/bookEvent/{employee_id}/{event_id}")
	public String bookEvent(@PathVariable("employee_id") String employee_id, @PathVariable("event_id") int event_id)
	{   
		System.out.println("Booking event for "+event_id+"Employee Id :"+employee_id);
    return new AccessSqlDatabase().bookEvent(event_id,employee_id);
		
	}
	@RequestMapping("/deleteEvents/{event_id}")
	public String deleteEvent(@PathVariable("event_id") int event_id)
	{   System.out.println("Delete service is calles to delete event "+event_id);
		return new AccessSqlDatabase().deleteEvent(event_id);
		
	}
	@RequestMapping("/fetchEventofIdPassed/{event_id}")
	public Event fetchEventObject(@PathVariable("event_id") int event_id)
	{   System.out.println("fetching event object of "+event_id);
		return new AccessSqlDatabase().fetchEventObject(event_id);
		
	}
	@RequestMapping("/fetchEventDetailsForUpdate/{event_id}")
	public List<Event> fetchEventDetailsForUpdation(@PathVariable("event_id") int event_id)
	{
		System.out.println("Fetching details for updation");
		return new AccessSqlDatabase().fetchDetailsForUpdation(event_id);
	}
	@RequestMapping("/updateWithNewDetails/{event_id}")
	public String updatingWithNewDetails(@PathVariable("event_id") int event_id,@RequestBody Event event_new)
	{
		System.out.println("Service Called to update database with new details");
		return new AccessSqlDatabase().updateDbWithNewDetails(event_id,event_new);
	}
	@RequestMapping("/fetchUpcomingEvents")
	public List<Event> fetchUpcomingListOfEvents()
	{
		
		System.out.println("Called upcoming events service");
		return new AccessSqlDatabase().fetchUpcomingEvents();
		
	}
	@RequestMapping ("/fetchCompletedEvents")
	public List<Event> fetchCompletedEvents()
	{
		return new AccessSqlDatabase().fetchCompletedEvents();
		
	}
	@RequestMapping("/fetchRequestedPendingEvents")
	public List<Event> fetchRequestedPendingEvents()
	{ System.out.println("Called pending requests service");
		return new AccessSqlDatabase().fetctRequestedPendingEvents();
	}

	
}

class Event
{
	int eventId;
	String eventName;
	String eventDesc;
	String eventCategory;
	String eventVenue;
	Date eventDate;
	int regisCount;
	boolean eventStatus;
    String organizerId;
	java.util.Date date;
	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Event(int eventId, String eventName, String eventDesc, String eventCategory, String eventVenue,
			String string, int regisCount, boolean eventStatus, String organizerId) throws ParseException {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.eventDesc = eventDesc;
		this.eventCategory = eventCategory;
		this.eventVenue = eventVenue;
		date = new SimpleDateFormat("dd/MM/yyyy").parse(string);
		this.regisCount = regisCount;
		this.eventStatus = eventStatus;
		this.organizerId = organizerId;
	}
	public int getEventId() {
		return eventId;
	}
	public void setEventId(int eventId) {
		this.eventId = eventId;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getEventDesc() {
		return eventDesc;
	}
	public void setEventDesc(String eventDesc) {
		this.eventDesc = eventDesc;
	}
	public String getEventCategory() {
		return eventCategory;
	}
	public void setEventCategory(String eventCategory) {
		this.eventCategory = eventCategory;
	}
	public String getEventVenue() {
		return eventVenue;
	}
	public void setEventVenue(String eventVenue) {
		this.eventVenue = eventVenue;
	}
	public Date getEventDate() {
		return (Date) eventDate;
	}
	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}
	public int getRegisCount() {
		return regisCount;
	}
	public void setRegisCount(int regisCount) {
		this.regisCount = regisCount;
	}
	public boolean isEventStatus() {
		return eventStatus;
	}
	public void setEventStatus(boolean eventStatus) {
		this.eventStatus = eventStatus;
	}
	public String getOrganizerId() {
		return organizerId;
	}
	public void setOrganizerId(String organizerId) {
		this.organizerId = organizerId;
	}
	@Override
	public String toString() {
		return "event [eventId=" + eventId + ", eventName=" + eventName + ", eventDesc=" + eventDesc
				+ ", eventCategory=" + eventCategory + ", eventVenue=" + eventVenue + ", eventDate=" + eventDate
				+ ", regisCount=" + regisCount + ", eventStatus=" + eventStatus + ", organizerId=" + organizerId + "]";
	}
    
    
}
class Employee{
	String employee_id;
	String password;
	String employee_name;
	String address;
	String phone_number;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(String employee_id, String password, String employee_name, String address, String phone_number) {
		super();
		this.employee_id = employee_id;
		this.password = password;
		this.employee_name = employee_name;
		this.address = address;
		this.phone_number = phone_number;
	}
	@Override
	public String toString() {
		return "Employee [employee_id=" + employee_id + ", password=" + password + ", employee_name=" + employee_name
				+ ", address=" + address + ", phone_number=" + phone_number + "]";
	}
	public String getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(String employee_id) {
		this.employee_id = employee_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmployee_name() {
		return employee_name;
	}
	public void setEmployee_name(String employee_name) {
		this.employee_name = employee_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	
}