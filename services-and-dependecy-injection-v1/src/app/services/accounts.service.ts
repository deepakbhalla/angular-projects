import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

// @Injectable tells Angular that this component can inject reference of other types.
// This annotation is required only in service types as it doesn't have any declarations like @Component, @Declarative etc.
@Injectable()
export class AccountsService {

    // List of accounts stubbed
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    // Dependency Injection of LoggingService.
    constructor(private loggingService: LoggingService) { };

    onAccountAdded(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status);
    }

    onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}