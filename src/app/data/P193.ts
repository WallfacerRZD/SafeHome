import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P193: MessageContentList = new MessageContentList(
  '精化初级体系结构',
  [
    new MessageContentListItem(
      'Jamie',
      ':不错，但是我认为可以再简化一些，那样就更好了',
    ),
    new MessageContentListItem(
      'Ed',
      '例如？',
    ),
    new MessageContentListItem(
      'Jamie',
      '嗯，你为什么要用传感器输入控制器这个构件呢？',
    ),
    new MessageContentListItem(
      'Ed',
      '因为需要一个映射控制器。',
    ),
    new MessageContentListItem(
      'Jamie',
      '不是这样的，由于我们管理的是输入数据的单一流路径，所以控制器就没有必要 做邪么多事情了。我们可以省掉这个控制器而不会有任何不良影响。',
    ),
    new MessageContentListItem(
      'Ed',
      '我明白了，我将修改并且……',
    ),
    new MessageContentListItem(
      'Jamie',
      '(微笑）先等等！我们还可以将建立螯报条件和选择电话号码两个构件结合在一 起。你在图中给出的转换控制器没有必要，稍微降低内聚性是允许的',
    ),
    new MessageContentListItem(
      'Ed',
      '简单，哈哈',
      '四川人很乐观坚强.jpg'
    ),
    new MessageContentListItem(
      'Jamie',
      '是的，而且当你进行精化的时候，将格式显示和生成显示两个构件结合起来是一 个好主意。控制面板的显示格式很简单，我们可以定义新的模块，称之为产生显示。',
    ),
    new MessageContentListItem(
      'Ed',
      '这就是你认为我们应该做的吗？【他给Jamie看图9-17】',
    ),
    new MessageContentListItem(
      'Jamie',
      '这只是个好的开始罢了',
    ),

  ]
);
