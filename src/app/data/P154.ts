import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P154: MessageContentList = new MessageContentList(
  '设计与编码',
  [
    new MessageContentListItem(
      'Jamie',
      '大家都知道，Doug[团队管理者]沉迷于设计。老实说，我真正喜欢的是编码。如果给我C++或者Java,我会非常高兴。',
    ),
    new MessageContentListItem(
      'Ed',
      '不，你喜欢设计',
    ),
    new MessageContentListItem(
      'Jamie',
      '你没听我说吗？编码才是我喜欢的。',
      '弟弟.jpg',
    ),
    new MessageContentListItem(
      'Vinod',
      '我想Ed的意思是你并不是真的喜欢编码，而是喜欢设计，并喜欢用代码表达设计。 代码是你用来表示设计的语言。',


    ),
    new MessageContentListItem(
      'Jamie',
      '那有问题吗？'
    ),
    new MessageContentListItem(
      'Vinod',
      '抽象层',
    ),
    new MessageContentListItem(
      'Ed',
      '程序设计语言有利于表示诸如数据结构和算法的细节，但不利于表示体系结构或者 构件之间的协作……就是这个意思。',
    ),
    new MessageContentListItem(
      'Vinod',
      '—个糟糕的体系结构甚至能够摧毁最好的代码。',
    ),
    new MessageContentListItem(
      'Jamie',
      '那么，你们的意思是我不能用代码表示体系结构……这不是事实。',
      '不想面对.jpg'
    ),
    new MessageContentListItem(
      'Vinod',
      '你肯定能在代码中包含体系结构，但在大部分程序设计语言中，通过检查代码而快速看到体系结构的全貌是相当困难的。',
    ),
    new MessageContentListItem(
      'Ed',
      '那正是我们在开始编码之前需要的。',
    ),
    new MessageContentListItem(
      'Jamie',
      '：我同意，也许设计和编码不同，但我仍然更喜欢编码。',
    ),
  ]
);

