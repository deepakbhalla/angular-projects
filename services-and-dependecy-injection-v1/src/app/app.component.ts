import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // Accounts Type
  accounts: {name: string, status: string}[] = [];

  // Dependency Injection of AccountsService
  constructor(private accountsService: AccountsService) {};

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
