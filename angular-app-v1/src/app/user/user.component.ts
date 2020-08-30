import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  /* styles: [`
  .success {
    color: white;
  }`
  ] */
})
export class UserComponent implements OnInit {

  username = "";
  addUsernameBtn: boolean = false;
  listOfUsers = "";
  users = [];
  userAdded = false;

  constructor() { }

  onUsernameInput(event: any) {
    if (event.target.value != "") {
      this.addUsernameBtn = true;
      this.username = (<HTMLInputElement>event.target).value;
    }
    else {
      this.addUsernameBtn = false;
    }
  }

  onAddUsername() {
    if (this.listOfUsers == "") {
      this.listOfUsers = this.username;

    }
    else {
      this.listOfUsers += ", " + this.username;
    }

    this.users.push(this.username);

    this.username = "";
    this.addUsernameBtn = false;
    this.userAdded = true;
  }

  getColor() {
    return this.userAdded === true ? 'green' : 'red';
  }

  ngOnInit() {
  }

}
