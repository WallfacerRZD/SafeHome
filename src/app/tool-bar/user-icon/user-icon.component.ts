import {Component, OnInit} from '@angular/core';
import {SideNavService} from "../../side-nav.service";

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {
  userIconURL: string = 'assets/icon.jpg';

  constructor(private sidNavService: SideNavService) {
  }

  toggleSideNav() {
    this.sidNavService.toggleSideNav();
  }

  ngOnInit() {
  }

}
