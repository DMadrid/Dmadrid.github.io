import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';

@Component({
    selector: 'nav-bar',
    template: `
        <nav class="navbar">
            <img class="logo" src="./assets/images/dm-white.png">
            <ng-container *ngFor="let link of links">
                <a [routerLink]="link.routerLink">{{link.label}}</a>
            </ng-container>
        </nav>
    `,
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    links: MenuItem[] = [
        { label: 'Resume', routerLink: '/main/resume' },
        { label: 'About', routerLink: '/main/about' },
        { label: 'Bio', routerLink: '/main/bio' },
        { label: 'Home', routerLink: '/main/home' },
    ]
    constructor() { }

    ngOnInit(): void {}
}