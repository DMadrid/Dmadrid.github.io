import { Component } from '@angular/core';

@Component({
    selector: 'splash',
    template: `
        <span [@fadeIn]>
            <img src="./assets/images/dm-white.png" style="width: 50%; margin-top: 200px; margin-left: 25%; margin-bottom:1%; margin-right: 25%;">
            <b style="width: 49%; margin-left: 25%; margin-right: 25%; color: white; width: 100%; font-size: 5.8vw;">DANIEL E. MADRID</b>
        </span>
    `
})
export class SplashComponent {
    constructor() {}
}
