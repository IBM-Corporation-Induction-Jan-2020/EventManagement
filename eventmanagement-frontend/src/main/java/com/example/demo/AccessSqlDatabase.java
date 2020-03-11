package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

public class AccessSqlDatabase {

	List<Event> fetchEvents() {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);
		return jtemplate.query("select * from events where is_active=true", new Mapper());
	}

	String insertEvent(Event event) {
		
		ApplicationContext ac = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ac.getBean(JdbcTemplate.class);

		Object[] param = new Object[] { event.organizerId};

		
		String sqlQ= "SELECT count(*) FROM employee WHERE employee_id =?";
		int UserCount = jtemplate.queryForObject(sqlQ, param, Integer.class);
		if (UserCount == 0)
			return "failure";
		
		KeyHolder keyHolder = new GeneratedKeyHolder();
		//ApplicationContext ac = new AnnotationConfigApplicationContext(SQLConfig.class);
		//JdbcTemplate jtemplate = ac.getBean(JdbcTemplate.class);
		// Object[] params = new Object[]
		// {event.eventName,event.eventDesc,event.eventCategory,event.eventVenue,event.eventDate,0,event.organizerId,true};
		String sql = "INSERT INTO events(event_name,event_description,event_category,event_venue,event_date,eventnumber_of_registrations,organizer_id,is_active) VALUES (?,?,?,?,?,?,?,?);";
		Connection con;
		jtemplate.update(connection -> {
			PreparedStatement ps = (PreparedStatement) connection.prepareStatement(sql,
					Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, event.eventName);
			ps.setString(2, event.eventDesc);
			ps.setString(3, event.eventCategory);
			ps.setString(4, event.eventVenue);
			ps.setDate(5, event.eventDate);
			ps.setInt(6, event.regisCount);
			ps.setString(7, event.organizerId);			
			ps.setBoolean(8, event.eventStatus);
			return ps;
		}, keyHolder);
		System.out.println("Passenger Data inserted successfully!!!");
		return "Event created successfully with id: " + (long) keyHolder.getKey();
	}

	public List<Event> fetchUpcomingEvents() {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);
		return jtemplate.query(
				"select * from events where event_date>=CAST(CURRENT_TIMESTAMP AS DATE) and is_active=true",
				new Mapper());

	}

	public List<Event> fetchCompletedEvents() {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);
		return jtemplate.query(
				"select * from events where event_date<CAST(CURRENT_TIMESTAMP AS DATE) and is_active=true",
				new Mapper());
	}

	public List<Event> fetctRequestedPendingEvents() {

		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);
		return jtemplate.query("select * from events where is_active=false", new Mapper());

	}

	public void storeImage(byte[] file) {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);

		String sql = "INSERT INTO image_store(image_id,image) VALUES (?,?);";
		Connection con;
		jtemplate.update(connection -> {
			PreparedStatement ps = (PreparedStatement) connection.prepareStatement(sql,
					Statement.RETURN_GENERATED_KEYS);
			ps.setInt(1, 1);
			ps.setBytes(2, file);
			;

			return ps;
		});
		System.out.println("Event Data inserted successfully!!!");
	}

	public List<Image> getImage(int imageName) {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);
		Object[] params = new Object[] { imageName };
		List<Image> images = jtemplate.query("select * from image_store where image_id=?", params,

				new RowMapper<Image>() {
					@Override
					public Image mapRow(ResultSet rs, int rowNum) throws SQLException {
						Image image = new Image();
						image.setImage_id(rs.getInt("image_id"));
						image.setImage(rs.getBytes("image"));

						return image;

					}
				});
		return images;

	}

	public String deleteEvent(int event_id) {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);

		String sql = "delete from events where event_id=?";
		Connection con;
		jtemplate.update(connection -> {
			PreparedStatement ps = (PreparedStatement) connection.prepareStatement(sql);
			ps.setInt(1, event_id);
			return ps;
		});
		System.out.println("Event Data deleted successfully!!!");
		return "Event deleted successfullyy with id " + event_id;
	}

	public List<Event> fetchDetailsForUpdation(int event_id) {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);
		Object[] params = new Object[] { event_id };
		List<Event> events = jtemplate.query("select * from events where event_id=?", params, new RowMapper<Event>() {
			@Override
			public Event mapRow(ResultSet rs, int rowNum) throws SQLException {
				Event event = new Event();
				event.setEventName(rs.getString("event_name"));
				event.setEventDesc(rs.getString("event_description"));
				event.setEventVenue(rs.getString("event_venue"));
				event.setEventCategory(rs.getString("event_category"));
				event.setEventDate(rs.getDate("event_date"));
				return event;

			}
		});
		return events;
	}

	public String updateDbWithNewDetails(int event_id, Event event_new) {

		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);

		String sql = "Update events Set event_name=?,event_description=?,event_venue=?,event_category=?,event_date=? where event_id=?";
		Connection con;
		jtemplate.update(connection -> {
			PreparedStatement ps = (PreparedStatement) connection.prepareStatement(sql);
			ps.setString(1, event_new.eventName);
			ps.setString(2, event_new.eventDesc);
			ps.setString(3, event_new.eventVenue);
			ps.setString(4, event_new.eventCategory);
			ps.setDate(5, event_new.eventDate);
			ps.setInt(6, event_id);
			return ps;
		});
		System.out.println("Event Data Updated Successfully!!!");

		return null;
	}

	public String userlogin(Employee employee) {

		ApplicationContext ac = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ac.getBean(JdbcTemplate.class);

		Object[] parameters = new Object[] { employee.employee_id, employee.password };

		String sql = "SELECT count(*) FROM employee WHERE employee_id =? and password=?";
		int UserCount = jtemplate.queryForObject(sql, parameters, Integer.class);
		if (UserCount == 1)
			return "Success";
		else
			return "Failure";

	}
	public String bookEvent(int event_id, String employee_id) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ac.getBean(JdbcTemplate.class);
		Object[] parameters = new Object[] {event_id, employee_id };
		String sql = "insert into bookingdetails(event_id,employee_id) values(?,?)";
		int n = jtemplate.update(sql, parameters);
		if (n == 1)
		{  String getRegsCountsql="select eventnumber_of_registrations from events where event_id="+event_id;
		int val=jtemplate.queryForObject(getRegsCountsql,Integer.class);
		System.out.println("Current number of regs : "+val);
		String numberUpdateSql= "Update events Set eventnumber_of_registrations=? where event_id=?";
		Connection con;
		int noOfRowsAffested=jtemplate.update(connection -> {
			PreparedStatement ps = (PreparedStatement) connection.prepareStatement(numberUpdateSql);
		    ps.setInt(1, val+1);
			ps.setInt(2,event_id );
			return ps;
		});
			return "Success";
		}else
			return "Failure";
	
		}

	public String insertEmployee(Employee employee) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ac.getBean(JdbcTemplate.class);
		Object[] parameters = new Object[] { employee.employee_id, employee.password, employee.employee_id,
				employee.phone_number, employee.address };
		String sql = "INSERT INTO employee(employee_id,password,employee_name,phone_number,address) VALUES (?,?,?,?,?);";
		int n = jtemplate.update(sql, parameters);
		if (n == 1)
			return "Success";
		else
			return "Failure";
	}

	public Event fetchEventObject(int event_id) {
		ApplicationContext ax = new AnnotationConfigApplicationContext(SQLConfig.class);
		JdbcTemplate jtemplate = ax.getBean(JdbcTemplate.class);
		// Object[] params = new Object[] { event_id };
		Event events = jtemplate.query("select * from events where event_id=" + event_id + ";",
				new ResultSetExtractor<Event>() {

					@Override
					public Event extractData(ResultSet rs) throws SQLException, DataAccessException {
						System.out.println("resultset val : " + rs);
						Event event = new Event();

						if (rs.next()) {

							event.setEventId(event_id);
							event.setEventName(rs.getString("event_name"));
							event.setEventDesc(rs.getString("event_description"));
							event.setEventVenue(rs.getString("event_venue"));
							event.setEventCategory(rs.getString("event_category"));
							event.setEventDate(rs.getDate("event_date"));
						}
						return event;
					}
				});
		System.out.println(events);
		return events;
	}
}

@Configuration
class SQLConfig {
	@Bean
	JdbcTemplate getTemplate() {
		JdbcTemplate template = new JdbcTemplate();
		template.setDataSource(dataSource());
		return template;
	}

	private DataSource dataSource() {

		DriverManagerDataSource ds = new DriverManagerDataSource();
		ds.setDriverClassName("com.mysql.jdbc.Driver");
		ds.setUrl("jdbc:mysql://localhost:3306/eventdb");
		ds.setUsername("root");
		ds.setPassword("sushma");
		return ds;
	}

}
