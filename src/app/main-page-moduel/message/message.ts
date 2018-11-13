export class Message {
  icon: string;
  title: string;
  subTitle: string;
  id: number = 0;
  routerLink: string;

  constructor(icon: string, title: string, subTitle: string, id: number) {
    this.icon = icon;
    this.title = title;
    this.subTitle = subTitle;
    this.routerLink = '/message/content/' + id;
  }
}

export const MESSAGES: Message[] = [
  new Message("assets/icon.jpg",
    "title1",
    "subTitle1",
    1
  ),
  new Message("assets/icon.jpg",
    "title2",
    "subTitle2",
    2
  ),
  new Message("assets/icon.jpg",
    "title3",
    "subTitle3",
    3
  ),
  new Message("assets/icon.jpg",
    "这个一个超长超长超长超长的标题",
    "balabalabalabalabalabala",
    4,
  ),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4",
    5,
  ),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4",
    6,
  ),
  new Message("assets/icon.jpg",
    "如何开始一个项目",
    "沟通 设计 建模 构建 部署",
    7
  ),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4",
    8
  ),
  new Message("assets/icon.jpg",
    "title4",
    "subTitle4",
    9
  ),
];
