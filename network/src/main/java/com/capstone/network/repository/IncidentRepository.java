package com.capstone.network.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.network.entities.Incident;

public interface IncidentRepository extends JpaRepository<Incident, Long> {

	 
	List<Incident> findByForwardedToAndForwardedIsTrue(String group);
	List<Incident> findByAssignmentGroup(String assignmentGroup);
	

}
