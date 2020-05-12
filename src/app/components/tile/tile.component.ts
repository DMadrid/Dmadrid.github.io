import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @Input() header: string;
    @Input() body: string;
    @Input() link: string;
    constructor() {}

    ngOnInit(): void { }
}
