package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Mapper implements RowMapper<Event> {

	public Event mapRow(ResultSet rs, int rowNum) throws SQLException {
		Event event=new Event();
		event.setEventId(rs.getInt("event_id"));
		event.setEventName(rs.getString("event_name"));
		event.setEventDesc(rs.getString("event_description"));
		event.setEventCategory(rs.getString("event_category"));
		event.setEventVenue(rs.getString("event_venue"));
		event.setEventDate(rs.getDate("event_date"));
		event.setRegisCount(rs.getInt("eventnumber_of_registrations"));
		event.setOrganizerId(rs.getString("organizer_id"));
		event.setEventStatus(rs.getBoolean("is_active"));
		
		return event;
	}

}
