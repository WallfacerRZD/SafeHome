import {Component, OnInit, ViewChild} from '@angular/core';
import {SideNavService} from "./side-nav.service";
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer')
  sideNav: MatSidenav;

  constructor(private sideNavService: SideNavService) {
  }

  ngOnInit(): void {
    this.sideNavService.setSideNav(this.sideNav);
  }
}
