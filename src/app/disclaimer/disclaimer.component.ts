import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-disclaimer',
    templateUrl: './disclaimer.component.html',
    styleUrls: [ './disclaimer.component.less' ]
})
export class DisclaimerComponent implements OnInit {

    constructor(private nav: NavigationService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.nav.init(this.route.snapshot.data['state']);
    }

}
