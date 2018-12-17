import {MessageContentList} from "../message-content-module/message-content-list/MessageContentList";
import {MessageContentListItem} from "../message-content-module/message-content-list/message-list-item/MessageContentListItem";

export const P128: MessageContentList = new MessageContentList(
  "CRC模型",
  [
    new MessageContentListItem(
      'Vinod',
      '在你着手于监视功能而Jamie忙着安全功能的时候，我在准备住宅管理功能',
    ),
    new MessageContentListItem(
      'Ed',
      '情况怎样？市场营销人员的想法总是在变化',
    ),
    new MessageContentListItem(
      'Vinod',
      '这是整个功能的第一版用例我们已经改进了一点，它应该能提供一个整体视图。',
    ),
    new MessageContentListItem(
      'Vinod',
      '我们已经改进了一点，它应该能提供一个整体视图。',
      ),
    new MessageContentListItem(
      'Vinod',
      '我们希望通过个人计算机上的住宅管理接口或互联网连接',
    ),
    new MessageContentListItem(
      'Vinod',
      '控制有无线接口控制器的电子设备',
      ),
    new MessageContentListItem(
      'Vinod',
      '系统应该让我能够打开或关闭指定的灯',
      ),
    new MessageContentListItem(
       'Vinod',
       '控制连接到无线接口的设备，设置取暖和空调系统达到预定的温度',
      ),
    new MessageContentListItem(
       'Vinod',
       '每个设备必须在平面图上标识出来',
      ),
    new MessageContentListItem(
       'Vinod',
       '作为可选的特性，我希望控制所有的视听设备音响设备、电视、 DVD,数字录音机等',
      ),
    new MessageContentListItem(
       'Vinod',
       '通过一个选择就能够针对各种情况设置整个房屋',
      ),
    new MessageContentListItem(
       'Vinod',
       '第一个选择项是“在家”',
      ),
    new MessageContentListItem(
       'Vinod',
       '第二个是 “不在家”',
      ),
    new MessageContentListItem(
       'Vinod',
       '第三个是“彻夜不归”',
      ),
    new MessageContentListItem(
       'Vinod',
       '第四个是“长期外出”',
      ),
    new MessageContentListItem(
       'Vinod',
       '所有这些情况都适用于所有设备的设置',
      ),
    new MessageContentListItem(
       'Vinod',
       '在彻夜不归和长期外出时，系统将以随机的间隔时间开灯和关灯',
      ),
    new MessageContentListItem(
       'Vinod',
       '并控制取暖和空调系统',
      ),
    new MessageContentListItem(
       'Vinod',
       '我应能够通过有追当密码保护的互联网撤销这些设置',
      ),
    new MessageContentListItem(
       'Ed',
       '那些负责硬件的伙计已经设计出所有的无线接口了吗？',
      ),
    new MessageContentListItem(
       'Vinod',
       '他们正在忙这个，据说没有问题',
      ),
    new MessageContentListItem(
       'Vinod',
       '不管怎样，我从住宅管理中提取了一批类，我们可以用一个做例子',
      ),
    new MessageContentListItem(
       'Vinod',
       '就以HomeManagementlnterface类为例吧！',
      ),
    new MessageContentListItem(
       'Ed',
       'OK，不过这是啥类啊',
      ),
    new MessageContentListItem(
       'Vinod',
       '我想你还不了解CRC',
      ),
    new MessageContentListItem(
       'Ed',
       '可能有点，但还是继续吧',
      ),
    new MessageContentListItem(
       'Vinod',
       '这就是我给出的HomeManagementlnterface的类定义',
      ),
  ]
);
