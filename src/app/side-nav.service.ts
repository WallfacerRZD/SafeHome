import {Injectable} from '@angular/core';
import {MatSidenav} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sideNav: MatSidenav;

  constructor() {
  }

  setSideNav(value: MatSidenav) {
    this.sideNav = value;
  }

  openSideNav() {
    this.sideNav.open();
  }

  closeSideNav() {
    this.sideNav.close();
  }

  toggleSideNav() {
    this.sideNav.toggle();
  }
}
