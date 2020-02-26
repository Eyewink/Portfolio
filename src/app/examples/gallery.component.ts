import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: [ './gallery.component.less' ]
})
export class GalleryComponent implements OnInit {

    private _visible = false;
    private _class;

    constructor() {
    }

    ngOnInit(): void {
    }

    public show = (cls: string = '') => {
        this._class = cls;
        console.log(this._class);
        this._visible = true;
    };

    public hide = () => {
        this._visible = false;
    };

    public state = (): boolean => {
        return this._visible;
    };

    public getClass = (): string => {
        console.log(this._class);
        return this._class;
    };

}
