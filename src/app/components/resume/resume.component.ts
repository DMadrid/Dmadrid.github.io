import { Component, OnInit } from '@angular/core';
// import { MenuItem } from 'primeng-lts/api';

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {
    baseURL = window.location.origin;
    resumeRef = this.baseURL + '/assets/documents/dan-madrid-resume.pdf';
    loading = true;
    zoom = 1;

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

    constructor() {}

    ngOnInit(): void { }

    pdfLoaded() {
        this.loading = false
    }
}
