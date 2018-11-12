import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoutingItem} from "../RoutingItem";

@Component({
  selector: 'app-routing-item',
  templateUrl: './routing-item.component.html',
  styleUrls: ['./routing-item.component.css']
})
export class RoutingItemComponent implements OnInit {
  @Input()
  routingItem: RoutingItem;

  @Output()
  flipActive = new EventEmitter();

  constructor() {
  }

  flip() {
    this.flipActive.emit();
  }

  ngOnInit() {
    this.routingItem.currentImgURL = this.routingItem.imgURL;
  }

}
