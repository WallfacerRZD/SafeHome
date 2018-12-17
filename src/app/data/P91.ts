import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P91: MessageContentList = new MessageContentList(
  "需求收集会议",
  [
    new MessageContentListItem(
      '主持人',
      '这是目前住宅安全功能的对象和服务列表',
    ),
    new MessageContentListItem(
      'Meredith',
      '从我们的现点看差不多覆盖了需求',
    ),
    new MessageContentListItem(
      'Vinod',
      '没有人提到他们希望通过Internet访问所有的SafeHome功能吗？',
    ),
    new MessageContentListItem(
      'Meredith',
      '是的，这很正确……我们必须加上这个功能以及合适的对象',
      ),
    new MessageContentListItem(
      '主持人',
      '这还需要加上一些限制吗？',
    ),
    new MessageContentListItem(
       'Jamie',
       '肯定，包括技术上的和法律上的',
      ),
    new MessageContentListItem(
      'Jamie',
      '什么意思?',
      ),
    new MessageContentListItem(
       'Doug',
       '我们必须确保外人不能非法侵入系统、使系统失效、抢劫甚至更糟。我们的责任非常重',
      ),
    new MessageContentListItem(
       'Doug',
       '非常正确',
      ),
    new MessageContentListItem(
       'Meredith',
       '但我们确实需要……只是保证能够制止外人接入',
      ),
    new MessageContentListItem(
       'Ed',
       '说比做容易，而且……',
      ),
    new MessageContentListItem(
       '主持人',
       '我现在不想讨论这个问题。我们把它作为动作项记录下来，然后继续讨论',
      ),
    new MessageContentListItem(
       '主持人',
       '我有种感觉，这儿仍存在很多需要考虑的问题',
      ),
  ]
);
