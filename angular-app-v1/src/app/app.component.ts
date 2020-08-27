import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-v1';
  serverId: number = 10;
  serverStatus: string = "offline";
  serverZone: string = "en-us-east1";

  getServerStatus() {
    return this.serverStatus;
  }
}
