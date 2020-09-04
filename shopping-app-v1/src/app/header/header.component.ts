import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    // Added for the purpose of Hamburger Menu Style of Header on Small Screens
    collapsed = true;

    // Event Emitter Property which can be captured outsie of this component.
    @Output() featureSelected = new EventEmitter<string>();

    // click event of links 'Recipe' and 'Shopping List' present on the header
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}