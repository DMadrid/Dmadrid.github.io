import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
	selector: 'main',
	template: `
		<nav-bar></nav-bar>
		<intro></intro>
		<div style="margin-left: 10%; margin-right: 10%;">
			<project-list></project-list>
		</div>
	`
})
export class MainComponent {
	constructor(private readonly _router: Router) {}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}