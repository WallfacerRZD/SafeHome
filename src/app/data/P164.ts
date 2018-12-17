import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P164: MessageContentList = new MessageContentList(
  '将分析类精化为设计类',
  [
    new MessageContentListItem(
      'Ed',
      '你还记得FloorPlan类吗？这个类用作监视和住宅管理功能的一部分。',
    ),
    new MessageContentListItem(
      'Vinod',
      '是的，我好像想起来我们把它用作住宅管理CRC讨论的一部分。',
    ),
    new MessageContentListItem(
      'Ed',
      '确实如此。不管怎样，我们要对设计进行精化，希望昱示出我们将如何真正地实现 FloorPlan类。我的想法是把它实现为一组链表（一种特定的数据结构）。像这样……我必须精化分析类FloorPlan (图6-10),实际上，是它的一种简化，',
    ),
    new MessageContentListItem(
      'Vinod',
      '分析类只显示问题域中的东西，也就是说，在电脑屏幕上实际昱示的、最终用户可见的那些东西，对吗？',
    ),
    new MessageContentListItem(
      'Ed',
      '是的，但对于FloorPlan设计类来说，我已经开始添加一些实现中特有的东西。需要说明的是FloorPlan是段（即Segment类）的聚集，Segment类由靖段、窗户、门等的列表组成。',
    ),
    new MessageContentListItem(
      'Vinod',
      '咳，让我们看看新的FloorPlan设计类图。(Ed向Vinod展示8-3所示的图。）',
    ),
    new MessageContentListItem(
      'Vinod',
      '好的，我看出来你想做什么了。这样你能够容易地修改平面图，因为新的东西可以在列表（即聚集）中添加或删除，而不会有任何问题。',
    ),
    new MessageContentListItem(
      'Ed',
      '(点头）是的，我认为这样是可以的。',
    ),
    new MessageContentListItem(
      'Vinod',
      '我也赞同。',
      '行.jpg'
    ),
  ]
);
