export class Dialog {
  constructor(icon: string, title: string, subTitle: string) {
    this.icon = icon;
    this.title = title;
    this.subTitle = subTitle;
  }

  icon: string;
  title: string;
  subTitle: string;
}

export const DIALOGS: Dialog[] = [
  new Dialog("assets/icon.jpg",
    "title1",
    "subTitle1"),
  new Dialog("assets/icon.jpg",
    "title2",
    "subTitle2"),
  new Dialog("assets/icon.jpg",
    "title3",
    "subTitle3"),
  new Dialog("assets/icon.jpg",
    "title4",
    "subTitle4"),
];
