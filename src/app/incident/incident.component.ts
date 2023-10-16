 // incident-form.component.ts
import { Component } from '@angular/core';
import { IncidentService } from '../incident.service'; 
import { NetworkElement } from '../network-element';
import { Components } from '../component';
import { Incident } from '../incident';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
})
export class IncidentComponent {
  
  search!: string;
  selectedNetworkElement!: NetworkElement;
  selectedComponent!: Components;
  description!: string;
  selectedIssueType!:string;
  

  networkElements!: NetworkElement[];
  components!: Components[];

  constructor(private incidentService: IncidentService) {}

  searchNetworkElements() {
    this.incidentService.getNetworkElements(this.search).subscribe(
      (networkElements) => {
        this.networkElements = networkElements;
      },
      (error) => {
        console.error('Error fetching network elements', error);
      }
    );
  }

  onNetworkElementSelected() {
    if (this.selectedNetworkElement && this.selectedNetworkElement.id ) {
      this.incidentService.getComponents(this.selectedNetworkElement.id).subscribe(
        (components) => {
          this.components = components;
        },
        (error) => {
          console.error('Error fetching components', error);
        }
      );
    }
  }

  submitIncident() {
    const incident: Incident = {
      id: null ,
      networkElement: this.selectedNetworkElement,
      component: this.selectedComponent,
      description: this.description,
      issueType: this.selectedIssueType,
      assignmentGroup:   " ",
      forwardingmessage:  " ",
      forwardedTo: " ",
      forwarded: false


    };

    this.incidentService.createIncident(incident).subscribe(
      (createdIncident) => {
        console.log('Incident created successfully', createdIncident);
        // Add any additional logic or navigation after creating the incident
      },
      (error) => {
        console.error('Error creating incident', error);
      }
    );
  }
}
