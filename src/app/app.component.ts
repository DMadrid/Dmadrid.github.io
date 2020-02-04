import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from '../assets/animations/animations';

@Component({
	selector: 'app-root',
	template: `
		<html lang="en-US">
			<head>
				<meta charset="utf-8">
				<title>DANIEL MADRID</title>
				<meta name="author" content="Daniel E. Madrid">
				<script type="text/javascript" src="scroll.js"></script>
			</head>
			<body>
				<main [@routeAnimations]="prepareRoute(outlet)">
					<router-outlet #outlet="outlet"></router-outlet>
				</main>
			</body>
		</html>
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