import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  // Dependency injection of loggin service.
  constructor(private accountsService: AccountsService) { };

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded(accountName, accountStatus);
  }
}
