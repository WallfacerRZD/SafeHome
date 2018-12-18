import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P29: MessageContentList = new MessageContentList(
  "过程模型一群",
  [
    new MessageContentListItem(
      'Lee',
      '我简单说一下',
    ),
    new MessageContentListItem(
      'Lee',
      '我已经花了很多时间讨论SafeHome产品的产品线了',
    ),
    new MessageContentListItem(
      'Lee',
      '而且我们做了很多工作定义',
    ),
    new MessageContentListItem(
      'Lee',
      '我想问问大家打算怎么做这个产品的软件部分',
      ),
    new MessageContentListItem(
      'Doug',
      '',
      'emmm2.jpg'
    ),
    new MessageContentListItem(
       'Doug',
       '感觉我们过去在软件开发方面有点混乱',
      ),
    new MessageContentListItem(
      'Ed',
      ' @Doug 嗯？怎么说，我们不总是能成功开发出产品来的吗？',
      ),
    new MessageContentListItem(
       'Doug',
       '是倒是，不过我们的开发工作并不是一帆风顺',
      ),
    new MessageContentListItem(
       'Doug',
       '并且我们这次要做的项目看起来比以前做的任何项目都要大而且更复杂',
      ),
    new MessageContentListItem(
       'Jamie',
       '没有那么严重啦，但是我同意Doug的看法',
      ),
    new MessageContentListItem(
       'Jamie',
       '我们过去的项目开发方法这次行不通了，特别是这次我们的时间很紧',
      ),
    new MessageContentListItem(
       'Doug',
       '哈哈，我希望我们的开发方法更专业一些',
      ),
    new MessageContentListItem(
       'Doug',
       '我上星期参加了一个培训班，学了很多关于软件工程的知识',
      ),
    new MessageContentListItem(
       'Doug',
       '我们现在需要一个过程模型',
      ),
    new MessageContentListItem(
       'Jamie',
       '',
       '蛤2.jpg'
      ),
    new MessageContentListItem(
       'Jamie',
       '我的工作是编程，不是文书',
      ),
    new MessageContentListItem(
       'Doug',
       '你先看看这篇介绍过程模型的文章',
      ),
    new MessageContentListItem(
       'Doug',
       'https://blog.csdn.net/mmd0308/article/details/77853086',
      ),
    new MessageContentListItem(
       'Doug',
       '所以，似乎线性模型并不追合我们',
      ),
    new MessageContentListItem(
       'Doug',
       '它假设我们此刻明确了所有的需求，而事实上并不是这样',
      ),
    new MessageContentListItem(
       'Vinod',
       '我觉得这篇文章内容和Doug的想法不错诶',
      ),
    new MessageContentListItem(
       'Vinod',
       '线性模型太IT化了……',
      ),
    new MessageContentListItem(
       'Vinod',
       '也许适合于开发一套库存管理系统或者什么，但不适合我们的SafeHome产品',
      ),
    new MessageContentListItem(
       'Doug',
       '',
       '+1.jpg'
      ),
    new MessageContentListItem(
       'Ed',
       '原型开发方法听起来不错，正适合我们现在的处境',
      ),
    new MessageContentListItem(
       'Vinod',
       '有个问题，我担心它不够结构化',
      ),
    new MessageContentListItem(
       'Doug',
       '别怕，我们还有许多其他选择',
      ),
    new MessageContentListItem(
       'Doug',
       '我希望大家能选出最适合我们小组和我们这个项目的开发模型',
      ),
  ]
);
