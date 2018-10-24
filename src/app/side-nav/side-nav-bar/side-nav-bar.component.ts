import {Component, OnInit} from '@angular/core';
import {NavFootBarItem} from "./NavFootBarItem";

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  navFootBarItems: NavFootBarItem[] = [
    new NavFootBarItem('assets/img/navFootBarItem/0.jpg', '设置'),
    new NavFootBarItem('assets/img/navFootBarItem/1.jpg', '夜间'),
    new NavFootBarItem('assets/img/navFootBarItem/2.jpg', '成都'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
