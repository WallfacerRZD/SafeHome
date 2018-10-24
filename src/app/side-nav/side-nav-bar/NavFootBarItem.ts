export class NavFootBarItem {
  iconURL: string;

  constructor(iconURL: string, text: string) {
    this.iconURL = iconURL;
    this.text = text;
  }

  text: string;
}
