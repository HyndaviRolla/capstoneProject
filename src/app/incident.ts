import { Components } from "./component";
import { NetworkElement } from "./network-element";

export interface Incident {
    id: number | null;
    networkElement: NetworkElement;
    component: Components;
    description: string;
    issueType: string;  
    assignmentGroup: string  | " ";
    forwardingmessage: string | " ";
    forwardedTo: string |" ";
    forwarded: boolean;
    
  }
   