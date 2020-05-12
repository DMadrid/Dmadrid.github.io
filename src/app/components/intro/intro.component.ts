import { Component } from '@angular/core';
import { fadeOut } from 'src/assets/animations/animations';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    animations: [
        fadeOut
    ]
})
export class IntroComponent {}
