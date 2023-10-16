import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkElementComponent } from './network-element/network-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentComponent } from './incident/incident.component';
import { HardwareGroupComponent } from './hardware-group/hardware-group.component';
import { SoftwareGroupComponent } from './software-group/software-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkElementComponent,
    IncidentComponent,
    HardwareGroupComponent,
    SoftwareGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
