import {Component, OnInit} from '@angular/core';
import {ROUTING_ITEMS, RoutingItem} from "../RoutingItem";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-routing-bar',
  templateUrl: './routing-bar.component.html',
  styleUrls: ['./routing-bar.component.css']
})
export class RoutingBarComponent implements OnInit {
  routingItemList: RoutingItem[] = ROUTING_ITEMS;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.flipAllItem());
  }

  flipAllItem() {
    for (let routingItem of this.routingItemList) {
      routingItem.currentImgURL = routingItem.routerLink === this.router.url ?
        routingItem.activeImgURL :
        routingItem.imgURL;
    }
  }
}
