import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: [ './contacts.component.less' ]
})
export class ContactsComponent implements OnInit {

    constructor(private nav: NavigationService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.nav.init(this.route.snapshot.data['state']);
    }
}
