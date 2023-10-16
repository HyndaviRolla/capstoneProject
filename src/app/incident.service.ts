 // incident.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from './incident';
import { Components } from './component';
import { ForwardingRequest } from './forwadingrequest';
import { NetworkElement } from './network-element';
 

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  private apiUrl = 'http://localhost:8080/api/incidents';

  constructor(private http: HttpClient) {}

  createIncident(incident: Incident): Observable<Incident> {
    return this.http.post<Incident>(`${this.apiUrl}`, incident);
  }

  getNetworkElements(search: string): Observable<NetworkElement[]> {
    return this.http.get<NetworkElement[]>(`${this.apiUrl}/network-elements?search=${search}`);
  }

  getComponents(networkElementId: number): Observable<Components[]> {
    return this.http.get<Components[]>(`${this.apiUrl}/components/${networkElementId}`);
  }
// incident.service.ts
getIncidentsByAssignmentGroup(assignmentGroup: string): Observable<Incident[]> {
  return this.http.get<Incident[]>(`${this.apiUrl}/assigned-group/${assignmentGroup}`);
}

forwardIncident(incidentId: number, forwardingRequest: ForwardingRequest): Observable<Incident> {
  const url = `${this.apiUrl}/forward/${incidentId}`;
  return this.http.post<Incident>(url, forwardingRequest);
}
getForwardedIncidents(group: string): Observable<Incident[]> {
  const url = `${this.apiUrl}/forwarded/${group}`;
  return this.http.get<Incident[]>(url);
}
 
}
