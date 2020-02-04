import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/assets/animations/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'splash',
    template: `
        <span [@fadeIn]>
            <img src="./assets/images/dm-white.png" style="width: 50%; margin-top: 200px; margin-left: 25%; margin-bottom:1%; margin-right: 25%;">
            <b style="width: 49%; margin-left: 25%; margin-right: 25%; color: white; width: 100%; font-size: 5.8vw;">DANIEL E. MADRID</b>
        </span>
    `,
    animations: [
        fadeIn
    ]
})
export class SplashComponent implements OnInit {
    constructor(private readonly _router: Router) { }

    ngOnInit(): void {
        setTimeout(() => {
			this._router.navigate(['/main/home']);
		}, 3000)
    }

}
