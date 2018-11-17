import {Component, Input, OnInit} from '@angular/core';
import {MessageContentListItem} from "./message-list-item/MessageContentListItem";

@Component({
  selector: 'app-message-content-list',
  templateUrl: './message-content-list.component.html',
  styleUrls: ['./message-content-list.component.css']
})
export class MessageContentListComponent implements OnInit {
  @Input()
  messageContentListItems: MessageContentListItem[];

  constructor() {
  }

  ngOnInit() {
  }

}
