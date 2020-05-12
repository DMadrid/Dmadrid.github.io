import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    links = [
        { label: 'RESUME', routerLink: '#resume' },
        { label: 'PROJECTS', routerLink: '#projects' }
    ]
    constructor() { }

    ngOnInit(): void {}
}