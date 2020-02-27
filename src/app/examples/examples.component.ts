import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { GalleryComponent } from './gallery.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-examples',
    templateUrl: './examples.component.html',
    styleUrls: [ './examples.component.less' ],
    providers: [ GalleryComponent ]
})
export class ExamplesComponent implements OnInit {

    constructor(public nav: NavigationService, public gallery: GalleryComponent, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.nav.init(this.route.snapshot.data['state']);
    }

    public showGallery = (state) => {
        this.nav.toggle();
        this.gallery.show(state);
    };

    public hideGallery = () => {
        this.nav.toggle();
        this.gallery.hide();
    };

}
