import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';

@Component({
    selector: 'nav-bar',
    template: `
        <nav class="navbar">
            <img class="logo" src="./assets/images/dm-white.png">
            <ul>
                <li *ngFor="let link of links">
                    <a [routerLink]="link.routerLink">{{link.label}}</a>
                </li>
            </ul>
        </nav>
    `,
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    links: MenuItem[] = [
        { label: 'RESUME', routerLink: '/main/resume' },
        { label: 'PROJECTS', routerLink: '/main/projects' },
        { label: 'HOME', routerLink: '/main/home' },
    ]
    constructor() { }

    ngOnInit(): void {}
}