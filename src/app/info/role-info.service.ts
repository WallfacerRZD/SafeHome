import {Injectable} from '@angular/core';
import {RoleInfo} from "./RoleInfo";

@Injectable({
    providedIn: 'root'
})
export class RoleInfoService {
    rolesInfo = {
        '冉哲东': new RoleInfo(
            '冉哲东', '开始自闭',
            '1048058400',
            '男 21岁 狮子座 重庆-丰都',
            '开发者'
        ),
        '苗小磊': new RoleInfo(
            '苗小磊', '没什么可说的',
            '243307197',
            '男',
            '开发者'
        ),
        '杜闯': new RoleInfo(
            '杜闯', 'So we walk together.',
            '378257655',
            '男 21岁 射手座',
            '开发者'
        ),
        'Joe': new RoleInfo(
            'Joe', '这事, 必须解决了',
            'Joe Camallen',
            '男 美利坚省-纽约县',
            '业务发展部'
        ),
        'Lee': new RoleInfo(
            'Lee', '人间不值得',
            'Lee Warren',
            '男 美利坚省-纽约县',
            '工程经理'
        ),
        'Mal': new RoleInfo(
            'Mal', '哪里有什么准备好了, 准备得差不多就上了',
            'Mal Golden',
            '女 美利坚省-纽约县',
            '产品开发部'
        ),
        'Lisa': new RoleInfo(
            'Lisa', '一人做事一人当, 小叮做事小叮当',
            'Lisa Perez',
            '女 美利坚省-纽约县',
            '营销经理'
        ),
        'Doug': new RoleInfo(
            'Doug', '万年不看动态, 有事直接Q',
            'Doug Miller',
            '男 美利坚省-纽约县',
            '软件工程经理'
        ),
        'Ed': new RoleInfo(
            'Ed', '不想写文档....',
            'Ed Robbins',
            '男 美利坚省-纽约县',
            '软件团队成员'
        ),
        'Vinod': new RoleInfo(
            'Vinod', '今天也在写代码',
            'Vinod Raman',
            '男 美利坚省-纽约县',
            '软件团队成员'
        ),
        'Jamie': new RoleInfo(
            'Jamie', '不要重复造轮子, 逆水行舟不进则退',
            'Jamie Lazar',
            '男 美利坚省-纽约县',
            '软件团队成员'
        ),
        'Meredith': new RoleInfo(
            'Meredith', '今夜还吹着风',
            'Meredith Elvs',
            '女 美利坚省-纽约县',
            '市场营销'
        ),
        '主持人': new RoleInfo(
            '主持人', '人生太苦了',
            'Host',
            '女 美利坚省-纽约县',
            '会议主持'
        ),
        'Shakira': new RoleInfo(
            'Shakira', '今天也要加油鸭!',
            'Shakira White',
            '女 美利坚省-纽约县',
            '软件团队成员'
        ),
    };

    getInfoByName(name: string) {
        if (this.rolesInfo[name]) {
            return this.rolesInfo[name];
        } else {
            return new RoleInfo('无名氏', '无名氏',
                '无名氏', '无名氏', '无名氏',);
        }
    }
    constructor() {
    }
}
