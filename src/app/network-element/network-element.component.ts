 
import { Component, OnInit } from '@angular/core';
import { NetworkElementService } from '../network-element.service';
import { NetworkElement  } from '/home/hyndavi24/NetworkInventory/src/app/network-element'
import { Components } from '../component';
 

@Component({
  selector: 'app-network-element',
  templateUrl: './network-element.component.html',
  styleUrls: ['./network-element.component.css'],
})
export class NetworkElementComponent implements OnInit {
  
  networkElements: NetworkElement[] = [];
  newNetworkElement: NetworkElement = {};
  newComponent: Components = {};

  constructor(private networkElementService: NetworkElementService) {}

  ngOnInit(): void {
    this.loadNetworkElements();
  }

  loadNetworkElements(): void {
    this.networkElementService.getAllNetworkElements().subscribe(
      (data) => (this.networkElements = data),
      (error) => console.error(error)
    );
  }

  addNetworkElement(): void {
    this.networkElementService.addNetworkElement(this.newNetworkElement).subscribe(
      (data) => {
        this.networkElements.push(data);
        this.newNetworkElement = {}; // clear the form
      },
      (error) => console.error(error)
    );
  }

  addComponent(id: number | undefined): void {
    if (id !== undefined) {
      this.networkElementService.addComponentToNetworkElement(id, this.newComponent).subscribe(
        (data) => {
          const index = this.networkElements.findIndex((element) => element.id === id);
          this.networkElements[index] = data;
          this.newComponent = {}; // clear the form
        },
        (error) => console.error(error)
      );
    }
  }
}

