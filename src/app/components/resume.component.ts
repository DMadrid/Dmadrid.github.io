import { Component, OnInit } from '@angular/core';
// import { MenuItem } from 'primeng-lts/api';

@Component({
    selector: 'resume',
    template: `
        <div style="position: fixed; width: 100%; z-index: 2;">
            <p-toolbar >
                <div class="ui-toolbar-group-left">
                    <div class="ui-inputgroup">
                        <button pButton type="button" icon="pi pi-search-minus" (click)="decrement()"></button>
                        <input pInputText type="text" placeholder="Zoom" [(ngModel)]="zoom">
                        <button pButton type="button" icon="pi pi-search-plus" (click)="increment()"></button>
                    </div>
                </div>
                <div class="ui-toolbar-group-right">
                    <a pButton type="button" label="Download" icon="pi pi-download" download href='assets/documents/dan-madrid-resume.pdf'></a>
                </div>
            </p-toolbar>
        </div>
        <pdf-viewer src="../../../assets/documents/dan-madrid-resume.pdf" [render-text]='true' [zoom]='zoom' (after-load-complete)="pdfLoaded()"></pdf-viewer>
    `
})
export class ResumeComponent implements OnInit {
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
