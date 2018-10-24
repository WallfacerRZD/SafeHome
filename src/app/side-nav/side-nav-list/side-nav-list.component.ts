import {Component, OnInit} from '@angular/core';
import {NavListItem} from "./NavListItem";

@Component({
  selector: 'app-sidd-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent implements OnInit {
  navListItems: NavListItem[] = [
    new NavListItem('assets/img/navListItem/0.jpg', '了解会员特权'),
    new NavListItem('assets/img/navListItem/1.jpg', 'QQ钱包'),
    new NavListItem('assets/img/navListItem/2.jpg', '个性装扮'),
    new NavListItem('assets/img/navListItem/3.jpg', '我的收藏'),
    new NavListItem('assets/img/navListItem/4.jpg', '我的相册'),
    new NavListItem('assets/img/navListItem/5.jpg', '我的文件'),
    new NavListItem('assets/img/navListItem/6.jpg', '免流量特权'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
