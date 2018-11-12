import {Component, OnInit} from '@angular/core';
import {ROUTING_ITEMS, RoutingItem} from "../RoutingItem";

@Component({
  selector: 'app-routing-bar',
  templateUrl: './routing-bar.component.html',
  styleUrls: ['./routing-bar.component.css']
})
export class RoutingBarComponent implements OnInit {
  routingItemList: RoutingItem[] = ROUTING_ITEMS;

  constructor() {
  }

  ngOnInit() {
  }
}
