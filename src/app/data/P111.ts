import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P111: MessageContentList = new MessageContentList(
  "初始用户场景",
  [
    new MessageContentListItem(
      '主持人',
      '现在是开始讨论SafeHome监视功能的时候了',
    ),
    new MessageContentListItem(
      '主持人',
      '让我们为访问监视功能开发一个用户场景',
    ),
    new MessageContentListItem(
      'Jamie',
      '谁在其中扮演参与者的角色？',
    ),
    new MessageContentListItem(
      '主持人',
      '我想Meredith已经在该功能上进行了一些工作，@Meredith来试试这个角色吧',
      ),
    new MessageContentListItem(
      'Meredith',
      '你想采用我们上次所用的同样的方法，是吗？',
    ),
    new MessageContentListItem(
       '主持人',
       '是的，同样的方法',
      ),
    new MessageContentListItem(
      'Meredith',
      ' 好的，很明显',
      ),
    new MessageContentListItem(
       'Meredith',
       '开发监视功能的理由是允许房主远距离检查宅舍、记录并回,放捕获的录像等等',
      ),
    new MessageContentListItem(
       'Ed',
       '我们采用压缩的方法存储图像吗？',
      ),
    new MessageContentListItem(
       '主持人',
       '@Meredith,你说呢？',
      ),
    new MessageContentListItem(
       'Meredith',
       '好的，这样对于监视功能基本上就有两部分',
      ),
    new MessageContentListItem(
       'Meredith',
       '第一部分是配置系统，包括布置建筑平面图',
      ),
    new MessageContentListItem(
       'Meredith',
       '我们需要工具帮助房主做这件事，第二部分是实际的监视功能本身',
      ),
    new MessageContentListItem(
       'Meredith',
       '因为布局是配置活动的一部分，我将重点集中在监视功能',
      ),
    new MessageContentListItem(
       '主持人',
       '我也是这么想的',
      ),
    new MessageContentListItem(
       'Meredith',
       '我希望通过电脑或通过Internet访问监视功能',
      ),
    new MessageContentListItem(
       'Meredith',
       '我的感觉是Internet访问可能使用的频率更高一些',
      ),
    new MessageContentListItem(
       'Meredith',
       '不管怎样，我希望能够在计算机上和控制面板上显示摄像机图像并移动某个摄像机镜头',
      ),
    new MessageContentListItem(
       'Meredith',
       '在房屋平面设计图上可以选择指定摄像机',
      ),
    new MessageContentListItem(
       'Meredith',
       '我希望可以有选择地记录摄像机输出和回放摄像输出',
      ),
    new MessageContentListItem(
       'Meredith',
       '我还希望能够使用特殊的密码阻止对某个或多个摄像机的访问',
      ),
    new MessageContentListItem(
       'Meredith',
       '希望有支持小窗口显示形式的选项',
      ),
    new MessageContentListItem(
       'Meredith',
       '即从所有的摄像机显示图像，并能够选择某一个放大',
      ),
    new MessageContentListItem(
       'Jamie',
       '那些称做缩略视图',
      ),
    new MessageContentListItem(
       'Meredith',
       '对，然后我希望从所有摄像机获得缩略视图',
      ),
    new MessageContentListItem(
       'Meredith',
       '我也希望监视功能的接口和所有其他的SafeHome接口有相同的外观和感觉。',
      ),
    new MessageContentListItem(
       '主持人',
       'nice，现在，让我们更详细地讨论这个功能',
      ),

  ]
);
