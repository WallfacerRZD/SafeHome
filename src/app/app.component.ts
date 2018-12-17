import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {routeAnimation} from "./animation/routeAnimation";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [routeAnimation]
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

    parseRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
