import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Value set by typescript (server.component.ts) to get render on HTML";
  serverRegion = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000 );
  }

  onCreateServer() {
    this.serverCreationStatus = "A new server has been created";
  }

  onCreateServerRegion() {
    this.serverCreationStatus = "A new server has been created in region " + this.serverRegion;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  ngOnInit() {
  }

}
