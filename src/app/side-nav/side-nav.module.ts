import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavBarComponent} from "./side-nav-bar/side-nav-bar.component";
import {SideNavListComponent} from "./side-nav-list/side-nav-list.component";
import {SideNavUserInfo} from "./side-nav-user-info/side-nav-user-info.component";
import {SideNavComponent} from "./side-nav.component";
import {MatCardModule, MatListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
  ],
  declarations: [
    SideNavBarComponent,
    SideNavListComponent,
    SideNavUserInfo,
    SideNavComponent,
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
