export class RoutingItem {
  imgURL: string;
  activeImgURL: string;
  currentImgURL: string;
  text: string;
  routerLink: string;

  constructor(imgURL: string, activeImgURL: string, currentImgURL: string, text: string, routerLink: string) {
    this.imgURL = imgURL;
    this.activeImgURL = activeImgURL;
    this.currentImgURL = currentImgURL;
    this.text = text;
    this.routerLink = routerLink;
  }
}

export const ROUTING_ITEMS: RoutingItem[] = [
  new RoutingItem(
    'assets/img/route/message.png',
    'assets/img/route/message-active.png',
    '',
    '消息', '/main/message'
  ),
  new RoutingItem(
    'assets/img/route/contact.png',
    'assets/img/route/contact-active.png',
    '',
    '联系人', '/main/contact'
  ),
  new RoutingItem(
    'assets/img/route/news.png',
    'assets/img/route/news-active.png',
    '',
    '看点', '/main/news'
  ),
  new RoutingItem(
    'assets/img/route/circle.png',
    'assets/img/route/circle-active.png',
    '',
    '动态', '/main/circle'
  ),
];
