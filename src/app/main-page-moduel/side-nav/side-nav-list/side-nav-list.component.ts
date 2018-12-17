import {Component, OnInit} from '@angular/core';
import {NavListItem} from "./NavListItem";

@Component({
  selector: 'app-sidd-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent implements OnInit {
  navListItems: NavListItem[] = [
    new NavListItem('assets/img/navListItem/0.png', '了解会员特权'),
    new NavListItem('assets/img/navListItem/1.png', 'QQ钱包'),
    new NavListItem('assets/img/navListItem/2.png', '个性装扮'),
    new NavListItem('assets/img/navListItem/2.png', '我的收藏'),
    new NavListItem('assets/img/navListItem/4.png', '我的相册'),
    new NavListItem('assets/img/navListItem/5.png', '我的文件'),
    new NavListItem('assets/img/navListItem/6.png', '免流量特权'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
