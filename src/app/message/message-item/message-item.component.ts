import {Component, Input, OnInit} from '@angular/core';
import {Message, MESSAGES} from "../../message";

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;

  swipe(): void {
    alert("yeah! you swipe left")
  }

  constructor() {
  }

  ngOnInit() {
  }

}
