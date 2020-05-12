import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from '../assets/animations/animations';

@Component({
	selector: 'app-root',
	template: `
		<main>
			<router-outlet #outlet="outlet"></router-outlet>
		</main>
	`,
	animations: [
		slider
	]
})
export class AppComponent {
	constructor() { }

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}