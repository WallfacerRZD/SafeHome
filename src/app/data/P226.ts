import {MessageContentList} from '../message-content-module/message-content-list/MessageContentList';
import {MessageContentListItem} from '../message-content-module/message-content-list/message-list-item/MessageContentListItem';

export const P226: MessageContentList = new MessageContentList(
  '内聚性的应用',
  [
    new MessageContentListItem(
      'Ed',
      '我已经完成了camera (摄像头）构件的初步设计。',
    ),
    new MessageContentListItem(
      'Jamie',
      '希望快速评审一下吗？',
    ),
    new MessageContentListItem(
      'Ed',
      '我想……但实际上，你最好输入一些信息。（Jamie示意他继续，）',
      '行啊.jpg'
    ),
    new MessageContentListItem(
      'Ed',
      '我们起初为camera构件定义了 5种操作。translateLocation()允许用户测除设计图上的摄像头。 displayView()以图形化方式给出用户摄像头的视角范围。 displayZoom()口以图形化方式给出用户摄像头的放大率。',
    ),
    new MessageContentListItem(
      'Ed',
      '我分别进行了设计，并且它们非常易于操作。所以我认为，将所有的昱示操作集成 到一个称为displayCameraO的操作中——它可以呈示ID，视角和放大率等，是一个不错的主意。你不这样认为吗？',
    ),
    new MessageContentListItem(
      'Jamie',
      '(鬼脸)我不敢肯定',
      '这他妈写的啥.jpg'
    ),
    new MessageContentListItem(
      'Ed',
      ' (皱眉）为什么？所有这些小操作是很令人头疼的！',
    ),
    new MessageContentListItem(
      'Jamie',
      '问题是当将它们集成到一起后，我们将失去内聚性。你知道的，displayCameraO 操作不是专一的。',
    ),
    new MessageContentListItem(
      'Ed',
      '(略有不快）那又怎样？这样做使得我们最多只需不到100行的源代码。我想实现起来也比较简单。',
    ),
    new MessageContentListItem(
      'Jamie',
      ':如果销售人员决定更改我们显示视角域的方式怎么办？',
    ),
    new MessageContentListItem(
      'Ed',
      '我马上跳到displayCamera()操作，并进行这种改变。',
    ),
    new MessageContentListItem(
      'Jamie',
      '那么副作用怎么办？',
    ),
    new MessageContentListItem(
      'Ed',
      '什么意思？',
    ),
    new MessageContentListItem(
      'Jamie',
      '也就是说你做了修改，但是不经意之间产生了ID的显示问题。',
      '写BUG呢.jpg'
    ),
    new MessageContentListItem(
      'Ed',
      '我没有那么笨。',
    ),
    new MessageContentListItem(
      'Jamie',
      '可能没有，但是如果两年以后某些支持人必须做这种改变怎么办。他可能并不像你一样理解这个操作，谁知道呢，也许他很权心。',
    ),
    new MessageContentListItem(
      'Ed',
      '所以你反对？',
      '不服呀.jpg',
    ),
    new MessageContentListItem(
      'Jamie',
      '你是设计师……这是你的决定……只要确信你理解了低内聚性的后果„ Ed (想了想）：可能我们要设计一个单独的昱示操作。',
    ),
    new MessageContentListItem(
      'Jamie',
      '好主意。',
    ),
  ],
);
