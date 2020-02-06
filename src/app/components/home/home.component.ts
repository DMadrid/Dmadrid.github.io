import { Component, OnInit } from '@angular/core';
import { fadeOut } from 'src/assets/animations/animations';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        fadeOut
    ]
})
export class HomeComponent implements OnInit {
    constructor() {
        
    }
    ngOnInit(): void { }
}
