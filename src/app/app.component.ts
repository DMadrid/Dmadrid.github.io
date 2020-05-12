import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<nav-bar></nav-bar>
		<intro></intro>
		<div style="margin-left: 10%; margin-right: 10%;">
			<project-list></project-list>
		</div>
	`
})
export class AppComponent {
	constructor() {}
}