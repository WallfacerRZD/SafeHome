import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P162: MessageContentList = new MessageContentList(
  '设计概念',
  [
    new MessageContentListItem(
      'Vinod',
      '你们从研讨会学到什么没有？',
    ),
    new MessageContentListItem(
      'Ed',
      '大部分的东西我都已经知道，但我想重温一遍总不是什么坏事。',
      '小脸通红.jpg',
    ),
    new MessageContentListItem(
      'Jamie',
      '我在计算机科学专业学习时，从没有其正理解信息隐藏为什么像他们说得那么重要。 ',
    ),
    new MessageContentListItem(
      'Vinod',
      '因为……底线……这是减少错误在程序内扩散的一种技术。实际上，功能独立做的也是同样的事。',
    ),
    new MessageContentListItem(
      'Shakira',
      '我不是计算机科学专业的，因此教授提到的很多东西对我而言都是新的，我能生成好的代码而且速度快，我不明白这个东西为什么这么重要，',
    ),
    new MessageContentListItem(
      'Jamie',
      '我了解你的工作，Shak,你要知道，其实你是在自然地做这些事情……这就是为什么你的设计和编码很有效。',
      '程序员.jpg'
    ),
    new MessageContentListItem(
      'Shakira',
      '就是，我通常的确是尽量将代码分割，让分割后的代码关注于一件事，保持接口简单而且有约束，在任何可能的时候重用代码……就是这样。',
    ),
    new MessageContentListItem(
      'Ed',
      '模块化、功能独立、隐藏、模式……明白。',
    ),
    new MessageContentListItem(
      'Jamie',
      '我至今还记得我上的第一节编程课……他们教我们迭代地精化代码。',
    ),
    new MessageContentListItem(
      'Vinod',
      '设计可以采用同样的方式，你知道的。我以前从未听说过的概念是“方面”和“重构',
    ),
    new MessageContentListItem(
      'Shakira',
      '我记得她说那是用在极限编程中的。',
    ),
    new MessageContentListItem(
      'Ed',
      '是的。其实它和精化并没有太大不同，它只是在设计或代码完成后进行。我认为， 这是软件开发过程中的一种优化.',
    ),
    new MessageContentListItem(
      'Jamie',
      '让我们田到SafeHome设计。我觉得在我们开发SafeHome的设计模型时，应该将 这些概念用在评审检查单上，',
    ),
    new MessageContentListItem(
      'Vinod',
      '我同意。但重要的是，我们都要做到在做设计时想一想这些板念,',
    ),
  ]
);
