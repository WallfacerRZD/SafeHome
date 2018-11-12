import {Component, OnInit, ViewChild} from '@angular/core';
import {SideNavService} from "../../side-nav.service";
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('drawer')
  sideNav: MatSidenav;

  constructor(private sideNavService: SideNavService) {
  }

  ngOnInit() {
    this.sideNavService.setSideNav(this.sideNav);
  }

}
