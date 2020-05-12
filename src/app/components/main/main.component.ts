import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
	selector: 'main',
	templateUrl: './main.component.html'
})
export class MainComponent {
	constructor(private readonly _router: Router) {}
}