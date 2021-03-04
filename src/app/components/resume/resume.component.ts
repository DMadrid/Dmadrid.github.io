import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    baseURL = window.location.origin;
    resumeRef = './assets/documents/dan-madrid-resume.pdf';
    loading = true;
    zoom = null;
    isDesktop = false;

    constructor() {}

    ngOnInit() {
        if (this.isDesktop) {
            this.zoom = 1
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setIsDesktop()
    }

    setIsDesktop(): void {
        this.isDesktop = window.innerWidth > 1000
    }

    increment(): void {
        if (this.zoom < 2) {
            this.zoom += .1;
        }
    }

    decrement(): void {
        if (this.zoom > .5) {
            this.zoom -= .1;
        }
    }

    download(): void {}

    pdfLoaded(): void {
        this.loading = false
    }
}
