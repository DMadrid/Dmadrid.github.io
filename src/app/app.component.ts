import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<nav-bar></nav-bar>
		<intro></intro>
		<project-list></project-list>
		<resume></resume>
	`
})
export class AppComponent {
	constructor() {}
}