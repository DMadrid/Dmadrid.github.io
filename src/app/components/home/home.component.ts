import { Component, OnInit } from '@angular/core';
import { fadeOut } from 'src/assets/animations/animations';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    animations: [
        fadeOut
    ]
})
export class HomeComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
