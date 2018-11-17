export class MessageContentListItem {
  userIconURL: string;
  userName: string;
  messageText: string;
  messageEmojiURL: string;

  constructor(userName: string, messageText: string, messageEmoji: string = '') {
    this.userName = userName;
    this.messageText = messageText;
    this.userIconURL = 'assets/img/user/' + this.userName + '.jpg';
    if (messageEmoji) {
      this.messageEmojiURL = 'assets/img/emoji/' + messageEmoji;
    }
  }
}
