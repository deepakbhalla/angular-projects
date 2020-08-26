import { Component } from "@angular/core";

// This is a custom component. @Component declarative tells Angular Js that this is a Component class.
// Selector should be unique in name and should not duplicate any default html tag.
// templateUrl refers to external file named here as 'server.component.html'
// This component should be enabled in 'app.modules.ts' to use it in the application.

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

}