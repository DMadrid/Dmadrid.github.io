import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
	selector: 'main',
	template: `
		<nav-bar></nav-bar>
		<div style="margin-top: 50px;">
			<router-outlet></router-outlet>
		</div>
	`
})
export class MainComponent {
	constructor(private readonly _router: Router) {}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}