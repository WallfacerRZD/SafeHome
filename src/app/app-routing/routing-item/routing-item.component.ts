import {Component, Input, OnInit} from '@angular/core';
import {RoutingItem} from "../RoutingItem";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-routing-item',
  templateUrl: './routing-item.component.html',
  styleUrls: ['./routing-item.component.css']
})
export class RoutingItemComponent implements OnInit {
  @Input()
  routingItem: RoutingItem;

  constructor(private router: Router) {
  }

  flipActive() {
    this.routingItem.currentImgURL = this.routingItem.routerLink === this.router.url ?
      this.routingItem.activeImgURL :
      this.routingItem.imgURL;
  }

  ngOnInit() {
    this.routingItem.currentImgURL = this.routingItem.imgURL;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.flipActive());
  }

}
