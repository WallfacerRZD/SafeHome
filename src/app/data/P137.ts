import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P137: MessageContentList = new MessageContentList(
  "数据流建模",
  [
    new MessageContentListItem(
      'Jamie',
      '我在学校里上过软件工程的课学到这些东西',
    ),
    new MessageContentListItem(
      'Jamie',
      '教授说这是有点陈旧的方法了，但这能帮助我阐明事物',
    ),
    new MessageContentListItem(
      'Ed',
      '太酷了',
    ),
    new MessageContentListItem(
      'Ed',
      '但是我在这里看不到任何类或对象',
      ),
    new MessageContentListItem(
      'Jamie',
      '不……这只是带有一点点行为元素的流模型',
    ),
    new MessageContentListItem(
       'Vinod',
       '也就是说这些DFD表现了软件的I-P-O视图，对吗？',
      ),
    new MessageContentListItem(
      'Ed',
      ' I-P-O?',
      ),
    new MessageContentListItem(
       'Vinod',
       '就是Input-Process-Output (输入-处理-输出），DFD确实非常直现',
      ),
    new MessageContentListItem(
       'Vinod',
       '如果你现察一会儿',
      ),
    new MessageContentListItem(
       'Vinod',
       '就会看到数据对象如何在系统中流动以及在流动中是如何变化的',
      ),
    new MessageContentListItem(
       'Ed',
       '看起来似乎我们能把每个泡泡化为一个可执行的构件',
      ),
    new MessageContentListItem(
       'Ed',
       '至少在最低层的DFD是如此',
      ),
    new MessageContentListItem(
       'Jamie',
       '这就是最酷的部分，你可以这样做',
      ),
    new MessageContentListItem(
       'Jamie',
       '事实上，有一种方法可以把DFD转化为设计架构',
      ),
    new MessageContentListItem(
       'Ed',
       '真的吗？',
      ),
    new MessageContentListItem(
       'Jamie',
       '是的，而这是我们开发一个完整的分析模型首先必须做的，不是吗？',
      ),
    new MessageContentListItem(
       'Vinod',
       '对的，这是第一步，尽管状态图和PAT也能完成同样的工作',
      ),
    new MessageContentListItem(
       'Vinod',
       '必须开始讨论基于类的元素，还有行为方面的工作',
      ),
    new MessageContentListItem(
       'Ed',
       '我们有那么多的活要做，却没有那么多的时间',
      ),
    new MessageContentListItem(
       'Jamie',
       '我们已经经开始了',
      ),
    new MessageContentListItem(
       'Doug',
       '哈哈，我们有那么多的活要做，却没有那么多的时间',
      ),
  ]
);
