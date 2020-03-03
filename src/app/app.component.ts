import { Component } from '@angular/core';
import { NavigationService } from "./navigation.service";
import { RouterOutlet } from '@angular/router';
import { routerAnimations } from "./animations";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.less' ],
	animations: [
		routerAnimations
	]
})
export class AppComponent {
	constructor(private nav: NavigationService) {
		this.nav.init(0);
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
