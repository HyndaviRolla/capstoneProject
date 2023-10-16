import { Component } from '@angular/core';
import { IncidentService } from '../incident.service';
import { Incident } from '../incident';
import { ForwardingRequest } from '../forwadingrequest';

@Component({
  selector: 'app-hardware-group',
  templateUrl: './hardware-group.component.html',
  styleUrls: ['./hardware-group.component.css']
})

export class HardwareGroupComponent {

 
  incidents: Incident[] = [];
  forwardedIncidents: Incident[] = [];
  availableGroups: string[] = [];  
  selectedGroup: string | null = null;
  forwardingMessage: string = '';   
  constructor(private incidentService: IncidentService) {}

  ngOnInit() {
    this.fetchIncidents('HardwareGroup');
    this.fetchForwardedIncidents('HardwareGroup');
    this.loadAvailableGroups();
  }
  
  forwardIncident(incident: Incident) {
    if (!this.selectedGroup) {
      console.error('Please select a group to forward the incident.');
      return;
    }
  
    if (!this.forwardingMessage) {
      console.error('Please enter a forwarding message.');
      return;
    }
  
    const forwardingRequest: ForwardingRequest = {
      targetGroup: this.selectedGroup,
      message: this.forwardingMessage,
    };
  
    this.incidentService.forwardIncident(incident.id!, forwardingRequest).subscribe(
      (forwardedIncidents) => {
        console.log(
          `Incident forwarded successfully to ${this.selectedGroup} group`
        );
        this.fetchIncidents('HardwareGroup');
      },
      (error) => {
        console.error('Error forwarding incident:', error);
      }
    );
  }
  
  // forwardIncident(incident: Incident) {
  //   if (!this.selectedGroup) {
  //     console.error('Please select a group to forward the incident.');
  //     return;
  //   }

  //   const forwardingRequest: ForwardingRequest = {
  //     targetGroup: this.selectedGroup,
  //     message: this.forwardingMessage,
  //   };

  //   this.incidentService.forwardIncident(incident.id!, forwardingRequest).subscribe(
  //     (forwardedIncidents) => {
  //       console.log(
  //         `Incident forwarded successfully to ${this.selectedGroup} group`
  //       ); 
  //       this.fetchIncidents('HardwareGroup');
  //     }, 
  //   );
  // }
  fetchForwardedIncidents(group: string) {
    
    this.incidentService.getForwardedIncidents(group).subscribe(
      (forwardedIncidents) => {
        this.forwardedIncidents = forwardedIncidents;
        
      }, 
    );
  }
 

    fetchIncidents(group: string) {
    this.incidentService.getIncidentsByAssignmentGroup(group).subscribe(
      (incidents) => {
        this.incidents = incidents; 

      },
      (error) => {
        console.error(`Error fetching incidents for ${group} group`, error);
      }
    );
  }
 
  private loadAvailableGroups() { 
    this.availableGroups = ['HardwareGroup','SoftwareGroup', 'AnotherGroup', 'YetAnotherGroup'];
  }
}