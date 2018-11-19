import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P16: MessageContentList = new MessageContentList(
  "如何开始一个项目",
  [
    new MessageContentListItem(
      'Joe',
      'Lee, 我听说你们那帮家伙正在开发一个什么通用的无线盒',
    ),
    new MessageContentListItem(
      'Lee',
      '哦, 是的, 那是一个很棒的产品, 只有火柴盒大小. 我们可以啊它放在各种传感器上, 比如数码相机里, 总之任何东西里. 采用802.11g无线网络协议, 可以通过无线连接获得它的输出. 我们认为它可以带来全新的一代产品',
    ),
    new MessageContentListItem(
      'Joe',
      'Mal, 你觉得怎么样呢?',
    ),
    new MessageContentListItem(
      'Mal',
      '(避免直接承诺): Lisa, 和他谈谈我们的想法',
    ),
    new MessageContentListItem(
      'Lisa',
      '这是新一代的家庭管理产品, 我们称之为SafeHome. 产品采用新型无线接口, 给家庭和小型商务使用者提供一个由电脑控制的系统--家庭安全, 监视, 应用, 和设备控制.例如, 你可以在回家的路上关闭家里的空调, 或者诸如此类的应用',
    ),
    new MessageContentListItem(
      'Lee',
      '(插话):Joe, 工程部已经作了相关的技术可行性研究. 它可行且制造成本不高. 大多数硬件可以在市场购买产品, 不过软件方面是一个问题, 但并非做不到',
    ),
    new MessageContentListItem(
      'Joe',
      '有意思!我想知道底线',
    ),
    new MessageContentListItem(
      'Mal',
      '在美国, 70%的家庭拥有电脑. 如果我们定价合适, 这将成为一个十分成功的产品. 到目前为止, 只有我们拥有这一无线控制盒技术. 我们将在这个方向上保存两年的领先地位. 收入嘛, 在第二年大约可达到3千万到4千万',
    ),
    new MessageContentListItem(
      'Joe',
      '我很感兴趣, 让我们继续讨论一下.',
      '真烦人.jpg'
    ),
  ]
);