import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(events: EventManager, router: Router) {
        events.addGlobalEventListener('window', 'wheel', this.onScroll);
        events.addGlobalEventListener('document', 'keyup', this.onKeyPress);
        this.router = router;
    }

    private canNavigate = true;
    private state = 0;
    private total = 5;
    private router: Router;
    private delay;

    private onScroll = (event: UIEvent) => {

        clearTimeout(this.delay);
        this.delay = setTimeout(() => this.canNavigate = true, 35);

        if (this.canNavigate) {
            const delta = event['deltaY'];
            this.navigate(delta > 0);
            this.canNavigate = false;
        }
    };

    private onKeyPress = (event: KeyboardEvent) => {

        switch (event.key) {
            case 'ArrowDown':
                this.navigate(true);
                break;
            case 'ArrowUp':
                this.navigate(false);
                break;
            case 'ArrowLeft':
                this.navigate(false);
                break;
            case 'ArrowRight':
                this.navigate(true);
                break;
        }
    };

    private navigate = (direction: boolean) => {


        this.state = Math.min(this.state + (direction ? 1 : -1), this.total);
        if (this.state < 0) {
            this.state = 0;
        }

        switch (this.state) {
            case 0:
                this.router.navigate([ '' ]).then();
                break;
            case 1:
                this.router.navigate([ 'disclaimer' ]).then();
                break;
            case this.total:
                this.router.navigate([ 'contacts' ]).then();
                break;
            default:
                this.router.navigate([ 'examples' ]).then();
        }

    };

    public getOffset = () => {
        return this.state - 2;
    }

}

