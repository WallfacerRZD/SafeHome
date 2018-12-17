import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P186: MessageContentList = new MessageContentList(
  '体系结构评估',
  [
    new MessageContentListItem(
      'Doug',
      '我知道大家为SafeHome这个产品设计了两个不同的体系结构，这是一件好事。我的问题是，我们该如何选择最好的体系结构呢？',
    ),
    new MessageContentListItem(
      'Ed',
      '我正在设计一个调用和返回成格的体系结构，然后Jamie或我将设计一个面向对象的体系结构。 ',
    ),
    new MessageContentListItem(
      'Doug',
      '好的，但是我们如何选择呢？',
      '你说话啊.jpg'
    ),
    new MessageContentListItem(
      'Jamie',
      '我在高年级时学习了一门计算机科学课程，我记得有很多选取办法。',
    ),
    new MessageContentListItem(
      'Vinod',
      '是有一些，但是它们都太理论化了，听着，我认为我们可以自己评估，并使用用例和场景来选择正确的体系结构。',
    ),
    new MessageContentListItem(
      'Doug',
      '这不是一回事吗？',
      'emmmm.jpg'
    ),
    new MessageContentListItem(
      'Vinod',
      '当谈论有关体系结构评估的时候，它们不是一回事。我们已经有了一个完整的用例集合，因此，我们将每个用例都应用到这两个体系结构中，查看系统的反应，即在用例环境中构件和连接件是如何工作的。',
    ),
    new MessageContentListItem(
      'Ed',
      '这是个好主意!可以确保我们不遗漏任何东西',
      '牛逼.jpg'
    ),
    new MessageContentListItem(
      'Vinod',
      '当然，它还能告诉我们体系结构设计是不是令人f解，系统是不是必须转换到它的分支上来完成工作。',
    ),
    new MessageContentListItem(
      'Jamie',
      '场景不就是用例的别名吗？',
    ),
    new MessageContentListItem(
      'Vinod',
      '不是的，在这里场景具有不同的意义。',
    ),
    new MessageContentListItem(
      'Doug',
      '你们谈论的是质量场景或者变更场景，是吗？',
    ),
    new MessageContentListItem(
      'Vinod',
      '是的，我们要做的就是回到利益相关者那里，问问他们SafeHome在未来三年可 能会有什么变更，如，新版本、特征等这类变更。我们创建了一套变更场景，也开发了一套质量场景，这些场景定义了在软件体系结构中要看到的属性。',
    ),
    new MessageContentListItem(
      'Jamie',
      '我们把它们运用到体系结构中，',
    ),
    new MessageContentListItem(
      'Vinod',
      ':是的，能更好地处理用例和场景的体系结构就是我们的最终选择。',
    ),
  ]
);
