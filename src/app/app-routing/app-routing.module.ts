import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingRoutingModule} from './app-routing-routing.module';
import {RoutingBarComponent} from "./routing-bar/routing-bar.component";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingRoutingModule
  ],
  declarations: [
    RoutingBarComponent
  ]
})
export class AppRoutingModule {
}
