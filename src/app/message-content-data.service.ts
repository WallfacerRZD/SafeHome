import {Injectable} from '@angular/core';
import {MESSAGE_CONTENT_DATA} from "./data/MessageData";
import {MessageContentList} from "./message-content-module/message-content-list/MessageContentList";

@Injectable({
  providedIn: 'root'
})
export class MessageContentDataService {
  private messageContentData = MESSAGE_CONTENT_DATA;

  constructor() {
  }

  getMessageContentData(page: string): MessageContentList {
    return this.messageContentData[page];
  }
}
