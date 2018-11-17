import {Component, Input, OnInit} from '@angular/core';
import {MessageContentListItem} from "./MessageContentListItem";

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css']
})
export class MessageListItemComponent implements OnInit {
  @Input()
  messageListItem: MessageContentListItem;

  constructor() {
  }

  ngOnInit() {
  }

}
