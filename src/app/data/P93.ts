import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P93: MessageContentList = new MessageContentList(
  "开发一个初步的用户场景",
  [
    new MessageContentListItem(
      '主持人',
      '我们已经讨论过通过Internet访问SafeHome功能的安全性，我想考虑得再多些',
    ),
    new MessageContentListItem(
      '主持人',
      '下面我们开发一个使用住宅安全功能的用户场景',
    ),
    new MessageContentListItem(
      'Jamie',
      '怎么做？',
    ),
    new MessageContentListItem(
      '主持人',
      '我们可以采用两种不同的方法完成这个工作',
      ),
    new MessageContentListItem(
      '主持人',
      '但是现在，我想不要太正式吧。 @Meredith，你设想该如何使用这样的系统',
    ),
    new MessageContentListItem(
       'Meredith',
       '哦……如果我出门在外，我想我能做的就是必领让某个没有安全码的人比如管家或修理工进入我家',
      ),
    new MessageContentListItem(
      '主持人',
      ' 嗯哼，这就是你的原因……告诉我们实际上你怎么做？',
      ),
    new MessageContentListItem(
       'Meredith',
       '嗯……首先是我需要一台电脑',
      ),
    new MessageContentListItem(
       'Meredith',
       '登录为所有SafeHome用户提供维护的Web网站，提供我的用户身份证号',
      ),
    new MessageContentListItem(
       'Vinod',
       'Web页面必须是安全的、加密的，以确保我们安全',
      ),
    new MessageContentListItem(
       '主持人',
       '这是个有用信息，Vinod,但这太技术性了，我们还是只关注最终用户将如何使用该功能，好吗？',
      ),
    new MessageContentListItem(
       'Meredith',
       '那么，就像我所说的，我会登录一个Web网站并提供我的用户身份证号和两级密码',
      ),
    new MessageContentListItem(
       'Jamie',
       '如果我忘记密码怎么办？',
      ),
    new MessageContentListItem(
       '主持人',
       '好想法，Jamie。但是我们先不谈这个',
      ),
    new MessageContentListItem(
       '主持人',
       '我们先把这种情况作为“异常” 记录下来。我确信还有其他的异常。',
      ),
    new MessageContentListItem(
       'Meredith',
       '在我输入密码后，屏幕将显示所有的SafeHome功能',
      ),
    new MessageContentListItem(
       'Meredith',
       '我选择住宅安全功能，系统可能会要求我确认我是谁，要求我的地址或电话号码或者其他什么',
      ),
    new MessageContentListItem(
       'Meredith',
       '其他什么然后显示一张图片， 包括安全系统控制面板和我能执行的功能列表——安装系统、解除系统、解除一个或多个传感器',
      ),
    new MessageContentListItem(
       'Meredith',
       '我猜还可能会允许我重新配置安全区域和其他类似的东西，但是我不确定。',
      ),
  ]
);
