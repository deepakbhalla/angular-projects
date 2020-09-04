import { Injectable } from "@angular/core";

/**
 * Logging service.
 */
export class LoggingService {

    logStatusChange(status: string) {
        console.log('Server Status has been changed. new status: ' + status);
    }
}