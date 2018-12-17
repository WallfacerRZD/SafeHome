import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P201: MessageContentList = new MessageContentList(
  'Vinod的工作间',
  [
    new MessageContentListItem(
      'Vinod',
      '我刚刚接到Doug (团队经理）的一个电读，他说市场营销人员想增加一个新的传感器。 ',
    ),
    new MessageContentListItem(
      'Shakira',
      '假笑，哎呀，别再加了',
    ),
    new MessageContentListItem(
      'Vinod',
      '是啊……你永远不会相信这些家伙都提出了什么。',
    ),
    new MessageContentListItem(
      'Shakira',
      '确实令我很吃惊。',
    ),
    new MessageContentListItem(
      'Vinod',
      '(大笑）他们称之为小狗传感器（doggie angst sensor)。',
    ),
    new MessageContentListItem(
      'Shakira',
      '那是什么装置？',
    ),
    new MessageContentListItem(
      'Vinod',
      '这个装置是为了那些想杷宠物留在彼此相邻很近的公寓、门庳或房子里的人设计 的，狗叫致使邻里生气和抱怨，有了这种传感器,如果狗的叫声超过一定时间（比如一分钟）传感器就会向主人的手机发送特殊的报警信号。',
    ),
    new MessageContentListItem(
      'Shakira',
      ':你在骗我吗？',
    ),
    new MessageContentListItem(
      'Vinod',
      '不是，Doug想知道在安全功能中加入这个功能需要多长时间。',
    ),
    new MessageContentListItem(
      'Shakira',
      '（稍加思索）不用多长时间……瞧,我们分离出在sensor接口 背后的实际的传感器类，只要我们有小狗传感器的规格说明，那么把它加入其中就是一件简单的事情了。我们要做的就是为其创建一个合适的构件……哦，类。根本不用改变Detector构件。',
    ),
    new MessageContentListItem(
      'Vinod',
      '好的，我会告诉Doug这不是什么大问题。',
      '老子不编程序了.jpg'
    ),
    new MessageContentListItem(
      'Shakira',
      '告诉Doug,直到下一个版本发布之前，我们都要集中精力完成小狗焦虑传感器的事情。',
    ),
    new MessageContentListItem(
      'Vinod',
      '这不是件坏事，如果他想让你做，你可以马上实现吗？',
    ),
    new MessageContentListItem(
      'Shakira',
      '是啊，我们的接口设计使得我可以毫无困难地完成，',
    ),
    new MessageContentListItem(
      'Vinod',
      '(想了想）你听说过开一闭原则吗？',
    ),
    new MessageContentListItem(
      'Shakira',
      '(耸了耸肩膀):没有。',
      '我只是个小程序仔.jpg'
    ),
    new MessageContentListItem(
      'Vinod',
      '(微笑）不成问题。'
    ),
  ]
);
