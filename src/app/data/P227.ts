import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P227: MessageContentList = new MessageContentList(
  'Shakira的工作间',
  [
    new MessageContentListItem(
      'Shakira',
      '我曾经有一个非常好的想法……之后我又考虑了一下，好像并没有那么好。最后我还是放弃了，不过我想最好和你讨论一下。',
    ),
    new MessageContentListItem(
      'Vinod',
      '当然可以，是什么想法？。',
    ),
    new MessageContentListItem(
      'Shakira',
      '好的，每个传感器能够识别一种警报条件，对吗？',
    ),
    new MessageContentListItem(
      'Vinod',
      '(微笑）这就是我们称它为传感器的一个原因啊，Shakira。',
    ),
    new MessageContentListItem(
      'Shakira',
      '(恼怒）Vinod你讽刺我！你应该好好学习一下处理人际关系的技巧，',
      '我先记仇记下来.jpg'
    ),
    new MessageContentListItem(
      'Vinod',
      '你刚才说？',
    ),
    new MessageContentListItem(
      'Shakira',
      '是的，我指的是为什么不为每个传惑器都创建一个称为makeCall()的操作，该操作能够直接和OutgoingCall (外呼）构件协作，也就是通过OutgoingCall构件的接口实现协作。',
    ),
    new MessageContentListItem(
      'Vinod',
      ' (沉思着）：你的意思是让协作发生在像ControlPaneI诸如此类的构件之外？',
    ),
    new MessageContentListItem(
      'Shakira',
      '是的	但接着我又对自己说，这将意味着每个传感器对象都会与Outgoing-Call 构件相 关联， 而这意味着与 外部世界的间接耦合 ……我想这样会使事情变得复杂。',
    ),
    new MessageContentListItem(
      'Vinod',
      '我同意，在这种情况下，让传感器接口将信息传速给ConUolPanel,并且让其启 动外呼，这是一个比较好的主意。此外，不同的传感器将导致不同的电话号码。在信息改变时，你并不想让传惑器存储这些信息，因为如果发生变化……Shakira:感觉不太对。',
    ),
    new MessageContentListItem(
      'Shakira',
      '感觉不太对。',
    ),
    new MessageContentListItem(
      'Vinod',
      '耦合设计方法告诉我们是不太对。',
    ),
    new MessageContentListItem(
      'Shakira',
      '无论如何……',
      '告辞.jpg'
    )

  ]
);
