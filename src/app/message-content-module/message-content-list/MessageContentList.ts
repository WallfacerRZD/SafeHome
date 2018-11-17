import {MessageContentListItem} from "./message-list-item/MessageContentListItem";

export class MessageContentList {
  title: string;
  messageContentListItems: MessageContentListItem[];

  constructor(title: string, messageContentListItems: MessageContentListItem[]) {
    this.title = title;
    this.messageContentListItems = messageContentListItems;
  }
}
