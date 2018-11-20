import {Component, OnInit} from '@angular/core';
import {NavFootBarItem} from "./NavFootBarItem";

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  navFootBarItems: NavFootBarItem[] = [
    new NavFootBarItem('assets/img/navFootBarItem/0.png', '设置'),
    new NavFootBarItem('assets/img/navFootBarItem/1.png', '夜间'),
    new NavFootBarItem('assets/img/navFootBarItem/2.png', '成都'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
