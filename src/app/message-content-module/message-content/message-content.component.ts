import {Component, OnInit} from '@angular/core';
import {MessageContentList} from "../message-content-list/MessageContentList";
import {MessageContentDataService} from "../../message-content-data.service";

@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.css']
})
export class MessageContent implements OnInit {
  messageContentList: MessageContentList;

  constructor(private messageContentDataService: MessageContentDataService) {
  }

  ngOnInit() {
    let data: MessageContentList = this.messageContentDataService.getMessageContentData('p16');
    if (data) {
      this.messageContentList = data;
    } else {
      console.log("内容不存在");
    }
  }
}
