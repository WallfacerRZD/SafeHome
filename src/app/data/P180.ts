import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P180: MessageContentList = new MessageContentList(
  '选择体系结构风格',
  [
    new MessageContentListItem(
      'Ed',
      '(皱着眉）：我们已经使用UML对安全功能进行了建模……类、关系等都是其中的基本材料，所以我觉得面向对象体系结构应该是合适的方案。',
    ),
    new MessageContentListItem(
      'Jamie',
      '但是',
    ),
    new MessageContentListItem(
      'Ed',
      ':但是……我对于面向对象体系结构理解起来有些困雎，我比较熟悉玥用和返回体系结构种传统的过程层次。但是面向对象……我不了解，它看起来属于无组织的一类。',
    ),
    new MessageContentListItem(
      'Jamie',
      '(微笑）：无组织？',
      '天呀.jpg'
    ),
    new MessageContentListItem(
      'Ed',
      '是的……我的意思是说我不能想象出实际的结构，在设计空间中只有设计类。',
    ),
    new MessageContentListItem(
      'Jamie',
      '哦，那不对。存在类的层次	想想我们为FloorPlan对象设计的层次（聚集）,图8-3,面向对象的体系结构是结构与类之间相互连接的组合，你知道，类之间的相互连接即相互协作。我们可以通过描述详细的类结构、属性、操作和类之间的消息来体现它',
    ),
    new MessageContentListItem(
      'Ed',
      '我打算花一个小时制定一个调用和返回体系结构，然后我再考虑面向对象体系结构。 ',
    ),
    new MessageContentListItem(
      'Jamie',
      'Doug对此不会有什么问题，他说我们应该考虑其他方案。顺便说一句，这两种体系结构彼此结合是绝对没有问题的。',
    ),
    new MessageContentListItem(
      'Ed',
      '好，我知道了',
    ),

  ]
);
