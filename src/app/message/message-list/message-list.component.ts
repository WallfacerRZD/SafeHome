import {Component, OnInit} from '@angular/core';
import {Message, MESSAGES} from "../../message";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  mesaageList: Message[] = MESSAGES;

  constructor() {
  }

  ngOnInit() {
  }

}
