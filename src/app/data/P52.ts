import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P52: MessageContentList = new MessageContentList(
  "过程模型三群",
  [
    new MessageContentListItem(
      'Jamie',
      '@Doug老哥在吗',
    ),
    new MessageContentListItem(
      'Doug',
      '咋了老弟？',
    ),
    new MessageContentListItem(
      'Jamie',
      '我们考虑过昨天讨论的过程了',
    ),
    new MessageContentListItem(
      'Jamie',
      '就是我们打算为这个新的SafeHome项目选什么过程',
      ),
    new MessageContentListItem(
      'Vinod',
      '嗯哼？',
    ),
    new MessageContentListItem(
       'Vinod',
       '我和在其他公司的一位朋友聊，他跟我讲极限编程',
      ),
    new MessageContentListItem(
      'Doug',
      '那是一种敏捷过程模型，听说过吗？',
      ),
    new MessageContentListItem(
       'Jamie',
       '听说过，有好处也有坏处',
      ),
    new MessageContentListItem(
       'Jamie',
       '对，看起来很适合',
      ),
    new MessageContentListItem(
       'Jamie',
       '我们可以使软件开发更快，用结对编程来达到实时质量检查',
      ),
    new MessageContentListItem(
       'Jamie',
       '感觉还挺酷的',
      ),
    new MessageContentListItem(
       'Doug',
       '它确实有很多实实在在的好处',
      ),
    new MessageContentListItem(
       'Doug',
       '我喜欢其中的结对编程概念',
      ),
    new MessageContentListItem(
       'Doug',
       '还有利益、相关者参加项目组的想法',
      ),
    new MessageContentListItem(
       'Jamie',
       '哦？你是说市场部将和项目组一起工作？',
      ),
    new MessageContentListItem(
       'Doug',
       'Yep，他们也是利益相关者，不是吗？',
      ),
    new MessageContentListItem(
       'Jamie',
       '哇，那他们会每5分钟就提出一些变更',
      ),
    new MessageContentListItem(
       'Vinod',
       '不打紧。我的朋友说XP项目有包容变更的方法',
      ),
    new MessageContentListItem(
       'Doug',
       '所以你俩认为我们应当使用XP?',
      ),
    new MessageContentListItem(
       'Jamie',
       '绝对值得考虑',
      ),
    new MessageContentListItem(
       'Doug',
       '我同意',
      ),
    new MessageContentListItem(
       'Doug',
       '既然我们选择了增量模型方法，那就没有理由不利用XP带来的好处',
      ),
    new MessageContentListItem(
       'Vinod',
       ' @Doug,刚才你说“有好处也有坏处”，坏处是什么？',
      ),
    new MessageContentListItem(
       'Doug',
       '我不喜欢XP不重视分析和设计……',
      ),
    new MessageContentListItem(
       'Doug',
       '简而言之就是直接编码',
      ),
    new MessageContentListItem(
       'Vinod',
       '哈哈哈',
      ),
    new MessageContentListItem(
       'Jamie',
       '哈哈哈',
      ),
    new MessageContentListItem(
       'Doug',
       '那你们同意用XP方法吗？',
      ),
    new MessageContentListItem(
       'Jamie',
       '我们干的就是编码！',
      ),
    new MessageContentListItem(
       'Doug',
       '没错，但我希望看到你花少量时间编码和重新编码',
      ),
    new MessageContentListItem(
       'Doug',
       '而花多一点时间分析我们应当做什么？',
      ),
    new MessageContentListItem(
       'Doug',
       '并设计一个可用系统',
      ),
    new MessageContentListItem(
       'Vinod',
       '或许我们可以二者兼用，带有一定纪律性的敏捷',
      ),
    new MessageContentListItem(
       'Doug',
       '我想我们能行,我坚信这样的做法没问题',
      ),
  ]
);
