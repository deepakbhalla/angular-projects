import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    collapsed = true; // Added for the purpose of Hamburger Menu Style of Header on Small Screens
}