import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav-user-info',
  templateUrl: './side-nav-user-info.component.html',
  styleUrls: ['./side-nav-user-info.component.css']
})
export class SideNavUserInfo implements OnInit {
  userIconURL = 'assets/icon.jpg';

  levelIconURL = 'assets/img/level/0.jpg';

  backgroundImageURL = 'assets/img/background/0.jpg';

  userName = 'SafeHome';

  userLevel = new Array(5);

  userMotto = 'SafeHome教学仿真';

  constructor() {
  }

  ngOnInit() {
  }

}
