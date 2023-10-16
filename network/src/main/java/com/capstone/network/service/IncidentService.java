package com.capstone.network.service; 
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.network.entities.Incident;
import com.capstone.network.repository.IncidentRepository;

@Service
public class IncidentService {
	@Autowired
	private IncidentRepository incidentRepository;

	public Incident saveIncident(Incident incident) {
		return incidentRepository.save(incident);
	} 

	public List<Incident> getIncidentsByAssignmentGroup(String assignmentGroup) {

		return incidentRepository.findByAssignmentGroup(assignmentGroup);
	}  
	public Optional<Incident> findById(Long id) {
		return incidentRepository.findById(id);
	}

	public List<Incident> getForwardedIncidents(String group) {
		return incidentRepository.findByForwardedToAndForwardedIsTrue(group);
	}

}
