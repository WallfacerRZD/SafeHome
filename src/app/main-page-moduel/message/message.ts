export class Message {
  icon: string;
  title: string;
  subTitle: string;

  constructor(icon: string, title: string, subTitle: string) {
    this.icon = icon;
    this.title = title;
    this.subTitle = subTitle;
  }
}

export const MESSAGES: Message[] = [
  new Message("assets/icon.jpg",
    "title1",
    "subTitle1"),
  new Message("assets/icon.jpg",
    "title2",
    "subTitle2"),
  new Message("assets/icon.jpg",
    "title3",
    "subTitle3"),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4"),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4"),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4"),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4"),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4"),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4"),
];
