import { Component } from '@angular/core';
// import { MenuItem } from 'primeng-lts/api';

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
    baseURL = window.location.origin;
    resumeRef = this.baseURL + '/assets/documents/dan-madrid-resume.pdf';
    loading = true;
    zoom = 1;

    constructor() {}

    increment() {
        if (this.zoom < 2) {
            this.zoom += .1;
        }
    }

    decrement() {
        if (this.zoom > .5) {
            this.zoom -= .1;
        }
    }

    print() {}

    pdfLoaded() {
        this.loading = false
    }
}
