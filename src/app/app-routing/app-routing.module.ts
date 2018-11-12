import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingBarComponent} from "./routing-bar/routing-bar.component";
import {MatGridListModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {MessageComponent} from "../message/message/message.component";
import {ContactComponent} from "../contact/contact/contact.component";
import {NewsComponent} from "../news/news/news.component";
import {CircleComponent} from "../circle/circle/circle.component";
import {RoutingItem} from "./RoutingItem";
import {RoutingItemComponent} from "./routing-item/routing-item.component";

const ROUTES: Routes = [
  {path: 'message', component: MessageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'news', component: NewsComponent},
  {path: 'circle', component: CircleComponent},
  {path: '', redirectTo: '/message', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    RoutingBarComponent,
    RoutingItemComponent
  ],
  exports: [
    RoutingBarComponent,
    RouterModule
  ]
})
export class AppRoutingModule {
}
